import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV LG Smart TV - Install doubleclick iptv on webOS",
  description: "Complete guide to install doubleclick iptv on your LG Smart TV (webOS). Enjoy thousands of channels, VOD and catch-up TV on your LG OLED, NanoCell and UHD TVs with a premium IPTV subscription.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "IPTV LG Smart TV - Install doubleclick iptv on webOS",
    description: "Complete guide to install doubleclick iptv on your LG Smart TV (webOS). Enjoy thousands of channels, VOD and catch-up TV.",
    url: absoluteUrl("/iptv-lg"),
  },
  alternates: { canonical: absoluteUrl("/iptv-lg") },
}

const faqItems = [
  { question: "How to install IPTV on LG Smart TV?", answer: "Open the LG Content Store from your TV, search for 'doubleclick iptv', install the app and log in with your Xtream Codes or M3U credentials." },
  { question: "Are LG webOS TVs compatible?", answer: "Yes, all LG Smart TVs equipped with webOS 3.0 and above (2017 models and newer) are compatible." },
  { question: "Can I use live TV on LG?", answer: "Yes, the doubleclick iptv app on LG supports live TV, catch-up TV, VOD and the full EPG guide." },
  { question: "What is the image quality like on LG OLED?", answer: "LG OLEDs offer perfect blacks and vibrant colours, ideal for IPTV streaming in 4K HDR." },
  { question: "Do I need a paid subscription?", answer: "The doubleclick iptv app is free. Only the IPTV subscription is paid. Check our offers." },
  { question: "What if the app doesn't work?", answer: "Check your Internet connection, update webOS, reinstall the app or contact our support." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV LG", item: absoluteUrl("/iptv-lg") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install doubleclick iptv on LG Smart TV",
  step: [
    { "@type": "HowToStep", position: 1, name: "Open the LG Content Store", text: "Press the Home button on the LG remote and open the LG Content Store." },
    { "@type": "HowToStep", position: 2, name: "Search for doubleclick iptv", text: "Use the search bar to find the doubleclick iptv app." },
    { "@type": "HowToStep", position: 3, name: "Install the app", text: "Select doubleclick iptv and click Install." },
    { "@type": "HowToStep", position: 4, name: "Open and configure", text: "Launch the app and choose Xtream Codes or M3U to connect." },
    { "@type": "HowToStep", position: 5, name: "Enjoy the service", text: "Access your live channels, VOD and programme guide." },
  ],
}

export default function IPTVLGPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              LG webOS Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV on LG Smart TV</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch IPTV on your LG Smart TV equipped with webOS. Our guide explains step by step how to install
              and set up doubleclick iptv on LG TVs, from OLED to NanoCell and UHD models. Enjoy exceptional
              image quality with thousands of live channels, VOD and catch-up TV.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Prerequisites for LG Smart TV</h2>
              <p className="mt-2 text-muted-foreground">
                Before installing doubleclick iptv on your LG Smart TV, make sure you have the following:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  An LG Smart TV with webOS 3.0 or higher (2017+ models)
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A stable Internet connection (10 Mbps HD, 25 Mbps 4K)
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
              <h2 className="text-2xl font-bold text-white">Installation on LG webOS</h2>
              <p className="mt-2 text-muted-foreground">
                Installing doubleclick iptv on an LG Smart TV is simple. From your LG remote, press the
                Home button to access the webOS dashboard. Open the LG Content Store, LG&apos;s official app store.
                Use the search function to find &ldquo;doubleclick iptv&rdquo;.
              </p>
              <p className="mt-4 text-muted-foreground">
                Select the app in the results and click Install. The download and installation happen
                automatically. Once complete, you can launch the app from the webOS dashboard
                or the My Apps section.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Setting up your IPTV account</h2>
              <p className="mt-2 text-muted-foreground">
                Open doubleclick iptv on your LG Smart TV. The app offers two connection methods:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Xtream Codes API:</strong> enter the server URL, your username and password. Recommended method for built-in EPG guide.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">M3U list:</strong> paste the M3U list URL provided by your <Link href="/abonnement" className="text-brand hover:underline">IPTV provider</Link>.
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                After connecting, the app loads all your channels, VOD and EPG guide. You can browse
                categories, create favourites and adjust video quality according to your connection.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Optimisation for LG OLED and NanoCell TVs</h2>
              <p className="mt-2 text-muted-foreground">
                LG OLED TVs offer exceptional image quality for IPTV with their perfect blacks
                and vibrant colours. NanoCell screens improve colour accuracy for an immersive
                visual experience. To fully enjoy these technologies, activate Cinema or Expert mode
                in your LG&apos;s picture settings.
              </p>
              <p className="mt-4 text-muted-foreground">
                For 4K HDR streaming, an Ethernet connection is recommended. LG&apos;s α9 processor automatically
                improves video stream quality, reducing noise and optimising contrast. Make sure
                HDR mode is active in the doubleclick iptv settings.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Troubleshooting on LG webOS</h2>
              <p className="mt-2 text-muted-foreground">
                Solutions to common problems on LG Smart TV:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">App not found:</strong> check that your TV is connected to the Internet and webOS is up to date in Settings &gt; Software Update.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Playback issues:</strong> reduce quality to HD, use an Ethernet connection, or restart your router.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Connection error:</strong> check your credentials and your <Link href="/abonnement" className="text-brand hover:underline">subscription</Link> status.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Check our <Link href="/faq" className="text-brand hover:underline">FAQ</Link> or our <Link href="/support" className="text-brand hover:underline">support</Link>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV on LG</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Also check out our <Link href="/iptv-smart-tv" className="text-brand hover:underline">Smart TV guides</Link> and the <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Ready to enjoy IPTV on your LG?"
        subtitle="Install doubleclick iptv on your LG Smart TV and discover thousands of live channels. Contact us on WhatsApp."
      />
    </>
  )
}
