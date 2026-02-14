"""
Download Geometry Rush 4d game from Lagged.com using Selenium
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

GAME_URL = "https://lagged.com/en/g/geometry-rush-4d"
GAME_NAME = "Geometry Rush 4d"
GAME_SLUG = "geometry-rush-4d"

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

def find_game_url_with_selenium():
    """Use Selenium to find the actual game URL"""
    if not SELENIUM_AVAILABLE:
        print("  [ERROR] Selenium not available. Install with: pip install selenium webdriver-manager")
        return None
    
    print("  [INFO] Initializing browser...")
    driver = None
    try:
        # Setup Chrome
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--window-size=1920,1080')
        chrome_options.add_argument(f'user-agent={HEADERS["User-Agent"]}')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        
        if USE_WEBDRIVER_MANAGER:
            service = Service(ChromeDriverManager().install())
            driver = webdriver.Chrome(service=service, options=chrome_options)
        else:
            driver = webdriver.Chrome(options=chrome_options)
        
        print("  [INFO] Loading game page...")
        driver.get(GAME_URL)
        
        # Wait for page to load
        time.sleep(3)
        
        # Try to click the play button
        print("  [INFO] Looking for play button...")
        try:
            play_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.ID, "playnowbtn"))
            )
            if play_button:
                print("  [INFO] Clicking play button...")
                driver.execute_script("arguments[0].click();", play_button)
                time.sleep(8)  # Wait longer for game to load
        except Exception as e:
            print(f"  [WARN] Could not click play button: {e}")
            # Try alternative selectors
            try:
                play_button = driver.find_element(By.CSS_SELECTOR, "#pregametap, .pregame-clicky, button#playnowbtn")
                if play_button:
                    driver.execute_script("arguments[0].click();", play_button)
                    time.sleep(8)
            except:
                pass
        
        # Wait a bit more for game to fully load
        print("  [INFO] Waiting for game to load...")
        time.sleep(8)
        
        # Check if game-wrapper still has pregame-loader class (game hasn't loaded)
        try:
            game_wrapper = driver.find_element(By.ID, "game-wrapper")
            if game_wrapper:
                classes = game_wrapper.get_attribute('class') or ''
                if 'pregame-loader' in classes:
                    print("  [INFO] Game still loading, waiting more...")
                    time.sleep(5)
        except:
            pass
        
        # Look for iframe - exclude ad iframes
        print("  [INFO] Looking for game iframe...")
        game_url = None
        try:
            # First, try to find iframe in game-wrapper or gamecenter
            game_container = None
            try:
                game_container = driver.find_element(By.ID, "game-wrapper")
            except:
                try:
                    game_container = driver.find_element(By.ID, "gamecenter")
                except:
                    pass
            
            if game_container:
                iframes = game_container.find_elements(By.TAG_NAME, "iframe")
                print(f"  [INFO] Found {len(iframes)} iframes in game container")
            else:
                iframes = driver.find_elements(By.TAG_NAME, "iframe")
                print(f"  [INFO] Found {len(iframes)} total iframes")
            
            for iframe in iframes:
                src = iframe.get_attribute('src')
                if src and src != 'about:blank':
                    # Skip ad iframes
                    if any(ad_domain in src.lower() for ad_domain in ['googlesyndication', 'doubleclick', 'safeframe', 'ad', 'ads']):
                        print(f"  [INFO] Skipping ad iframe: {src[:80]}...")
                        continue
                    # Skip lagged.com iframes (wrapper), but allow game distribution services
                    if 'lagged.com' in src and 'gamedistribution.com' not in src:
                        print(f"  [INFO] Skipping lagged wrapper: {src[:80]}...")
                        continue
                    # gamedistribution.com is a legitimate game host
                    if 'gamedistribution.com' in src:
                        game_url = src
                        print(f"  [OK] Found game on GameDistribution: {game_url}")
                        break
                    game_url = src
                    print(f"  [OK] Found game iframe: {game_url}")
                    break
        except Exception as e:
            print(f"  [WARN] Error finding iframe: {e}")
        
        # If no iframe found, check page source for game URLs
        if not game_url:
            print("  [INFO] Checking page source for game URLs...")
            html_content = driver.page_source
            soup = BeautifulSoup(html_content, 'html.parser')
            
            # Look for iframe in HTML - exclude ads
            iframes = soup.find_all('iframe', src=True)
            for iframe in iframes:
                src = iframe.get('src', '')
                if src and src != 'about:blank':
                    # Skip ad iframes
                    if any(ad_domain in src.lower() for ad_domain in ['googlesyndication', 'doubleclick', 'safeframe', 'ad', 'ads']):
                        continue
                    # Skip lagged.com iframes, but allow game distribution services
                    if 'lagged.com' in src and 'gamedistribution.com' not in src:
                        continue
                    # gamedistribution.com is a legitimate game host
                    if 'gamedistribution.com' in src:
                        game_url = src
                        print(f"  [OK] Found game on GameDistribution in HTML: {game_url}")
                        break
                    game_url = src
                    print(f"  [OK] Found game URL in HTML: {game_url}")
                    break
            
            # Look in scripts
            if not game_url:
                for script in soup.find_all('script'):
                    if script.string:
                        # Look for common game URL patterns
                        patterns = [
                            r'iframe.*?src["\']:\s*["\']([^"\']+)["\']',
                            r'gameUrl["\']:\s*["\']([^"\']+)["\']',
                            r'src["\']:\s*["\']([^"\']+\.(?:html|swf|unity|js|wasm))["\']',
                            r'["\']([^"\']*geometry[^"\']*rush[^"\']*4d[^"\']*)["\']',
                        ]
                        for pattern in patterns:
                            matches = re.findall(pattern, script.string, re.I)
                            for match in matches:
                                if match and not match.startswith('javascript:'):
                                    # Skip ad domains
                                    if any(ad_domain in match.lower() for ad_domain in ['googlesyndication', 'doubleclick', 'safeframe', 'ad', 'ads']):
                                        continue
                                    # Skip lagged.com, but allow game distribution services
                                    if 'lagged.com' in match and 'gamedistribution.com' not in match:
                                        continue
                                    # gamedistribution.com is a legitimate game host
                                    if 'gamedistribution.com' in match:
                                        game_url = urljoin(GAME_URL, match)
                                        print(f"  [OK] Found game on GameDistribution in script: {game_url}")
                                        break
                                    game_url = urljoin(GAME_URL, match)
                                    print(f"  [OK] Found game URL in script: {game_url}")
                                    break
                            if game_url:
                                break
                    if game_url:
                        break
        
        # If we found a GameDistribution URL, load it and find the actual game
        if game_url and 'gamedistribution.com' in game_url:
            print("  [INFO] GameDistribution page found, loading to find actual game...")
            try:
                driver.get(game_url)
                time.sleep(5)  # Wait for GameDistribution page to load
                
                # Wait for the game iframe to load
                try:
                    game_iframe = WebDriverWait(driver, 15).until(
                        EC.presence_of_element_located((By.ID, "game"))
                    )
                    if game_iframe:
                        actual_game_url = game_iframe.get_attribute('src')
                        if actual_game_url and actual_game_url != 'about:blank':
                            print(f"  [OK] Found actual game URL: {actual_game_url}")
                            game_url = actual_game_url
                except:
                    # Try to find any iframe in the page
                    iframes = driver.find_elements(By.TAG_NAME, "iframe")
                    for iframe in iframes:
                        src = iframe.get_attribute('src')
                        if src and src != 'about:blank' and 'gamedistribution.com' not in src:
                            # Skip ad iframes
                            if any(ad_domain in src.lower() for ad_domain in ['googlesyndication', 'doubleclick', 'safeframe', 'ad', 'ads']):
                                continue
                            print(f"  [OK] Found actual game URL: {src}")
                            game_url = src
                            break
            except Exception as e:
                print(f"  [WARN] Could not load GameDistribution page: {e}")
        
        driver.quit()
        return game_url
        
    except Exception as e:
        print(f"  [ERROR] Selenium error: {e}")
        if driver:
            try:
                driver.quit()
            except:
                pass
        return None

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
    # Replace external URLs with local paths
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
    print(f"Downloading {GAME_NAME} with Selenium\n" + "="*50 + "\n")
    
    # Create game directory
    game_dir = Path('non-semag') / GAME_SLUG
    game_dir.mkdir(parents=True, exist_ok=True)
    (game_dir / 'js').mkdir(exist_ok=True)
    (game_dir / 'css').mkdir(exist_ok=True)
    (game_dir / 'images').mkdir(exist_ok=True)
    (game_dir / 'data').mkdir(exist_ok=True)
    
    # Step 1: Use Selenium to find actual game URL
    print("Step 1: Finding actual game URL with Selenium...")
    game_url = find_game_url_with_selenium()
    
    if not game_url:
        print("  [WARN] Could not find game URL with Selenium, trying static method...")
        # Fallback to static method
        try:
            response = requests.get(GAME_URL, headers=HEADERS, timeout=30)
            response.raise_for_status()
            html_content = response.text
            soup = BeautifulSoup(html_content, 'html.parser')
            
            # Look for iframe
            iframe = soup.find('iframe', src=True)
            if iframe:
                game_url = urljoin(GAME_URL, iframe.get('src', ''))
        except:
            pass
    
    if not game_url:
        print("  [ERROR] Could not find game URL. The game may load dynamically.")
        print("  [INFO] Creating wrapper page that loads from Lagged...")
        # Create a simple wrapper
        wrapper_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{GAME_NAME}</title>
    <style>
        html, body {{
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000;
        }}
        iframe {{
            width: 100%;
            height: 100vh;
            border: none;
        }}
    </style>
</head>
<body>
    <iframe src="{GAME_URL}" allowfullscreen></iframe>
</body>
</html>"""
        (game_dir / 'index.html').write_text(wrapper_html, encoding='utf-8')
        print("  [OK] Created wrapper page")
    else:
        print(f"  [OK] Found game URL: {game_url}")
        
        # Step 2: Download the actual game
        print(f"\nStep 2: Downloading game from {game_url}...")
        try:
            game_response = requests.get(game_url, headers=HEADERS, timeout=30)
            game_response.raise_for_status()
            game_html = game_response.text
            print(f"  [OK] Fetched {len(game_html)} bytes")
            
            # Step 3: Extract assets
            print("\nStep 3: Extracting assets...")
            assets = extract_assets(game_html, game_url)
            total_assets = sum(len(v) for v in assets.values())
            print(f"  [OK] Found {total_assets} assets")
            
            # Step 4: Download assets
            print("\nStep 4: Downloading assets...")
            downloaded = 0
            failed = 0
            
            # Download scripts
            for url in assets['scripts'][:30]:  # Limit to first 30 scripts
                filename = Path(urlparse(url).path).name
                if not filename or filename == '/':
                    continue
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
            updated_html = update_html_paths(game_html, game_url, game_dir)
            (game_dir / 'index.html').write_text(updated_html, encoding='utf-8')
            print("  [OK] Saved index.html")
            
        except Exception as e:
            print(f"  [ERROR] Error downloading game: {e}")
            # Create wrapper as fallback
            wrapper_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{GAME_NAME}</title>
    <style>
        html, body {{
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000;
        }}
        iframe {{
            width: 100%;
            height: 100vh;
            border: none;
        }}
    </style>
