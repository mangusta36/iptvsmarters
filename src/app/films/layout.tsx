import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Movies - Streaming in HD & 4K",
  description:
    "Browse our streaming movie catalog. From latest releases to timeless classics, enjoy cinema at home in HD and 4K quality with your IPTV subscription.",
  openGraph: {
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
