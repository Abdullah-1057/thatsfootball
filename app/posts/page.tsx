import { PostsHero } from "@/components/posts/posts-hero"
import { PostsFilter } from "@/components/posts/posts-filter"
import { PostsGrid } from "@/components/posts/posts-grid"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Latest Posts - That's Football",
  description:
    "Read the latest football analysis, opinions, and hot takes from Mark Goldbridge. Bold commentary on Premier League, transfers, and more.",
  openGraph: {
    title: "Latest Posts - That's Football",
    description: "Read the latest football analysis, opinions, and hot takes from Mark Goldbridge.",
    images: ["/images/thats-football-banner.jpg"],
  },
}

export default function PostsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0d2e] via-[#2d1b3d] to-[#1a0d2e]">
      <Navigation />
      <PostsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PostsFilter />
        <PostsGrid />
      </div>
      <Footer />
    </main>
  )
}
