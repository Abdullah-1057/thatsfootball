"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="font-sans font-bold text-8xl md:text-9xl text-primary mb-4 stadium-glow">404</div>
            <h1 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Page Not Found</h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              Looks like this page has been sent off! The content you're looking for doesn't exist.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="stadium-glow bg-primary hover:bg-primary/90">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="stadium-glow bg-transparent">
              <Link href="/posts">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Latest Posts
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
