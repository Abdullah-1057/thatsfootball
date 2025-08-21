import { generateRSSFeed } from "@/lib/rss"

export async function GET() {
  const feed = generateRSSFeed()

  return new Response(feed.json1(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
}
