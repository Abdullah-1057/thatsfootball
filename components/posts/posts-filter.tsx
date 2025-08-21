"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "all", label: "All Posts", count: 156 },
  { id: "opinion", label: "Opinion", count: 45 },
  { id: "analysis", label: "Analysis", count: 38 },
  { id: "clips", label: "Clips", count: 42 },
  { id: "tactics", label: "Tactics", count: 18 },
  { id: "transfers", label: "Transfers", count: 13 },
]

export function PostsFilter() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className={`stadium-glow ${
              activeCategory === category.id ? "bg-primary hover:bg-primary/90" : "bg-transparent hover:bg-primary/10"
            }`}
          >
            {category.label}
            <Badge variant="secondary" className="ml-2 bg-muted text-muted-foreground">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  )
}
