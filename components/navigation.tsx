"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-sans font-bold text-xl text-accent-teal">THAT'S FOOTBALL</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent-teal transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent-teal transition-colors">
              About
            </Link>
            <Link href="/posts" className="text-foreground hover:text-accent-teal transition-colors">
              Latest Posts
            </Link>
            <Link href="/jobs" className="text-foreground hover:text-accent-teal transition-colors">
              Jobs
            </Link>

            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-background"
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-accent-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-accent-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/posts"
                className="block px-3 py-2 text-foreground hover:text-accent-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Latest Posts
              </Link>
              <Link
                href="/jobs"
                className="block px-3 py-2 text-foreground hover:text-accent-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Jobs
              </Link>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-background"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
