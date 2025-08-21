"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, Link2, MessageCircle } from "lucide-react"

export function ShareButtons({ title, url, excerpt }) {
  const shareData = {
    title,
    url: typeof window !== "undefined" ? window.location.href : url,
    text: excerpt,
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareData.url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${shareData.url}`)}`,
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log("Error sharing:", error)
      }
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url)
      // You could add a toast notification here
    } catch (error) {
      console.log("Error copying link:", error)
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-muted-foreground mr-2">Share:</span>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.twitter, "_blank")}
        className="stadium-glow bg-transparent"
      >
        <Twitter className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.facebook, "_blank")}
        className="stadium-glow bg-transparent"
      >
        <Facebook className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.linkedin, "_blank")}
        className="stadium-glow bg-transparent"
      >
        <Linkedin className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.whatsapp, "_blank")}
        className="stadium-glow bg-transparent"
      >
        <MessageCircle className="h-4 w-4" />
      </Button>

      <Button variant="outline" size="sm" onClick={handleCopyLink} className="stadium-glow bg-transparent">
        <Link2 className="h-4 w-4" />
      </Button>

      {navigator.share && (
        <Button variant="outline" size="sm" onClick={handleNativeShare} className="stadium-glow bg-transparent">
          Share
        </Button>
      )}
    </div>
  )
}
