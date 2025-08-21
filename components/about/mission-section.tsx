"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Users, Megaphone } from "lucide-react"

const missions = [
  {
    icon: Target,
    title: "Honest Analysis",
    description:
      "No sugar-coating, no corporate speak. Just honest, passionate football analysis that tells it like it is.",
  },
  {
    icon: Heart,
    title: "Fan First",
    description: "Created by fans, for fans. Every piece of content comes from genuine love for the beautiful game.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Building a community where real football fans can share their passion without the nonsense.",
  },
  {
    icon: Megaphone,
    title: "Bold Takes",
    description: "Not afraid to say what others won't. Bold opinions backed by genuine football knowledge.",
  },
]

export function MissionSection() {
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
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            To deliver authentic football content that resonates with real fans, not corporate boardrooms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border stadium-glow hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <mission.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-foreground mb-3">{mission.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
