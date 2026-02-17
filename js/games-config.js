// Public R2 URL used only for local dev (localhost): when there's no Cloudflare Function
// to proxy /semag/*, semag games and thumbnails load from here. Production uses
// same-origin /semag/* (Function proxies R2) so no cross-origin errors or audio block.
window.GAMES_ASSETS_BASE_URL = "https://pub-31ddb721e92142be8b2deee228c36013.r2.dev";
