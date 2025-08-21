"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

const fixtures = [
  {
    id: 1,
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    homeScore: null,
    awayScore: null,
    date: "2025-03-17",
    time: "16:30",
    venue: "Old Trafford",
    competition: "Premier League",
    status: "upcoming",
    hotTake: "United's defense will crumble under Liverpool's press",
  },
  {
    id: 2,
    homeTeam: "Arsenal",
    awayTeam: "Manchester City",
    homeScore: 2,
    awayScore: 1,
    date: "2025-03-14",
    time: "20:00",
    venue: "Emirates Stadium",
    competition: "Premier League",
    status: "finished",
    hotTake: "City's midfield was completely outplayed",
  },
  {
    id: 3,
    homeTeam: "Chelsea",
    awayTeam: "Newcastle",
    homeScore: null,
    awayScore: null,
    date: "2025-03-20",
    time: "19:45",
    venue: "Stamford Bridge",
    competition: "Premier League",
    status: "upcoming",
    hotTake: "Chelsea's new signings still haven't gelled",
  },
]

export function FixturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Fixtures & Hot Takes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The matches that matter and the opinions that nobody asked for
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fixtures.map((fixture, index) => (
            <motion.div
              key={fixture.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-card border-border stadium-glow hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  {/* Competition Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                      {fixture.competition}
                    </Badge>
                    <Badge
                      variant={fixture.status === "finished" ? "default" : "outline"}
                      className={fixture.status === "finished" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {fixture.status === "finished" ? "FT" : "Upcoming"}
                    </Badge>
                  </div>

                  {/* Teams and Score */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{fixture.homeTeam}</span>
                      {fixture.status === "finished" ? (
                        <div className="flex items-center gap-2 font-bold text-xl">
                          <span className="text-primary">{fixture.homeScore}</span>
                          <span className="text-muted-foreground">-</span>
                          <span className="text-primary">{fixture.awayScore}</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground font-medium">vs</span>
                      )}
                      <span className="font-medium text-foreground">{fixture.awayTeam}</span>
                    </div>
                  </div>

                  {/* Match Details */}
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(fixture.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{fixture.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{fixture.venue}</span>
                    </div>
                  </div>

                  {/* Hot Take */}
                  <div className="bg-muted/30 rounded-lg p-3 border-l-4 border-accent">
                    <p className="text-sm text-foreground font-medium mb-1">Mark's Take:</p>
                    <p className="text-sm text-muted-foreground italic">"{fixture.hotTake}"</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
