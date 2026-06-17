import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Samsung Smart TV - Install doubleclick iptv on Tizen",
  description: "Complete guide to install doubleclick iptv on your Samsung Smart TV (Tizen OS). Enjoy thousands of live channels, VOD and catch-up TV in HD and 4K with a premium IPTV subscription.",
  openGraph: {
    title: "IPTV Samsung Smart TV - Install doubleclick iptv on Tizen",
    description: "Complete guide to install doubleclick iptv on your Samsung Smart TV (Tizen OS). Enjoy thousands of live channels, VOD and catch-up TV.",
    url: absoluteUrl("/iptv-samsung"),
  },
  alternates: { canonical: absoluteUrl("/iptv-samsung") },
}

const faqItems = [
  { question: "How to install IPTV on my Samsung Smart TV?", answer: "Go to the Samsung Smart Hub (App Store), search for 'doubleclick iptv', install the app, open it and enter your Xtream Codes or M3U credentials." },
  { question: "Which Samsung models are compatible?", answer: "All Samsung Smart TVs equipped with Tizen OS (2016 models and newer) are compatible with doubleclick iptv." },
  { question: "Is the app free on Samsung?", answer: "Yes, the doubleclick iptv app is free on the Samsung Smart Hub. Only the IPTV subscription is paid." },
  { question: "Can I watch 4K on my Samsung?", answer: "Yes, Samsung QLED and Neo QLED support IPTV streaming in 4K Ultra HD with exceptional image quality." },
  { question: "How to set up the EPG guide on Samsung?", answer: "The EPG guide loads automatically with the Xtream Codes connection. You can access the programme schedule from the main interface." },
  { question: "What if doubleclick iptv doesn't work on my Samsung?", answer: "Check your Internet connection, update your TV firmware, or contact our technical support via WhatsApp." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Samsung", item: absoluteUrl("/iptv-samsung") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install doubleclick iptv on Samsung Smart TV",
  step: [
    { "@type": "HowToStep", position: 1, name: "Turn on the Samsung Smart TV", text: "Turn on your Samsung TV and press the Smart Hub button on the remote." },
    { "@type": "HowToStep", position: 2, name: "Open the Samsung App Store", text: "Access the Samsung App Store from the Smart Hub menu." },
    { "@type": "HowToStep", position: 3, name: "Search for doubleclick iptv", text: "Use the search bar to find the doubleclick iptv app." },
    { "@type": "HowToStep", position: 4, name: "Install the app", text: "Select doubleclick iptv and press Install." },
    { "@type": "HowToStep", position: 5, name: "Configure and enjoy", text: "Open the app, enter your credentials and access your channels." },
  ],
}

export default function IPTVSamsungPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Samsung Tizen Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV on Samsung Smart TV</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy IPTV directly on your Samsung Smart TV equipped with Tizen OS. Our complete guide explains
              how to install and set up doubleclick iptv in minutes. Benefit from exceptional image quality
              on Samsung QLED, Neo QLED and Crystal UHD screens.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Prerequisites for Samsung Smart TV</h2>
              <p className="mt-2 text-muted-foreground">
                Before installing doubleclick iptv on your Samsung TV, check the following:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A Samsung Smart TV with Tizen OS (2016 or newer)
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A stable Internet connection (Ethernet recommended for 4K)
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  An active IPTV subscription with <Link href="/abonnement" className="text-brand hover:underline">doubleclick iptv</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Your Xtream Codes login credentials or M3U URL
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Step-by-step installation on Samsung Tizen</h2>
              <p className="mt-2 text-muted-foreground">
                Installing doubleclick iptv on a Samsung Smart TV is simple and fast. Turn on your TV and
                press the Smart Hub button on your remote. Access the Samsung App Store, also called
                Samsung Smart Hub, and use the search function to find &ldquo;doubleclick iptv&rdquo;.
              </p>
              <p className="mt-4 text-muted-foreground">
                Select the official doubleclick iptv app in the search results and click Install.
                The app will download and install automatically on your TV. Once installation is complete,
                you can open it directly from the Smart Hub or the Apps section.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Setting up your IPTV subscription</h2>
              <p className="mt-2 text-muted-foreground">
                Open doubleclick iptv on your Samsung Smart TV. The home screen offers two connection options:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Xtream Codes:</strong> enter the server URL, your username and password. This method is recommended for a complete experience with built-in EPG.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">M3U URL:</strong> copy and paste your M3U playlist link provided by your <Link href="/abonnement" className="text-brand hover:underline">provider</Link>.
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Once connected, you will have access to your full subscription: live channels, VOD, catch-up TV and
                programme guide. The interface is optimised for the Samsung remote control.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Optimisation for Samsung QLED and Neo QLED TVs</h2>
              <p className="mt-2 text-muted-foreground">
                Samsung QLED and Neo QLED TVs offer exceptional image quality for IPTV thanks to
                Quantum Dot technology and Mini LED backlighting. To fully enjoy these technologies,
                make sure to activate the appropriate picture mode. The Quantum 4K processor automatically improves
                video stream quality, even at lower resolutions.
              </p>
              <p className="mt-4 text-muted-foreground">
                For 4K streaming, an Ethernet connection is strongly recommended. Wi-Fi may suffice for HD,
                but 4K requires a stable speed of at least 25 Mbps. Also enable Game or Film mode depending
                on your preferences to reduce display latency.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Troubleshooting on Samsung Tizen</h2>
              <p className="mt-2 text-muted-foreground">
                If you encounter problems with doubleclick iptv on your Samsung Smart TV, here are some solutions:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">App not found on Smart Hub:</strong> check that your TV is connected to the Internet and the firmware is up to date in Settings &gt; Support &gt; Software Update.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Playback issues:</strong> reduce video quality in settings, switch from Wi-Fi to Ethernet, or restart your Internet router.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Connection error:</strong> check your credentials and your <Link href="/abonnement" className="text-brand hover:underline">subscription</Link> status.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Check our <Link href="/faq" className="text-brand hover:underline">FAQ</Link> or contact our <Link href="/support" className="text-brand hover:underline">technical support</Link>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV on Samsung</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Check our other <Link href="/iptv-smart-tv" className="text-brand hover:underline">Smart TV guides</Link> or our <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Install IPTV on your Samsung now"
        subtitle="Enjoy your favourite live channels on your Samsung Smart TV. Contact us on WhatsApp to discover our offers."
      />
    </>
  )
}
