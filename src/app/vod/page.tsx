import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"
import VodContent from "./VodContent"

export const metadata: Metadata = {
  title: "VOD - Movies & TV Series in Streaming HD & 4K",
  description: "Use our VOD discovery hub to browse movie and series examples, understand catalogue organization and access practical on-demand playback guidance.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "VOD - doubleclick iptv Movies & TV Series",
    description: "Browse the full VOD catalogue: movies, series, new releases and trending in HD & 4K.",
    url: absoluteUrl("/vod"),
  },
  alternates: { canonical: absoluteUrl("/vod") },
}

export default function VODPage() {
  return <VodContent />
}
