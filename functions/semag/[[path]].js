const MIME_TYPES = {
  "wasm": "application/wasm",
  "js": "application/javascript",
  "html": "text/html",
  "css": "text/css",
  "json": "application/json",
  "png": "image/png",
  "jpg": "image/jpeg",
  "jpeg": "image/jpeg",
  "gif": "image/gif",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "mp3": "audio/mpeg",
  "ogg": "audio/ogg",
  "wav": "audio/wav",
  "webp": "image/webp",
  "xml": "application/xml",
  "ico": "image/x-icon",
  "ttf": "font/ttf",
  "woff": "font/woff",
  "woff2": "font/woff2",
};

const PUBLIC_SEMAG_BASE_URL = "https://pub-31ddb721e92142be8b2deee228c36013.r2.dev";

function getContentType(key, r2ContentType) {
  if (r2ContentType) return r2ContentType;
  const ext = key.split(".").pop().toLowerCase();
  return MIME_TYPES[ext] || "application/octet-stream";
}

function getPathKey(pathParam) {
  if (Array.isArray(pathParam)) return pathParam.join("/");
  if (typeof pathParam === "string") return pathParam.replace(/^\/+/, "");
  return "";
}

export async function onRequest({ params, env, request }) {
  try {
    const key = getPathKey(params.path);
    if (!key) {
      return new Response("Not found", { status: 404 });
    }

    // First, try to get from R2 bucket (if configured)
    if (env.semag) {
      const object = await env.semag.get(`semag/${key}`)
      
      if (object) {
        return new Response(object.body, {
          headers: {
            "Content-Type": getContentType(key, object.httpMetadata?.contentType),
            "Cache-Control": "public, max-age=31536000, immutable",
            "Access-Control-Allow-Origin": "*",
            "Cross-Origin-Resource-Policy": "cross-origin"
          }
        })
      }
    }

    // Fallback: public R2 URL (works even if R2 binding is unavailable)
    const publicBase = (env.GAMES_ASSETS_BASE_URL || PUBLIC_SEMAG_BASE_URL).replace(/\/+$/, "");
    try {
      const upstream = await fetch(`${publicBase}/semag/${key}`);
      if (upstream.ok) {
        const headers = new Headers(upstream.headers);
        if (!headers.get("Content-Type")) {
          headers.set("Content-Type", getContentType(key, null));
        }
        if (!headers.get("Cache-Control")) {
          headers.set("Cache-Control", "public, max-age=31536000, immutable");
        }
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Cross-Origin-Resource-Policy", "cross-origin");
        return new Response(upstream.body, {
          status: upstream.status,
          headers,
        });
      }
    } catch (upstreamErr) {
      console.error("Error fetching semag file from public R2 URL:", upstreamErr);
    }

    // If not found in R2, fall back to static assets (local files)
    if (env.ASSETS) {
      const staticUrl = new URL(`/semag/${key}`, request.url)
      const staticResponse = await env.ASSETS.fetch(staticUrl)
      
      // If static file exists, return it
      if (staticResponse.status !== 404) {
        return staticResponse
      }
    }

    // Not found in either R2 or static assets
    return new Response("Not found", { status: 404 })
  } catch (err) {
    console.error("Error serving semag file:", err)
    return new Response("Error loading file: " + err.message, { status: 500 })
  }
}