#!/usr/bin/env python3
"""
Scrape 20 games from Lagged.com (Ruffle + HTML5) and integrate into selenite.
Skips duplicates. Shows progress.
"""
import sys
import io
if sys.platform == "win32":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")

import json
import re
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

MAX_GAMES = 20
GAMES_DIR = Path(__file__).parent.parent / "non-semag" / "games"
COVERS_DIR = GAMES_DIR / "covers"
GAMES_JSON = Path(__file__).parent.parent / "data" / "games.json"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://lagged.com/",
}

CATEGORY_URLS = [
    "https://lagged.com/en/funny",
    "https://lagged.com/en/action",
    "https://lagged.com/en/io",
    "https://lagged.com/en/arcade",
]


def load_existing():
    """Load existing game directories from games.json and filesystem."""
    dirs = set()
    if GAMES_JSON.exists():
        try:
            with open(GAMES_JSON, "r", encoding="utf-8") as f:
                for g in json.load(f):
                    d = g.get("directory", "").lower().strip()
                    if d:
                        dirs.add(d)
        except Exception:
            pass
    for p in GAMES_DIR.iterdir():
        if p.is_dir():
            dirs.add(p.name.lower())
    return dirs


def find_game_links():
    """Collect game URLs from category pages."""
    seen = set()
    links = []
    for url in CATEGORY_URLS:
        try:
            r = requests.get(url, headers=HEADERS, timeout=15)
            r.raise_for_status()
            for m in re.finditer(r'href="(?:https://lagged\.com)?(/en/g/([^"/?#]+))"', r.text):
                slug = m.group(2).lower()
                if slug in seen:
                    continue
                seen.add(slug)
                url = m.group(1)
                if not url.startswith("http"):
                    url = "https://lagged.com" + url
                links.append((url, slug))
                if len(links) >= MAX_GAMES * 3:
                    return links
        except Exception as e:
            print(f"  Category error: {e}")
    return links


def is_ruffle_game(session, slug):
    """Check if game uses Lagged Ruffle embed. Returns swf filename or None."""
    url = f"https://lagged.com/games/ruffle/{slug}/"
    try:
        r = session.get(url, headers=HEADERS, timeout=10)
        if r.status_code == 200 and "ruffle" in r.text.lower():
            m = re.search(r'url:\s*"([^"]+\.swf)"', r.text)
            return m.group(1) if m else None
    except Exception:
        pass
    return None


def get_html5_game_url(session, page_url, slug):
    """Find HTML5 game embed URL (games/*-v2/ or games/*/)."""
    try:
        r = session.get(page_url, headers=HEADERS, timeout=10)
        for m in re.finditer(r'["\'](https?://[^"\']*lagged\.com/games/[^"\']+)["\']', r.text):
            u = m.group(1).split("?")[0].rstrip("/") + "/"
            if "ruffle" not in u:
                return u
        for m in re.finditer(r'["\'](/games/([^"\']+))["\']', r.text):
            path = m.group(1).split("?")[0].rstrip("/") + "/"
            if "ruffle" not in path and (slug in path or "-v2" in path):
                return "https://lagged.com" + path
    except Exception:
        pass
    return None


def scrape_ruffle(session, page_url, slug, swf_name, existing, total, done):
    """Scrape Ruffle/Flash game."""
    dir_name = slug
    if dir_name in existing:
        return None, "skip"
    out = GAMES_DIR / dir_name
    if out.exists():
        return None, "skip"
    out.mkdir(parents=True, exist_ok=True)
    swf_url = f"https://lagged.com/games/ruffle/{slug}/{swf_name}"
    try:
        r = session.get(swf_url, timeout=60, stream=True)
        r.raise_for_status()
        with open(out / swf_name, "wb") as f:
            for chunk in r.iter_content(65536):
                f.write(chunk)
    except Exception as e:
        return None, str(e)
    pr = session.get(page_url, timeout=10)
    name = slug.replace("-", " ").title()
    m = re.search(r'<meta property="og:title" content="([^"]+)"', pr.text)
    if m:
        name = re.sub(r"\s*[-]\s*.*$", "", m.group(1)).strip()
    m = re.search(r'<meta property="og:image" content="([^"]+)"', pr.text)
    cover_rel = f"covers/{dir_name}.png"
    if m:
        try:
            cr = session.get(m.group(1), timeout=10, stream=True)
            if cr.status_code == 200:
                COVERS_DIR.mkdir(parents=True, exist_ok=True)
                ext = "png" if ".png" in m.group(1).lower() else "webp"
                (COVERS_DIR / f"{dir_name}.{ext}").write_bytes(cr.content)
                cover_rel = f"covers/{dir_name}.{ext}"
        except Exception:
            pass
    html = f"""<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{name}</title>
<style>body,html{{margin:0;padding:0;overflow:hidden;}} canvas,#container{{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}}</style>
<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
<script>
window.RufflePlayer=window.RufflePlayer||{{}};
window.RufflePlayer.config={{polyfills:true,letterbox:"on",autoplay:"on",menu:false,contextMenu:"off",scale:"exactfit"}};
window.addEventListener("load",function(){{
  var r=window.RufflePlayer.newest(),p=r.createPlayer();
  document.getElementById("container").appendChild(p);
  p.style.width="100%";p.style.height="100%";
  p.load({{url:"{swf_name}",allowScriptAccess:false}});
}});
</script></head><body><div id="container"></div></body></html>"""
    (out / "index.html").write_text(html)
    return {
        "name": name, "directory": dir_name, "image": cover_rel, "source": "non-semag",
        "gameUrl": f"/non-semag/games/{dir_name}/index.html",
        "imagePath": f"/non-semag/games/{cover_rel}",
    }, "ok"


