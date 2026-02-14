"""
Complete download of GameMonetize game with proper HTML structure
"""
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from pathlib import Path
import re
import json
import time

# Try to import Selenium
try:
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.chrome.service import Service
    try:
        from webdriver_manager.chrome import ChromeDriverManager
        USE_WEBDRIVER_MANAGER = True
    except ImportError:
        USE_WEBDRIVER_MANAGER = False
    SELENIUM_AVAILABLE = True
except ImportError:
    SELENIUM_AVAILABLE = False
    USE_WEBDRIVER_MANAGER = False

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
}

GAME_URL = "https://html5.gamemonetize.co/ya6quof6a1n40xzz3thz9xekh349abp8/"

def download_file(url, filepath):
    """Download a file from URL"""
    try:
        filepath.parent.mkdir(parents=True, exist_ok=True)
        response = requests.get(url, headers=HEADERS, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        return True, filepath.stat().st_size
    except Exception as e:
        return False, str(e)

def main():
    game_id = GAME_URL.rstrip('/').split('/')[-1]
    game_slug = f"gamemonetize-{game_id}"
    
    print(f"Complete download of Winter Clash 3D\n" + "="*50 + "\n")
    
    # Create game directory
    game_dir = Path('non-semag') / game_slug
    game_dir.mkdir(parents=True, exist_ok=True)
    (game_dir / 'js').mkdir(exist_ok=True)
    (game_dir / 'css').mkdir(exist_ok=True)
    (game_dir / 'images').mkdir(exist_ok=True)
    (game_dir / 'data').mkdir(exist_ok=True)
    
    # Step 1: Get the actual game page
    print("Step 1: Fetching game page...")
    response = requests.get(GAME_URL, headers=HEADERS, timeout=30)
    response.raise_for_status()
    html_content = response.text
    
    soup = BeautifulSoup(html_content, 'html.parser')
    print(f"  [OK] Got HTML ({len(html_content)} bytes)")
    
    # Step 2: Extract ALL assets
    print("\nStep 2: Extracting all assets...")
    all_assets = []
    
    # Scripts
    for script in soup.find_all('script', src=True):
        src = script.get('src', '')
        if src:
            if src.startswith('http'):
                all_assets.append(('script', src))
            else:
                all_assets.append(('script', urljoin(GAME_URL, src)))
    
    # Stylesheets
    for link in soup.find_all('link', rel='stylesheet', href=True):
        href = link.get('href', '')
        if href:
            if href.startswith('http'):
                all_assets.append(('stylesheet', href))
            else:
                all_assets.append(('stylesheet', urljoin(GAME_URL, href)))
    
    # Images
    for img in soup.find_all('img', src=True):
        src = img.get('src', '')
        if src and not src.startswith('data:'):
            if src.startswith('http'):
                all_assets.append(('image', src))
            else:
                all_assets.append(('image', urljoin(GAME_URL, src)))
    
    # Look for WASM and data files in scripts
    for script in soup.find_all('script'):
        if script.string:
            # Find WASM files
            wasm_matches = re.findall(r'["\']([^"\']*\.wasm[^"\']*)["\']', script.string, re.I)
            for match in wasm_matches:
                if match.startswith('http'):
                    all_assets.append(('data', match))
                else:
                    all_assets.append(('data', urljoin(GAME_URL, match)))
            
            # Find data files
            data_matches = re.findall(r'["\']([^"\']*\.(?:data|json)[^"\']*)["\']', script.string, re.I)
            for match in data_matches:
                if match.startswith('http'):
                    all_assets.append(('data', match))
                else:
                    all_assets.append(('data', urljoin(GAME_URL, match)))
    
    print(f"  [OK] Found {len(all_assets)} assets to download")
    
    # Step 3: Download all assets
    print("\nStep 3: Downloading assets...")
    downloaded = {}
    failed = []
    
    for asset_type, url in all_assets:
        # Skip ad domains
        if any(ad in url.lower() for ad in ['googlesyndication', 'doubleclick', 'google-analytics', 'googletagmanager', 'fundingchoices', 'imasdk']):
            continue
        
        filename = Path(urlparse(url).path).name
        if not filename or filename == '/':
            filename = url.split('/')[-1].split('?')[0] or f"file_{len(downloaded)}"
        
        if asset_type == 'script':
            filepath = game_dir / 'js' / filename
        elif asset_type == 'stylesheet':
            filepath = game_dir / 'css' / filename
        elif asset_type == 'image':
            filepath = game_dir / 'images' / filename
        elif asset_type == 'data':
            filepath = game_dir / 'data' / filename
        else:
            filepath = game_dir / filename
        
        success, result = download_file(url, filepath)
        if success:
            downloaded[url] = (filepath, result)
            if len(downloaded) % 5 == 0:
                print(f"    [OK] {filename} ({result} bytes)")
        else:
            failed.append(url)
    
    print(f"\n  [OK] Downloaded {len(downloaded)} assets ({len(failed)} failed)")
    
    # Step 4: Create clean HTML
    print("\nStep 4: Creating clean HTML...")
    
    # Get title
    title = "Winter Clash 3D"
    title_tag = soup.find('title')
    if title_tag:
        title = title_tag.get_text().strip()
    
    # Build clean HTML
    clean_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>{title}</title>
	<meta name="author" content="Freeway Interactive">
	<link rel="icon" type="image/x-icon" href="images/favicon.ico">
"""
    
    # Add stylesheets
    for link in soup.find_all('link', rel='stylesheet', href=True):
        href = link.get('href', '')
        if href and not any(ad in href.lower() for ad in ['googlesyndication', 'doubleclick']):
            filename = Path(urlparse(href).path).name
            if filename:
                clean_html += f'\t<link rel="stylesheet" href="css/{filename}">\n'
    
    # Add game variables
    game_id_var = soup.find('script', string=re.compile('GAME_ID'))
    if game_id_var and game_id_var.string:
        # Extract game variables
        clean_html += '\t<script type="text/javascript">\n'
        clean_html += '\t\tvar GAME_ID = \'winter\';\n'
        clean_html += '\t\tvar WASM_FILE_EXT = \'wasm\';\n'
        clean_html += '\t\tvar __dg_event_listener = undefined;\n'
        clean_html += '\t</script>\n'
    
    clean_html += '</head>\n<body oncontextmenu="return false;">\n'
    clean_html += '\t<div id="viewport">\n'
    clean_html += '\t\t<canvas id="canvas" oncontextmenu="event.preventDefault()"></canvas>\n'
    clean_html += '\t\t<div id="preloader">\n'
    clean_html += '\t\t\t<div class="meter animate" style="display: none;">\n'
    clean_html += '\t\t\t\t<span style="width: 100%;"><span></span></span>\n'
    clean_html += '\t\t\t</div>\n'
    clean_html += '\t\t</div>\n'
    clean_html += '\t</div>\n'
    
    # Add scripts (game scripts only)
    for script in soup.find_all('script', src=True):
        src = script.get('src', '')
        if src and not any(ad in src.lower() for ad in ['analytics', 'ga.js', 'ima3', 'gpt', 'pubads', 'googletagmanager', 'googlesyndication', 'doubleclick', 'fundingchoices', 'gamemonetize.com/sdk', 'ads.js', 'client.js']):
            filename = Path(urlparse(src).path).name
            if filename and filename in [f.name for f in (game_dir / 'js').iterdir()]:
                clean_html += f'\t<script src="js/{filename}"></script>\n'
    
    # Add inline game initialization script (modified to skip ads)
    clean_html += """\t<script type="text/javascript">
		var waiting = setInterval(function () {
			if (typeof GameModule !== 'object' || typeof GameModule.addRunDependency !== 'function')
				return;
				
			clearInterval(waiting);
			
			// Skip ads - start game immediately
			GameModule.removeRunDependency('waiting for preroll');
			document.getElementById('preloader').style.display = 'none';
		}, 100);
	</script>
</body>
</html>"""
    
    (game_dir / 'index.html').write_text(clean_html, encoding='utf-8')
    print("  [OK] Created clean index.html")
    
    # Step 5: Download favicon and cover
    print("\nStep 5: Downloading favicon and cover...")
    try:
        info_url = "https://gamemonetize.com/winter-clash-3d-game"
        response = requests.get(info_url, headers=HEADERS, timeout=30)
        soup_info = BeautifulSoup(response.text, 'html.parser')
        
        # Favicon
        favicon = soup_info.find('link', rel=re.compile('icon', re.I))
        if favicon and favicon.get('href'):
            favicon_url = urljoin(info_url, favicon.get('href'))
            favicon_path = game_dir / 'images' / 'favicon.ico'
            success, result = download_file(favicon_url, favicon_path)
            if success:
                print(f"  [OK] Downloaded favicon ({result} bytes)")
        
        # Cover image
        og_image = soup_info.find('meta', property='og:image')
        if og_image and og_image.get('content'):
            cover_url = og_image.get('content')
            cover_path = game_dir / 'cover.png'
            success, result = download_file(cover_url, cover_path)
            if success:
                print(f"  [OK] Downloaded cover ({result} bytes)")
    except Exception as e:
        print(f"  [WARN] Could not get favicon/cover: {e}")
    
    print(f"\n[OK] Complete! Game at {game_dir}")

if __name__ == "__main__":
    main()

