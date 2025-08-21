"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Clock, Eye } from "lucide-react"

const highlights = [
  {
    id: 1,
    title: "United's Transfer Window Disaster",
    excerpt: "Breaking down why this summer's signings show a complete lack of strategy...",
    image: "/football-stadium-night.png",
    type: "Analysis",
    duration: "12:34",
    views: "234K",
    publishedAt: "2 hours ago",
  },
  {
    id: 2,
    title: "City's Tactical Masterclass",
    excerpt: "How Guardiola's latest formation change is revolutionizing their attack...",
    image: "/placeholder-mnfdr.png",
    type: "Tactics",
    duration: "8:45",
    views: "156K",
    publishedAt: "1 day ago",
  },
  {
    id: 3,
    title: "Premier League Predictions",
    excerpt: "Bold predictions for this weekend's fixtures that nobody wants to hear...",
    image: "/premier-league-trophy.png",
    type: "Opinion",
    duration: "15:22",
    views: "89K",
    publishedAt: "3 days ago",
  },
]

export function HighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % highlights.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Latest Highlights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Catch up on the hottest takes and most controversial opinions in football
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <Card className="bg-card border-border stadium-glow">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative aspect-video md:aspect-square overflow-hidden">
                        <img
                          src={highlights[currentIndex].image || "/placeholder.svg"}
                          alt={highlights[currentIndex].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                            {highlights[currentIndex].type}
                          </span>
                        </div>
                        <Button
                          size="lg"
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16 bg-primary/90 hover:bg-primary stadium-glow"
                        >
                          <Play className="h-6 w-6 ml-1" />
                        </Button>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="font-sans font-bold text-2xl text-foreground mb-4">
                          {highlights[currentIndex].title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{highlights[currentIndex].excerpt}</p>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {highlights[currentIndex].duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {highlights[currentIndex].views}
                          </div>
                          <span>{highlights[currentIndex].publishedAt}</span>
                        </div>

                        <Button className="w-fit stadium-glow bg-primary hover:bg-primary/90">Watch Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm stadium-glow"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm stadium-glow"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
