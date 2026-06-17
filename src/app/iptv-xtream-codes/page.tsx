import type { Metadata } from "next"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Xtream Codes - Complete API Guide",
  description: "Complete guide to Xtream Codes API for doubleclick iptv: step-by-step configuration, advantages over M3U, and tutorial to connect your premium IPTV subscription.",
  openGraph: {
    title: "IPTV Xtream Codes - Complete API Guide",
    description: "Complete guide to Xtream Codes API for doubleclick iptv: step-by-step configuration, advantages over M3U.",
    url: absoluteUrl("/iptv-xtream-codes"),
  },
  alternates: { canonical: absoluteUrl("/iptv-xtream-codes") },
}

const faqItems = [
  { question: "What is Xtream Codes?", answer: "Xtream Codes is an API that connects your doubleclick iptv app to our server securely and in a structured way, with automatic loading of channels, VOD and EPG." },
  { question: "Difference between Xtream Codes and M3U?", answer: "Xtream Codes offers a more stable connection, faster channel loading, category organisation, and access to the built-in EPG guide. M3U is a simple playlist." },
  { question: "How to find my Xtream Codes credentials?", answer: "Your Xtream Codes credentials (server URL, username, password) are provided by email after your doubleclick iptv subscription is validated." },
  { question: "Can I use Xtream Codes on all devices?", answer: "Yes, Xtream Codes is supported by doubleclick iptv on all devices: Samsung/LG/Sony Smart TV, Android, iOS, Windows and Mac." },
  { question: "Why choose Xtream Codes over M3U?", answer: "Xtream Codes offers better stability, faster loading, built-in EPG guide, and automatic category management. Channel updates are instant." },
  { question: "What if Xtream Codes doesn't work?", answer: "Check your credentials, make sure the server URL is correct, and contact our support if the problem persists." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Xtream Codes", item: absoluteUrl("/iptv-xtream-codes") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Configure Xtream Codes in doubleclick iptv",
  step: [
    { "@type": "HowToStep", position: 1, name: "Open doubleclick iptv", text: "Launch the doubleclick iptv app on your device." },
    { "@type": "HowToStep", position: 2, name: "Select Xtream Codes", text: "On the home screen, choose 'Xtream Codes API' as the connection method." },
    { "@type": "HowToStep", position: 3, name: "Enter the server URL", text: "Enter the server URL provided in your activation email." },
    { "@type": "HowToStep", position: 4, name: "Enter your credentials", text: "Enter your username and password." },
    { "@type": "HowToStep", position: 5, name: "Connect and use", text: "Press Connect. The channels, VOD and EPG load automatically." },
  ],
}

export default function IPTVXtreamCodesPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Xtream Codes Guide
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV Xtream Codes</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete guide to Xtream Codes API for doubleclick iptv. Discover how to configure your subscription
              with Xtream Codes for an optimal experience. This connection method offers superior stability,
              fast channel loading, and integrated access to the EPG guide and VOD.
            </p>
          </div>
          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white">What is Xtream Codes?</h2>
              <p className="mt-2 text-muted-foreground">
                Xtream Codes is an application programming interface (API) that allows your doubleclick iptv app to
                connect to your IPTV provider&apos;s servers in a structured and secure way. Unlike a
                simple M3U list, Xtream Codes automatically organises content into categories (live channels,
                VOD, series), loads the programme guide (EPG), and helps manage your account.
              </p>
              <p className="mt-4 text-muted-foreground">
                Originally developed for IPTV resellers, this technology has become the standard
                for modern IPTV apps like doubleclick iptv. It offers a far superior user experience
                to the traditional M3U file.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Step-by-step Xtream Codes setup</h2>
              <p className="mt-2 text-muted-foreground">
                Setting up your subscription with Xtream Codes in doubleclick iptv is simple. Follow these steps:
              </p>
              <ol className="mt-4 space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-black">1</span>
                  <span>Open the doubleclick iptv app on your device (Smart TV, Android, iOS, Windows or Mac)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-black">2</span>
                  <span>On the home screen, select the &ldquo;Xtream Codes API&rdquo; option</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-black">3</span>
                  <span>Enter the server URL from your activation email (e.g. https://yourserver.com:8080)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-black">4</span>
                  <span>Enter your username and password</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-black">5</span>
                  <span>Press the Connect button. The app automatically loads your channels, VOD and EPG guide</span>
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Advantages of Xtream Codes vs M3U</h2>
              <p className="mt-2 text-muted-foreground">
                Here is why Xtream Codes is the recommended connection method for your IPTV subscription:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Stability:</strong> more reliable connection with automatic reconnection on signal loss
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Speed:</strong> instant loading of channels and categories, no file download waiting
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Organisation:</strong> channels automatically sorted by categories, countries, genres
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">EPG guide:</strong> the programme guide is built-in and loads automatically
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Updates:</strong> new channels and content are available instantly, no reconfiguration needed
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Security:</strong> encrypted connection and secure authentication
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Xtream Codes on all your devices</h2>
              <p className="mt-2 text-muted-foreground">
                Xtream Codes works with doubleclick iptv on all compatible devices. Whether you use
                a Samsung Smart TV Tizen, an LG webOS, a Sony Android TV, an Android or iPhone smartphone,
                    a Windows PC or a Mac, the Xtream Codes setup is identical and your credentials are the same.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-samsung" className="text-brand hover:underline">Samsung Smart TV Tizen</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-lg" className="text-brand hover:underline">LG Smart TV webOS</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-sony" className="text-brand hover:underline">Sony Bravia Android TV</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-android" className="text-brand hover:underline">Android TV, smartphone and tablet</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-iphone" className="text-brand hover:underline">iPhone and iPad</Link>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <Link href="/iptv-windows" className="text-brand hover:underline">Windows PC</Link> and <Link href="/iptv-mac" className="text-brand hover:underline">Mac</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Xtream Codes troubleshooting</h2>
              <p className="mt-2 text-muted-foreground">
                Solutions to common problems with Xtream Codes:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Connection error:</strong> check that the server URL is correct (with http:// or https://) and the port is right.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Invalid credentials:</strong> check your username and password. Reset your password if necessary.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <strong className="text-white">Expired subscription:</strong> check your <Link href="/abonnement" className="text-brand hover:underline">subscription</Link> status in your client area.
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  Persistent problem? Contact our <Link href="/support" className="text-brand hover:underline">technical support</Link> on WhatsApp.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions about Xtream Codes</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Check our <Link href="/faq" className="text-brand hover:underline">general FAQ</Link> and our <Link href="/iptv-guide" className="text-brand hover:underline">complete IPTV guide</Link> for more information.
          </p>
        </div>
      </section>
      <CTASection
        title="Configure your Xtream Codes subscription"
        subtitle="Enjoy a stable and fast connection with Xtream Codes API on all your devices. Contact us on WhatsApp."
      />
    </>
  )
}
