"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Briefcase, ChevronRight } from "lucide-react"
import { JobDetailModal } from "./job-detail-modal"

const jobsData = [
  {
    id: 1,
    title: "Senior Video Editor",
    department: "Content",
    location: "Manchester, UK",
    type: "Full-time",
    experience: "3-5 years",
    salary: "£35,000 - £45,000",
    description:
      "Join our content team as a Senior Video Editor and help create engaging football content that reaches millions of fans worldwide. You'll be working with cutting-edge equipment and collaborating with Mark Goldbridge on premium video productions.",
    responsibilities: [
      "Edit and produce high-quality video content for YouTube, social media, and web platforms",
      "Collaborate with content creators and presenters to develop engaging narratives",
      "Manage multiple projects simultaneously while meeting tight deadlines",
      "Maintain brand consistency across all video content",
      "Optimize content for different platforms and formats",
      "Work with motion graphics and visual effects to enhance storytelling",
    ],
    requirements: [
      "3+ years of professional video editing experience",
      "Proficiency in Adobe Premiere Pro, After Effects, and DaVinci Resolve",
      "Strong understanding of football and sports content",
      "Experience with YouTube content optimization",
      "Excellent attention to detail and storytelling skills",
      "Ability to work under pressure and meet tight deadlines",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "25 days holiday plus bank holidays",
      "Professional development opportunities",
      "Access to latest editing software and equipment",
      "Flexible working arrangements",
      "Football match tickets and events access",
    ],
  },
  {
    id: 2,
    title: "Content Writer & Researcher",
    department: "Editorial",
    location: "Remote/Hybrid",
    type: "Full-time",
    experience: "2-4 years",
    salary: "£28,000 - £38,000",
    description:
      "We're looking for a passionate football writer who can create compelling content across multiple platforms. You'll research trending topics, write engaging articles, and help shape our editorial voice.",
    responsibilities: [
      "Research and write engaging football content for web and social media",
      "Develop content strategies for trending football topics",
      "Collaborate with video team to create supporting written content",
      "Manage content calendar and publishing schedules",
      "Engage with community and respond to audience feedback",
      "Stay up-to-date with football news and transfer developments",
    ],
    requirements: [
      "2+ years of sports writing or journalism experience",
      "Deep knowledge of football, especially Premier League",
      "Excellent writing and editing skills",
      "Experience with CMS platforms and SEO best practices",
      "Social media savvy with understanding of platform-specific content",
      "Ability to work independently and meet deadlines",
    ],
    benefits: [
      "Competitive salary with annual reviews",
      "Remote/hybrid working options",
      "Professional development budget",
      "Access to press events and matches",
      "Health and wellness benefits",
      "Team building events and socials",
    ],
  },
  {
    id: 3,
    title: "Social Media Manager",
    department: "Marketing",
    location: "Manchester, UK",
    type: "Full-time",
    experience: "2-3 years",
    salary: "£30,000 - £40,000",
    description:
      "Lead our social media strategy across all platforms and help grow our community of passionate football fans. You'll create viral content, manage campaigns, and engage with our audience.",
    responsibilities: [
      "Develop and execute social media strategies across all platforms",
      "Create engaging content for Twitter, Instagram, TikTok, and Facebook",
      "Monitor social media trends and adapt content accordingly",
      "Manage community engagement and respond to followers",
      "Analyze performance metrics and optimize content strategy",
      "Collaborate with content team on cross-platform campaigns",
    ],
    requirements: [
      "2+ years of social media management experience",
      "Strong understanding of all major social platforms",
      "Experience with social media analytics and reporting tools",
      "Creative mindset with ability to create viral content",
      "Knowledge of football culture and online communities",
      "Excellent communication and writing skills",
    ],
    benefits: [
      "Competitive salary with performance incentives",
      "Creative freedom and autonomy",
      "Latest social media tools and software",
      "Conference and training opportunities",
      "Flexible working hours",
      "Access to exclusive football events",
    ],
  },
]

export function JobsList() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [filter, setFilter] = useState("all")

  const filteredJobs = filter === "all" ? jobsData : jobsData.filter((job) => job.department.toLowerCase() === filter)

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {["all", "content", "editorial", "marketing"].map((filterType) => (
            <Button
              key={filterType}
              variant={filter === filterType ? "default" : "outline"}
              onClick={() => setFilter(filterType)}
              className={filter === filterType ? "bg-accent-teal hover:bg-accent-cyan" : ""}
            >
              {filterType === "all" ? "All Positions" : filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </Button>
          ))}
        </div>

        <div className="grid gap-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent-teal/50 transition-colors group cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent-teal transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-teal transition-colors" />
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">{job.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-accent-teal">{job.salary}</span>
                    <Button
                      className="bg-accent-teal hover:bg-accent-cyan"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedJob(job)
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No positions available in this category at the moment.</p>
            <p className="text-muted-foreground mt-2">Check back soon or view all positions.</p>
          </div>
        )}
      </div>

      {selectedJob && <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </section>
  )
}
