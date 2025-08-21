"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, MessageCircle, Share2, Calendar } from "lucide-react"

export function BlogPostCard({ post, featured = false, index = 0 }) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={featured ? "lg:col-span-2" : ""}
    >
      <Card className="bg-card border-border stadium-glow hover:border-primary/50 transition-all duration-300 overflow-hidden group h-full">
        <div className={`grid ${featured ? "lg:grid-cols-2" : "md:grid-cols-3"} gap-0 h-full`}>
          {/* Image */}
          <div
            className={`relative overflow-hidden ${featured ? "aspect-video lg:aspect-square" : "aspect-video md:aspect-square"}`}
          >
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge
                variant="secondary"
                className={`${
                  post.category === "Opinion"
                    ? "bg-accent/20 text-accent"
                    : post.category === "Analysis"
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary/20 text-secondary"
                }`}
              >
                {post.category}
              </Badge>
            </div>
            {featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent className={`p-6 ${featured ? "lg:col-span-1" : "md:col-span-2"} flex flex-col justify-between`}>
            <div>
              <Link href={`/posts/${post.slug}`}>
                <h2
                  className={`font-sans font-bold ${featured ? "text-2xl lg:text-3xl" : "text-xl"} text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer`}
                >
                  {post.title}
                </h2>
              </Link>
              <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime?.text || "5 min read"}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {post.views || "0"}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {post.comments || "0"}
                </div>
              </div>

              {/* Date and Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {publishedDate}
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/posts/${post.slug}`}>
                    <Button size="sm" className="stadium-glow bg-primary hover:bg-primary/90">
                      Read More
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="stadium-glow bg-transparent">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.article>
  )
}
