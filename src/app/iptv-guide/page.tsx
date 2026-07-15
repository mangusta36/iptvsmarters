import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Complete IPTV Guide - Everything About IPTV in 2026",
  description: "Complete IPTV guide: definition, how it works, required equipment, apps, HD/4K quality, VOD, catch-up TV and optimisation tips. Everything you need to know about IPTV streaming.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "Complete IPTV Guide - Everything About IPTV in 2026",
    description: "Complete IPTV guide: definition, how it works, equipment, apps, HD/4K quality, VOD, catch-up TV and optimisation tips.",
    url: absoluteUrl("/iptv-guide"),
  },
  alternates: { canonical: absoluteUrl("/iptv-guide") },
}

const faqItems = [
  { question: "What exactly is IPTV?", answer: "IPTV (Internet Protocol Television) is a technology that delivers TV channels via an Internet connection, rather than through traditional means like satellite, cable or terrestrial broadcast." },
  { question: "What equipment is needed for IPTV?", answer: "An Internet connection (10 Mbps minimum), a compatible device (Smart TV, Android TV, iPhone, PC) and an IPTV subscription. No expensive additional equipment is required." },
  { question: "What is the difference between IPTV and Netflix?", answer: "IPTV streams live TV channels (like a traditional TV package) with catch-up TV and VOD. Netflix is a VOD-only service without live channels." },
  { question: "Is IPTV legal?", answer: "IPTV is a legal technology. The legality depends on the content being streamed: IPTV services that respect copyright are perfectly legal." },
  { question: "Can I keep my current Internet subscription?", answer: "Yes, IPTV works with any Internet service provider. No change of router or operator is needed." },
  { question: "What Internet speed for IPTV?", answer: "5-10 Mbps for HD, 10-15 Mbps for Full HD, 25+ Mbps for 4K. The higher your speed, the better the quality." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Guide", item: absoluteUrl("/iptv-guide") },
  ],
}

export default function GuideIPTVPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Complete Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Complete IPTV Guide</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about IPTV: definition, how it works, required equipment,
                installation, image quality, VOD, catch-up TV and optimisation tips. Whether you are a beginner
                or an experienced user, this guide walks you through step by step to get the most out of IPTV.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">What is IPTV?</h2>
              <p className="mt-2 text-muted-foreground">
                IPTV (Internet Protocol Television) is a technology that delivers TV channels via an Internet
                connection, rather than through traditional means (satellite, cable, terrestrial).
                Contrary to popular belief, IPTV is not a single service: it is a technology
                used by many providers to offer you thousands of live channels.
              </p>
              <p className="mt-4 text-muted-foreground">
                With IPTV, you are no longer limited by geographical constraints or traditional TV packages.
                You can watch your favourite channels from any Internet-connected device:
                Smart TV, smartphone, tablet, PC or TV box. IPTV is a great replacement for satellite
                and cable subscriptions, which are often more expensive and less flexible.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">How does IPTV work?</h2>
              <p className="mt-2 text-muted-foreground">
                The principle is simple: your IPTV provider streams TV channels as video feeds over the
                Internet. You connect to these feeds via a dedicated app (doubleclick iptv, VLC, TiviMate)
                using your login credentials (Xtream Codes) or an M3U list. The streams are delivered
                in real time, with latency typically under 30 seconds compared to live broadcast.
              </p>
              <p className="mt-4 text-muted-foreground">
                The app you use (like doubleclick iptv) acts as an interface between you and your provider&apos;s
                server. It organises channels by categories, displays the programme guide (EPG),
                and gives you access to advanced features like catch-up TV and VOD.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Equipment needed for IPTV</h2>
              <p className="mt-2 text-muted-foreground">
                One of the great advantages of IPTV is its simplicity. Here is what you need:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Internet connection:</strong> 10 Mbps minimum for HD, 25+ Mbps for 4K. A wired connection is recommended.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Compatible device:</strong> Smart TV (Samsung, LG, Sony), Android TV, iPhone/iPad, PC Windows/Mac, Fire TV Stick, Apple TV
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">IPTV app:</strong> doubleclick iptv is available for free on all app stores
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">IPTV subscription:</strong> choose a <Link href="/abonnement" className="text-brand hover:underline">plan that suits</Link> your needs
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Check our device-specific guides for detailed installation:
                <Link href="/iptv-smart-tv" className="text-brand hover:underline"> Smart TV</Link>,
                <Link href="/iptv-android" className="text-brand hover:underline"> Android</Link>,
                <Link href="/iptv-iphone" className="text-brand hover:underline"> iPhone/iPad</Link>,
                <Link href="/iptv-windows" className="text-brand hover:underline"> Windows</Link>,
                <Link href="/iptv-mac" className="text-brand hover:underline"> Mac</Link>.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">IPTV apps: which one to choose?</h2>
              <p className="mt-2 text-muted-foreground">
                Choosing the right app is crucial for a great IPTV experience. Here are the best
                apps available:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">doubleclick iptv:</strong> the most complete app, supports Xtream Codes, built-in EPG, VOD, catch-up TV. Available on all devices.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">TiviMate:</strong> excellent app for Android TV, polished and customisable interface.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">VLC Media Player:</strong> free and lightweight, plays M3U streams. Perfect for Windows and Mac.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">IINA:</strong> modern player for Mac, native interface and M3U support.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Image quality: HD, Full HD and 4K</h2>
              <p className="mt-2 text-muted-foreground">
                Stream quality depends on the authorized source, player, device and connection.
                HD commonly refers to 720p, Full HD to 1080p and 4K to 2160p. Some players can
                adapt quality automatically when the source provides multiple options.
              </p>
              <p className="mt-4 text-muted-foreground">
                Check out our dedicated pages for <Link href="/iptv-hd" className="text-brand hover:underline">HD quality</Link> and
                <Link href="/iptv-4k" className="text-brand hover:underline"> Ultra HD 4K</Link> for more
                information on recommended speeds and compatible equipment.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Advanced features: Catch-up TV, VOD, EPG</h2>
              <p className="mt-2 text-muted-foreground">
                Beyond live TV, modern IPTV offers features that enrich your experience.
                <Link href="/iptv-replay" className="text-brand hover:underline"> Catch-up TV (replay)</Link> lets
                you watch programmes up to 7 days after broadcast.
                <Link href="/iptv-vod" className="text-brand hover:underline"> VOD</Link> explains on-demand
                categories and playback. EPG and catch-up availability depend on the authorized provider.
              </p>
              <p className="mt-4 text-muted-foreground">
                All these features are accessible directly from doubleclick iptv. The app
                also includes timeshift (pause live TV) and favourites management.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Optimisation tips</h2>
              <p className="mt-2 text-muted-foreground">
                For an optimal IPTV experience, follow these tips:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Use an Ethernet connection rather than Wi-Fi for better stability
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Close background apps that consume bandwidth
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Choose a server close to your location to reduce latency
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Regularly update your IPTV app and your TV firmware
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  For 4K streaming, use a connection of at least 50 Mbps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Compare compatible players in our <Link href="/blog/iptv-players-comparison" className="text-brand hover:underline">player guide</Link>, learn about <Link href="/blog/iptv-4k-ultra-hd-streaming" className="text-brand hover:underline">4K bitrate and device requirements</Link>, or contact <Link href="/support" className="text-brand hover:underline">support</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Ready to discover IPTV with doubleclick iptv?"
        subtitle="Use this beginner hub to choose a device, understand installation and find the right specialist guide."
      />
    </>
  )
}