def scrape_html5(session, page_url, slug, game_url, existing, total, done):
    """Scrape HTML5 game from Lagged games/ URL."""
    dir_name = slug
    if dir_name in existing:
        return None, "skip"
    out = GAMES_DIR / dir_name
    if out.exists():
        return None, "skip"
    base = game_url
    try:
        r = session.get(game_url, headers=HEADERS, timeout=15)
        r.raise_for_status()
    except Exception as e:
        return None, str(e)
    soup = BeautifulSoup(r.text, "html.parser")
    assets = []
    for tag, attr in [(soup.find_all("script", src=True), "src"), (soup.find_all("link", href=True), "href")]:
        for el in tag:
            src = el.get(attr)
            if not src or src.startswith("data:") or src.startswith("http") and "lagged" not in src:
                continue
            url = urljoin(base, src) if not src.startswith("http") else src
            path = urlparse(url).path.strip("/")
            if not path:
                continue
            dest = out / path
            try:
                dr = session.get(url, timeout=20, stream=True)
                dr.raise_for_status()
                dest.parent.mkdir(parents=True, exist_ok=True)
                with open(dest, "wb") as f:
                    for chunk in dr.iter_content(65536):
                        f.write(chunk)
                rel = path.replace("\\", "/")
                el[attr] = rel
                assets.append(rel)
            except Exception:
                pass
    if "<base" not in str(soup).lower():
        if soup.head:
            bt = soup.new_tag("base", href="./")
            soup.head.insert(0, bt)
    out.mkdir(parents=True, exist_ok=True)
    (out / "index.html").write_text(str(soup))
    pr = session.get(page_url, timeout=10)
    name = slug.replace("-", " ").title()
    m = re.search(r'<meta property="og:title" content="([^"]+)"', pr.text)
    if m:
        name = re.sub(r"\s*[-]\s*.*$", "", m.group(1)).strip()
    m = re.search(r'<meta property="og:image" content="([^"]+)"', pr.text)
    cover_rel = f"covers/{dir_name}.png"
    if m:
        try:
            cr = session.get(m.group(1), timeout=10, stream=True)
            if cr.status_code == 200:
                COVERS_DIR.mkdir(parents=True, exist_ok=True)
                ext = "png" if ".png" in m.group(1).lower() else "webp"
                (COVERS_DIR / f"{dir_name}.{ext}").write_bytes(cr.content)
                cover_rel = f"covers/{dir_name}.{ext}"
        except Exception:
            pass
    return {
        "name": name, "directory": dir_name, "image": cover_rel, "source": "non-semag",
        "gameUrl": f"/non-semag/games/{dir_name}/index.html",
        "imagePath": f"/non-semag/games/{cover_rel}",
    }, "ok"


def main():
    print("=" * 60)
    print("LAGGED 20-GAME SCRAPER (Ruffle + HTML5)")
    print("=" * 60)
    existing = load_existing()
    print(f"Existing games in library: {len(existing)}")
    session = requests.Session()
    session.headers.update(HEADERS)
    links = find_game_links()
    print(f"Found {len(links)} game links from categories\n")
    to_scrape = []
    for i, (page_url, slug) in enumerate(links):
        if len(to_scrape) >= MAX_GAMES:
            break
        if slug in existing:
            continue
        swf = is_ruffle_game(session, slug)
        if swf:
            to_scrape.append(("ruffle", page_url, slug, swf, None))
        else:
            html5_url = get_html5_game_url(session, page_url, slug)
            if html5_url:
                to_scrape.append(("html5", page_url, slug, None, html5_url))
    print(f"Candidates to scrape: {len(to_scrape)} (Ruffle + HTML5)\n")
    entries = []
    total = len(to_scrape)
    for i, item in enumerate(to_scrape):
        kind, page_url, slug, swf, html5_url = item
        pct = f"[{i+1}/{total}]"
        try:
            if kind == "ruffle":
                entry, status = scrape_ruffle(session, page_url, slug, swf, existing, total, i + 1)
            else:
                entry, status = scrape_html5(session, page_url, slug, html5_url, existing, total, i + 1)
            if status == "skip":
                print(f"  {pct} {slug} - SKIP (already in library)")
            elif status == "ok" and entry:
                entries.append(entry)
                existing.add(slug)
                print(f"  {pct} {slug} - OK ({kind})")
            else:
                print(f"  {pct} {slug} - FAIL ({status})")
        except Exception as e:
            print(f"  {pct} {slug} - ERROR: {e}")
    if entries:
        with open(GAMES_JSON, "r", encoding="utf-8") as f:
            games = json.load(f)
        for e in entries:
            ex = next((g for g in games if g.get("directory") == e["directory"]), None)
            if ex:
                ex.update(e)
            else:
                games.append(e)
        with open(GAMES_JSON, "w", encoding="utf-8") as f:
            json.dump(games, f, indent="\t", ensure_ascii=False)
        print(f"\nDone. Added {len(entries)} games to games.json")
    else:
        print("\nNo new games added")


if __name__ == "__main__":
    main()
