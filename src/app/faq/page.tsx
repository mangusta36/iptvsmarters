import type { Metadata } from "next"
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import SchemaMarkup from "@/components/SchemaMarkup"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV FAQ - Frequently Asked Questions 2026",
  description: "Complete doubleclick iptv FAQ: answers about IPTV subscription, installation on Smart TV, Fire Stick, Android, iOS. Channel lists, pricing, device compatibility, troubleshooting, EPG, catch-up TV and more.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "doubleclick iptv FAQ - Frequently Asked Questions",
    description: "All answers about doubleclick iptv streaming, subscription, installation and troubleshooting.",
    url: absoluteUrl("/faq"),
  },
  alternates: { canonical: absoluteUrl("/faq") },
}

const subscriptionFaq = [
  { question: "How do I subscribe to a doubleclick iptv plan?", answer: "Contact us via WhatsApp to choose your offer. Once payment is confirmed, you will receive your login credentials within 24 hours maximum." },
  { question: "What payment methods are accepted for doubleclick iptv?", answer: "We accept PayPal, bank transfer and cryptocurrencies for your doubleclick iptv subscription. Payment is fully secure. Contact us via WhatsApp for more information." },
  { question: "Can I cancel my doubleclick iptv subscription at any time?", answer: "Yes. You can cancel without a cancellation fee. A first purchase may qualify for the seven-day satisfaction guarantee; after that period, cancellation stops future renewal without refunding the current period." },
  { question: "How do I contact doubleclick iptv support?", answer: "Contact us via WhatsApp for any questions. The doubleclick iptv team is available 24/7 to help you with your subscription." },
  { question: "Can I upgrade from one doubleclick iptv plan to another?", answer: "Yes, you can upgrade to a higher doubleclick iptv plan at any time. The difference will be calculated pro rata. Downgrades take effect at renewal." },
  { question: "What is the cost of a doubleclick iptv subscription?", answer: "Our doubleclick iptv plans start from £37 for 3 months. We offer Basic (1 connection), Standard (2 connections) and Ultimate VIP (3 connections)." },
  { question: "Is there a trial available for doubleclick iptv?", answer: "Yes, contact us on WhatsApp to request a trial of doubleclick iptv. We offer a trial period so you can test our service quality before committing." },
  { question: "Do you offer refunds for doubleclick iptv?", answer: "Yes, we offer a 7-day satisfaction guarantee on doubleclick iptv. If you are not happy with our service, contact us for a refund." },
]

const installFaq = [
  { question: "How do I install doubleclick iptv on my Smart TV?", answer: "Installation varies by brand. Samsung uses Tizen OS, LG uses webOS, Sony uses Android TV. Check our dedicated installation guides for detailed step-by-step instructions." },
  { question: "Which app should I use for IPTV streaming?", answer: "We recommend using the doubleclick iptv app, available on Android, iOS, Smart TV and Windows. You can also use VLC, TiviMate or GSE Smart IPTV as alternative players." },
  { question: "How do I set up my doubleclick iptv subscription on the app?", answer: "After receiving your doubleclick iptv credentials (username, password, server URL), open the app, select Xtream Codes API connection type, enter your details and enjoy the IPTV service." },
  { question: "Is the doubleclick iptv installation difficult?", answer: "No, doubleclick iptv installation takes less than 5 minutes. Our support team will guide you step by step if needed via WhatsApp." },
  { question: "How do I install doubleclick iptv on Fire TV Stick?", answer: "You can install the doubleclick iptv app directly from the Amazon Appstore, or sideload it using the Downloader app. Enable Apps from Unknown Sources in Developer Options first." },
  { question: "How do I install doubleclick iptv on iPhone or iPad?", answer: "Download the doubleclick iptv app from the Apple App Store. Open the app, enter your credentials, and start watching." },
  { question: "Can I use M3U playlists or Xtream Codes with doubleclick iptv?", answer: "Both connection methods are supported for doubleclick iptv. Xtream Codes API is recommended for automatic updates and better organisation. M3U is also fully compatible." },
]

const deviceFaq = [
  { question: "Does doubleclick iptv work on Samsung Smart TV?", answer: "Yes, doubleclick iptv is compatible with all recent Samsung Smart TVs running Tizen OS (2017 models and newer)." },
  { question: "Can I watch doubleclick iptv on my iPhone?", answer: "Yes, the doubleclick iptv app is available for free on the App Store for iPhone and iPad running iOS 12 or later." },
  { question: "Does doubleclick iptv work on Fire TV Stick?", answer: "Yes, you can install the doubleclick iptv app on Fire TV Stick via the Amazon App Store or direct download using the Downloader app." },
  { question: "Can I use doubleclick iptv on PC?", answer: "Yes, the doubleclick iptv app is available on Windows (Microsoft Store) and macOS (Mac App Store). VLC Media Player is also a good alternative." },
  { question: "Which devices are compatible with doubleclick iptv?", answer: "Smart TV (Samsung, LG, Sony), Android TV boxes, Fire TV Stick, iPhone/iPad, Windows PC, Mac, Android smartphones and tablets — all compatible with doubleclick iptv." },
  { question: "Does doubleclick iptv work on LG Smart TV?", answer: "Yes, all LG TVs with webOS 3.0 or higher are compatible with doubleclick iptv. Use the Smart IPTV app from the LG Content Store." },
  { question: "Can I watch doubleclick iptv on multiple devices at once?", answer: "Yes, depending on your doubleclick iptv plan: 1, 2 or 3 simultaneous connections. Each device can watch a different channel independently." },
  { question: "Does doubleclick iptv work with Android TV boxes?", answer: "Absolutely. Android TV boxes like NVIDIA Shield, Xiaomi Mi Box, and generic Android boxes all support the doubleclick iptv app." },
]

