import type { Metadata } from "next"
import Link from "next/link"
import { BookOpenCheck, HeadphonesIcon, MonitorCheck, ShieldCheck } from "lucide-react"
import SchemaMarkup from "@/components/SchemaMarkup"
import CTASection from "@/components/CTASection"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About doubleclick iptv - Our service and support values",
  description: "Learn how doubleclick iptv approaches device setup, account guidance, responsible streaming, transparent support and practical customer assistance.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "About doubleclick iptv",
    description: "Our approach to responsible IPTV setup, clear customer guidance and practical technical support.",
    url: absoluteUrl("/a-propos"),
  },
  alternates: { canonical: absoluteUrl("/a-propos") },
}

const values = [
  { icon: MonitorCheck, title: "Practical setup", desc: "We help customers identify their device, choose a compatible player and understand the settings needed for a first login." },
  { icon: HeadphonesIcon, title: "Clear support", desc: "Support begins with reproducible details: device model, operating-system version, connection type and the exact error shown." },
  { icon: ShieldCheck, title: "Responsible use", desc: "IPTV technology must be used with authorized subscriptions and in accordance with the rights attached to each programme." },
  { icon: BookOpenCheck, title: "Useful guidance", desc: "Our guides separate installation, activation and network troubleshooting so customers can find the right answer quickly." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/a-propos") },
  ],
}

export default function AProposPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">Who we are</span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">About doubleclick iptv</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide straightforward guidance for setting up compatible IPTV players, activating customer accounts and solving common playback problems.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white">Our mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                IPTV setup can be confusing because each television, phone and computer uses different software. Our mission is to make the technical steps understandable: identify the platform, install a suitable player, enter account credentials securely and test the connection before changing advanced settings.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We publish focused resources for device compatibility, installation, activation, picture quality and network troubleshooting. When a guide cannot resolve a problem, customers can contact support with the information needed for a useful diagnosis.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10"><value.icon className="h-6 w-6 text-brand" /></div>
                  <h2 className="mt-4 text-lg font-semibold text-white">{value.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <h2 className="text-xl font-bold text-white">Legal and responsible streaming</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                IPTV is a delivery technology. Customers are responsible for using authorized services and content in accordance with applicable law and the provider’s terms. Our setup material does not grant rights to third-party programmes or replace advice from a qualified legal professional.
              </p>
              <Link href="/blog/is-iptv-legal" className="mt-4 inline-block text-brand hover:underline">Read our responsible-use overview</Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">How to contact us</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                For installation or account questions, use our <Link href="/support" className="text-brand hover:underline">support centre</Link> or <Link href="/contact" className="text-brand hover:underline">contact page</Link>. Include your device model, operating-system version and a description of the step that failed. Never post your password or complete playlist address publicly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Find the right setup guidance" subtitle="Start with the installation guide, or contact support with your device details if you are already experiencing a problem." />
    </>
  )
}
