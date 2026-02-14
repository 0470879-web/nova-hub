"""
Remove ad-related scripts and content from game HTML
"""
import re
from pathlib import Path

game_dir = Path('non-semag/gamemonetize-ya6quof6a1n40xzz3thz9xekh349abp8')
html_file = game_dir / 'index.html'

if not html_file.exists():
    print(f"File not found: {html_file}")
    exit(1)

print(f"Reading {html_file}...")
with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

print("Removing ad-related content...")

# Remove specific ad script tags (one at a time to be safe)
ad_script_patterns = [
    r'<script[^>]*src=["\']https?://s0\.2mdn\.net[^"\']*client\.js[^"\']*["\'][^>]*></script>',
    r'<script[^>]*id=["\']analytics["\'][^>]*src=["\'][^"\']*ga\.js[^"\']*["\'][^>]*></script>',
    r'<script[^>]*src=["\']https?://imasdk\.googleapis\.com[^"\']*ima3\.js[^"\']*["\'][^>]*></script>',
    r'<script[^>]*src=["\']https?://www\.google-analytics\.com[^"\']*analytics\.js[^"\']*["\'][^>]*></script>',
    r'<script[^>]*src=["\']https?://www\.googletagmanager\.com[^"\']*gtag[^"\']*["\'][^>]*></script>',
    r'<script[^>]*src=["\']https?://api\.gamemonetize\.com[^"\']*sdk[^"\']*["\'][^>]*></script>',
    r'<script[^>]*src=["\']//clash3d\.com/ads\.js["\'][^>]*></script>',
    r'<script[^>]*src=["\']https?://securepubads\.g\.doubleclick\.net[^"\']*["\'][^>]*></script>',
    r'<script[^>]*src=["\']https?://fundingchoicesmessages\.google\.com[^"\']*["\'][^>]*></script>',
]

for pattern in ad_script_patterns:
    content = re.sub(pattern, '', content, flags=re.IGNORECASE)

# Remove Google Analytics script blocks
content = re.sub(r'<!--\s*Global site tag.*?-->\s*', '', content, flags=re.IGNORECASE | re.DOTALL)
content = re.sub(r'<script[^>]*>\s*window\.dataLayer[^<]*gtag[^<]*</script>', '', content, flags=re.IGNORECASE | re.DOTALL)

# Remove ad-related link tags
content = re.sub(r'<link[^>]*href=["\']https?://[^"\']*(?:doubleclick|googlesyndication)[^"\']*["\'][^>]*>', '', content, flags=re.IGNORECASE)

# Remove origin-trial meta tags (used for ad APIs)
content = re.sub(r'<meta[^>]*http-equiv=["\']origin-trial["\'][^>]*>', '', content, flags=re.IGNORECASE)

# Remove ad container divs (be more specific)
content = re.sub(r'<div[^>]*id=["\']imaContainer[^>]*>.*?</div>\s*</div>\s*</div>\s*</div>', '', content, flags=re.IGNORECASE | re.DOTALL)
content = re.sub(r'<div[^>]*id=["\']sdk__advertisement[^>]*>.*?</div>\s*</div>\s*</div>', '', content, flags=re.IGNORECASE | re.DOTALL)

# Remove SDK loading function
content = re.sub(r'\(function\s*\([^)]*\)\s*\{[^}]*gamemonetize[^}]*sdk[^}]*\}\s*\([^)]*\);', '', content, flags=re.IGNORECASE | re.DOTALL)

# Remove ad-related iframes at the end
content = re.sub(r'<iframe[^>]*(?:googlefc|__tcfapi|recaptcha|doubleclick|goog_plcm)[^>]*>.*?</iframe>', '', content, flags=re.IGNORECASE | re.DOTALL)

# Remove ad-related style blocks for ads
content = re.sub(r'<style[^>]*type=["\']text/css["\'][^>]*>.*?#imaContainer[^<]*</style>', '', content, flags=re.IGNORECASE | re.DOTALL)

# Clean up multiple newlines
content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)

print("Saving cleaned HTML...")
with open(html_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done! Ad-related content removed.")
