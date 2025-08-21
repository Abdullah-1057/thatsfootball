"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";

// If your Navigation is a *named* export: `export function Navigation() {…}`
const Navigation = dynamic(
  () => import("@/components/navigation").then((m) => m.Navigation),
  { ssr: false, loading: () => null }
);

// If it's a *default* export instead, use this line instead:
// const Navigation = dynamic(() => import("@/components/navigation"), { ssr: false, loading: () => null });

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="font-sans font-bold text-8xl md:text-9xl text-destructive mb-4 stadium-glow">
              500
            </div>
            <h1 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
              Something Went Wrong
            </h1>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              The referee has blown the whistle on this one. We&apos;re working
              to get things back on track.
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
              className="stadium-glow bg-primary hover:bg-primary/90"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="stadium-glow bg-transparent"
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
