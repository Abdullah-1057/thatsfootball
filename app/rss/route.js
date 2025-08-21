import { generateRSSFeed } from "@/lib/rss"

export async function GET() {
  const feed = generateRSSFeed()

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
