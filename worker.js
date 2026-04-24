export default {
  async fetch(request) {
    const url = new URL(request.url)
    const target = url.searchParams.get("url")

    if (!target) {
      return new Response("Please add ?url=", { status: 400 })
    }

    try {
      const res = await fetch(target, {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      })

      const html = await res.text()

      const getMeta = (name) => {
        const regex = new RegExp(
          `<meta[^>]*property=["']${name}["'][^>]*content=["']([^"']+)["']`,
          "i"
        )
        const match = html.match(regex)
        return match ? match[1] : null
      }

      const getNameMeta = (name) => {
        const regex = new RegExp(
          `<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']+)["']`,
          "i"
        )
        const match = html.match(regex)
        return match ? match[1] : null
      }

      const titleMatch = html.match(/<title>(.*?)<\/title>/i)

      const data = {
        title: titleMatch ? titleMatch[1] : null,
        description: getMeta("og:description") || getNameMeta("description"),
        image: getMeta("og:image")
      }

      return new Response(JSON.stringify(data, null, 2), {
        headers: {
          "Content-Type": "application/json"
        }
      })

    } catch (err) {
      return new Response("Error fetching URL", { status: 500 })
    }
  }
}
