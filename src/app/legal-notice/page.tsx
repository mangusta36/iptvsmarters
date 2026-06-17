import type { Metadata } from "next"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice of doubleclick iptv.",
  robots: { index: false, follow: false },
  alternates: { canonical: absoluteUrl("/legal-notice") },
}

export default function MentionsLegalesPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Legal Notice</h1>
        <div className="mt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-lg font-semibold text-white">Site Publisher</h2>
          <p>The doubleclick iptv website is published by a company registered in the United Kingdom.</p>
          <p>Email : {siteConfig.email}</p>
          <p>WhatsApp : {siteConfig.whatsappNumber}</p>
          <h2 className="text-lg font-semibold text-white">Publication Director</h2>
          <p>The publication director is the legal representative of the publishing company.</p>
          <h2 className="text-lg font-semibold text-white">Hosting</h2>
          <p>The site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
          <h2 className="text-lg font-semibold text-white">Intellectual Property</h2>
          <p>All content on this site (texts, images, videos, logos) is protected by copyright. Any reproduction or representation, in whole or in part, without prior authorization is prohibited.</p>
          <h2 className="text-lg font-semibold text-white">Data Protection</h2>
          <p>In accordance with GDPR, you have the right to access, rectify and delete your personal data. To exercise these rights, contact us by email.</p>
        </div>
      </div>
    </section>
  )
}
