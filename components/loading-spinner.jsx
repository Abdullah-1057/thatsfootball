"use client"

import { motion } from "framer-motion"

export function LoadingSpinner({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-accent-teal/30 border-t-accent-teal rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

export function SkeletonLoader({ className = "", children }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {children || <div className="bg-muted/50 rounded-lg h-4 w-full" />}
    </div>
  )
}

export function ContentSkeleton() {
  return (
    <div className="space-y-4">
      <SkeletonLoader className="h-8 w-3/4 bg-muted/50 rounded-lg" />
      <SkeletonLoader className="h-4 w-full bg-muted/30 rounded" />
      <SkeletonLoader className="h-4 w-5/6 bg-muted/30 rounded" />
      <SkeletonLoader className="h-4 w-4/5 bg-muted/30 rounded" />
    </div>
  )
}
