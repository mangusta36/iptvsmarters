import type { Metadata } from "next"
import { Users, Tv, HeadphonesIcon, Award, Globe, ShieldCheck, Star, Heart } from "lucide-react"
import SchemaMarkup from "@/components/SchemaMarkup"
import CTASection from "@/components/CTASection"
import Testimonials from "@/components/Testimonials"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About - Premium IPTV Service",
  description: "Discover doubleclick iptv: your premium iptv partner. Over 5 years experience, 10,000+ satisfied customers, 24/7 support for iptv subscription and streaming.",
  openGraph: {
    title: "About doubleclick iptv",
    description: "Discover doubleclick iptv: over 5 years experience, 10,000+ satisfied customers, 24/7 support. Premium iptv subscription in the UK and worldwide.",
    url: absoluteUrl("/a-propos"),
  },
  alternates: { canonical: absoluteUrl("/a-propos") },
}

const stats = [
  { icon: Tv, value: "25,000+", label: "TV channels available" },
  { icon: Users, value: "10,000+", label: "Satisfied customers" },
  { icon: HeadphonesIcon, value: "24/7", label: "Customer support" },
  { icon: Award, value: "5+", label: "Years experience" },
  { icon: Globe, value: "99.9%", label: "Uptime rate" },
  { icon: Star, value: "4.9/5", label: "Average customer rating" },
]

const values = [
  { icon: ShieldCheck, title: "Reliability", desc: "A stable service with cutting-edge server infrastructure and 99.9% guaranteed uptime for your iptv streaming." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Our customers' satisfaction is our top priority. Responsive and personalised support." },
  { icon: Award, title: "Premium Quality", desc: "HD and 4K streaming without buffering thanks to our exclusive anti-buffer technology." },
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Who are we?
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">About doubleclick iptv</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your trusted partner for premium iptv in the UK and worldwide.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-brand/40">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <s.icon className="h-6 w-6 text-brand" />
                </div>
                <p className="mt-4 text-2xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              doubleclick iptv was born from a passion for television and technology. For over 5 years,
              we have provided our customers with premium access to thousands of TV channels from around the world.
              Based in London, we serve customers across the UK, Europe and beyond.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission: make television accessible to everyone, everywhere and on every device.
              Whether you are at home on your Smart TV or on the go with your smartphone,
              your doubleclick iptv subscription follows you everywhere.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are committed to providing a reliable iptv service with optimal streaming quality,
              responsive customer support available 24/7, and transparent pricing with no commitment.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Our Values</h2>
          <p className="mt-2 text-muted-foreground text-center">What makes doubleclick iptv different.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-brand/40">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10">
                  <v.icon className="h-7 w-7 text-brand" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <CTASection title="Join doubleclick iptv" subtitle="Thousands of customers trust us. Contact us on WhatsApp to discover our iptv subscription plans." />
    </>
  )
}
