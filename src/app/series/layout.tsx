import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Series - Streaming in HD & 4K",
  description:
    "Organize series discovery by genre and season, review episodic playback tips, and browse programmes available through your authorized VOD catalogue.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "Series - Streaming in HD & 4K",
    description:
      "Browse our TV series catalog in streaming. Popular series and latest seasons in HD and 4K.",
    url: absoluteUrl("/series"),
  },
  alternates: { canonical: absoluteUrl("/series") },
}

export default function SeriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
