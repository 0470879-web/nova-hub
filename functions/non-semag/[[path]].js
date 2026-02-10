export async function onRequest({ params, env }) {
  try {
    const key = params.path.join("/")

    if (!env.semag) {
      return new Response("R2 bucket not configured", { status: 503 })
    }

    const object = await env.semag.get(`non-semag/${key}`)

    if (!object) {
      return new Response("Not found", { status: 404 })
    }

    return new Response(object.body, {
      headers: {
        "Content-Type": object.httpMetadata?.contentType || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    })
  } catch (err) {
    console.error("Error serving non-semag file:", err)
    return new Response("Error loading file: " + err.message, { status: 500 })
  }
}

