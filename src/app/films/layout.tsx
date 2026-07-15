import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Movies - Streaming in HD & 4K",
  description:
    "Discover movies by genre, release and viewing occasion, with practical playback guidance and links to the main VOD hub for authorized catalogues.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "Movies - Streaming in HD & 4K",
    description:
      "Browse our streaming movie catalog. Latest releases, classics and more in HD and 4K.",
    url: absoluteUrl("/films"),
  },
  alternates: { canonical: absoluteUrl("/films") },
}

export default function FilmsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
