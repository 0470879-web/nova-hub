/**
 * Download a full game from selenite.cc (not iframe) that we don't have.
 * Picks a game from their API that's not in our games.json, then downloads
 * all files from https://selenite.cc/resources/semag/{dir}/
 *
 * Usage: node scripts/download-game-from-selenite.js [directory]
 * Example: node scripts/download-game-from-selenite.js stackbounce
 * If no directory: picks first game we don't have from selenite-cc-games.json
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const SELENITE_BASE = 'https://selenite.cc';
const SEMAG_BASE = `${SELENITE_BASE}/resources/semag`;
const OUT_GAMES = path.join(__dirname, '..', 'non-semag', 'games');
const OUT_COVERS = path.join(__dirname, '..', 'non-semag', 'games', 'covers');
const GAMES_JSON = path.join(__dirname, '..', 'data', 'games.json');
const SELENITE_GAMES_JSON = path.join(__dirname, '..', 'selenite-cc-games.json');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const client = u.protocol === 'https:' ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0' } }, (res) => {
      const redirect = res.headers.location;
      if (redirect && (res.statusCode === 301 || res.statusCode === 302)) {
        fetchUrl(redirect.startsWith('http') ? redirect : new URL(redirect, url).href).then(resolve).catch(reject);
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function extractResourceUrls(html, baseUrl) {
  const urls = new Set();
  const base = new URL(baseUrl);
  // src="...", href="...", also single quotes
  const regex = /(?:src|href)\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = regex.exec(html)) !== null) {
    let u = m[1].trim();
    if (u.startsWith('data:') || u.startsWith('blob:') || u.startsWith('javascript:')) continue;
    try {
      const resolved = new URL(u, baseUrl);
      urls.add(resolved.href);
    } catch (_) {}
  }
  return [...urls];
}

function isUnderBase(href, basePrefix) {
  return href === basePrefix || href.startsWith(basePrefix + '/');
}

function getRelativePath(fullUrl, basePrefix) {
  if (!isUnderBase(fullUrl, basePrefix)) return null;
  const p = fullUrl.slice(basePrefix.length).replace(/^\//, '');
  return p || 'index.html';
}

async function downloadGame(dir, name, imagePath) {
  const basePrefix = `${SEMAG_BASE}/${dir}`;
  const startUrl = `${basePrefix}/index.html`;
  const outDir = path.join(OUT_GAMES, dir);
  const downloaded = new Set();
  const queue = [startUrl];

  if (!fs.existsSync(OUT_GAMES)) fs.mkdirSync(OUT_GAMES, { recursive: true });
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  console.log('Downloading game:', name, '| dir:', dir);
  console.log('Base URL:', basePrefix);

  while (queue.length > 0) {
    const url = queue.shift();
    if (downloaded.has(url)) continue;
    if (!isUnderBase(url, basePrefix)) continue;

    const relPath = getRelativePath(url, basePrefix);
    if (!relPath) continue;

    downloaded.add(url);
    const localPath = path.join(outDir, relPath);
    const localDir = path.dirname(localPath);

    try {
      const buf = await fetchUrl(url);
      if (!fs.existsSync(localDir)) fs.mkdirSync(localDir, { recursive: true });

      let content = buf;
      const isHtml = /\.html?$/i.test(relPath);
      const isCss = /\.css$/i.test(relPath);

      let htmlStr = content.toString('utf8');
      if (isHtml) {
        if (htmlStr.includes('selenite.cc')) {
          htmlStr = htmlStr.replace(new RegExp(SELENITE_BASE.replace(/\./g, '\\.') + '/resources/semag/' + dir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '/?', 'g'), '');
        }
        // Remove script/link tags that point outside the game folder (e.g. /js/all.min.js) so game runs offline
        htmlStr = htmlStr.replace(/<script[^>]*\ssrc\s*=\s*["']\/[^"']*["'][^>]*>\s*<\/script>/gi, '<!-- external script removed for local play -->');
        htmlStr = htmlStr.replace(/<link[^>]*\shref\s*=\s*["']\/[^"']*["'][^>]*>/gi, '<!-- external link removed for local play -->');
        content = Buffer.from(htmlStr, 'utf8');
      }

      fs.writeFileSync(localPath, content);

      if (isHtml) {
        const html = content.toString('utf8');
        const found = extractResourceUrls(html, url);
        found.forEach((u) => {
          if (isUnderBase(u, basePrefix) && !downloaded.has(u)) queue.push(u);
        });
      }
      if (isCss) {
        const css = content.toString('utf8');
        const urlRegex = /url\s*\(\s*["']?([^"')]+)["']?\s*\)/g;
        let um;
        while ((um = urlRegex.exec(css)) !== null) {
          try {
            const u = new URL(um[1].trim(), url).href;
            if (isUnderBase(u, basePrefix) && !downloaded.has(u)) queue.push(u);
          } catch (_) {}
        }
      }

      console.log('  OK', relPath);
    } catch (err) {
      console.log('  FAIL', relPath, err.message);
    }
  }

  // Wrapper HTML (iframe to game folder)
  const wrapperHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}</title>
    <style>
        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
        iframe { border: 0; width: 100%; height: 100%; display: block; }
    </style>
</head>
<body>
    <iframe src="${dir}/index.html" allowfullscreen allow="autoplay; fullscreen; gamepad; xr-spatial-tracking"></iframe>
</body>
</html>`;
  const wrapperPath = path.join(OUT_GAMES, dir + '.html');
  fs.writeFileSync(wrapperPath, wrapperHtml);
  console.log('  Wrapper:', dir + '.html');

  // Cover image from selenite
  const coverUrl = imagePath ? (imagePath.startsWith('http') ? imagePath : `${basePrefix}/${imagePath}`) : null;
  let coverRel = null;
  if (coverUrl) {
    try {
      const buf = await fetchUrl(coverUrl);
      const ext = path.extname(new URL(coverUrl).pathname) || '.png';
      coverRel = `covers/${dir}${ext}`;
      const coverFull = path.join(OUT_GAMES, coverRel);
      if (!fs.existsSync(path.dirname(coverFull))) fs.mkdirSync(path.dirname(coverFull), { recursive: true });
      fs.writeFileSync(coverFull, buf);
      console.log('  Cover:', coverRel);
    } catch (e) {
      console.log('  Cover skip:', e.message);
    }
  }

  // Add to games.json
  const gamesPath = GAMES_JSON;
  const games = JSON.parse(fs.readFileSync(gamesPath, 'utf8'));
  const ourDirs = new Set(games.map((g) => g.directory));
  if (ourDirs.has(dir)) {
    console.log('  Already in games.json, skipping add.');
  } else {
    const entry = {
      name,
      directory: dir,
      image: coverRel || `covers/${dir}.png`,
      source: 'non-semag',
      gameUrl: `/non-semag/games/${dir}.html`,
      imagePath: coverRel ? `/non-semag/games/${coverRel}` : `/non-semag/games/covers/${dir}.png`,
    };
    games.push(entry);
    games.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    fs.writeFileSync(gamesPath, JSON.stringify(games, null, '\t') + '\n', 'utf8');
    console.log('  Added to games.json');
  }

  return { dir, name, files: downloaded.size };
}

function pickGameWeDontHave() {
  if (!fs.existsSync(SELENITE_GAMES_JSON)) {
    throw new Error('Run first: fetch selenite-cc-games.json (or run compare script)');
  }
  const theirs = JSON.parse(fs.readFileSync(SELENITE_GAMES_JSON, 'utf8'));
  const ours = JSON.parse(fs.readFileSync(GAMES_JSON, 'utf8'));
  const ourDirs = new Set(ours.map((g) => (g.directory || '').toLowerCase()));
  const ourNames = new Set(ours.map((g) => (g.name || '').toLowerCase()));

  for (const g of theirs) {
    const dir = (g.directory || '').toLowerCase();
    const name = (g.name || '').trim();
    if (!dir || !name) continue;
    if (ourDirs.has(dir)) continue;
    if (ourNames.has(name.toLowerCase())) continue;
    return { directory: g.directory, name, image: g.image };
  }
  throw new Error('No game found that we don\'t have');
}

async function main() {
  let target;
  const dirArg = process.argv[2];
  if (dirArg) {
    if (!fs.existsSync(SELENITE_GAMES_JSON)) throw new Error('selenite-cc-games.json not found');
    const theirs = JSON.parse(fs.readFileSync(SELENITE_GAMES_JSON, 'utf8'));
    const g = theirs.find((x) => (x.directory || '').toLowerCase() === dirArg.toLowerCase());
    if (!g) throw new Error('Game not found in selenite-cc-games.json: ' + dirArg);
    target = { directory: g.directory, name: g.name, image: g.image };
  } else {
    target = pickGameWeDontHave();
  }

  await downloadGame(target.directory, target.name, target.image);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
