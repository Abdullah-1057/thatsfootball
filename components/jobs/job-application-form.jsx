"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload, CheckCircle, AlertCircle } from "lucide-react"

export function JobApplicationForm({ jobTitle, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    experience: "",
    portfolio: "",
    resume: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB")
      return
    }
    setFormData((prev) => ({ ...prev, resume: file }))
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (err) {
      setError("Failed to submit application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-accent-teal mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your interest in joining That's Football. We'll review your application and get back to you
          soon.
        </p>
        <Button onClick={onClose} className="bg-accent-teal hover:bg-accent-cyan">
          Close
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-background/50 border-border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-background/50 border-border"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
        <Input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          className="bg-background/50 border-border"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Portfolio/Website URL</label>
        <Input
          name="portfolio"
          type="url"
          value={formData.portfolio}
          onChange={handleInputChange}
          placeholder="https://your-portfolio.com"
          className="bg-background/50 border-border"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Cover Letter *</label>
        <Textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleInputChange}
          required
          rows={4}
          placeholder="Tell us why you're perfect for this role..."
          className="bg-background/50 border-border"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Relevant Experience *</label>
        <Textarea
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          required
          rows={3}
          placeholder="Describe your relevant experience and skills..."
          className="bg-background/50 border-border"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Resume/CV *</label>
        <div className="relative">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            id="resume-upload"
            required
          />
          <label
            htmlFor="resume-upload"
            className="flex items-center justify-center w-full p-4 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent-teal transition-colors bg-background/30"
          >
            <Upload className="w-6 h-6 text-muted-foreground mr-2" />
            <span className="text-muted-foreground">
              {formData.resume ? formData.resume.name : "Upload Resume (PDF, DOC, DOCX - Max 5MB)"}
            </span>
          </label>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex gap-4 pt-4">
        <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting} className="flex-1 bg-accent-teal hover:bg-accent-cyan">
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  )
}
