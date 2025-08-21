// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = { error: Error & { digest?: string }; reset: () => void };

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-3">500</h1>
        <p className="text-muted-foreground mb-6">Something went wrong.</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-4 py-2 rounded-md border hover:bg-accent"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
