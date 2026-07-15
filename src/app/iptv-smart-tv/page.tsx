import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Smart TV - Watch IPTV on all Smart TVs",
  description: "Complete guide to install and set up doubleclick iptv on all Smart TVs: Samsung Tizen, LG webOS, Sony Android TV, Philips and more. Premium IPTV setup for your smart TV.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "IPTV Smart TV - Watch IPTV on all Smart TVs",
    description: "Complete guide to install and set up doubleclick iptv on all Smart TVs: Samsung, LG, Sony, Philips.",
    url: absoluteUrl("/iptv-smart-tv"),
  },
  alternates: { canonical: absoluteUrl("/iptv-smart-tv") },
}

const faqItems = [
  { question: "Which Smart TVs are compatible with doubleclick iptv?", answer: "All recent Smart TVs are compatible: Samsung (Tizen), LG (webOS), Sony (Android TV), Philips (Android TV), and TVs with built-in Fire TV." },
  { question: "Do I need to install an app?", answer: "Yes, you need to install doubleclick iptv from your TV's app store (Samsung Smart Hub, LG Content Store, Google Play Store)." },
  { question: "Can I use IPTV without a Smart TV?", answer: "Yes, you can use an Android TV box, Fire TV Stick, Apple TV, or connect your PC to your TV via HDMI." },
  { question: "What Internet connection for IPTV on Smart TV?", answer: "10 Mbps minimum for HD, 25 Mbps for 4K. Ethernet connection is recommended for better stability." },
  { question: "Is the doubleclick iptv app free?", answer: "Yes, the app is free on all app stores. Only the IPTV subscription is paid." },
  { question: "Can I use catch-up TV on Smart TV?", answer: "Yes, doubleclick iptv supports catch-up TV (replay), VOD and EPG guide on all compatible Smart TVs." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Smart TV", item: absoluteUrl("/iptv-smart-tv") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install doubleclick iptv on a Smart TV",
  step: [
    { "@type": "HowToStep", position: 1, name: "Identify your operating system", text: "Check if your Smart TV uses Tizen (Samsung), webOS (LG) or Android TV (Sony, Philips)." },
    { "@type": "HowToStep", position: 2, name: "Open the app store", text: "Access your TV's app store: Smart Hub, Content Store or Google Play." },
    { "@type": "HowToStep", position: 3, name: "Install doubleclick iptv", text: "Search for 'doubleclick iptv' and install the official app." },
    { "@type": "HowToStep", position: 4, name: "Set up your subscription", text: "Open the app, choose Xtream Codes or M3U and enter your credentials." },
    { "@type": "HowToStep", position: 5, name: "Enjoy the service", text: "Access your channels, VOD and EPG guide directly from your TV." },
  ],
}

export default function IPTVSmartTVPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Smart TV Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV on Smart TV</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how to enjoy IPTV on your Smart TV, regardless of brand. Samsung, LG, Sony,
              Philips or Android TV: our complete guide explains how to install and set up doubleclick iptv
              on all connected TVs on the market. Transform your Smart TV into the ultimate entertainment hub.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">How does IPTV work on Smart TV?</h2>
              <p className="mt-2 text-muted-foreground">
                IPTV (Internet Protocol Television) delivers TV channels via your Internet
                connection. On a Smart TV, you simply need to install a dedicated app like doubleclick iptv
                from your TV&apos;s app store. Once the app is installed and your subscription
                configured, you access thousands of live channels, VOD and catch-up TV.
              </p>
              <p className="mt-4 text-muted-foreground">
                Unlike traditional methods (satellite, cable, terrestrial), IPTV offers total
                flexibility: choose your channels, watch on demand, and enjoy HD or 4K quality
                without schedule constraints. No more expensive traditional TV package subscriptions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Guides by Smart TV brand</h2>
              <p className="mt-2 text-muted-foreground">
                Each Smart TV brand uses a different operating system. Check the specific guide
                for your TV:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Samsung Tizen", href: "/iptv-samsung", desc: "Smart Hub and Tizen OS" },
                  { name: "LG webOS", href: "/iptv-lg", desc: "LG Content Store" },
                  { name: "Sony Bravia", href: "/iptv-sony", desc: "Android TV / Google TV" },
                  { name: "Android TV", href: "/iptv-android", desc: "Google Play Store" },
                ].map((b) => (
                  <Link key={b.name} href={b.href} className="rounded-lg border border-border bg-card p-4 text-center hover:border-brand/50 transition-colors">
                    <span className="font-medium text-white">{b.name}</span>
                    <p className="mt-1 text-xs text-muted-foreground">{b.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Alternatives for non-Smart TVs</h2>
              <p className="mt-2 text-muted-foreground">
                If your TV is not a Smart TV or doesn&apos;t support doubleclick iptv, several solutions
                are available. Android TV boxes like Nvidia Shield, Xiaomi Mi Box or Google Chromecast
                with Google TV turn any TV into a Smart TV. Amazon&apos;s Fire TV Stick
                is also an excellent budget option.
              </p>
              <p className="mt-4 text-muted-foreground">
                You can also connect your PC or Mac to your TV via HDMI to use doubleclick iptv
                on the big screen. Check our guides for <Link href="/iptv-windows" className="text-brand hover:underline">Windows</Link> and <Link href="/iptv-mac" className="text-brand hover:underline">Mac</Link>.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Optimising the Smart TV experience</h2>
              <p className="mt-2 text-muted-foreground">
                For an optimal IPTV experience on your Smart TV, use an Ethernet connection rather than
                Wi-Fi. Wired connection offers better stability, essential for HD and 4K streaming.
                If you must use Wi-Fi, place your Internet router near the TV.
              </p>
              <p className="mt-4 text-muted-foreground">
                Also check that your Smart TV firmware is up to date. Software updates often bring
                performance improvements and better app compatibility. Enable automatic updates
                in your TV settings.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Smart TV troubleshooting</h2>
              <p className="mt-2 text-muted-foreground">
                Solutions to common problems on Smart TV:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">App not found:</strong> check that your TV is connected to the Internet and the firmware is up to date.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Unstable playback:</strong> reduce video quality, switch to Ethernet, or restart your Internet router.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Connection problem:</strong> check your credentials and your <Link href="/abonnement" className="text-brand hover:underline">subscription</Link> status.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Need help? Check our <Link href="/faq" className="text-brand hover:underline">FAQ</Link> or contact our <Link href="/support" className="text-brand hover:underline">support</Link>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV on Smart TV</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Check our detailed guides for each brand or our <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Ready to install IPTV on your Smart TV?"
        subtitle="Enjoy thousands of live channels on your connected TV. Contact us on WhatsApp to discover our offers."
      />
    </>
  )
}
