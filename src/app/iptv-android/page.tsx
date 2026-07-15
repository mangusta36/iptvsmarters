import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Android - Install doubleclick iptv on Android TV & Mobile",
  description: "Complete guide to install doubleclick iptv on Android: smartphone, tablet, Android TV and TV Box. App available on Google Play and as APK for premium IPTV streaming.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "IPTV Android - Install doubleclick iptv on Android TV & Mobile",
    description: "Complete guide to install doubleclick iptv on Android: smartphone, tablet, Android TV and TV Box.",
    url: absoluteUrl("/iptv-android"),
  },
  alternates: { canonical: absoluteUrl("/iptv-android") },
}

const faqItems = [
  { question: "How to install doubleclick iptv on Android?", answer: "Download doubleclick iptv from the Google Play Store or install the APK file. Open the app, enter your Xtream Codes credentials or M3U URL, and enjoy your channels." },
  { question: "Is the app free?", answer: "The doubleclick iptv app is free to download. Only the IPTV service subscription is paid. Contact us on WhatsApp to discover our offers." },
  { question: "Can I use IPTV on Android TV?", answer: "Yes, doubleclick iptv is compatible with Android TV and Google TV. Install it from the Play Store directly on your television." },
  { question: "How to install the doubleclick iptv APK?", answer: "Download the APK file from a trusted source, enable installation from unknown sources in Settings > Security, open the file and install." },
  { question: "What Internet connection for IPTV on Android?", answer: "10 Mbps minimum for HD, 25 Mbps for 4K. Use an Ethernet connection on Android TV for better stability." },
  { question: "Does the app work on all Android TV Boxes?", answer: "Yes, doubleclick iptv works on all Android TV Boxes: Nvidia Shield, Xiaomi Mi Box, Amazon Fire TV Stick, etc." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Android", item: absoluteUrl("/iptv-android") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install doubleclick iptv on Android",
  step: [
    { "@type": "HowToStep", position: 1, name: "Open Google Play Store", text: "On your Android device, open the Google Play Store app." },
    { "@type": "HowToStep", position: 2, name: "Search for doubleclick iptv", text: "Type 'doubleclick iptv' in the search bar and select the official app." },
    { "@type": "HowToStep", position: 3, name: "Install the app", text: "Press the Install button and wait for the download to finish." },
    { "@type": "HowToStep", position: 4, name: "Set up your account", text: "Open doubleclick iptv, choose 'Xtream Codes' or 'M3U URL' and enter your credentials." },
    { "@type": "HowToStep", position: 5, name: "Enjoy the service", text: "Access your live channels, VOD and catch-up TV from the interface." },
  ],
}

export default function IPTVAndroidPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Android Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV on Android</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch your favourite IPTV channels on all your Android devices: smartphones, tablets, Android TV and TV Box.
              The doubleclick iptv app is available for free on the Google Play Store and as an APK file.
              Follow our step-by-step guide for quick installation and optimal setup.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Prerequisites for IPTV on Android</h2>
              <p className="mt-2 text-muted-foreground">
                Before you begin, make sure you have the following to enjoy IPTV on your Android device:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  An Android device (smartphone, tablet, Android TV or TV Box) running Android 5.0 or later
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A stable Internet connection (10 Mbps minimum for HD, 25 Mbps for 4K)
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  An active IPTV subscription with <Link href="/abonnement" className="text-brand hover:underline">doubleclick iptv</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Your Xtream Codes credentials or M3U playlist link provided during activation
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A compatible TV or screen if using Android TV / TV Box
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Installation from Google Play Store</h2>
              <p className="mt-2 text-muted-foreground">
                The easiest and most secure way to install doubleclick iptv on Android is through the Google Play Store. Open the Play Store app on your device, search for &ldquo;doubleclick iptv&rdquo; and select the official app. Press the Install button and wait a few seconds. Once installation is complete, open the app to start setup.
              </p>
              <p className="mt-4 text-muted-foreground">
                For Android TV or Google TV users, the process is identical: open the Google Play Store directly from your television, search for doubleclick iptv and install it. The app is optimised for remote controls and displays perfectly on large screens.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Manual installation via APK file</h2>
              <p className="mt-2 text-muted-foreground">
                If the Google Play Store is not available on your device or you prefer a manual installation, you can download the doubleclick iptv APK file. Visit the official website or a trusted source to get the file. Before proceeding with installation, enable &ldquo;Install from unknown sources&rdquo; in your device&apos;s security settings.
              </p>
              <p className="mt-4 text-muted-foreground">
                Open the downloaded APK file, confirm the installation and wait. This method is particularly useful for Android TV Boxes that don&apos;t have access to the Play Store, or to install a specific version of the app.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Setting up your subscription</h2>
              <p className="mt-2 text-muted-foreground">
                After installing doubleclick iptv, open the app. You will have the choice between two connection methods:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Xtream Codes API:</strong> enter the server URL, your username and password. This method offers faster loading and a built-in EPG guide.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">M3U URL:</strong> paste your M3U playlist link provided by your <Link href="/abonnement" className="text-brand hover:underline">IPTV provider</Link>.
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Once connected, the app automatically loads your live channels, VOD catalogue and programme guide. You can customise the display, create favourite lists and adjust playback settings.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Optimisation for Android TV and TV Box</h2>
              <p className="mt-2 text-muted-foreground">
                For an optimal experience on Android TV or TV Box, use an Ethernet connection rather than Wi-Fi. Wired connection reduces latency and dropouts, which is especially important for 4K streaming. Also ensure your device is updated with the latest Android version.
              </p>
              <p className="mt-4 text-muted-foreground">
                If you use a projector or compatible screen, doubleclick iptv automatically adapts to your display resolution. For Nvidia Shield or Xiaomi Mi Box users, enable AI image processing to improve streaming quality.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Troubleshooting on Android</h2>
              <p className="mt-2 text-muted-foreground">
                If you encounter issues with doubleclick iptv on Android, here are some solutions to common problems:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">App won&apos;t open:</strong> check that your device is compatible (Android 5.0+), clear the app cache or reinstall it.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Channels freezing:</strong> reduce video quality in playback settings, switch to a wired connection, or contact our <Link href="/support" className="text-brand hover:underline">technical support</Link>.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Connection error:</strong> check your Xtream Codes credentials or M3U URL, make sure your subscription is active.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Check our <Link href="/faq" className="text-brand hover:underline">full FAQ</Link> or contact us on <Link href="/contact" className="text-brand hover:underline">WhatsApp</Link>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV on Android</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Have other questions? Check our <Link href="/faq" className="text-brand hover:underline">FAQ page</Link> or our <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Ready to install doubleclick iptv on Android?"
        subtitle="Enjoy thousands of live channels, VOD and catch-up TV on your Android device today. Contact us on WhatsApp."
      />
    </>
  )
}
