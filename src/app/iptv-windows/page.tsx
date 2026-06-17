import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Windows - Watch IPTV on PC Windows 10 and 11",
  description: "Complete guide to install and set up IPTV on Windows 10 and 11. Use doubleclick iptv, VLC or MyIPTV Player on your PC to watch your favourite channels with a premium IPTV service.",
  openGraph: {
    title: "IPTV Windows - Watch IPTV on PC Windows 10 and 11",
    description: "Complete guide to install and set up IPTV on Windows 10 and 11. Use doubleclick iptv, VLC or MyIPTV Player.",
    url: absoluteUrl("/iptv-windows"),
  },
  alternates: { canonical: absoluteUrl("/iptv-windows") },
}

const faqItems = [
  { question: "How to install doubleclick iptv on Windows?", answer: "Download doubleclick iptv from the Microsoft Store or our official website. Install, open the app and log in with your Xtream Codes or M3U credentials." },
  { question: "Can I use VLC for IPTV on PC?", answer: "Yes, VLC media player plays M3U streams. Open VLC, go to 'Media > Open Network Stream' and paste your M3U URL." },
  { question: "Which IPTV app should I choose on Windows?", answer: "doubleclick iptv is the most complete app with a modern interface and EPG. VLC is lightweight and free. MyIPTV Player offers an integrated programme guide." },
  { question: "Is there a Mac version of these apps?", answer: "Yes, doubleclick iptv is available on the Mac App Store. Check our guide for IPTV on Mac." },
  { question: "How to configure Xtream Codes on Windows?", answer: "In doubleclick iptv, select 'Xtream Codes API', enter the server URL, your username and password provided with your subscription." },
  { question: "What Internet speed for IPTV on PC?", answer: "10 Mbps is enough for HD, 25 Mbps for 4K. A wired connection is recommended for stability." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Windows", item: absoluteUrl("/iptv-windows") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install doubleclick iptv on Windows",
  step: [
    { "@type": "HowToStep", position: 1, name: "Open the Microsoft Store", text: "Click the Start button and open the Microsoft Store." },
    { "@type": "HowToStep", position: 2, name: "Search for doubleclick iptv", text: "Type 'doubleclick iptv' in the Store search bar." },
    { "@type": "HowToStep", position: 3, name: "Install the app", text: "Click Install to download the app." },
    { "@type": "HowToStep", position: 4, name: "Set up your account", text: "Open doubleclick iptv and log in with Xtream Codes or M3U." },
    { "@type": "HowToStep", position: 5, name: "Enjoy the service", text: "Access your live channels, VOD and EPG guide." },
  ],
}

export default function IPTVWindowsPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Windows Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV on Windows</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch IPTV on your Windows 10 or 11 PC with the best apps available. Whether you
              choose doubleclick iptv, VLC or MyIPTV Player, our guide explains everything to install and set up
              your IPTV subscription on Windows. Enjoy live channels, VOD and catch-up TV directly on your computer.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Prerequisites for IPTV on Windows</h2>
              <p className="mt-2 text-muted-foreground">
                Before installing an IPTV app on your Windows PC, check the following prerequisites:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A PC running Windows 10 or Windows 11 (64-bit version recommended)
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
                  Your Xtream Codes credentials or M3U list URL
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">doubleclick iptv from the Microsoft Store</h2>
              <p className="mt-2 text-muted-foreground">
                The easiest way to install doubleclick iptv on Windows is through the Microsoft Store.
                Open the Store from your taskbar or Start menu, search for &ldquo;doubleclick iptv&rdquo;,
                and click Install. The official app is free and regularly updated.
              </p>
              <p className="mt-4 text-muted-foreground">
                Once installed, launch doubleclick iptv. The modern and intuitive interface lets you choose between
                an Xtream Codes connection or an M3U list. Enter your credentials and get immediate access to
                your full subscription.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Using VLC Media Player for IPTV</h2>
              <p className="mt-2 text-muted-foreground">
                VLC Media Player is a free and lightweight alternative for playing IPTV streams on Windows. Open VLC,
                go to the &ldquo;Media&rdquo; menu then &ldquo;Open Network Stream&rdquo;. Paste your M3U URL
                and VLC automatically loads your channel list. You can browse the playlist by pulling
                out the side panel.
              </p>
              <p className="mt-4 text-muted-foreground">
                VLC also supports timeshift (pause live TV) and stream recording. Although
                less feature-rich than doubleclick iptv, VLC remains an excellent option for simple use.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">MyIPTV Player and other alternatives</h2>
              <p className="mt-2 text-muted-foreground">
                MyIPTV Player is another popular app for Windows, available for free on the Microsoft Store.
                It offers a built-in EPG guide, favourites management, and an interface designed for keyboard and mouse.
                Unlike VLC, MyIPTV Player is specialised in IPTV and offers a more polished experience.
              </p>
              <p className="mt-4 text-muted-foreground">
                Other options include Kodi (with the PVR IPTV Simple Client add-on) and IPTVnator,
                a modern Electron-based client. Each app has its advantages: doubleclick iptv remains the
                most complete choice with its native Xtream Codes support and polished interface.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Setup and optimisation on Windows</h2>
              <p className="mt-2 text-muted-foreground">
                To optimise your IPTV experience on Windows, use an Ethernet connection rather than
                Wi-Fi. Close background apps that consume bandwidth (downloads,
                Windows updates, etc.). If you use a VPN, make sure it doesn&apos;t slow down your
                connection too much.
              </p>
              <p className="mt-4 text-muted-foreground">
                For 4K streaming, check that your screen supports 4K resolution and that your processor is
                powerful enough to decode video streams. Intel Core i5 or AMD Ryzen 5 and
                above processors offer a smooth experience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Troubleshooting on Windows</h2>
              <p className="mt-2 text-muted-foreground">
                Solutions to common problems on Windows:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">App won&apos;t install:</strong> check that Windows is up to date and you have enough disk space.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Playback issues:</strong> reduce video quality, disable hardware acceleration in settings.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Connection error:</strong> check your credentials and your <Link href="/abonnement" className="text-brand hover:underline">subscription</Link> status.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Check our <Link href="/faq" className="text-brand hover:underline">FAQ</Link> or our <Link href="/support" className="text-brand hover:underline">technical support</Link>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV on Windows</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Also discover our guide for <Link href="/iptv-mac" className="text-brand hover:underline">IPTV on Mac</Link> and the <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Ready to watch IPTV on your Windows PC?"
        subtitle="Enjoy thousands of live channels on your computer. Contact us on WhatsApp to discover our offers."
      />
    </>
  )
}
