import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Sony Bravia - Install doubleclick iptv on Android",
  description: "Complete guide to install doubleclick iptv on your Sony Bravia (Android TV / Google TV). Enjoy thousands of live channels, VOD and 4K with a premium IPTV subscription.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "IPTV Sony Bravia - Install doubleclick iptv on Android TV",
    description: "Complete guide to install doubleclick iptv on your Sony Bravia (Android TV / Google TV). Enjoy thousands of live channels, VOD and 4K.",
    url: absoluteUrl("/iptv-sony"),
  },
  alternates: { canonical: absoluteUrl("/iptv-sony") },
}

const faqItems = [
  { question: "How to install IPTV on my Sony Bravia?", answer: "Sony TVs run on Android TV. Open the Google Play Store on your TV, search for 'doubleclick iptv', install the app and log in with your credentials." },
  { question: "Which Sony models are compatible?", answer: "All Sony Bravia with Android TV or Google TV (2015 models and newer) are compatible with doubleclick iptv." },
  { question: "Can I watch 4K on my Sony Bravia?", answer: "Yes, Sony Bravia with X1 processor or Cognitive Processor XR offer excellent 4K quality for IPTV." },
  { question: "Is the EPG guide available?", answer: "Yes, the programme guide is automatically loaded with the Xtream Codes connection." },
  { question: "Do I need a specific subscription?", answer: "The doubleclick iptv app is free. Choose an IPTV subscription that suits your needs." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Sony", item: absoluteUrl("/iptv-sony") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install doubleclick iptv on Sony Bravia",
  step: [
    { "@type": "HowToStep", position: 1, name: "Open the Google Play Store", text: "From the home screen of your Sony Bravia, open the Google Play Store." },
    { "@type": "HowToStep", position: 2, name: "Search for doubleclick iptv", text: "Type 'doubleclick iptv' in the Play Store search bar." },
    { "@type": "HowToStep", position: 3, name: "Install the app", text: "Select the official app and click Install." },
    { "@type": "HowToStep", position: 4, name: "Configure the service", text: "Open doubleclick iptv, choose Xtream Codes or M3U and log in." },
    { "@type": "HowToStep", position: 5, name: "Start watching", text: "Access your channels, VOD and programme guide." },
  ],
}

export default function IPTVSonyPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Sony Bravia Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV on Sony Bravia</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Enjoy IPTV on your Sony Bravia equipped with Android TV or Google TV. Our complete guide explains
              how to install and set up doubleclick iptv on your Sony TV. Benefit from the X1 or Cognitive
              Processor XR for exceptional image quality.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">Prerequisites for Sony Bravia</h2>
              <p className="mt-2 text-muted-foreground">
                Before installing doubleclick iptv on your Sony Bravia, check the following:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  A Sony Bravia TV with Android TV or Google TV (2015 or newer)
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
                  Your Xtream Codes credentials or M3U URL
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Installation on Sony Bravia Android TV</h2>
              <p className="mt-2 text-muted-foreground">
                Sony Bravia TVs run on Android TV or Google TV, which makes installing doubleclick iptv very
                simple. From your Sony&apos;s home screen, open the Google Play Store. Use the
                search function to find &ldquo;doubleclick iptv&rdquo;. Select the official app and
                click Install.
              </p>
              <p className="mt-4 text-muted-foreground">
                The app downloads and installs automatically. Once complete, you can launch it
                directly from the Play Store or find it in your app list. The interface is
                optimised for remote control and large screen.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Setting up your subscription</h2>
              <p className="mt-2 text-muted-foreground">
                Open doubleclick iptv on your Sony Bravia. Choose your connection method:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Xtream Codes connection:</strong> enter the server URL, username and password. Full access to EPG guide.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">M3U list:</strong> paste the URL of your list provided by your <Link href="/abonnement" className="text-brand hover:underline">provider</Link>.
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Once configured, you access all your live channels, VOD, catch-up TV and programme guide.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Sony technologies for IPTV</h2>
              <p className="mt-2 text-muted-foreground">
                Sony Bravia TVs incorporate advanced technologies that significantly enhance the IPTV experience.
                The X1 processor and Cognitive Processor XR analyse and optimise each image in real time to deliver
                natural colours, deep contrasts and exceptional sharpness. Triluminos technology
                reproduces a wider colour palette than standard screens.
              </p>
              <p className="mt-4 text-muted-foreground">
                For 4K streaming, the XR 4K Upscaling processor automatically improves HD stream resolution
                to near-4K quality. Activate Cinema mode to benefit from optimal image processing
                for IPTV content.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Troubleshooting on Sony Bravia</h2>
              <p className="mt-2 text-muted-foreground">
                Solutions to common problems on Sony Android TV:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Slow Play Store:</strong> clear the Play Store cache in Settings &gt; Apps &gt; Google Play Store &gt; Clear cache.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Stuttering playback:</strong> reduce video quality or switch to an Ethernet connection.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Persistent problem? Check our <Link href="/faq" className="text-brand hover:underline">FAQ</Link> or contact <Link href="/support" className="text-brand hover:underline">support</Link>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about IPTV on Sony</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Also see our <Link href="/iptv-smart-tv" className="text-brand hover:underline">Smart TV guides</Link> and the <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link>.
          </p>
        </div>
      </section>
      <CTASection
        title="Install IPTV on your Sony Bravia"
        subtitle="Enjoy your favourite channels in exceptional quality on your Sony Bravia. Contact us on WhatsApp to discover our offers."
      />
    </>
  )
}
