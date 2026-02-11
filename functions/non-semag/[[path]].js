export async function onRequest({ params, env, request }) {
  try {
    const key = params.path.join("/")

    // First, try to get from R2 bucket (if configured)
    if (env.semag) {
      const object = await env.semag.get(`non-semag/${key}`)
      
      if (object) {
        return new Response(object.body, {
          headers: {
            "Content-Type": object.httpMetadata?.contentType || "application/octet-stream",
            "Cache-Control": "public, max-age=31536000, immutable"
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

