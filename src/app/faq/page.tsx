import type { Metadata } from "next"
import { HelpCircle, MessageCircle } from "lucide-react"
import FAQAccordion from "@/components/FAQAccordion"
import SchemaMarkup from "@/components/SchemaMarkup"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV FAQ - Frequently Asked Questions",
  description: "All answers about iptv subscription, installation, compatible devices, troubleshooting and customer support. Complete FAQ for doubleclick iptv premium iptv service.",
  openGraph: {
    title: "IPTV FAQ",
    description: "All answers about iptv streaming and subscription.",
    url: absoluteUrl("/faq"),
  },
  alternates: { canonical: absoluteUrl("/faq") },
}

const subscriptionFaq = [
  { question: "How do I subscribe to a doubleclick iptv plan?", answer: "Contact us via WhatsApp to choose your offer. Once payment is confirmed, you will receive your login credentials within 24 hours maximum." },
  { question: "What payment methods are accepted?", answer: "We accept PayPal, bank transfer and cryptocurrencies. Payment is fully secure. Contact us via WhatsApp for more information." },
  { question: "Can I cancel my subscription at any time?", answer: "Yes, no commitment. You can cancel at any time with no extra fees. No refund is made for the current period." },
  { question: "How do I contact support?", answer: "Contact us via WhatsApp for any questions. Our team is available 24/7 to help you with your iptv subscription." },
  { question: "Can I upgrade from one plan to another?", answer: "Yes, you can upgrade to a higher plan at any time. The difference will be calculated pro rata." },
]

const installFaq = [
  { question: "How do I install doubleclick iptv on my Smart TV?", answer: "Installation varies by brand. Samsung uses Tizen OS, LG uses webOS, Sony uses Android TV. Check our guides for detailed instructions." },
  { question: "Which app should I use for iptv streaming?", answer: "We recommend using the doubleclick iptv app, available on Android, iOS, Smart TV and Windows. You can also use VLC, TiviMate or GSE Smart IPTV." },
  { question: "How do I set up my subscription on the app?", answer: "After receiving your credentials (username, password, server URL), open the app, select Xtream Codes or M3U, enter your details and enjoy the iptv service." },
  { question: "Is the iptv installation difficult?", answer: "No, installation takes less than 5 minutes. Our support team will guide you step by step if needed." },
]

const deviceFaq = [
  { question: "Does iptv work on Samsung Smart TV?", answer: "Yes, doubleclick iptv is compatible with all recent Samsung Smart TVs running Tizen OS." },
  { question: "Can I watch iptv on my iPhone?", answer: "Yes, the doubleclick iptv app is available for free on the App Store for iPhone and iPad." },
  { question: "Does iptv work on Fire TV Stick?", answer: "Yes, you can install the doubleclick iptv app on Fire TV Stick via the Amazon App Store or direct download." },
  { question: "Can I use iptv on PC?", answer: "Yes, the doubleclick iptv app is available on Windows (Microsoft Store) and macOS (Mac App Store). VLC is also a good alternative for iptv channels." },
  { question: "Which devices are compatible?", answer: "Smart TV (Samsung, LG, Sony), Android TV, Fire TV Stick, iPhone/iPad, Windows PC, Mac, Android smartphones and tablets." },
]

const troubleFaq = [
  { question: "What if the screen is black?", answer: "Check your internet connection, restart the app and your device. Verify your subscription is active. If the problem persists, contact our support." },
  { question: "Why is my iptv connection buffering?", answer: "Buffering can be caused by a slow internet connection, Wi-Fi congestion, or an overloaded server. Try: Ethernet connection, close background apps, reduce video quality." },
  { question: "How can I improve video quality?", answer: "Ensure you have a stable connection (10 Mbps for HD, 25 Mbps for 4K). Use a wired connection rather than Wi-Fi. Select the quality in the settings." },
  { question: "What if iptv stops working?", answer: "Check your connection, restart the device, reinstall the app. If the problem persists, contact our 24/7 support via WhatsApp." },
  { question: "My login credentials are not working?", answer: "Check that you have entered them correctly (no typos). Contact us via WhatsApp for a quick reset." },
]

const allFaqItems = [...subscriptionFaq, ...installFaq, ...deviceFaq, ...troubleFaq]

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
              Find answers to the most common questions about our premium iptv service.
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
          <div className="mt-12 space-y-8">
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
              <h2 className="text-xl font-semibold text-white mb-4">Troubleshooting</h2>
              <FAQAccordion items={troubleFaq} />
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Didn't find your answer?"
        subtitle="Our support team is available 24/7 to help you."
      />
    </>
  )
}
