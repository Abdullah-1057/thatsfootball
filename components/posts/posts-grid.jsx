"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BlogPostCard } from "@/components/blog/blog-post-card"
import { getPostsByCategory } from "@/lib/content"

export function PostsGrid({ initialCategory = "all" }) {
  const [posts, setPosts] = useState([])
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(initialCategory)

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      try {
        const filteredPosts = getPostsByCategory(category)
        setPosts(filteredPosts)
      } catch (error) {
        console.error("Error loading posts:", error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [category])

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 6)
  }

  if (loading) {
    return <PostsSkeleton />
  }

  return (
    <div>
      <div className="grid gap-8">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <BlogPostCard key={post.slug} post={post} featured={index === 0 && category === "all"} index={index} />
        ))}
      </div>

      {visiblePosts < posts.length && (
        <div className="text-center mt-12">
          <Button
            onClick={loadMore}
            size="lg"
            variant="outline"
            className="stadium-glow border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-[#1a0d2e] bg-transparent"
          >
            Load More Posts
          </Button>
        </div>
      )}

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No posts found in this category.</p>
        </div>
      )}
    </div>
  )
}

function PostsSkeleton() {
  return (
    <div className="grid gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-muted rounded-lg h-64 md:h-48"></div>
        </div>
      ))}
    </div>
  )
}
