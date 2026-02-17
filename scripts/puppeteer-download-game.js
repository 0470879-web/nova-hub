/**
 * Download a game from selenite.cc using Puppeteer network interception.
 * Intercepts ALL requests the game makes (including JS fetch/XHR) so we
 * capture every file, not just what's in HTML src/href attributes.
 *
 * Usage:
 *   node scripts/puppeteer-download-game.js <directory>
 *   node scripts/puppeteer-download-game.js leveldevil
 *
 * If no directory given, picks first game we don't have from selenite-cc-games.json
 * that is NOT tagged as a large Steam/Unity game.
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const SELENITE_BASE = 'https://selenite.cc';
const SEMAG_PREFIX = '/resources/semag/';
const OUT_GAMES = path.join(__dirname, '..', 'non-semag', 'games');
const GAMES_JSON = path.join(__dirname, '..', 'data', 'games.json');
const SELENITE_JSON = path.join(__dirname, '..', 'selenite-cc-games.json');

// Skip games with these tags - they tend to be huge Unity/Steam ports on external CDNs
const SKIP_TAGS = new Set(['steam', '18+', 'gore']);

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 Chrome/120' },
      timeout: 60000,
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        const loc = res.headers.location;
        return fetchBuffer(loc.startsWith('http') ? loc : new URL(loc, url).href).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function pickGame(requestedDir) {
  const theirs = JSON.parse(fs.readFileSync(SELENITE_JSON, 'utf8'));
  const ours = JSON.parse(fs.readFileSync(GAMES_JSON, 'utf8'));
  const ourDirs = new Set(ours.map(g => (g.directory || '').toLowerCase()));
  const ourNames = new Set(ours.map(g => (g.name || '').toLowerCase()));

  if (requestedDir) {
    const g = theirs.find(x => x.directory === requestedDir);
    if (!g) throw new Error('Not in selenite-cc-games.json: ' + requestedDir);
    if (ourDirs.has(requestedDir.toLowerCase())) throw new Error('We already have: ' + requestedDir);
    return g;
  }

  // Pick a small game: skip ones tagged steam/18+/gore (usually huge)
  for (const g of theirs) {
    const dir = (g.directory || '').toLowerCase();
    if (!dir || ourDirs.has(dir) || ourNames.has((g.name || '').toLowerCase())) continue;
    const tags = new Set((g.tags || []).map(t => t.toLowerCase()));
    let skip = false;
    for (const t of SKIP_TAGS) { if (tags.has(t)) { skip = true; break; } }
    if (skip) continue;
    return g;
  }
  throw new Error('No suitable game found');
}

async function downloadGame(game) {
  const dir = game.directory;
  const name = game.name;
  const gameBaseUrl = `${SELENITE_BASE}${SEMAG_PREFIX}${dir}/`;
  const outDir = path.join(OUT_GAMES, dir);

  console.log(`\n=== Downloading: ${name} (${dir}) ===`);
  console.log(`Game URL: ${gameBaseUrl}`);

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'],
  });

  const savedFiles = new Map(); // url -> local relative path
  const failedUrls = new Set();
  const externalUrls = new Set(); // URLs outside the game dir (CDN etc)

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36');

    // Intercept requests to log what the game loads
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      // Block ads, analytics, tracking
      if (url.includes('googlesyndication') || url.includes('cloudflareinsights') ||
          url.includes('cdn-cgi/rum') || url.includes('pagead')) {
        req.abort();
        return;
      }
      req.continue();
    });

    // Collect all successful responses
    const responses = [];
    page.on('response', async (res) => {
      const url = res.url();
      const status = res.status();
      if (status < 200 || status >= 400) return;
      if (url.startsWith('data:') || url.startsWith('blob:')) return;
      responses.push({ url, status });
    });

    console.log('Loading game page...');
    await page.goto(gameBaseUrl + 'index.html', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Wait extra time for JS to load assets
    console.log('Waiting for assets to load...');
    await new Promise(r => setTimeout(r, 5000));

    // Collect all URLs that were requested
    const allUrls = responses.map(r => r.url);
    console.log(`Captured ${allUrls.length} network responses`);

    // Download each file under the game base URL
    for (const url of allUrls) {
      if (savedFiles.has(url) || failedUrls.has(url)) continue;

      let relPath = null;

      if (url.startsWith(gameBaseUrl)) {
        relPath = url.slice(gameBaseUrl.length);
      } else if (url.startsWith(SELENITE_BASE + SEMAG_PREFIX + dir + '/')) {
        relPath = url.slice((SELENITE_BASE + SEMAG_PREFIX + dir + '/').length);
      }

      if (!relPath) {
        externalUrls.add(url);
        continue;
      }

      // Sanitize path
      relPath = decodeURIComponent(relPath).split('?')[0];
      if (!relPath || relPath === '/') relPath = 'index.html';

      const localPath = path.join(outDir, relPath);
      const localDir = path.dirname(localPath);

      try {
        const buf = await fetchBuffer(url);
        if (!fs.existsSync(localDir)) fs.mkdirSync(localDir, { recursive: true });
        fs.writeFileSync(localPath, buf);
        savedFiles.set(url, relPath);
        console.log(`  OK  ${relPath} (${(buf.length / 1024).toFixed(1)}KB)`);
      } catch (err) {
        failedUrls.add(url);
        console.log(`  FAIL ${relPath}: ${err.message}`);
      }
    }

    // Also grab index.html directly if not already downloaded
    if (!savedFiles.has(gameBaseUrl + 'index.html') && !savedFiles.has(gameBaseUrl)) {
      try {
        const buf = await fetchBuffer(gameBaseUrl + 'index.html');
        fs.writeFileSync(path.join(outDir, 'index.html'), buf);
        savedFiles.set(gameBaseUrl + 'index.html', 'index.html');
        console.log('  OK  index.html (direct)');
      } catch (e) {
        console.log('  FAIL index.html (direct):', e.message);
      }
    }

  } finally {
    await browser.close();
  }

  if (externalUrls.size > 0) {
    console.log(`\nExternal URLs the game tried to load (${externalUrls.size}):`);
    for (const u of externalUrls) console.log('  EXT', u);
  }

  // Clean up index.html: remove external scripts, fix base href, remove analytics
  const indexPath = path.join(outDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    let html = fs.readFileSync(indexPath, 'utf8');
    // Remove <base> pointing to external CDNs
    html = html.replace(/<base\s+href\s*=\s*["']https?:\/\/[^"']*["']\s*\/?>/gi, '<base href="./">');
    // Remove external script tags (absolute paths starting with / or http)
    html = html.replace(/<script[^>]*\ssrc\s*=\s*["'](https?:\/\/|\/)[^"']*["'][^>]*>[\s\S]*?<\/script>/gi, '');
    // Remove cloudflare beacon
    html = html.replace(/<script[^>]*cloudflareinsights[^>]*>[\s\S]*?<\/script>/gi, '');
    // Remove external link tags
    html = html.replace(/<link[^>]*\shref\s*=\s*["'](https?:\/\/|\/)[^"']*["'][^>]*\/?>/gi, '');
    // Fix Cloudflare Rocket Loader mangled script types (e.g. "abc123-text/javascript" -> "text/javascript")
    html = html.replace(/type\s*=\s*["'][a-f0-9]+-text\/javascript["']/gi, 'type="text/javascript"');
    html = html.replace(/type\s*=\s*["'][a-f0-9]+-module["']/gi, 'type="module"');
    // Remove service worker registration (sw.js won't exist locally)
    html = html.replace(/<script[^>]*register-sw\.js[^>]*>[\s\S]*?<\/script>/gi, '');
    fs.writeFileSync(indexPath, html);
    console.log('  Cleaned index.html');
  }

  // Create wrapper HTML (redirect, not iframe)
  const wrapperPath = path.join(OUT_GAMES, dir + '.html');
  fs.writeFileSync(wrapperPath, `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url=${dir}/index.html">
    <title>${name}</title>
</head>
<body>
    <p>Redirecting to <a href="${dir}/index.html">${name}</a>...</p>
</body>
</html>`);
  console.log(`  Wrapper: ${dir}.html`);

  // Download cover image
  let coverRel = null;
  if (game.image) {
    const coverUrl = `${gameBaseUrl}${game.image}`;
    const ext = path.extname(game.image) || '.png';
    coverRel = `covers/${dir}${ext}`;
    const coverPath = path.join(OUT_GAMES, coverRel);
    if (!fs.existsSync(path.dirname(coverPath))) fs.mkdirSync(path.dirname(coverPath), { recursive: true });
    try {
      const buf = await fetchBuffer(coverUrl);
      fs.writeFileSync(coverPath, buf);
      console.log(`  Cover: ${coverRel}`);
    } catch (e) {
      console.log(`  Cover skip: ${e.message}`);
      coverRel = null;
    }
  }

  // Add to games.json
  const games = JSON.parse(fs.readFileSync(GAMES_JSON, 'utf8'));
  if (!games.find(g => g.directory === dir)) {
    games.push({
      name,
      directory: dir,
      image: coverRel || `covers/${dir}.png`,
      source: 'non-semag',
      gameUrl: `/non-semag/games/${dir}.html`,
      imagePath: coverRel ? `/non-semag/games/${coverRel}` : `/non-semag/games/covers/${dir}.png`,
    });
    games.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    fs.writeFileSync(GAMES_JSON, JSON.stringify(games, null, '\t') + '\n');
    console.log('  Added to games.json');
  }

  console.log(`\n=== Done: ${name} | ${savedFiles.size} files downloaded ===\n`);
  if (failedUrls.size > 0) console.log(`  ${failedUrls.size} files failed`);
}

async function main() {
  const game = pickGame(process.argv[2]);
  await downloadGame(game);
}

main().catch(err => { console.error(err); process.exit(1); });
