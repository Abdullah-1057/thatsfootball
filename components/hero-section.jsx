"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Users, User } from "lucide-react";

function HeroFallback() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d2e] via-[#2d1b3d] to-[#1a0d2e]" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00bcd4]/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#00ffcc]/30 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#00ff88]/30 rounded-full blur-md animate-pulse delay-2000" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-6 stadium-glow"
          style={{ color: "#00ffcc" }}
        >
          THAT'S FOOTBALL!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Bold takes, honest opinions, and the passion that makes football
          beautiful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="stadium-glow"
            style={{ backgroundColor: "#00bcd4" }}
          >
            <Play className="mr-2 h-5 w-5" />
            Latest Posts
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="stadium-glow border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-[#1a0d2e] bg-transparent"
          >
            <Users className="mr-2 h-5 w-5" />
            Watch Clips
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="stadium-glow bg-[#00ffcc]/20 text-[#00ffcc] hover:bg-[#00ffcc] hover:text-[#1a0d2e]"
          >
            <User className="mr-2 h-5 w-5" />
            Join Community
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative h-screen overflow-hidden"
      aria-label="Hero section"
    >
      <h1 className="sr-only">
        That's Football - Premium Football Content by Mark Goldbridge
      </h1>
      <HeroFallback />
    </section>
  );
}
