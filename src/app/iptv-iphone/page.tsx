import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV iPhone and iPad - Install doubleclick iptv on iOS",
  description: "Complete guide to install doubleclick iptv on iPhone and iPad. App available on the App Store. Enjoy your IPTV channels on the go with premium IPTV streaming on iOS.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "IPTV iPhone and iPad - Install doubleclick iptv on iOS",
    description: "Complete guide to install doubleclick iptv on iPhone and iPad. Enjoy your IPTV channels on the go on iOS.",
    url: absoluteUrl("/iptv-iphone"),
  },
  alternates: { canonical: absoluteUrl("/iptv-iphone") },
}

const faqItems = [
  { question: "How to install IPTV on iPhone?", answer: "Download doubleclick iptv from the App Store, open the app and log in with your Xtream Codes or M3U credentials." },
  { question: "Is the app compatible with iPad?", answer: "Yes, doubleclick iptv is a universal app that works on iPhone and iPad, with an interface optimised for each screen." },
  { question: "Can I use AirPlay with doubleclick iptv?", answer: "Yes, you can stream IPTV content to your Apple TV or Smart TV via AirPlay from your iPhone or iPad." },
  { question: "Does the app work on 4G/5G?", answer: "Yes, doubleclick iptv works perfectly on 4G and 5G. A 4G+ or 5G connection is recommended for HD streaming." },
  { question: "Do I need a specific subscription for iOS?", answer: "The app is free on the App Store. Only the IPTV subscription is paid. Check our offers." },
  { question: "How to set up the EPG guide on iPhone?", answer: "The EPG guide loads automatically with the Xtream Codes connection. Access it from the Guide tab in the app." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV iPhone", item: absoluteUrl("/iptv-iphone") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install doubleclick iptv on iPhone or iPad",
  step: [
    { "@type": "HowToStep", position: 1, name: "Open the App Store", text: "On your iPhone or iPad, open the App Store." },
    { "@type": "HowToStep", position: 2, name: "Search for doubleclick iptv", text: "Type 'doubleclick iptv' in the search bar." },
    { "@type": "HowToStep", position: 3, name: "Download the app", text: "Press the Get button to download the app." },
    { "@type": "HowToStep", position: 4, name: "Open the app", text: "Launch doubleclick iptv from the home screen." },
    { "@type": "HowToStep", position: 5, name: "Configure and watch", text: "Log in with Xtream Codes or M3U and enjoy your channels." },
  ],
}

export default function IPTViPhonePage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              iOS Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV on iPhone and iPad</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch your favourite IPTV channels on your iPhone or iPad with doubleclick iptv. The app is
              available for free on the App Store and lets you enjoy live channels, VOD and catch-up TV
              wherever you are. Whether on Wi-Fi, 4G or 5G, follow our guide for a quick installation.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Prerequisites for iPhone and iPad</h2>
              <p className="mt-2 text-muted-foreground">
                Before installing doubleclick iptv on your iOS device, check the following:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  An iPhone running iOS 13 or later, or an iPad running iPadOS 13+
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  An Internet connection (Wi-Fi recommended, 4G/5G compatible)
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
              <h2 className="text-2xl font-bold text-white">Installation from the App Store</h2>
              <p className="mt-2 text-muted-foreground">
                Installing doubleclick iptv on iPhone or iPad is simple. Open the App Store, tap
                the Search tab at the bottom right, and type &ldquo;doubleclick iptv&rdquo;. The official
                app appears as the first result. Tap the Get button, then confirm with Face ID,
                Touch ID or your Apple password.
              </p>
              <p className="mt-4 text-muted-foreground">
                Once downloaded, the app installs automatically on your home screen.
                doubleclick iptv is a universal app: a single version works perfectly on iPhone and
                iPad, with an interface adapted to each screen size.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Setting up your subscription</h2>
              <p className="mt-2 text-muted-foreground">
                Open doubleclick iptv on your iPhone or iPad. The welcome screen offers two connection options:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Xtream Codes:</strong> enter the server URL, your username and password. Full access to EPG guide and organised categories.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">M3U URL:</strong> paste your M3U playlist link provided by your <Link href="/abonnement" className="text-brand hover:underline">provider</Link>.
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Once connected, you access your live channels, VOD catalogue, catch-up TV and programme
                guide. The iOS app supports Picture-in-Picture (PiP) to watch your channels while
                using other apps.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Exclusive iOS features</h2>
              <p className="mt-2 text-muted-foreground">
                doubleclick iptv on iOS takes advantage of unique Apple ecosystem features. Picture-in-Picture
                lets you watch your channels in a floating window while browsing other apps.
                AirPlay allows you to stream content to your Apple TV or compatible Smart TV.
              </p>
              <p className="mt-4 text-muted-foreground">
                The app also supports dark mode, subtitles, and background playback.
                You can download the EPG guide for offline viewing and receive notifications
                for your favourite shows.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Mobile streaming (4G/5G)</h2>
              <p className="mt-2 text-muted-foreground">
                doubleclick iptv works perfectly on 4G and 5G. On the go, the app automatically adjusts
                video quality based on your connection speed to avoid interruptions. For an optimal
                experience while travelling, a 4G+ or 5G connection is recommended for HD streaming.
              </p>
              <p className="mt-4 text-muted-foreground">
                Be mindful of your data plan: HD streaming uses approximately 1.5 GB per hour. To save
                data, reduce video quality in the app settings or use the
                &ldquo;Data Saver&rdquo; mode.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Troubleshooting on iOS</h2>
              <p className="mt-2 text-muted-foreground">
                Solutions to common problems on iPhone and iPad:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">App won&apos;t download:</strong> check your Internet connection and available storage space on your device.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Audio/video playback issues:</strong> disable silent mode, check the volume, and restart the app.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">AirPlay not working:</strong> make sure your Apple TV and iPhone are on the same Wi-Fi network.
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
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV on iPhone and iPad</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Also discover our <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link> and our <Link href="/abonnement" className="text-brand hover:underline">subscription offers</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Install doubleclick iptv on your iPhone or iPad"
        subtitle="Enjoy your favourite channels wherever you go. Contact us on WhatsApp to discover our offers."
      />
    </>
  )
}
