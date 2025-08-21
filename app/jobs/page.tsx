import { JobsHero } from "@/components/jobs/jobs-hero"
import { JobsList } from "@/components/jobs/jobs-list"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Careers - That's Football",
  description:
    "Join the That's Football team. Explore career opportunities in football content creation, video production, and digital media.",
  openGraph: {
    title: "Careers - That's Football",
    description: "Join the That's Football team. Explore career opportunities in football content creation.",
    images: ["/images/thats-football-banner.jpg"],
  },
}

export default function JobsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <JobsHero />
      <JobsList />
      <Footer />
    </main>
  )
}
