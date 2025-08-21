"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-banner-purple">
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="font-bold text-8xl md:text-9xl text-red-500 mb-4 stadium-glow">
              500
            </div>
            <h1 className="font-bold text-3xl md:text-4xl text-white mb-4">
              Something Went Wrong
            </h1>
            <p className="text-gray-300 text-lg max-w-md mx-auto mb-8">
              The referee has blown the whistle on this one. We're working to
              get things back on track.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={reset}
              size="lg"
              className="bg-banner-cyan text-banner-purple hover:bg-opacity-90 stadium-glow"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-banner-cyan text-banner-cyan hover:bg-banner-cyan hover:text-banner-purple bg-transparent"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
