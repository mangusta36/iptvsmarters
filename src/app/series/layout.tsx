import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Series - Streaming in HD & 4K",
  description:
    "Browse our TV series catalog in streaming. Popular series, latest seasons and classics in HD and 4K quality with your IPTV subscription.",
  openGraph: {
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
