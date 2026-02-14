"""
Download game from GameMonetize with ALL assets including favicon
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

def get_all_assets_with_selenium():
    """Use Selenium to get the page and all network requests"""
    if not SELENIUM_AVAILABLE:
        print("  [ERROR] Selenium not available")
        return None, []
    
    print("  [INFO] Initializing browser...")
    driver = None
    all_urls = set()
    
    try:
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--window-size=1920,1080')
        chrome_options.add_argument(f'user-agent={HEADERS["User-Agent"]}')
        chrome_options.set_capability('goog:loggingPrefs', {'performance': 'ALL'})
        
        if USE_WEBDRIVER_MANAGER:
            service = Service(ChromeDriverManager().install())
            driver = webdriver.Chrome(service=service, options=chrome_options)
        else:
            driver = webdriver.Chrome(options=chrome_options)
        
        print("  [INFO] Loading game page...")
        driver.get(GAME_URL)
        time.sleep(5)
        
        # Get page source
        html_content = driver.page_source
        
        # Get all network requests
        print("  [INFO] Capturing network requests...")
        logs = driver.get_log('performance')
        for log in logs:
            try:
                message = json.loads(log['message'])
                if message['message']['method'] == 'Network.responseReceived':
                    response = message['message']['params']['response']
                    url = response.get('url', '')
                    mime_type = response.get('mimeType', '')
                    
                    # Only include game domain files
                    if 'gamemonetize.co' in url or 'html5.gamemonetize.co' in url:
                        # Skip ad domains
                        if any(ad in url.lower() for ad in ['googlesyndication', 'doubleclick', 'google-analytics', 'googletagmanager', 'fundingchoices']):
                            continue
                        all_urls.add(url)
            except:
                continue
        
        driver.quit()
        return html_content, list(all_urls)
        
    except Exception as e:
        print(f"  [ERROR] Selenium error: {e}")
        if driver:
            try:
                driver.quit()
            except:
                pass
        return None, []

def extract_all_assets(html_content, base_url):
    """Extract ALL assets from HTML"""
    soup = BeautifulSoup(html_content, 'html.parser')
    assets = {
        'scripts': [],
        'stylesheets': [],
        'images': [],
        'fonts': [],
        'data': [],
        'favicon': [],
        'other': []
    }
    
    # Favicon
    favicon = soup.find('link', rel=re.compile('icon', re.I))
    if favicon and favicon.get('href'):
        assets['favicon'].append(urljoin(base_url, favicon.get('href')))
    
    # Apple touch icon
    apple_icon = soup.find('link', rel='apple-touch-icon')
    if apple_icon and apple_icon.get('href'):
        assets['favicon'].append(urljoin(base_url, apple_icon.get('href')))
    
    # Scripts
    for script in soup.find_all('script', src=True):
        src = script.get('src', '')
        if src and not src.startswith('http') or 'gamemonetize' in src:
            assets['scripts'].append(urljoin(base_url, src))
    
    # Stylesheets
    for link in soup.find_all('link', rel='stylesheet', href=True):
        href = link.get('href', '')
        if href:
            assets['stylesheets'].append(urljoin(base_url, href))
    
    # Images
    for img in soup.find_all('img', src=True):
        src = img.get('src', '')
        if src and not src.startswith('data:'):
            assets['images'].append(urljoin(base_url, src))
    
    # Background images in CSS
    for style in soup.find_all('style'):
        if style.string:
            bg_matches = re.findall(r'url\(["\']?([^"\'()]+)["\']?\)', style.string)
            for match in bg_matches:
                if not match.startswith('data:'):
                    assets['images'].append(urljoin(base_url, match))
    
    # Data files
    for tag in soup.find_all(['link', 'script', 'source']):
        href = tag.get('href') or tag.get('src') or tag.get('data-src')
        if href:
            full_url = urljoin(base_url, href)
            ext = Path(urlparse(full_url).path).suffix.lower()
            if ext in ['.wasm', '.data', '.br', '.gz', '.unityweb', '.json']:
                assets['data'].append(full_url)
    
    return assets

def fix_html_paths(html_content, base_url, game_dir):
    """Fix all paths in HTML to be relative"""
    # Get base domain
    base_domain = urlparse(base_url).netloc
    
    # Fix script src - make them relative
    html_content = re.sub(
        rf'src=["\']https?://[^/]*{re.escape(base_domain)}[^"\']*/([^/]+\.js)["\']',
        r'src="js/\1"',
        html_content
    )
    html_content = re.sub(
        rf'src=["\']([^/]+\.js)["\']',
        r'src="js/\1"',
        html_content
    )
    
    # Fix stylesheet href
    html_content = re.sub(
        rf'href=["\']https?://[^/]*{re.escape(base_domain)}[^"\']*/([^/]+\.css)["\']',
        r'href="css/\1"',
        html_content
    )
    html_content = re.sub(
        rf'href=["\']([^/]+\.css)["\']',
        r'href="css/\1"',
        html_content
    )
    
    # Fix image src
    html_content = re.sub(
        rf'src=["\']https?://[^/]*{re.escape(base_domain)}[^"\']*/([^/]+\.(?:png|jpg|jpeg|gif|webp|svg|ico))["\']',
        r'src="images/\1"',
        html_content
    )
    
    # Fix favicon
    html_content = re.sub(
        rf'href=["\']https?://[^/]*{re.escape(base_domain)}[^"\']*/([^/]+\.(?:ico|png))["\']',
        r'href="images/\1"',
        html_content
    )
    
    return html_content

def main():
    game_id = GAME_URL.rstrip('/').split('/')[-1]
    game_slug = f"gamemonetize-{game_id}"
    
    print(f"Downloading game from GameMonetize (FULL)\n" + "="*50 + "\n")
    
    # Create game directory
    game_dir = Path('non-semag') / game_slug
    game_dir.mkdir(parents=True, exist_ok=True)
    (game_dir / 'js').mkdir(exist_ok=True)
    (game_dir / 'css').mkdir(exist_ok=True)
    (game_dir / 'images').mkdir(exist_ok=True)
    (game_dir / 'data').mkdir(exist_ok=True)
    
    # Step 1: Get page with Selenium
    print("Step 1: Fetching page with Selenium...")
    html_content, network_urls = get_all_assets_with_selenium()
    
    if not html_content:
        # Fallback
        response = requests.get(GAME_URL, headers=HEADERS, timeout=30)
        response.raise_for_status()
        html_content = response.text
    
    print(f"  [OK] Got HTML ({len(html_content)} bytes)")
    print(f"  [OK] Found {len(network_urls)} URLs from network")
    
    # Step 2: Extract assets
    print("\nStep 2: Extracting assets...")
    assets = extract_all_assets(html_content, GAME_URL)
    
    # Add network URLs
    for url in network_urls:
        ext = Path(urlparse(url).path).suffix.lower()
        if ext == '.js' and url not in assets['scripts']:
            assets['scripts'].append(url)
        elif ext == '.css' and url not in assets['stylesheets']:
            assets['stylesheets'].append(url)
        elif ext in ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico'] and url not in assets['images']:
            assets['images'].append(url)
        elif ext in ['.wasm', '.data', '.json'] and url not in assets['data']:
            assets['data'].append(url)
    
    total = sum(len(v) for v in assets.values())
    print(f"  [OK] Found {total} total assets")
    print(f"    - Scripts: {len(assets['scripts'])}")
    print(f"    - Stylesheets: {len(assets['stylesheets'])}")
    print(f"    - Images: {len(assets['images'])}")
    print(f"    - Favicon: {len(assets['favicon'])}")
    print(f"    - Data: {len(assets['data'])}")
    
    # Step 3: Download all assets
    print("\nStep 3: Downloading assets...")
    downloaded = 0
    failed = 0
    
    # Download favicon first
    for url in assets['favicon']:
        filename = Path(urlparse(url).path).name or 'favicon.ico'
        filepath = game_dir / 'images' / filename
        success, result = download_file(url, filepath)
        if success:
            downloaded += 1
            print(f"    [OK] {filename} ({result} bytes)")
        else:
            failed += 1
    
    # Download scripts
    for url in assets['scripts']:
        filename = Path(urlparse(url).path).name
        if not filename or filename == '/':
            filename = url.split('/')[-1].split('?')[0] or f"script_{downloaded}.js"
        filepath = game_dir / 'js' / filename
        success, result = download_file(url, filepath)
        if success:
            downloaded += 1
            if downloaded % 5 == 0:
                print(f"    [OK] {filename} ({result} bytes)")
        else:
            failed += 1
    
    # Download stylesheets
    for url in assets['stylesheets']:
        filename = Path(urlparse(url).path).name
        if not filename or filename == '/':
            continue
        filepath = game_dir / 'css' / filename
        success, result = download_file(url, filepath)
        if success:
            downloaded += 1
        else:
            failed += 1
    
    # Download images
    for url in assets['images']:
        filename = Path(urlparse(url).path).name
        if not filename or filename == '/':
            continue
        filepath = game_dir / 'images' / filename
        success, result = download_file(url, filepath)
        if success:
            downloaded += 1
        else:
            failed += 1
    
    # Download data files
    for url in assets['data']:
        filename = Path(urlparse(url).path).name
        if not filename or filename == '/':
            continue
        filepath = game_dir / 'data' / filename
        success, result = download_file(url, filepath)
        if success:
            downloaded += 1
        else:
            failed += 1
    
    print(f"\n  [OK] Downloaded {downloaded} assets ({failed} failed)")
    
    # Step 4: Fix HTML paths and save
    print("\nStep 4: Fixing HTML paths...")
    fixed_html = fix_html_paths(html_content, GAME_URL, game_dir)
    
    # Remove ad scripts
    fixed_html = re.sub(r'<script[^>]*src=["\'][^"\']*(?:analytics|ga\.js|ima3|gpt|pubads|googletagmanager|googlesyndication|doubleclick|fundingchoices|gamemonetize\.com/sdk|ads\.js|client\.js)[^"\']*["\'][^>]*></script>', '', fixed_html, flags=re.IGNORECASE)
    fixed_html = re.sub(r'<script[^>]*>.*?gtag[^<]*</script>', '', fixed_html, flags=re.IGNORECASE | re.DOTALL)
    fixed_html = re.sub(r'<script[^>]*>.*?dataLayer[^<]*</script>', '', fixed_html, flags=re.IGNORECASE | re.DOTALL)
    
    # Skip ad waiting
    fixed_html = re.sub(
        r'waiting = setInterval\(function \(\) \{[^}]*sdk[^}]*showBanner[^}]*\}\);',
        r'// Skip ads - start game immediately\n\t\t\tclearInterval(waiting);\n\t\t\tGameModule.removeRunDependency(\'waiting for preroll\');',
        fixed_html,
        flags=re.IGNORECASE | re.DOTALL
    )
    
    (game_dir / 'index.html').write_text(fixed_html, encoding='utf-8')
    print("  [OK] Saved index.html")
    
    # Step 5: Download cover/favicon from GameMonetize page
    print("\nStep 5: Getting game info...")
    try:
        info_url = "https://gamemonetize.com/winter-clash-3d-game"
        response = requests.get(info_url, headers=HEADERS, timeout=30)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Get favicon
        favicon = soup.find('link', rel=re.compile('icon', re.I))
        if favicon and favicon.get('href'):
            favicon_url = urljoin(info_url, favicon.get('href'))
            favicon_path = game_dir / 'images' / 'favicon.ico'
            success, result = download_file(favicon_url, favicon_path)
            if success:
                print(f"  [OK] Downloaded favicon ({result} bytes)")
        
        # Get og:image as cover
        og_image = soup.find('meta', property='og:image')
        if og_image and og_image.get('content'):
            cover_url = og_image.get('content')
            cover_path = game_dir / 'cover.png'
            success, result = download_file(cover_url, cover_path)
            if success:
                print(f"  [OK] Downloaded cover ({result} bytes)")
    except Exception as e:
        print(f"  [WARN] Could not get game info: {e}")
    
    print(f"\n[OK] Complete! Game downloaded to {game_dir}")

if __name__ == "__main__":
    main()

