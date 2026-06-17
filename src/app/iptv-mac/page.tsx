import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Mac - Watch IPTV on macOS (MacBook, iMac, Mac Mini)",
  description: "Complete guide to install and set up IPTV on Mac and MacBook. Use doubleclick iptv, VLC or IINA on macOS to enjoy your favourite channels with a premium IPTV service.",
  openGraph: {
    title: "IPTV Mac - Watch IPTV on macOS (MacBook, iMac, Mac Mini)",
    description: "Complete guide to install and set up IPTV on Mac and MacBook. Use doubleclick iptv, VLC or IINA on macOS.",
    url: absoluteUrl("/iptv-mac"),
  },
  alternates: { canonical: absoluteUrl("/iptv-mac") },
}

const faqItems = [
  { question: "How to install doubleclick iptv on Mac?", answer: "Download doubleclick iptv from the Mac App Store. Open the app and log in with your Xtream Codes or M3U credentials." },
  { question: "Is IINA a good IPTV player for Mac?", answer: "Yes, IINA is a modern video player for macOS that perfectly supports M3U lists. It offers a native and elegant interface." },
  { question: "Can I use VLC for IPTV on Mac?", answer: "Yes, VLC works on Mac. Open VLC, go to File > Open Network Stream and paste your M3U URL." },
  { question: "Is there a Mac version of MyIPTV Player?", answer: "MyIPTV Player is not available on Mac. The best options are doubleclick iptv, VLC and IINA." },
  { question: "How to configure Xtream Codes on Mac?", answer: "In doubleclick iptv, select 'Xtream Codes API' and enter the URL, username and password from your subscription." },
  { question: "Do I need a recent Mac for IPTV?", answer: "No, even older Macs with Intel processors can stream IPTV in HD. Mac M1/M2/M3 provide a smooth 4K experience." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Mac", item: absoluteUrl("/iptv-mac") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install doubleclick iptv on Mac",
  step: [
    { "@type": "HowToStep", position: 1, name: "Open the Mac App Store", text: "Click the App Store icon in your Mac's Dock." },
    { "@type": "HowToStep", position: 2, name: "Search for doubleclick iptv", text: "Type 'doubleclick iptv' in the search bar." },
    { "@type": "HowToStep", position: 3, name: "Download the app", text: "Click Get then Install to download the app." },
    { "@type": "HowToStep", position: 4, name: "Launch setup", text: "Open doubleclick iptv from the Applications folder." },
    { "@type": "HowToStep", position: 5, name: "Connect your subscription", text: "Choose Xtream Codes or M3U and enter your credentials." },
  ],
}

export default function IPTVMacPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              macOS Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV on Mac</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy IPTV on your Mac, MacBook, iMac or Mac Mini with the best apps available
              on macOS. Whether you use an Intel or Apple Silicon (M1, M2, M3) processor, our guide explains
              how to install and set up doubleclick iptv, VLC or IINA to watch your favourite channels.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Prerequisites for IPTV on Mac</h2>
              <p className="mt-2 text-muted-foreground">
                Before installing an IPTV app on your Mac, check the following:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A Mac running macOS 11 Big Sur or later
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A stable Internet connection (Ethernet recommended for 4K)
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  An active <Link href="/abonnement" className="text-brand hover:underline">doubleclick iptv subscription</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Your Xtream Codes credentials or M3U link
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Installing doubleclick iptv on Mac</h2>
              <p className="mt-2 text-muted-foreground">
                doubleclick iptv is available for free on the Mac App Store. Open the App Store from your Dock,
                search for &ldquo;doubleclick iptv&rdquo; and click Get then Install. The app is
                compatible with Intel and Apple Silicon Macs (M1, M2, M3) and offers a native interface optimised for macOS.
              </p>
              <p className="mt-4 text-muted-foreground">
                After installation, launch doubleclick iptv from the Applications folder. The app
                prompts you to connect via Xtream Codes or M3U list. Enter your credentials and get immediate
                access to your live channels, VOD and EPG guide.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Alternatives: VLC and IINA for Mac</h2>
              <p className="mt-2 text-muted-foreground">
                If you prefer a lightweight solution, VLC Media Player is available for free on Mac from
                the VideoLAN official website. Open VLC, go to File &gt; Open Network Stream and paste
                your M3U URL. VLC supports timeshift and recording.
              </p>
              <p className="mt-4 text-muted-foreground">
                IINA is an excellent modern alternative, specially designed for macOS. This open-source video player
                offers a native interface, Touch Bar support, and perfect integration with macOS
                features like Picture-in-Picture. IINA plays M3U lists and supports subtitles.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Xtream Codes setup on Mac</h2>
              <p className="mt-2 text-muted-foreground">
                In doubleclick iptv for Mac, select &ldquo;Xtream Codes API&rdquo; from the login screen.
                Enter the information provided during your <Link href="/abonnement" className="text-brand hover:underline">registration</Link>:
                the server URL, your username and your password. The Xtream Codes connection is
                recommended as it offers faster channel loading, automatic organisation into categories,
                and access to the full EPG guide.
              </p>
              <p className="mt-4 text-muted-foreground">
                If you are using an M3U list, simply paste the provided URL into the corresponding field.
                The app will automatically load all channels and VOD.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Optimisation for Apple Silicon Macs</h2>
              <p className="mt-2 text-muted-foreground">
                Macs equipped with Apple Silicon chips (M1, M2, M3) offer exceptional performance for
                IPTV streaming. Hardware video decoding enables smooth 4K playback with minimal power
                consumption. Native Apple Silicon apps deliver the best performance.
              </p>
              <p className="mt-4 text-muted-foreground">
                If you use a MacBook, power saving mode may reduce video quality. For an
                optimal experience, plug in your Mac and use an external 4K screen if available.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Troubleshooting on Mac</h2>
              <p className="mt-2 text-muted-foreground">
                Solutions to common problems on macOS:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">App won&apos;t open:</strong> check that macOS is up to date and the app was downloaded from the Mac App Store.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Playback issues:</strong> reduce quality to HD, switch to Ethernet, or disable any VPN.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Connection error:</strong> check your credentials and your <Link href="/abonnement" className="text-brand hover:underline">subscription</Link> status.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Check our <Link href="/faq" className="text-brand hover:underline">FAQ</Link> or contact our <Link href="/support" className="text-brand hover:underline">technical support</Link> on WhatsApp.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV on Mac</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Also see our guide for <Link href="/iptv-windows" className="text-brand hover:underline">IPTV on Windows</Link> and the <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Watch IPTV on your Mac today"
        subtitle="Enjoy thousands of live channels, VOD and catch-up TV on your Mac. Contact us on WhatsApp to discover our offers."
      />
    </>
  )
}
