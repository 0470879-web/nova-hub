# Semag games on R2 – fixing local dev errors

When you run the site **locally** and semag games load from the public R2 URL, the console can show:

## 1. `all.min.js` 404 from R2

**Cause:** The game’s `index.html` on R2 includes a script like `<script src="/js/all.min.js">`. That path is for the **main site** (navbar, etc.), not the game. When the game is opened from R2, the browser asks R2 for `/js/all.min.js` and gets 404.

**Fix:** In the HTML you upload to R2 for each semag game, **remove** any site-level script tags, for example:

- `/js/all.min.js`
- `/js/main.js`
- Any other `/js/...` that belongs to Nova Hub, not the game

The game’s `index.html` should only reference **its own** scripts and assets (relative paths, e.g. `js/phaser.js`, `assets/...`).

## 2. `.webm` (or other assets) 404

**Cause:** The game references files like `vent open.webm`, `move1.webm`, `move2.webm`, etc., but they are missing on R2 or in a different path.

**Fix:** Upload all game assets to R2 in the **same paths** the game expects (e.g. under the same folder as `index.html` or the same relative paths used in the game code).

## 3. `game is not defined` / `cmgGameEvent` SecurityError

**Cause:**

- **game is not defined:** Often a follow-on from scripts failing to load (e.g. `all.min.js` 404), so the game never initializes.
- **cmgGameEvent SecurityError:** When the game is loaded from R2 in an iframe and the parent is localhost, the iframe is **cross-origin**. The game then cannot access the parent window, so any code that touches `parent`/`top` or `cmgGameEvent` is blocked.

**Fix:**

- Fix the 404s above so the game script runs and `game` is defined.
- **Loader (parent):** A safe `window.cmgGameEvent` stub is defined in `loader.html` so the parent never throws when games call it (same-origin case).
- **Game code (iframe) – Option A (try-catch):** Wrap any call to the parent so cross-origin SecurityError is caught:

```javascript
try {
  if (window.parent && window.parent.cmgGameEvent) {
    window.parent.cmgGameEvent('start', data);
  }
} catch (e) {
  // Cross-origin blocked, continue without tracking
}
```

- **Game code (iframe) – Option B (postMessage, no SecurityError):** Don’t touch `parent.cmgGameEvent` at all. The loader page listens for postMessage. From the game (cross-origin), send:

```javascript
if (window.parent && window.parent.postMessage) {
  window.parent.postMessage({ type: 'cmgGameEvent', event: 'start', data: {} }, '*');
}
```

Then the parent handles it and no cross-origin read happens, so no SecurityError.

- **Production:** Use the Cloudflare Pages Function so semag is served at **same-origin** (`/semag/...`), then there is no cross-origin iframe and no SecurityError.
- **Local:** Either add the try-catch above in the game code on R2, or run a **local proxy** that serves `/semag/*` from R2 so the iframe stays same-origin.

## Summary

| Issue              | Fix |
|--------------------|-----|
| `all.min.js` 404   | Remove site scripts from game HTML on R2; only use game-owned scripts and relative paths. |
| `.webm` / assets 404 | Upload all game assets to R2 with the correct paths. |
| `game is not defined` | Fix script 404s so the game bundle loads. |
| SecurityError (cmgGameEvent) | Expected when iframe is from R2 and parent is localhost; use same-origin proxy in production and optionally for local dev. |
