"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Mic, Monitor, Zap, Headphones, Video } from "lucide-react"

const equipment = [
  {
    icon: Camera,
    name: "Professional Cameras",
    description: "4K recording setup with multiple angles for dynamic content",
  },
  {
    icon: Mic,
    name: "Studio Microphones",
    description: "Broadcast-quality audio for crystal clear commentary",
  },
  {
    icon: Monitor,
    name: "Multi-Monitor Setup",
    description: "Live stats, social feeds, and production tools at fingertips",
  },
  {
    icon: Zap,
    name: "Live Streaming Kit",
    description: "Professional streaming equipment for real-time reactions",
  },
  {
    icon: Headphones,
    name: "Audio Monitoring",
    description: "Professional headphones for perfect audio quality control",
  },
  {
    icon: Video,
    name: "Editing Suite",
    description: "High-end editing setup for post-production magic",
  },
]

export function StudioSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Behind the Scenes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional equipment and setup that brings you premium football content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border stadium-glow hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Studio Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden stadium-glow"
        >
          <img
            src="/studio-setup.png"
            alt="That's Football Studio Setup"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-sans font-bold text-2xl text-foreground mb-2">The That's Football Studio</h3>
            <p className="text-muted-foreground">Where passion meets professionalism</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
