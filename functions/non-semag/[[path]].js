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
      const object = await env.semag.get(`non-semag/${key}`)
      
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

    // If not found in R2, fall back to static assets (local files)
    if (env.ASSETS) {
      const staticUrl = new URL(`/non-semag/${key}`, request.url)
      const staticResponse = await env.ASSETS.fetch(staticUrl)
      
      // If static file exists, return it
      if (staticResponse.status !== 404) {
        return staticResponse
      }
    }

    // Not found in either R2 or static assets
    return new Response("Not found", { status: 404 })
  } catch (err) {
    console.error("Error serving non-semag file:", err)
    return new Response("Error loading file: " + err.message, { status: 500 })
  }
}