</head>
<body>
    <iframe src="{game_url}" allowfullscreen></iframe>
</body>
</html>"""
            (game_dir / 'index.html').write_text(wrapper_html, encoding='utf-8')
            print("  [OK] Created wrapper page as fallback")
    
    # Step 6: Download cover image
    print("\nStep 6: Downloading cover image...")
    try:
        response = requests.get(GAME_URL, headers=HEADERS, timeout=30)
        soup = BeautifulSoup(response.text, 'html.parser')
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
        exists = any(g.get('directory') == GAME_SLUG for g in games)
        if not exists:
            new_game = {
                "name": GAME_NAME,
                "directory": GAME_SLUG,
                "image": "cover.png",
                "source": "non-semag",
                "gameUrl": f"/non-semag/{GAME_SLUG}/index.html",
                "imagePath": f"/non-semag/{GAME_SLUG}/cover.png"
            }
            games.append(new_game)
            
            with open(games_json_path, 'w', encoding='utf-8') as f:
                json.dump(games, f, indent='\t', ensure_ascii=False)
            print(f"  [OK] Added {GAME_NAME} to games.json")
        else:
            print(f"  [WARN] Game already exists in games.json")
    except Exception as e:
        print(f"  [ERROR] Error updating games.json: {e}")
    
    print(f"\n[OK] Complete! Game downloaded to {game_dir}")
    print(f"   You can now play it at /non-semag/{GAME_SLUG}/index.html")

if __name__ == "__main__":
    main()
