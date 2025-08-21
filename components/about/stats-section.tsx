"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Total Subscribers", value: 2100000, suffix: "", format: "number" },
  { label: "Video Views", value: 450, suffix: "M", format: "number" },
  { label: "Hours Watched", value: 12.5, suffix: "M", format: "decimal" },
  { label: "Community Members", value: 85000, suffix: "", format: "number" },
]

function AnimatedNumber({ value, format, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          current = value
          clearInterval(timer)
        }

        if (format === "decimal") {
          setDisplayValue(Math.round(current * 10) / 10)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value, format])

  const formatNumber = (num) => {
    if (format === "decimal") {
      return num.toFixed(1)
    }
    return num.toLocaleString()
  }

  return (
    <span ref={ref} className="font-sans font-bold text-4xl md:text-5xl text-primary">
      {formatNumber(displayValue)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">By the Numbers</h2>
          <p className="text-muted-foreground text-lg">The impact of authentic football content</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border stadium-glow hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <AnimatedNumber value={stat.value} format={stat.format} suffix={stat.suffix} />
                  <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
