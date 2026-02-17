/**
 * Download Five Nights at Epsteins from the jsdelivr CDN where its files live.
 * The game is ~156MB split into .part files.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/web-ports/fnae@c9c8b513a27155bf37c4ab3dee74e99b12b895ba';
const OUT_DIR = path.join(__dirname, '..', 'non-semag', 'games', 'fnae');
const GAMES_JSON = path.join(__dirname, '..', 'data', 'games.json');

const FILES = [
  'TemplateData/favicon.ico',
  'TemplateData/style.css',
  'TemplateData/unity-logo-dark.png',
  'TemplateData/progress-bar-empty-dark.png',
  'TemplateData/progress-bar-full-dark.png',
  'Build/fnae.loader.js',
  'Build/fnae.framework.js',
  'Build/fnae.data.part1',
  'Build/fnae.data.part2',
  'Build/fnae.data.part3',
  'Build/fnae.wasm.part1',
  'Build/fnae.wasm.part2',
  'Build/fnae.wasm.part3',
  'StreamingAssets/202512191935.webm.part1',
  'StreamingAssets/202512191935.webm.part2',
  'StreamingAssets/202512191935.webm.part3',
];

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 Chrome/120' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  // First get index.html from selenite and rewrite it
  console.log('Fetching index.html from selenite...');
  let html = (await fetchBuffer('https://selenite.cc/resources/semag/fnae/index.html')).toString('utf8');

  // Replace <base href> pointing to jsdelivr with local
  html = html.replace(/<base\s+href\s*=\s*["']https?:\/\/[^"']*["']\s*\/?>/gi, '<base href="./">');
  // Fix Cloudflare Rocket Loader script types
  html = html.replace(/type\s*=\s*["'][a-f0-9]+-text\/javascript["']/gi, 'type="text/javascript"');
  html = html.replace(/type\s*=\s*["'][a-f0-9]+-module["']/gi, 'type="module"');
  // Remove external scripts (cloudflare, analytics, /js/all.min.js)
  html = html.replace(/<script[^>]*\ssrc\s*=\s*["'](https?:\/\/|\/)[^"']*["'][^>]*>[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<script[^>]*cloudflareinsights[^>]*>[\s\S]*?<\/script>/gi, '');

  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), html);
  console.log('  OK index.html (cleaned)');

  // Download all game files from jsdelivr
  for (const file of FILES) {
    const url = `${CDN_BASE}/${file}`;
    const localPath = path.join(OUT_DIR, file);
    const localDir = path.dirname(localPath);
    if (!fs.existsSync(localDir)) fs.mkdirSync(localDir, { recursive: true });

    // Skip if already downloaded
    if (fs.existsSync(localPath) && fs.statSync(localPath).size > 0) {
      console.log(`  SKIP ${file} (exists)`);
      continue;
    }

    try {
      console.log(`  Downloading ${file}...`);
      const buf = await fetchBuffer(url);
      fs.writeFileSync(localPath, buf);
      console.log(`  OK ${file} (${(buf.length / 1024 / 1024).toFixed(2)} MB)`);
    } catch (err) {
      console.error(`  FAIL ${file}: ${err.message}`);
    }
  }

  // Cover image
  const coversDir = path.join(__dirname, '..', 'non-semag', 'games', 'covers');
  if (!fs.existsSync(coversDir)) fs.mkdirSync(coversDir, { recursive: true });
  try {
    const cover = await fetchBuffer('https://selenite.cc/resources/semag/fnae/image.jpg');
    fs.writeFileSync(path.join(coversDir, 'fnae.jpg'), cover);
    console.log('  OK cover');
  } catch (e) {
    console.log('  Cover skip:', e.message);
  }

  // Wrapper HTML (redirect)
  const wrapperPath = path.join(__dirname, '..', 'non-semag', 'games', 'fnae.html');
  fs.writeFileSync(wrapperPath, `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url=fnae/index.html">
    <title>Five Nights at Epsteins</title>
</head>
<body>
    <p>Redirecting to <a href="fnae/index.html">Five Nights at Epsteins</a>...</p>
</body>
</html>`);
  console.log('  OK wrapper');

  // Add to games.json
  const games = JSON.parse(fs.readFileSync(GAMES_JSON, 'utf8'));
  if (!games.find(g => g.directory === 'fnae')) {
    games.push({
      name: 'Five Nights at Epsteins',
      directory: 'fnae',
      image: 'covers/fnae.jpg',
      source: 'non-semag',
      gameUrl: '/non-semag/games/fnae.html',
      imagePath: '/non-semag/games/covers/fnae.jpg',
    });
    games.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    fs.writeFileSync(GAMES_JSON, JSON.stringify(games, null, '\t') + '\n');
    console.log('  Added to games.json');
  }

  console.log('\n=== FNAE download complete ===');
}

main().catch(err => { console.error(err); process.exit(1); });
