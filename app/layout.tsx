import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "That's Football - Mark Goldbridge",
  description:
    "Premium football content, analysis, and community by Mark Goldbridge. Join the conversation with bold takes, match analysis, and exclusive content.",
  generator: "v0.app",
  keywords: ["football", "Mark Goldbridge", "football analysis", "premier league", "football community"],
  authors: [{ name: "Mark Goldbridge" }],
  openGraph: {
    title: "That's Football - Mark Goldbridge",
    description: "Premium football content and analysis by Mark Goldbridge",
    type: "website",
    images: ["/images/thats-football-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "That's Football - Mark Goldbridge",
    description: "Premium football content and analysis by Mark Goldbridge",
    images: ["/images/thats-football-banner.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${manrope.variable} dark`}>
      <body className="min-h-screen pitch-gradient">{children}</body>
    </html>
  )
}
