import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Blog - IPTV Guides, Tutorials & Tips",
  description:
    "Expert IPTV guides, tutorials and tips: installation, setup, troubleshooting, device compatibility, streaming optimisation and more for your IPTV subscription.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "Blog - IPTV Guides, Tutorials & Tips",
    description:
      "Expert IPTV guides, tutorials and tips: installation, setup, troubleshooting, device compatibility and streaming optimisation.",
    url: absoluteUrl("/blog"),
  },
  twitter: {
    card: "summary_large_image",
    site: "@doubleclicktv",
    creator: "@doubleclicktv",
    title: "Blog - IPTV Guides, Tutorials & Tips",
    description: "Expert IPTV guides, tutorials and tips for your IPTV subscription.",
    images: [absoluteUrl("/og-image.svg")],
  },
  alternates: { canonical: absoluteUrl("/blog") },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
