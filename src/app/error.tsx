"use client"

import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">Please try again or contact support.</p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={reset}
          className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-black hover:bg-brand-hover transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-white hover:bg-muted transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  )
}
