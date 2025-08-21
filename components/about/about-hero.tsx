"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-sans font-bold text-4xl md:text-6xl text-foreground mb-6">
            The Man Behind the <span className="text-primary">Passion</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From the terraces to your screen, Mark Goldbridge brings unfiltered football commentary that cuts through
            the noise. This is the story of how passion became purpose.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
