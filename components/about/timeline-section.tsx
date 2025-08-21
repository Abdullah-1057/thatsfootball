"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started creating football content from a spare bedroom with nothing but passion and a webcam.",
    achievement: "First Video",
  },
  {
    year: "2019",
    title: "Finding the Voice",
    description: "Developed the bold, unfiltered style that would become the That's Football trademark.",
    achievement: "10K Subscribers",
  },
  {
    year: "2020",
    title: "Breaking Through",
    description: "Content went viral during lockdown as fans craved authentic football commentary.",
    achievement: "100K Subscribers",
  },
  {
    year: "2021",
    title: "Building the Brand",
    description: "Launched That's Football as a proper brand with consistent content and community focus.",
    achievement: "500K Subscribers",
  },
  {
    year: "2022",
    title: "Going Professional",
    description: "Invested in professional equipment and studio setup to deliver premium content quality.",
    achievement: "1M Subscribers",
  },
  {
    year: "2023",
    title: "Community First",
    description: "Expanded beyond just content to build a real community of passionate football fans.",
    achievement: "2M Subscribers",
  },
  {
    year: "2025",
    title: "The Future",
    description: "Embracing Web3 and new technologies to create the next generation of football content.",
    achievement: "Web3 Launch",
  },
]

export function TimelineSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">The Journey</h2>
          <p className="text-muted-foreground text-lg">From bedroom broadcaster to football media powerhouse</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center stadium-glow relative z-10">
                  <span className="font-sans font-bold text-primary-foreground">{milestone.year.slice(-2)}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <Card className="bg-card border-border stadium-glow hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-sans font-bold text-xl text-foreground">{milestone.title}</h3>
                        <Badge variant="secondary" className="bg-accent/20 text-accent">
                          {milestone.achievement}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
