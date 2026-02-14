"""
Download game from GameMonetize
Downloads all assets and creates a local playable version
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
        print(f"    [ERROR] Failed to download {url}: {e}")
        return False, 0

def find_game_files_with_selenium():
    """Use Selenium to find actual game files"""
    if not SELENIUM_AVAILABLE:
        print("  [ERROR] Selenium not available. Install with: pip install selenium webdriver-manager")
        return None, []
    
    print("  [INFO] Initializing browser...")
    driver = None
    game_files = []
    
    try:
        # Setup Chrome with network logging
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--window-size=1920,1080')
        chrome_options.add_argument(f'user-agent={HEADERS["User-Agent"]}')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.set_capability('goog:loggingPrefs', {'performance': 'ALL'})
        
        if USE_WEBDRIVER_MANAGER:
            service = Service(ChromeDriverManager().install())
            driver = webdriver.Chrome(service=service, options=chrome_options)
        else:
            driver = webdriver.Chrome(options=chrome_options)
        
        print("  [INFO] Loading game page...")
        driver.get(GAME_URL)
        
        # Wait for page to load
        time.sleep(5)
        
        # Get page source
        html_content = driver.page_source
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Look for game files in scripts
        print("  [INFO] Extracting game files from page...")
        game_files = []
        
        # Find all script tags
        for script in soup.find_all('script', src=True):
            src = script.get('src', '')
            if src:
                full_url = urljoin(GAME_URL, src)
                game_files.append(full_url)
        
        # Look for iframe with actual game
        iframe = soup.find('iframe', src=True)
        if iframe:
            iframe_src = iframe.get('src', '')
            if iframe_src and iframe_src != 'about:blank':
                print(f"  [INFO] Found iframe: {iframe_src}")
                # Load iframe content
                iframe_url = urljoin(GAME_URL, iframe_src)
                try:
                    driver.get(iframe_url)
                    time.sleep(3)
                    iframe_html = driver.page_source
                    iframe_soup = BeautifulSoup(iframe_html, 'html.parser')
                    
                    # Extract files from iframe
                    for script in iframe_soup.find_all('script', src=True):
                        src = script.get('src', '')
                        if src:
                            full_url = urljoin(iframe_url, src)
                            if full_url not in game_files:
                                game_files.append(full_url)
                except:
                    pass
        
        # Get performance logs to find network requests
        print("  [INFO] Analyzing network requests...")
        try:
            logs = driver.get_log('performance')
            for log in logs:
                message = json.loads(log['message'])
                if message['message']['method'] == 'Network.responseReceived':
                    response = message['message']['params']['response']
                    url = response.get('url', '')
                    mime_type = response.get('mimeType', '')
                    
                    # Look for game files
                    if any(ext in url.lower() for ext in ['.js', '.wasm', '.data', '.unityweb', '.html', '.css']):
                        if url not in game_files and 'gamemonetize' in url:
                            game_files.append(url)
        except Exception as e:
            print(f"  [WARN] Could not get network logs: {e}")
        
        driver.quit()
        return html_content, game_files
        
    except Exception as e:
        print(f"  [ERROR] Selenium error: {e}")
        if driver:
            try:
                driver.quit()
            except:
                pass
        return None, []

def extract_assets(html_content, base_url):
    """Extract all asset URLs from HTML"""
    soup = BeautifulSoup(html_content, 'html.parser')
    assets = {
        'scripts': [],
        'stylesheets': [],
        'images': [],
        'fonts': [],
        'data': []
    }
    
    # Scripts
    for script in soup.find_all('script', src=True):
        src = script.get('src', '')
        if src:
            assets['scripts'].append(urljoin(base_url, src))
    
    # Inline scripts - look for URLs
    for script in soup.find_all('script'):
        if script.string:
            url_patterns = [
                r'["\']([^"\']*\.(?:js|wasm|data|json)[^"\']*)["\']',
                r'src\s*[:=]\s*["\']([^"\']+)["\']',
                r'url\(["\']?([^"\'()]+)["\']?\)',
            ]
            for pattern in url_patterns:
                matches = re.findall(pattern, script.string, re.I)
                for match in matches:
                    url = match if isinstance(match, str) else match[0]
                    if url and not url.startswith('javascript:') and url not in assets['scripts']:
                        full_url = urljoin(base_url, url)
                        assets['scripts'].append(full_url)
    
    # Stylesheets
    for link in soup.find_all('link', rel='stylesheet', href=True):
        href = link.get('href', '')
        if href:
            assets['stylesheets'].append(urljoin(base_url, href))
    
    # Images
    for img in soup.find_all('img', src=True):
        src = img.get('src', '')
        if src:
            assets['images'].append(urljoin(base_url, src))
    
    # Fonts
    for link in soup.find_all('link', rel=re.compile('font', re.I), href=True):
        href = link.get('href', '')
        if href:
            assets['fonts'].append(urljoin(base_url, href))
    
    # Data files
    for tag in soup.find_all(['link', 'script', 'source']):
        href = tag.get('href') or tag.get('src') or tag.get('data-src')
        if href:
            full_url = urljoin(base_url, href)
            ext = Path(urlparse(full_url).path).suffix.lower()
            if ext in ['.wasm', '.data', '.br', '.gz', '.unityweb']:
                assets['data'].append(full_url)
    
    return assets

def update_html_paths(html_content, base_url, game_dir):
    """Update HTML to use local asset paths"""
    base_domain = urlparse(base_url).netloc
    
    # Replace script src
    html_content = re.sub(
        rf'https?://[^/]*{re.escape(base_domain)}[^"\']*/([^/]+\.js)',
        r'js/\1',
        html_content
    )
    
    # Replace stylesheet href
    html_content = re.sub(
        rf'https?://[^/]*{re.escape(base_domain)}[^"\']*/([^/]+\.css)',
        r'css/\1',
        html_content
    )
    
    # Replace image src
    html_content = re.sub(
        rf'https?://[^/]*{re.escape(base_domain)}[^"\']*/([^/]+\.(?:png|jpg|jpeg|gif|webp|svg))',
        r'images/\1',
        html_content
    )
    
    return html_content

def main():
    # Extract game ID from URL
    game_id = GAME_URL.rstrip('/').split('/')[-1]
    game_slug = f"gamemonetize-{game_id}"
    
    print(f"Downloading game from GameMonetize\n" + "="*50 + "\n")
    print(f"Game URL: {GAME_URL}")
    print(f"Game ID: {game_id}\n")
    
    # Create game directory
    game_dir = Path('non-semag') / game_slug
    game_dir.mkdir(parents=True, exist_ok=True)
    (game_dir / 'js').mkdir(exist_ok=True)
    (game_dir / 'css').mkdir(exist_ok=True)
    (game_dir / 'images').mkdir(exist_ok=True)
    (game_dir / 'data').mkdir(exist_ok=True)
    
    # Step 1: Fetch game page with Selenium
    print("Step 1: Fetching game page with Selenium...")
    html_content, game_files = find_game_files_with_selenium()
    
    if not html_content:
        # Fallback to requests
        print("  [WARN] Selenium failed, trying static method...")
        try:
            response = requests.get(GAME_URL, headers=HEADERS, timeout=30)
            response.raise_for_status()
            html_content = response.text
        except Exception as e:
            print(f"  [ERROR] Could not fetch game: {e}")
            return
    
    print(f"  [OK] Fetched {len(html_content)} bytes")
    if game_files:
        print(f"  [OK] Found {len(game_files)} game files")
    
    # Step 2: Extract game name
    print("\nStep 2: Extracting game information...")
    soup = BeautifulSoup(html_content, 'html.parser')
    game_name = "GameMonetize Game"
    
    title_tag = soup.find('title')
    if title_tag:
        game_name = title_tag.get_text().strip()
        # Clean up title
        game_name = re.sub(r'\s*-\s*GameMonetize.*$', '', game_name, flags=re.IGNORECASE)
        game_name = re.sub(r'\s*-\s*Play.*$', '', game_name, flags=re.IGNORECASE)
    
    meta_title = soup.find('meta', property='og:title')
    if meta_title and meta_title.get('content'):
        game_name = meta_title.get('content').strip()
    
    print(f"  [OK] Game name: {game_name}")
    
    # Step 3: Extract assets
    print("\nStep 3: Extracting assets...")
    assets = extract_assets(html_content, GAME_URL)
    
    # Add game files found by Selenium
    for url in game_files:
        if url not in assets['scripts']:
            assets['scripts'].append(url)
    
    total_assets = sum(len(v) for v in assets.values())
    print(f"  [OK] Found {total_assets} assets")
    
    # Step 4: Download assets
    print("\nStep 4: Downloading assets...")
    downloaded = 0
    failed = 0
    
    # Download scripts
    for url in assets['scripts'][:50]:  # Limit to first 50 scripts
        filename = Path(urlparse(url).path).name
        if not filename or filename == '/':
            # Try to get filename from query params or use a hash
            filename = url.split('/')[-1].split('?')[0] or f"script_{downloaded}.js"
        filepath = game_dir / 'js' / filename
        success, size = download_file(url, filepath)
        if success:
            downloaded += 1
            print(f"    [OK] {filename} ({size} bytes)")
        else:
            failed += 1
    
    # Download stylesheets
    for url in assets['stylesheets']:
        filename = Path(urlparse(url).path).name
        if not filename or filename == '/':
            continue
        filepath = game_dir / 'css' / filename
        success, size = download_file(url, filepath)
        if success:
            downloaded += 1
        else:
            failed += 1
    
    # Download images
    for url in assets['images'][:20]:  # Limit to first 20 images
        filename = Path(urlparse(url).path).name
        if not filename or filename == '/':
            continue
        filepath = game_dir / 'images' / filename
        success, size = download_file(url, filepath)
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
        success, size = download_file(url, filepath)
        if success:
            downloaded += 1
        else:
            failed += 1
    
    print(f"\n  [OK] Downloaded {downloaded} assets ({failed} failed)")
    
    # Step 5: Update HTML and save
    print("\nStep 5: Saving game HTML...")
    updated_html = update_html_paths(html_content, GAME_URL, game_dir)
    (game_dir / 'index.html').write_text(updated_html, encoding='utf-8')
    print("  [OK] Saved index.html")
    
    # Step 6: Download cover image
    print("\nStep 6: Downloading cover image...")
    try:
        og_image = soup.find('meta', property='og:image')
        if og_image and og_image.get('content'):
            img_url = urljoin(GAME_URL, og_image['content'])
            cover_path = game_dir / 'cover.png'
            success, size = download_file(img_url, cover_path)
            if success:
                print(f"  [OK] Downloaded cover ({size} bytes)")
    except Exception as e:
        print(f"  [WARN] Could not download cover: {e}")
    
    # Step 7: Add to games.json
    print("\nStep 7: Adding to games.json...")
    try:
        games_json_path = Path('data/games.json')
        with open(games_json_path, 'r', encoding='utf-8') as f:
            games = json.load(f)
        
        # Check if already exists
        exists = any(g.get('directory') == game_slug for g in games)
        if not exists:
            new_game = {
                "name": game_name,
                "directory": game_slug,
                "image": "cover.png",
                "source": "non-semag",
                "gameUrl": f"/non-semag/{game_slug}/index.html",
                "imagePath": f"/non-semag/{game_slug}/cover.png"
            }
            games.append(new_game)
            
            with open(games_json_path, 'w', encoding='utf-8') as f:
                json.dump(games, f, indent='\t', ensure_ascii=False)
            print(f"  [OK] Added {game_name} to games.json")
        else:
            print(f"  [WARN] Game already exists in games.json")
    except Exception as e:
        print(f"  [ERROR] Error updating games.json: {e}")
    
    print(f"\n[OK] Complete! Game downloaded to {game_dir}")
    print(f"   You can now play it at /non-semag/{game_slug}/index.html")

if __name__ == "__main__":
    main()

