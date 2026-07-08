import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"
import VodContent from "./VodContent"

export const metadata: Metadata = {
  title: "VOD - Movies & TV Series in Streaming HD & 4K",
  description: "Browse our VOD catalogue: latest movies, trending TV series, new releases and classics in streaming. Access all video on demand with your IPTV subscription.",
  openGraph: {
    title: "VOD - doubleclick iptv Movies & TV Series",
    description: "Browse the full VOD catalogue: movies, series, new releases and trending in HD & 4K.",
    url: absoluteUrl("/vod"),
  },
  alternates: { canonical: absoluteUrl("/vod") },
}

export default function VODPage() {
  return <VodContent />
}
