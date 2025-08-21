"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, Zap, Users, Gift, Crown, Check } from "lucide-react"

const membershipTiers = [
  {
    id: "free",
    name: "Free",
    price: "£0",
    period: "forever",
    description: "Get started with basic access",
    features: ["Access to public content", "Weekly highlights", "Community discussions", "Basic match analysis"],
    color: "border-border",
    buttonText: "Current Plan",
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: "£9.99",
    period: "month",
    description: "Unlock exclusive content and features",
    features: [
      "Ad-free experience",
      "Exclusive video content",
      "Early access to new content",
      "Premium match analysis",
      "Discord community access",
      "Monthly Q&A sessions",
    ],
    color: "border-accent-teal",
    buttonText: "Upgrade to Premium",
    popular: true,
  },
  {
    id: "vip",
    name: "VIP",
    price: "£19.99",
    period: "month",
    description: "The ultimate football fan experience",
    features: [
      "Everything in Premium",
      "VIP Discord channels",
      "Monthly video calls with Mark",
      "Exclusive merchandise",
      "Priority support",
      "Behind-the-scenes content",
      "Transfer insider updates",
    ],
    color: "border-accent-cyan",
    buttonText: "Go VIP",
    popular: false,
  },
]

const membershipPerks = [
  {
    icon: Shield,
    title: "Ad-Free Experience",
    description: "Enjoy all content without interruptions",
    tiers: ["premium", "vip"],
  },
  {
    icon: Star,
    title: "Exclusive Content",
    description: "Access to members-only videos and analysis",
    tiers: ["premium", "vip"],
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Get new content 24 hours before everyone else",
    tiers: ["premium", "vip"],
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Join the exclusive members Discord server",
    tiers: ["premium", "vip"],
  },
  {
    icon: Gift,
    title: "Monthly Perks",
    description: "Receive exclusive merchandise and digital content",
    tiers: ["vip"],
  },
  {
    icon: Crown,
    title: "VIP Support",
    description: "Priority support and direct creator access",
    tiers: ["vip"],
  },
]

export function MembershipSection() {
  const [currentTier, setCurrentTier] = useState("free")

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
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Join the Community</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your membership tier and unlock exclusive football content and community access
          </p>
        </motion.div>

        {/* Membership Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent-teal text-background px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <Card
                className={`h-full ${tier.color} ${tier.popular ? "stadium-glow" : ""} hover:border-accent-teal/50 transition-colors`}
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-sans text-2xl text-foreground">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period !== "forever" && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                  <p className="text-muted-foreground mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      tier.id === currentTier
                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                        : tier.popular
                          ? "bg-accent-teal hover:bg-accent-cyan"
                          : "bg-transparent border border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-background"
                    }`}
                    disabled={tier.id === currentTier}
                    onClick={() => setCurrentTier(tier.id)}
                  >
                    {tier.id === currentTier ? "Current Plan" : tier.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Membership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="font-sans font-bold text-2xl text-foreground text-center mb-8">Member Benefits</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipPerks.map((perk, index) => {
              const isAvailable = perk.tiers.includes(currentTier)
              const isVipOnly = perk.tiers.length === 1 && perk.tiers[0] === "vip"

              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg border transition-colors ${
                    isAvailable
                      ? "bg-accent-teal/10 border-accent-teal/30"
                      : "bg-muted/20 border-border hover:border-accent-teal/30"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg inline-flex mb-4 ${isAvailable ? "bg-accent-teal/20" : "bg-muted/30"}`}
                  >
                    <perk.icon className={`h-6 w-6 ${isAvailable ? "text-accent-teal" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className={`font-semibold ${isAvailable ? "text-foreground" : "text-muted-foreground"}`}>
                      {perk.title}
                    </h4>
                    {isVipOnly && (
                      <Badge variant="secondary" className="bg-accent-cyan/20 text-accent-cyan text-xs">
                        VIP Only
                      </Badge>
                    )}
                    {isAvailable && (
                      <Badge variant="secondary" className="bg-accent-teal/20 text-accent-teal text-xs">
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className={`text-sm ${isAvailable ? "text-muted-foreground" : "text-muted-foreground/70"}`}>
                    {perk.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
