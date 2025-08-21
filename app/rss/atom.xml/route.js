import { generateRSSFeed } from "@/lib/rss"

export async function GET() {
  const feed = generateRSSFeed()

  return new Response(feed.atom1(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  })
}
