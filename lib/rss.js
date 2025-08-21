import { Feed } from "feed"
import { getAllPosts } from "./content"

export function generateRSSFeed() {
  const posts = getAllPosts()
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "https://thats-football.vercel.app"
  const date = new Date()

  const author = {
    name: "Mark Goldbridge",
    email: "mark@thatsfootball.com",
    link: "https://twitter.com/markgoldbridge",
  }

  const feed = new Feed({
    title: "That's Football - Mark Goldbridge",
    description: "Bold football takes, honest analysis, and the passion that makes football beautiful.",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/images/thats-football-banner.jpg`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Mark Goldbridge`,
    updated: date,
    generator: "That's Football",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  })

  posts.forEach((post) => {
    const url = `${siteURL}/posts/${post.slug}`
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      content: post.excerpt,
      author: [author],
      contributor: [author],
      date: new Date(post.publishedAt),
      category: [{ name: post.category }],
      image: post.image ? `${siteURL}${post.image}` : undefined,
    })
  })

  return feed
}
