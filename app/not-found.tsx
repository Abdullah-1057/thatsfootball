// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-3">404</h1>
        <p className="text-muted-foreground mb-6">This page could not be found.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Back to Home</Link>
          <Link href="/posts" className="px-4 py-2 rounded-md border">Latest Posts</Link>
        </div>
      </div>
    </main>
  );
}
