import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Video, MessageCircle, Lock } from "lucide-react"

export const metadata = {
  title: "Premium Content - That's Football",
  description:
    "Exclusive premium content for That's Football members. Ad-free experience with early access to videos and analysis.",
}

export default function PremiumPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-sans font-bold text-4xl md:text-6xl text-foreground mb-6">
              <span className="text-accent-teal">Premium</span> Content
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Exclusive content for premium members only</p>
          </div>

          <div className="text-center mb-8 p-6 bg-card/50 border border-border rounded-xl">
            <Lock className="w-12 h-12 text-accent-teal mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Premium Membership Required</h2>
            <p className="text-muted-foreground mb-4">
              Upgrade to Premium to access exclusive content, ad-free videos, and member discussions.
            </p>
            <Button className="bg-accent-teal hover:bg-accent-cyan">Upgrade to Premium</Button>
          </div>

          <div className="space-y-8 opacity-60">
            <Card className="bg-card border-border stadium-glow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-accent-teal" />
                  <h2 className="font-sans font-bold text-2xl text-foreground">Premium Analysis</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Deep dive into tactical analysis that goes beyond the surface. This week: How City's false 9 system is
                  revolutionizing modern football.
                </p>
                <div className="bg-accent-teal/10 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    🎯 <strong>Key Insight:</strong> Guardiola's tactical evolution shows why traditional striker roles
                    are becoming obsolete in elite football.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border stadium-glow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="h-6 w-6 text-accent-teal" />
                  <h2 className="font-sans font-bold text-2xl text-foreground">Exclusive Video Content</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Ad-free viewing experience with extended analysis and behind-the-scenes content.
                </p>
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-12 w-12 text-accent-teal mx-auto mb-2" />
                    <p className="text-foreground font-medium">Premium Video Player</p>
                    <p className="text-sm text-muted-foreground">No ads, just pure football content</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border stadium-glow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-accent-teal" />
                  <h2 className="font-sans font-bold text-2xl text-foreground">Member Discussions</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Join exclusive discussions with other premium members and get your questions answered.
                </p>
                <div className="space-y-3">
                  <div className="bg-muted/30 rounded-lg p-3">
                    <p className="text-sm text-foreground font-medium">@FootballFan123</p>
                    <p className="text-sm text-muted-foreground">
                      What do you think about United's transfer strategy this window?
                    </p>
                  </div>
                  <div className="bg-accent-teal/10 rounded-lg p-3">
                    <p className="text-sm text-accent-teal font-medium">@MarkGoldbridge</p>
                    <p className="text-sm text-foreground">Absolute disaster. No coherent plan whatsoever...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
