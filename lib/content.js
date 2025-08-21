const mockPosts = [
  {
    slug: "premier-league-title-race-2025",
    title: "The Premier League Title Race: Why City Will Struggle This Season",
    excerpt:
      "Manchester City's dominance might finally be coming to an end. Here's why Arsenal and Liverpool have the edge this time.",
    content:
      "The Premier League title race is heating up, and for the first time in years, Manchester City doesn't look like the overwhelming favorite...",
    publishedAt: "2025-01-15",
    category: "Premier League",
    tags: ["Premier League", "Manchester City", "Arsenal", "Liverpool"],
    author: "Mark Goldbridge",
    readingTime: { text: "5 min read", minutes: 5 },
    image: "/placeholder-egxnv.png",
  },
  {
    slug: "transfer-window-madness",
    title: "Transfer Window Madness: The Deals That Make No Sense",
    excerpt:
      "Another transfer window, another set of baffling decisions. Let's break down the moves that have left fans scratching their heads.",
    content: "The January transfer window has been absolutely mental, and not in a good way...",
    publishedAt: "2025-01-10",
    category: "Transfers",
    tags: ["Transfers", "Premier League", "Analysis"],
    author: "Mark Goldbridge",
    readingTime: { text: "7 min read", minutes: 7 },
    image: "/football-transfer-news.png",
  },
  {
    slug: "var-controversy-continues",
    title: "VAR Controversy: When Technology Ruins the Beautiful Game",
    excerpt: "VAR was supposed to make football fairer, but it's doing the opposite. Time for a serious rethink.",
    content:
      "Video Assistant Referee technology has been one of the most controversial additions to modern football...",
    publishedAt: "2025-01-08",
    category: "Analysis",
    tags: ["VAR", "Referees", "Premier League"],
    author: "Mark Goldbridge",
    readingTime: { text: "6 min read", minutes: 6 },
    image: "/var-football-referee.png",
  },
  {
    slug: "manchester-united-rebuild",
    title: "Manchester United's Rebuild: Progress or False Dawn?",
    excerpt:
      "United fans are cautiously optimistic, but is this genuine progress or just another false dawn at Old Trafford?",
    content: "Manchester United's recent performances have given fans hope, but we've been here before...",
    publishedAt: "2025-01-05",
    category: "Manchester United",
    tags: ["Manchester United", "Premier League", "Analysis"],
    author: "Mark Goldbridge",
    readingTime: { text: "8 min read", minutes: 8 },
    image: "/old-trafford-manchester-united.png",
  },
  {
    slug: "champions-league-predictions",
    title: "Champions League Knockout Predictions: Dark Horses to Watch",
    excerpt: "The Champions League knockout stages are here. Which underdogs could cause major upsets?",
    content: "The Champions League knockout stages always provide drama, and this year looks no different...",
    publishedAt: "2025-01-03",
    category: "Champions League",
    tags: ["Champions League", "Predictions", "European Football"],
    author: "Mark Goldbridge",
    readingTime: { text: "4 min read", minutes: 4 },
    image: "/champions-league-trophy.png",
  },
  {
    slug: "football-finances-crisis",
    title: "Football's Financial Crisis: When Money Ruins Everything",
    excerpt:
      "Modern football's obsession with money is killing the sport we love. Here's how we got here and where we're heading.",
    content: "Football has always been about money to some extent, but the current situation is unprecedented...",
    publishedAt: "2025-01-01",
    category: "Analysis",
    tags: ["Finance", "FFP", "Premier League"],
    author: "Mark Goldbridge",
    readingTime: { text: "9 min read", minutes: 9 },
    image: "/football-money-crisis.png",
  },
]

export function getAllPosts() {
  try {
    return mockPosts.sort((a, b) => (new Date(a.publishedAt) < new Date(b.publishedAt) ? 1 : -1))
  } catch (error) {
    console.error("Error reading posts:", error)
    return []
  }
}

export function getPostBySlug(slug) {
  try {
    const post = mockPosts.find((p) => p.slug === slug)
    return post || null
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostsByCategory(category) {
  const allPosts = getAllPosts()
  if (category === "all") return allPosts
  return allPosts.filter((post) => post.category?.toLowerCase() === category.toLowerCase())
}

export function getRelatedPosts(currentSlug, category, limit = 3) {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, limit)
}

export function getAllCategories() {
  const allPosts = getAllPosts()
  const categories = new Set(allPosts.map((post) => post.category).filter(Boolean))
  return Array.from(categories)
}

export function getAllTags() {
  const allPosts = getAllPosts()
  const tags = new Set()
  allPosts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag))
    }
  })
  return Array.from(tags)
}
