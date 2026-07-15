import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV 4K Ultra HD - Premium Streaming in Exceptional Quality",
  description: "IPTV 4K Ultra HD: enjoy ultra high definition streaming. Discover available 4K channels, technical requirements and necessary equipment for premium IPTV streaming.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "IPTV 4K Ultra HD - Premium Streaming in Exceptional Quality",
    description: "IPTV 4K Ultra HD: enjoy ultra high definition streaming. Discover available 4K channels and technical requirements.",
    url: absoluteUrl("/iptv-4k"),
  },
  alternates: { canonical: absoluteUrl("/iptv-4k") },
}

const faqItems = [
  { question: "What Internet speed for IPTV 4K?", answer: "A connection of at least 25 Mbps is recommended for 4K streaming. For an optimal experience with multiple simultaneous streams, use 50 Mbps or more." },
  { question: "Which channels are available in 4K?", answer: "Many sports, movie and documentary channels are available in 4K Ultra HD. Check our catalogue for the full list." },
  { question: "What equipment is needed for 4K?", answer: "A 4K TV, a 4K compatible device (4K Smart TV, 4K Android TV box, Fire TV Stick 4K) and a fast Internet connection." },
  { question: "Does 4K consume more data?", answer: "Yes, 4K streaming uses approximately 7 GB per hour compared to 1.5 GB for HD. Check your Internet plan if you have a data cap." },
  { question: "Does IPTV 4K work on Wi-Fi?", answer: "Yes, but an Ethernet connection is strongly recommended for 4K to avoid interruptions and latency." },
  { question: "Can my HD TV display 4K?", answer: "No, 4K requires a native 4K screen. However, streams can be played in HD resolution on an HD screen." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV 4K", item: absoluteUrl("/iptv-4k") },
  ],
}

export default function IPTV4KPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Ultra HD
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV 4K Ultra HD</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience exceptional streaming with IPTV 4K Ultra HD. Enjoy stunning image
              quality with four times the resolution of Full HD. Discover our sports,
              movie and documentary channels in ultra high definition for an immersive viewing experience.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Technical requirements for IPTV 4K</h2>
              <p className="mt-2 text-muted-foreground">
                To fully enjoy IPTV in 4K Ultra HD, you need the appropriate equipment. Here are the essentials:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">4K TV:</strong> a screen with native resolution of 3840 x 2160 pixels (UHD)
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Internet connection:</strong> 25 Mbps minimum, 50 Mbps recommended for optimal experience
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Compatible device:</strong> 4K Smart TV, 4K Android TV box, Fire TV Stick 4K, Apple TV 4K
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">HDMI cable:</strong> an HDMI 2.0 or 2.1 cable to support 4K bandwidth
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A <Link href="/abonnement" className="text-brand hover:underline">doubleclick iptv subscription</Link> including 4K channels
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Channels available in 4K</h2>
              <p className="mt-2 text-muted-foreground">
                Our IPTV service offers a wide selection of 4K Ultra HD channels covering all genres. Sports
                fans will enjoy 4K broadcasts of the biggest events: football (Champions
                League, Premier League), Formula 1, tennis (Wimbledon), and US sports (NBA, NFL). Movie lovers
                will enjoy the latest releases in 4K HDR.
              </p>
              <p className="mt-4 text-muted-foreground">
                Documentaries and nature channels are also available in 4K for total immersion. The
                4K channels are identified in the EPG guide and can be filtered for easy searching.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">HD vs Full HD vs 4K: what&apos;s the difference?</h2>
              <p className="mt-2 text-muted-foreground">
                Understanding the differences between resolutions helps you choose the quality best suited to your
                connection and equipment:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">HD (720p):</strong> 1280 x 720 pixels. Standard quality, recommended speed 5-10 Mbps.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Full HD (1080p):</strong> 1920 x 1080 pixels. High definition quality, recommended speed 10-15 Mbps.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">4K UHD (2160p):</strong> 3840 x 2160 pixels. Ultra high definition quality, recommended speed 25-50 Mbps.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Optimising your connection for 4K</h2>
              <p className="mt-2 text-muted-foreground">
                For a smooth 4K experience, follow these optimisation tips. Use an Ethernet
                connection rather than Wi-Fi: cable offers consistent stability and bandwidth. If
                Wi-Fi is your only option, move your router closer to your TV or use a Wi-Fi 6
                repeater.
              </p>
              <p className="mt-4 text-muted-foreground">
                Close apps and devices that consume bandwidth during your 4K session.
                Downloads, online gaming and simultaneous streaming on other devices can affect
                quality. If you use a VPN, choose a fast server close to your location.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">IPTV 4K troubleshooting</h2>
              <p className="mt-2 text-muted-foreground">
                Solutions to common 4K problems:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Stuttering image:</strong> your connection is insufficient for 4K. Switch to Full HD in the app settings.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Black screen:</strong> check that your TV supports HDCP 2.2 and your HDMI cable is 4K compatible.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Fluctuating quality:</strong> the app automatically adapts quality. Check your speed and reduce other Internet usage.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Need help? Check our <Link href="/faq" className="text-brand hover:underline">FAQ</Link> or contact our <Link href="/support" className="text-brand hover:underline">technical support</Link>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV 4K</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Also see our guide on <Link href="/iptv-hd" className="text-brand hover:underline">HD and Full HD quality</Link> and the <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Upgrade to IPTV 4K Ultra HD"
        subtitle="Enjoy exceptional image quality with our 4K channels. Contact us on WhatsApp to discover our offers."
      />
    </>
  )
}
