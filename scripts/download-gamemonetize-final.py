"""
Final complete download using Selenium to get ALL assets
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
    
    print(f"Complete download with Selenium\n" + "="*50 + "\n")
    
    # Create game directory
    game_dir = Path('non-semag') / game_slug
    game_dir.mkdir(parents=True, exist_ok=True)
    (game_dir / 'js').mkdir(exist_ok=True)
    (game_dir / 'css').mkdir(exist_ok=True)
    (game_dir / 'images').mkdir(exist_ok=True)
    (game_dir / 'data').mkdir(exist_ok=True)
    
    # Step 1: Get page with requests first
    print("Step 1: Fetching game page...")
    response = requests.get(GAME_URL, headers=HEADERS, timeout=30)
    response.raise_for_status()
    html_content = response.text
    soup = BeautifulSoup(html_content, 'html.parser')
    print(f"  [OK] Got HTML ({len(html_content)} bytes)")
    
    # Step 2: Use Selenium to get network requests
    all_urls = set()
    if SELENIUM_AVAILABLE:
        print("\nStep 2: Using Selenium to capture network requests...")
        try:
            chrome_options = Options()
            chrome_options.add_argument('--headless')
            chrome_options.add_argument('--no-sandbox')
            chrome_options.add_argument('--disable-dev-shm-usage')
            chrome_options.add_argument('--disable-gpu')
            chrome_options.set_capability('goog:loggingPrefs', {'performance': 'ALL'})
            
            if USE_WEBDRIVER_MANAGER:
                service = Service(ChromeDriverManager().install())
                driver = webdriver.Chrome(service=service, options=chrome_options)
            else:
                driver = webdriver.Chrome(options=chrome_options)
            
            driver.get(GAME_URL)
            time.sleep(8)  # Wait for everything to load
            
            # Get network logs
            logs = driver.get_log('performance')
            for log in logs:
                try:
                    message = json.loads(log['message'])
                    if message['message']['method'] == 'Network.responseReceived':
                        url = message['message']['params']['response'].get('url', '')
                        if url and 'gamemonetize.co' in url:
                            # Skip ads
                            if not any(ad in url.lower() for ad in ['googlesyndication', 'doubleclick', 'google-analytics', 'googletagmanager', 'fundingchoices', 'imasdk']):
                                all_urls.add(url)
                except:
                    continue
            
            driver.quit()
            print(f"  [OK] Found {len(all_urls)} URLs from network")
        except Exception as e:
            print(f"  [WARN] Selenium error: {e}")
    
    # Step 3: Extract assets from HTML
    print("\nStep 3: Extracting assets from HTML...")
    assets = {
        'scripts': [],
        'stylesheets': [],
        'images': [],
        'data': []
    }
    
    # Scripts
    for script in soup.find_all('script', src=True):
        src = script.get('src', '')
        if src:
            full_url = urljoin(GAME_URL, src) if not src.startswith('http') else src
            if 'gamemonetize.co' in full_url and not any(ad in full_url.lower() for ad in ['googlesyndication', 'doubleclick', 'google-analytics', 'googletagmanager', 'fundingchoices', 'imasdk', 'gamemonetize.com/sdk']):
                assets['scripts'].append(full_url)
                all_urls.add(full_url)
    
    # Stylesheets
    for link in soup.find_all('link', rel='stylesheet', href=True):
        href = link.get('href', '')
        if href:
            full_url = urljoin(GAME_URL, href) if not href.startswith('http') else href
            if 'gamemonetize.co' in full_url:
                assets['stylesheets'].append(full_url)
                all_urls.add(full_url)
    
    # Look for game files in script content
    for script in soup.find_all('script'):
        if script.string:
            # Find index.js, index.wasm, etc.
            file_matches = re.findall(r'["\']([^"\']*\.(?:js|wasm|data|json)[^"\']*)["\']', script.string, re.I)
            for match in file_matches:
                if not match.startswith('data:'):
                    full_url = urljoin(GAME_URL, match) if not match.startswith('http') else match
                    if 'gamemonetize.co' in full_url:
                        all_urls.add(full_url)
                        if match.endswith('.wasm') or match.endswith('.data'):
                            assets['data'].append(full_url)
                        else:
                            assets['scripts'].append(full_url)
    
    print(f"  [OK] Total assets to download: {len(all_urls)}")
    
    # Step 4: Download all assets
    print("\nStep 4: Downloading assets...")
    downloaded = {}
    failed = []
    
    for url in sorted(all_urls):
        filename = Path(urlparse(url).path).name
        if not filename or filename == '/':
            filename = url.split('/')[-1].split('?')[0] or f"file_{len(downloaded)}"
        
        # Determine file type
        ext = Path(filename).suffix.lower()
        if ext == '.css':
            filepath = game_dir / 'css' / filename
        elif ext in ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico']:
            filepath = game_dir / 'images' / filename
        elif ext in ['.wasm', '.data', '.json']:
            filepath = game_dir / 'data' / filename
        else:
            filepath = game_dir / 'js' / filename
        
        success, result = download_file(url, filepath)
        if success:
            downloaded[url] = (filepath, result)
            print(f"    [OK] {filename} ({result} bytes)")
        else:
            failed.append((url, result))
    
    print(f"\n  [OK] Downloaded {len(downloaded)} assets ({len(failed)} failed)")
    
    # Step 5: Create clean HTML
    print("\nStep 5: Creating clean HTML...")
    title = soup.find('title')
    title_text = title.get_text().strip() if title else "Winter Clash 3D"
    
    clean_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>{title_text}</title>
	<link rel="icon" type="image/x-icon" href="images/favicon.ico">
"""
    
    # Add stylesheets
    css_files = [f.name for f in (game_dir / 'css').iterdir() if f.is_file()]
    for css_file in css_files:
        clean_html += f'\t<link rel="stylesheet" href="css/{css_file}">\n'
    
    # Add game variables
    clean_html += """	<script type="text/javascript">
		var GAME_ID = 'winter';
		var WASM_FILE_EXT = 'wasm';
		var __dg_event_listener = undefined;
	</script>
"""
    
    # Add scripts
    js_files = [f.name for f in (game_dir / 'js').iterdir() if f.is_file() and f.suffix == '.js']
    # Order: jquery first, then main.js, then index.js
    if 'jquery-3.3.1.min.js' in js_files:
        clean_html += '\t<script src="js/jquery-3.3.1.min.js"></script>\n'
        js_files.remove('jquery-3.3.1.min.js')
    if 'main.js' in js_files:
        clean_html += '\t<script src="js/main.js"></script>\n'
        js_files.remove('main.js')
    if 'index.js' in js_files:
        clean_html += '\t<script src="js/index.js"></script>\n'
        js_files.remove('index.js')
    # Add any remaining JS files
    for js_file in sorted(js_files):
        if js_file not in ['ads.js', 'ga.js', 'sdk.js', 'sdk_preload.js']:
            clean_html += f'\t<script src="js/{js_file}"></script>\n'
    
    clean_html += """</head>
<body oncontextmenu="return false;">
	<div id="viewport">
		<canvas id="canvas" oncontextmenu="event.preventDefault()"></canvas>
		<div id="preloader">
			<div class="meter animate" style="display: none;">
				<span style="width: 100%;"><span></span></span>
			</div>
		</div>
	</div>
	<script type="text/javascript">
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
    
    # Step 6: Download favicon and cover
    print("\nStep 6: Downloading favicon and cover...")
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
        
        # Cover
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

