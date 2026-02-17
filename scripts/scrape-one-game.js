/**
 * Scrape one game from selenite.cc using Puppeteer.
 * Fetches the game loader page and extracts: title, iframe src (game URL), and metadata.
 *
 * Usage: node scripts/scrape-one-game.js [game-directory]
 * Example: node scripts/scrape-one-game.js drivemad
 * Default: scrapes "Drive Mad" (dir: drivemad)
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE = 'https://selenite.cc';
const DEFAULT_DIR = 'drivemad';
const DEFAULT_TITLE = 'Drive Mad';
const DEFAULT_IMG = 'icons/icon-128.png';

async function scrapeGame(opts = {}) {
  const dir = opts.directory || DEFAULT_DIR;
  const title = opts.title || DEFAULT_TITLE;
  const image = opts.image || DEFAULT_IMG;

  // Their loader uses query params: title, dir, img, type=g
  const loaderUrl = `${BASE}/loader.html?${new URLSearchParams({
    title,
    dir,
    img: image,
    type: 'g',
  }).toString()}`;

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    console.log('Navigating to:', loaderUrl);
    await page.goto(loaderUrl, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait for game iframe to get a src (they inject it via JS)
    await page.waitForSelector('#gameFrame', { timeout: 10000 });
    await page.waitForFunction(
      () => {
        const iframe = document.getElementById('gameFrame');
        return iframe && iframe.src && iframe.src.length > 5;
      },
      { timeout: 15000 }
    ).catch(() => {});

    const result = await page.evaluate(() => {
      const iframe = document.getElementById('gameFrame');
      const gameNameEl = document.getElementById('gameName');
      return {
        title: document.title,
        gameName: gameNameEl ? gameNameEl.textContent.trim() : null,
        iframeSrc: iframe ? iframe.src : null,
        iframeSrcOrigin: iframe && iframe.src ? new URL(iframe.src).origin : null,
      };
    });

    const scraped = {
      source: 'selenite.cc',
      scrapedAt: new Date().toISOString(),
      loaderUrl,
      directory: dir,
      displayTitle: title,
      ...result,
    };

    console.log('Scraped:', JSON.stringify(scraped, null, 2));

    const outDir = path.join(__dirname, '..', 'scraped');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, `game-${dir}.json`);
    fs.writeFileSync(outPath, JSON.stringify(scraped, null, 2), 'utf8');
    console.log('Saved to:', outPath);

    return scraped;
  } finally {
    await browser.close();
  }
}

const dir = process.argv[2] || DEFAULT_DIR;
const title = process.argv[3] || DEFAULT_TITLE;
const img = process.argv[4] || DEFAULT_IMG;

scrapeGame({ directory: dir, title, image: img })
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Scrape failed:', err);
    process.exit(1);
  });
