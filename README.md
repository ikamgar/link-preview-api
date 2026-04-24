# 🔗 Link Preview API (Cloudflare Worker)

A simple serverless API built with Cloudflare Workers that extracts metadata from any URL (title, description, image).

## 🚀 Live Demo

link-preview-api.ikamgars.workers.dev/?url=https://wikipedia.com

---

## 📦 Features

- Fetch page title
- Extract Open Graph description
- Extract preview image (og:image)
- Fast edge execution via Cloudflare

---

## ⚙️ Tech Stack

- Cloudflare Workers
- JavaScript (ES Modules)
- HTML parsing with regex

---

## 📌 Usage

```http
GET https://link-preview-api.ikamgars.workers.dev/?url=https://wikipedia.com
```

### Response

```json
{
  "title": "Example Domain",
  "description": "This domain is for use in illustrative examples",
  "image": "https://example.com/image.jpg"
}
```

🧠 How it works
The worker:

1. Fetches the target URL
2. Parses HTML content
3. Extracts metadata (title, description, image)
4. Returns JSON response

🛠 Deployment

1. Create a Cloudflare Worker
2. Paste worker.js code
3. Deploy
4. Use generated URL
