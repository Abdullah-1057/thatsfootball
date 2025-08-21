"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 stadium-glow">
            <CardContent className="p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Stay in the Loop</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Get the latest football takes, exclusive content, and behind-the-scenes updates delivered straight to
                  your inbox.
                </p>
              </motion.div>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  <div className="bg-accent/20 rounded-lg p-6 max-w-md mx-auto">
                    <CheckCircle className="h-12 w-12 text-accent mx-auto mb-3" />
                    <h3 className="font-sans font-bold text-xl text-foreground mb-2">Welcome to the Team!</h3>
                    <p className="text-muted-foreground">
                      You're now subscribed to the hottest football takes in your inbox.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto space-y-4"
                >
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-background border-border focus:border-primary"
                      required
                    />
                    <Button type="submit" disabled={isLoading} className="stadium-glow bg-primary hover:bg-primary/90">
                      {isLoading ? "..." : "Subscribe"}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">No spam, just the good stuff. Unsubscribe anytime.</p>
                </motion.form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
