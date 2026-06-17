import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV HD and Full HD - High Definition Quality for your channels",
  description: "IPTV HD and Full HD: exceptional image quality for all your channels. Compare HD, Full HD and 4K. Recommended speed and optimisation for the best IPTV streaming experience.",
  openGraph: {
    title: "IPTV HD and Full HD - High Definition Quality for your channels",
    description: "IPTV HD and Full HD: exceptional image quality for all your channels. Compare HD, Full HD and 4K.",
    url: absoluteUrl("/iptv-hd"),
  },
  alternates: { canonical: absoluteUrl("/iptv-hd") },
}

const faqItems = [
  { question: "What is the difference between HD and Full HD?", answer: "HD (720p) offers good quality at 1280x720 pixels. Full HD (1080p) provides a sharper image at 1920x1080 pixels, ideal for screens up to 55 inches." },
  { question: "What Internet speed for IPTV HD?", answer: "5-10 Mbps is enough for HD, 10-15 Mbps for Full HD, and 25 Mbps or more for 4K." },
  { question: "Are all channels available in HD?", answer: "Most of our channels are available in HD (720p) or Full HD (1080p). Some sports and movie channels are also available in 4K." },
  { question: "How to know if a channel is HD?", answer: "In the doubleclick iptv app, HD and Full HD channels are identified by HD or FHD badges in the channel list and EPG guide." },
  { question: "Can I choose the video quality?", answer: "Yes, you can manually select video quality in the playback settings or let the app adjust it automatically." },
  { question: "Is HD included in all subscriptions?", answer: "Yes, all our subscriptions include HD and Full HD channels at no extra cost." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV HD", item: absoluteUrl("/iptv-hd") },
  ],
}

export default function IPTVHDPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              High Definition
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV HD and Full HD</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy exceptional image quality with IPTV HD and Full HD. All our channels
              are broadcast in high definition for an optimal visual experience. Whether you watch sports,
              movies or your favourite series, HD and Full HD quality delivers sharp and detailed images.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Quality levels available on doubleclick iptv</h2>
              <p className="mt-2 text-muted-foreground">
                We offer several quality levels to suit all needs and adapt to your
                Internet connection. Each channel broadcasts at the best possible quality based on your speed:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">SD (480p):</strong> standard quality, recommended speed: 3-5 Mbps
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">HD (720p):</strong> high definition, recommended speed: 5-10 Mbps
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Full HD (1080p):</strong> full high definition, recommended speed: 10-15 Mbps
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">4K UHD (2160p):</strong> ultra high definition, available for selected channels, recommended speed: 25+ Mbps
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">How to choose between HD, Full HD and 4K?</h2>
              <p className="mt-2 text-muted-foreground">
                The choice of quality depends on several factors. Screen size: for TVs
                under 43 inches, HD (720p) already offers excellent quality. For screens between 43 and 65
                inches, Full HD (1080p) is recommended. Above 65 inches, 4K truly shines.
              </p>
              <p className="mt-4 text-muted-foreground">
                Your Internet connection is also key. If you have a speed below 10 Mbps,
                HD will be more stable than Full HD. Above 25 Mbps, you can enjoy 4K without
                issues. The doubleclick iptv app automatically adapts quality based on your speed.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">How to identify HD, Full HD and 4K channels</h2>
              <p className="mt-2 text-muted-foreground">
                In the doubleclick iptv app, channels are clearly identified by their quality. An
                &ldquo;HD&rdquo; badge appears next to 720p channels, &ldquo;FHD&rdquo; for 1080p channels,
                and &ldquo;4K&rdquo; or &ldquo;UHD&rdquo; for ultra high definition channels. You can
                also filter channels by quality from the categories menu.
              </p>
              <p className="mt-4 text-muted-foreground">
                During playback, you can check the current quality by pressing the Info button on your
                remote or accessing the playback settings. The app displays the speed and
                resolution in real time.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Video quality optimisation</h2>
              <p className="mt-2 text-muted-foreground">
                To enjoy the best possible quality, here are some optimisation tips. Use an
                Ethernet connection rather than Wi-Fi to avoid speed fluctuations. If you use Wi-Fi,
                make sure you are close to your router (ideally less than 5 metres).
              </p>
              <p className="mt-4 text-muted-foreground">
                In doubleclick iptv settings, you can choose between &ldquo;Auto quality&rdquo;
                (recommended) or manually select the desired resolution. Auto mode adjusts quality
                in real time to guarantee smooth playback without interruptions. If you experience stuttering, manually
                reduce the quality.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Video quality troubleshooting</h2>
              <p className="mt-2 text-muted-foreground">
                Solutions to video quality problems:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Pixelated image:</strong> quality is too high for your speed. Switch to HD or SD in settings.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Frequent stuttering:</strong> check your connection, close background apps, or switch to Ethernet.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Quality changing by itself:</strong> auto mode adapts quality. Disable it to lock a resolution.
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
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV HD</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Discover our guide on <Link href="/iptv-4k" className="text-brand hover:underline">IPTV 4K Ultra HD</Link> and the <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Enjoy IPTV in High Definition"
        subtitle="All your favourite channels in HD, Full HD and 4K. Optimal quality adapted to your connection. Contact us on WhatsApp."
      />
    </>
  )
}
