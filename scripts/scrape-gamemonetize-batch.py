#!/usr/bin/env python3
"""
Batch scrape GameMonetize games for Nova Hub.
Downloads all game assets, removes ads, bypasses site-lock, adds to games.json.

Usage: python scripts/scrape-gamemonetize-batch.py
"""

import requests
import json
import os
import re
import sys
import time
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from html import unescape

# Try to use tqdm for progress bars, fallback to simple prints
try:
    from tqdm import tqdm
    HAS_TQDM = True
except ImportError:
    HAS_TQDM = False
    class tqdm:
        """Simple fallback progress indicator."""
        def __init__(self, iterable=None, desc="", total=None, unit="", ncols=80):
            self.iterable = iterable
            self.desc = desc
            self.total = total or (len(iterable) if iterable else None)
            self.unit = unit
            self.ncols = ncols
            self.count = 0
        
        def __iter__(self):
            items = list(self.iterable) if self.iterable else []
            self.total = self.total or len(items)
            for i, item in enumerate(items, 1):
                self.count = i
                if i % max(1, self.total // 20) == 0 or i == self.total or i == 1:
                    pct = (i * 100) // self.total if self.total > 0 else 0
                    print(f"\r  {self.desc}: {i}/{self.total} ({pct}%)", end='', flush=True)
                yield item
            print()  # newline after progress
        
        def set_description(self, desc):
            self.desc = desc
        
        def close(self):
            pass

# ── Configuration ──────────────────────────────────────────────────────────────

GAMES_JSON_PATH = Path('data/games.json')
OUTPUT_DIR = Path('non-semag')

AD_KEYWORDS = [
    'gamemonetize.com/sdk', 'sdk.js', 'googlesyndication', 'googletagmanager',
    'google-analytics.com', 'gtag/js', 'adsbygoogle', 'fbevents',
    'facebook.net', 'doubleclick.net', 'pagead2', 'adsense',
    'advertisement', 'gamemonetize.com/ads',
]

ASSET_EXT_PATTERN = re.compile(
    r'\.(js|css|png|jpg|jpeg|gif|svg|webp|bmp|ico|cur|'
    r'wasm|json|data|mem|bin|unityweb|pck|'
    r'mp3|ogg|wav|m4a|aac|flac|'
    r'mp4|webm|ogv|'
    r'woff|woff2|ttf|eot|otf|'
    r'xml|atlas|fnt|plist|txt|csv|glb|gltf|obj|mtl|fbx|dds|ktx|basis)$',
    re.IGNORECASE
)

# ── Games to scrape ────────────────────────────────────────────────────────────

GAMES = [
    {
        "title": "Dummy Speed Bridger",
        "url": "https://html5.gamemonetize.com/w7zjm9hffe0ylqkc4jj7w896mj8u66sf/",
        "thumb": "https://img.gamemonetize.com/w7zjm9hffe0ylqkc4jj7w896mj8u66sf/512x384.jpg",
    },
    {
        "title": "World Conqueror",
        "url": "https://html5.gamemonetize.com/x5tq0rvqvv1uh18llbk270dqvr2fvvry/",
        "thumb": "https://img.gamemonetize.com/x5tq0rvqvv1uh18llbk270dqvr2fvvry/512x384.jpg",
    },
    {
        "title": "BINGO Real",
        "url": "https://html5.gamemonetize.com/w7w5gwfb43usxnt3v70zhmtynywxfsam/",
        "thumb": "https://img.gamemonetize.com/w7w5gwfb43usxnt3v70zhmtynywxfsam/512x384.jpg",
    },
    {
        "title": "Jirai Aesthetics",
        "url": "https://html5.gamemonetize.com/xpofnycblgv7zsdo967i2lqcj3jnxp46/",
        "thumb": "https://img.gamemonetize.com/xpofnycblgv7zsdo967i2lqcj3jnxp46/512x384.jpg",
    },
    {
        "title": "Escape Room: Mystery Word",
        "url": "https://html5.gamemonetize.com/diy0pg8mpyflucxnulnxwm1c2vx7tawj/",
        "thumb": "https://img.gamemonetize.com/diy0pg8mpyflucxnulnxwm1c2vx7tawj/512x384.jpg",
    },
    {
        "title": "Falling Elevator",
        "url": "https://html5.gamemonetize.com/cdr69da45cke7ybepsd3e50mj15xlh5g/",
        "thumb": "https://img.gamemonetize.com/cdr69da45cke7ybepsd3e50mj15xlh5g/512x384.jpg",
    },
    {
        "title": "Happy Farm Familly",
        "url": "https://html5.gamemonetize.com/x0nfxtoft8ow8idjtdymma9g873pjx62/",
        "thumb": "https://img.gamemonetize.com/x0nfxtoft8ow8idjtdymma9g873pjx62/512x384.jpg",
    },
    {
        "title": "Tornado.io",
        "url": "https://html5.gamemonetize.com/1smka6j97blcuektwham1dtdk7atuhzd/",
        "thumb": "https://img.gamemonetize.com/1smka6j97blcuektwham1dtdk7atuhzd/512x384.jpg",
    },
    {
        "title": "Animal.io 3D",
        "url": "https://html5.gamemonetize.com/01afiyuzovajt0olhhl3z6cr6cnjp2sp/",
        "thumb": "https://img.gamemonetize.com/01afiyuzovajt0olhhl3z6cr6cnjp2sp/512x384.jpg",
    },
    {
        "title": "Ball Runner 3D",
        "url": "https://html5.gamemonetize.com/n41xldprammlvb8ew2hx10f0xlplvw2o/",
        "thumb": "https://img.gamemonetize.com/n41xldprammlvb8ew2hx10f0xlplvw2o/512x384.jpg",
    },
    {
        "title": "Weld It",
        "url": "https://html5.gamemonetize.com/u0nolj2voug1g8cxwpcd1a105r4z8ozq/",
        "thumb": "https://img.gamemonetize.com/u0nolj2voug1g8cxwpcd1a105r4z8ozq/512x384.jpg",
    },
]

# ── Helper Functions ───────────────────────────────────────────────────────────

def is_ad_related(url_or_text):
    s = url_or_text.lower()
    return any(kw in s for kw in AD_KEYWORDS)


def get_hash(url):
    return url.rstrip('/').split('/')[-1]


def rel_path_for(asset_url, base_url):
    """Convert absolute asset URL to a relative path within the game directory."""
    pb = urlparse(base_url)
    pa = urlparse(asset_url)
    if pa.netloc and pa.netloc != pb.netloc:
        return None  # external domain
    path = pa.path
    base_path = pb.path.rstrip('/')
    if path.startswith(base_path + '/'):
        return path[len(base_path) + 1:]
    if path.startswith('/'):
        return path.lstrip('/')
    return path


def download(session, url, dest, show_progress=False, min_size_for_progress=1024*1024):
    """Download a URL to a local file (streaming for large files)."""
    if url.startswith('data:'):
        return False
    try:
        r = session.get(url, timeout=120, stream=True)
        r.raise_for_status()
        total_size = int(r.headers.get('content-length', 0))
        Path(dest).parent.mkdir(parents=True, exist_ok=True)
        
        # Only show detailed progress for large files
        if show_progress and total_size > min_size_for_progress:
            filename = Path(dest).name
            with open(dest, 'wb') as f:
                downloaded = 0
                for chunk in r.iter_content(8192):
                    if chunk:
                        f.write(chunk)
                        downloaded += len(chunk)
                        pct = (downloaded * 100) // total_size if total_size > 0 else 0
                        size_mb = downloaded / (1024 * 1024)
                        print(f"\r    {filename}: {pct}% ({size_mb:.1f} MB)", end='', flush=True)
            print()  # newline
        else:
            with open(dest, 'wb') as f:
                for chunk in r.iter_content(8192):
                    f.write(chunk)
        return True
    except Exception as e:
        print(f"\n    [FAIL] {url}: {e}")
        return False


# ── URL Extraction ─────────────────────────────────────────────────────────────

def extract_urls_from_html(html, base_url):
    """Extract all asset URLs from HTML tags."""
    soup = BeautifulSoup(html, 'html.parser')
    urls = set()

    for tag in soup.find_all('script', src=True):
        urls.add(urljoin(base_url, tag['src']))
    for tag in soup.find_all('link', href=True):
        urls.add(urljoin(base_url, tag['href']))
    for tag in soup.find_all('img', src=True):
        urls.add(urljoin(base_url, tag['src']))
    for tag in soup.find_all(['audio', 'video', 'source'], src=True):
        urls.add(urljoin(base_url, tag['src']))

    # url() in inline styles
    for tag in soup.find_all(style=True):
        for m in re.finditer(r'url\(["\']?([^"\')\s]+)["\']?\)', tag['style']):
            if not m.group(1).startswith('data:'):
                urls.add(urljoin(base_url, m.group(1)))

    # url() in <style> blocks
    for style_tag in soup.find_all('style'):
        if style_tag.string:
            for m in re.finditer(r'url\(["\']?([^"\')\s]+)["\']?\)', style_tag.string):
                if not m.group(1).startswith('data:'):
                    urls.add(urljoin(base_url, m.group(1)))

    return urls


def extract_urls_from_css(css_content, css_url):
    """Extract asset URLs from CSS."""
    urls = set()
    for m in re.finditer(r'url\(["\']?([^"\')\s]+)["\']?\)', css_content):
        if not m.group(1).startswith('data:'):
            urls.add(urljoin(css_url, m.group(1)))
    for m in re.finditer(r'@import\s+["\']([^"\']+)["\']', css_content):
        urls.add(urljoin(css_url, m.group(1)))
    return urls


def extract_urls_from_js(js_content, base_url):
    """Extract probable asset file paths from JavaScript string literals."""
    urls = set()
    for m in re.finditer(r'["\']([^"\'\\]{1,250})["\']', js_content):
        s = m.group(1)
        if ASSET_EXT_PATTERN.search(s) and not s.startswith(('http', 'data:', '//', 'blob:')):
            if not any(c in s for c in ['\n', '\r', '${', '`', '\\n', '\\r']):
                if '/' not in s or s.count('/') < 8:  # skip long absolute paths
                    urls.add(urljoin(base_url, s))
    return urls


# ── HTML Cleaning ──────────────────────────────────────────────────────────────

STUB_JS = r"""
// Nova Hub: ad stubs + site-lock bypass
var __dg_event_listener={addEventListener:function(){},removeEventListener:function(){}};
if(typeof gtag==='undefined'){function gtag(){}}
function AdblockEnabled(){return false;}
function GameMonetize(typeOrOpts,opts){
    var o=opts||typeOrOpts||{};
    if(typeof o==='object'&&o.onEvent){
        setTimeout(function(){o.onEvent({name:"SDK_READY"});},100);
        setTimeout(function(){o.onEvent({name:"SDK_GAME_START"});},200);
    }
    return{showBanner:function(){},addEventListener:function(e,cb){if(cb)setTimeout(cb,0);},showTag:function(){},gameReady:function(){},gameOver:function(){},happytime:function(){}};
}
var sdk_gamemonetize;
(function(){
    var oe=window.eval;
    window.eval=function(c){
        if(typeof c==='string'){
            if(c.indexOf('location.hostname')!==-1||c.indexOf('location.host')!==-1)return'html5.gamemonetize.com';
            if(c.indexOf('location.href')!==-1)return'https://html5.gamemonetize.com/';
            if(c.indexOf('location.origin')!==-1)return'https://html5.gamemonetize.com';
        }
        return oe.call(window,c);
    };
})();
"""


def clean_html(raw_html, game_slug, game_title):
    """Remove ads and inject stubs into the game HTML."""
    soup = BeautifulSoup(raw_html, 'html.parser')

    # Remove ad-related <script> tags
    for script in soup.find_all('script'):
        src = script.get('src', '')
        text = script.string or ''
        if is_ad_related(src) or is_ad_related(text):
            script.decompose()

    # Remove ad-related <link> tags
    for link in soup.find_all('link'):
        href = link.get('href', '')
        if is_ad_related(href):
            link.decompose()

    # Remove ad container elements
    for elem in soup.find_all(True, id=re.compile(r'gm[-_]|adsense|adsbygoogle|preroll|interstitial', re.I)):
        elem.decompose()
    for elem in soup.find_all(True, class_=re.compile(r'adsbygoogle|gm[-_]ad', re.I)):
        elem.decompose()
    for ins in soup.find_all('ins', class_='adsbygoogle'):
        ins.decompose()

    # Inject our stub script as the FIRST element in <head>
    stub = soup.new_tag('script')
    stub['type'] = 'text/javascript'
    stub.string = STUB_JS

    head = soup.find('head')
    if head:
        head.insert(0, stub)
    else:
        html_tag = soup.find('html')
        if html_tag:
            new_head = soup.new_tag('head')
            new_head.insert(0, stub)
            html_tag.insert(0, new_head)

    # Fix title
    title_tag = soup.find('title')
    if title_tag:
        title_tag.string = unescape(game_title)

    return str(soup)


# ── games.json ─────────────────────────────────────────────────────────────────

def add_to_games_json(name, slug):
    """Add a game entry to data/games.json."""
    try:
        with open(GAMES_JSON_PATH, 'r', encoding='utf-8') as f:
            games = json.load(f)

        if any(g.get('directory') == slug for g in games):
            print(f"    Already in games.json")
            return

        games.append({
            "name": unescape(name),
            "directory": slug,
            "image": "cover.jpg",
            "source": "non-semag",
            "gameUrl": f"/non-semag/{slug}/index.html",
            "imagePath": f"/non-semag/{slug}/cover.jpg",
        })

        with open(GAMES_JSON_PATH, 'w', encoding='utf-8') as f:
            json.dump(games, f, indent='\t', ensure_ascii=False)
        print(f"    Added to games.json")
    except Exception as e:
        print(f"    [ERROR] games.json: {e}")


# ── Main Scraper ───────────────────────────────────────────────────────────────

def scrape_game(game, session):
    """Download and clean a single GameMonetize game."""
    url = game['url'].rstrip('/') + '/'
    title = unescape(game['title'])
    ghash = get_hash(url)
    slug = f"gamemonetize-{ghash}"
    gdir = OUTPUT_DIR / slug

    print(f"\n{'=' * 60}")
    print(f"  {title}")
    print(f"  {url}")
    print(f"{'=' * 60}")

    # Skip if already downloaded
    if (gdir / 'index.html').exists():
        print("  Already downloaded, skipping.")
        add_to_games_json(title, slug)
        return True

    gdir.mkdir(parents=True, exist_ok=True)

    # ── Step 1: Fetch the main HTML ──────────────────────────────────────
    print("  [1/5] Fetching HTML...")
    r = session.get(url, timeout=30)
    r.raise_for_status()
    raw_html = r.text

    # ── Step 2: Download assets referenced in HTML ───────────────────────
    print("  [2/5] Downloading HTML assets...")
    html_urls = extract_urls_from_html(raw_html, url)
    downloaded = {}  # asset_url -> rel_path
    
    # Filter valid URLs to download
    to_download = []
    for asset_url in sorted(html_urls):
        if is_ad_related(asset_url):
            continue
        rp = rel_path_for(asset_url, url)
        if not rp or rp == '' or rp.endswith('/'):
            continue
        dest = gdir / rp
        if dest.exists():
            downloaded[asset_url] = rp
        else:
            to_download.append((asset_url, rp))
    
    if to_download:
        print(f"    Found {len(to_download)} files to download...")
        for asset_url, rp in tqdm(to_download, desc="    Downloading", unit="file", ncols=80):
            dest = gdir / rp
            if download(session, asset_url, str(dest), show_progress=True):
                size = os.path.getsize(str(dest))
                downloaded[asset_url] = rp
                print(f"    [OK] {rp} ({size:,} bytes)")
    else:
        print(f"    All {len(downloaded)} files already exist")

    # ── Step 3: Scan JS/CSS for additional assets ────────────────────────
    print("  [3/5] Scanning JS/CSS for additional assets...")
    print("    Scanning files...", end='', flush=True)
    extra_urls = set()

    for asset_url, rp in list(downloaded.items()):
        fpath = gdir / rp
        try:
            content = fpath.read_text(encoding='utf-8', errors='replace')
        except Exception:
            continue
        if rp.lower().endswith('.css'):
            extra_urls |= extract_urls_from_css(content, asset_url)
        elif rp.lower().endswith('.js'):
            extra_urls |= extract_urls_from_js(content, url)

    # Also scan inline scripts in the HTML
    soup_scan = BeautifulSoup(raw_html, 'html.parser')
    for script in soup_scan.find_all('script'):
        if script.string and not is_ad_related(script.string):
            extra_urls |= extract_urls_from_js(script.string, url)
    
    print(f" found {len(extra_urls)} potential assets")

    # Filter and download new assets
    to_download = []
    for asset_url in sorted(extra_urls):
        if is_ad_related(asset_url):
            continue
        if asset_url in downloaded:
            continue
        rp = rel_path_for(asset_url, url)
        if not rp or rp == '' or rp.endswith('/'):
            continue
        dest = gdir / rp
        if dest.exists():
            downloaded[asset_url] = rp
        else:
            to_download.append((asset_url, rp))

    new_count = 0
    if to_download:
        print(f"    Downloading {len(to_download)} additional files...")
        for asset_url, rp in tqdm(to_download, desc="    Downloading", unit="file", ncols=80):
            dest = gdir / rp
            if download(session, asset_url, str(dest), show_progress=True):
                size = os.path.getsize(str(dest))
                downloaded[asset_url] = rp
                new_count += 1
                print(f"    [OK] {rp} ({size:,} bytes)")

    if new_count:
        # Do a second pass in case new JS/CSS files reference more assets
        print("    Scanning new files for more assets...", end='', flush=True)
        extra2 = set()
        for asset_url, rp in list(downloaded.items()):
            if asset_url in html_urls:
                continue  # already scanned
            fpath = gdir / rp
            try:
                content = fpath.read_text(encoding='utf-8', errors='replace')
            except Exception:
                continue
            if rp.lower().endswith('.css'):
                extra2 |= extract_urls_from_css(content, asset_url)
            elif rp.lower().endswith('.js'):
                extra2 |= extract_urls_from_js(content, url)
        
        print(f" found {len(extra2)} more potential assets")
        
        to_download2 = []
        for asset_url in sorted(extra2):
            if is_ad_related(asset_url) or asset_url in downloaded:
                continue
            rp = rel_path_for(asset_url, url)
            if not rp or rp == '' or rp.endswith('/'):
                continue
            dest = gdir / rp
            if dest.exists():
                downloaded[asset_url] = rp
            else:
                to_download2.append((asset_url, rp))
        
        if to_download2:
            print(f"    Downloading {len(to_download2)} more files...")
            for asset_url, rp in tqdm(to_download2, desc="    Downloading", unit="file", ncols=80):
                dest = gdir / rp
                if download(session, asset_url, str(dest), show_progress=True):
                    size = os.path.getsize(str(dest))
                    downloaded[asset_url] = rp
                    new_count += 1
                    print(f"    [OK] {rp} ({size:,} bytes)")

    print(f"    Total: {len(downloaded)} files, {new_count} new downloads")

    # ── Step 4: Create clean index.html ──────────────────────────────────
    print("  [4/5] Creating clean index.html...")
    cleaned = clean_html(raw_html, slug, title)
    (gdir / 'index.html').write_text(cleaned, encoding='utf-8')

    # ── Step 5: Download cover image ─────────────────────────────────────
    print("  [5/5] Downloading cover image...")
    thumb = game.get('thumb', '')
    if thumb:
        download(session, thumb, str(gdir / 'cover.jpg'))

    # ── Step 6: Add to games.json ────────────────────────────────────────
    add_to_games_json(title, slug)

    # Summary
    total_files = sum(1 for _ in gdir.rglob('*') if _.is_file())
    total_size = sum(f.stat().st_size for f in gdir.rglob('*') if f.is_file())
    print(f"  DONE: {total_files} files, {total_size:,} bytes total")
    return True


def main():
    print("=" * 60)
    print("  GameMonetize Batch Scraper for Nova Hub")
    print(f"  {len(GAMES)} games to scrape")
    if HAS_TQDM:
        print("  Using tqdm for progress bars")
    else:
        print("  Using simple progress indicators (install tqdm for better progress bars)")
    print("=" * 60)

    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                      'AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/120.0.0.0 Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
    })

    success = 0
    failed = 0
    failed_games = []
    start_time = time.time()

    # Show overall progress
    pbar = tqdm(GAMES, desc="Overall Progress", unit="game", ncols=80)
    for i, game in enumerate(pbar, 1):
        pbar.set_description(f"Game {i}/{len(GAMES)}: {game['title'][:30]}")
        print(f"\n  [{i}/{len(GAMES)}] {game['title']}")
        try:
            if scrape_game(game, session):
                success += 1
                print(f"  [SUCCESS] {game['title']}")
        except Exception as e:
            print(f"  [ERROR] {game['title']}: {e}")
            failed += 1
            failed_games.append(game['title'])
        time.sleep(0.5)  # polite delay
    pbar.close()

    elapsed = time.time() - start_time
    print(f"\n\n{'=' * 60}")
    print(f"  COMPLETE: {success} OK, {failed} failed")
    print(f"  Time: {elapsed:.1f} seconds ({elapsed/60:.1f} minutes)")
    if failed_games:
        print(f"  Failed: {', '.join(failed_games)}")
    print(f"{'=' * 60}")


if __name__ == '__main__':
    main()

