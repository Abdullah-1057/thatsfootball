"use client"

import { motion } from "framer-motion"

export function PostsHero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-sans font-bold text-4xl md:text-6xl text-foreground mb-6">
            Latest <span className="text-primary">Football</span> Takes
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Bold opinions, honest analysis, and the football content that gets people talking. No filter, no corporate
            speak, just pure passion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
