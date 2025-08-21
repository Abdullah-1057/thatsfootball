"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, MapPin, Clock, Users, Briefcase } from "lucide-react"
import { JobApplicationForm } from "./job-application-form"
import { useState } from "react"

export function JobDetailModal({ job, onClose }) {
  const [showApplication, setShowApplication] = useState(false)

  if (!job) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-border">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{job.title}</h2>
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
            <Button variant="ghost" size="sm" onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="p-6">
          {showApplication ? (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Apply for {job.title}</h3>
              <JobApplicationForm jobTitle={job.title} onClose={() => setShowApplication(false)} />
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Job Description</h3>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Responsibilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-teal rounded-full mt-2 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              {job.benefits && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-pitch-green rounded-full mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4 pt-6 border-t border-border">
                <Button onClick={() => setShowApplication(true)} className="bg-accent-teal hover:bg-accent-cyan">
                  Apply Now
                </Button>
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
