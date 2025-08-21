"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, Twitter, Instagram, Users, Eye, MessageCircle } from "lucide-react"

const stats = [
  { label: "Subscribers", value: "2.1M", icon: Users },
  { label: "Total Views", value: "450M", icon: Eye },
  { label: "Comments", value: "12.5M", icon: MessageCircle },
]

export function CreatorSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Creator Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <img
                  src="/mark-goldbridge-portrait.png"
                  alt="Mark Goldbridge"
                  className="w-24 h-24 rounded-full border-4 border-primary stadium-glow"
                />
                <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full p-2">
                  <Youtube className="h-4 w-4" />
                </div>
              </div>
              <div>
                <h2 className="font-sans font-bold text-3xl text-foreground mb-2">Mark Goldbridge</h2>
                <p className="text-muted-foreground text-lg">Football Content Creator</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-foreground leading-relaxed">
                The voice of passionate football fans everywhere. Known for bold opinions, honest analysis, and never
                holding back when it comes to the beautiful game.
              </p>
              <p className="text-muted-foreground">
                From Old Trafford to your screen, bringing you the takes that matter and the content that gets football
                fans talking.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <Button variant="outline" size="icon" className="stadium-glow bg-transparent">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="stadium-glow bg-transparent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="stadium-glow bg-transparent">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>

            <Button size="lg" className="stadium-glow bg-primary hover:bg-primary/90">
              Follow the Journey
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-card border-border stadium-glow hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-sans font-bold text-2xl text-foreground">{stat.value}</div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Achievement Card */}
            <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 stadium-glow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="font-sans font-bold text-lg text-foreground mb-2">Creator Milestone</div>
                  <div className="text-sm text-muted-foreground">
                    Reached 2M subscribers in record time with authentic football content
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
