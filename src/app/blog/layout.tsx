import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Blog - IPTV Guides & Tutorials",
  description:
    "Guides, tips and tutorials to install, configure and optimise your IPTV subscription. Step-by-step setup for all devices and troubleshooting advice.",
  openGraph: {
    title: "Blog - IPTV Guides & Tutorials",
    description:
      "Guides, tips and tutorials to install, configure and optimise your IPTV subscription.",
    url: absoluteUrl("/blog"),
  },
  alternates: { canonical: absoluteUrl("/blog") },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