const featuresFaq = [
  { question: "What is Electronic Program Guide (EPG) on doubleclick iptv?", answer: "EPG shows you what is currently airing and what is coming up next on every channel. It works like a traditional TV guide but integrated directly into your doubleclick iptv app." },
  { question: "What is catch-up TV and replay on doubleclick iptv?", answer: "Catch-up TV on doubleclick iptv lets you watch shows that aired up to 7 days ago. If you missed a program, simply find it in the EPG and click to replay." },
  { question: "What is multi-screen viewing on doubleclick iptv?", answer: "Multi-screen on doubleclick iptv allows you to watch up to 4 channels simultaneously on a single screen, split into quarters. Available on select IPTV apps." },
  { question: "Can I record shows from doubleclick iptv?", answer: "Yes, many IPTV apps support recording with your doubleclick iptv subscription. You can record live shows to your device's storage or external USB drive for later viewing." },
  { question: "Does doubleclick iptv offer Video on Demand (VOD)?", answer: "Yes, doubleclick iptv has an on-demand movie and series catalogue available on demand. Content is updated weekly with the latest releases in HD and 4K." },
  { question: "What internet speed do I need for doubleclick iptv?", answer: "Minimum 10 Mbps for HD streaming, 25 Mbps for 4K Ultra HD on doubleclick iptv. A wired Ethernet connection is recommended over WiFi for the most stable experience." },
  { question: "Can I use IPTV to watch sports?", answer: "A compatible player can display sports streams included in an authorized subscription. Availability depends on the provider's licensed catalogue and your region." },
  { question: "Are there parental controls on doubleclick iptv?", answer: "Yes, most IPTV apps include parental control features with your doubleclick iptv subscription, including PIN-protected channels and content filtering." },
]

const troubleFaq = [
  { question: "What if the screen is black on doubleclick iptv?", answer: "Check your internet connection, restart the app and your device. Verify your doubleclick iptv subscription is active. If the problem persists, contact our support." },
  { question: "Why is my doubleclick iptv connection buffering?", answer: "Buffering can be caused by limited bandwidth, Wi-Fi congestion, background downloads or a temporary service issue. Test with Ethernet, close background apps and reduce video quality." },
  { question: "How can I improve video quality on doubleclick iptv?", answer: "Ensure you have a stable connection (10 Mbps for HD, 25 Mbps for 4K on doubleclick iptv). Use a wired connection rather than WiFi. Select the highest quality in the app settings." },
  { question: "What if doubleclick iptv stops working?", answer: "Check your internet connection, restart the device, reinstall the app. Verify your doubleclick iptv subscription has not expired. If the problem persists, contact our 24/7 support via WhatsApp." },
  { question: "My doubleclick iptv login credentials are not working?", answer: "Check that you have entered them correctly with no typos. Ensure Caps Lock is off. Contact us via WhatsApp for a quick doubleclick iptv password reset if needed." },
  { question: "Channels are loading but no audio on doubleclick iptv?", answer: "Try switching the audio track in the app settings. Some channels broadcast multiple audio languages. Also check your device volume and audio output settings." },
  { question: "Why are some channels missing from my doubleclick iptv list?", answer: "Your playlist may need refreshing. Try updating the channel list in your app settings. If channels are still missing, contact doubleclick iptv support." },
  { question: "Can I use a VPN with an IPTV player?", answer: "A VPN can protect traffic on untrusted networks, but it may also reduce speed. It does not make unauthorized content lawful or replace an authorized subscription." },
]

const allFaqItems = [...subscriptionFaq, ...installFaq, ...deviceFaq, ...featuresFaq, ...troubleFaq]

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "FAQ", item: absoluteUrl("/faq") },
  ],
}

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={faqPageSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <HelpCircle className="h-3 w-3 mr-1" /> FAQ
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to the most common questions about doubleclick iptv.
              Can&apos;t find your answer? Contact our 24/7 support.
            </p>
            <div className="mt-6">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-success px-6 py-3 text-sm font-semibold text-white hover:bg-success-hover transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Contact support
              </a>
            </div>
          </div>
          <div className="mt-12 space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Subscription & Payment</h2>
              <FAQAccordion items={subscriptionFaq} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Installation & Setup</h2>
              <FAQAccordion items={installFaq} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Compatible Devices</h2>
              <FAQAccordion items={deviceFaq} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Features & Content</h2>
              <FAQAccordion items={featuresFaq} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Troubleshooting</h2>
              <FAQAccordion items={troubleFaq} />
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Didn&apos;t find your answer?"
        subtitle="Our support team is available 24/7 to help you."
      />
    </>
  )
}
