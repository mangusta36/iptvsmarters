import type { Metadata } from "next"
import Link from "next/link"
import { Settings, Wifi, Video, CreditCard, HelpCircle, MessageCircle, Download, RefreshCw, Smartphone, Globe } from "lucide-react"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Support doubleclick iptv - Help & Assistance 24/7",
  description: "doubleclick iptv support: iptv setup guides, troubleshooting, FAQ and 24/7 technical assistance via WhatsApp. Response within 30 minutes for your iptv service.",
  openGraph: {
    title: "Support doubleclick iptv - 24/7 Assistance",
    description: "Need help with your iptv? Our technical support team is available 24/7 via WhatsApp.",
    url: absoluteUrl("/support"),
  },
  alternates: { canonical: absoluteUrl("/support") },
}

const quickHelp = [
  { icon: Settings, title: "Installation", desc: "Step-by-step iptv installation guide for all your devices.", href: "/iptv-installation" },
  { icon: Wifi, title: "Connection Issues", desc: "Fix buffering and connection problems.", href: "/iptv-guide" },
  { icon: Video, title: "Video Quality", desc: "Optimise HD, Full HD and 4K quality.", href: "/iptv-4k" },
  { icon: RefreshCw, title: "Reset", desc: "Reset your password or account.", href: "/faq" },
  { icon: Download, title: "Apps", desc: "Download doubleclick iptv on your devices.", href: "/iptv-installation" },
  { icon: CreditCard, title: "Payment & Billing", desc: "Information about payments and renewals.", href: "/abonnement" },
  { icon: Smartphone, title: "Multi-Screen", desc: "Watch on multiple devices simultaneously.", href: "/abonnement" },
  { icon: Globe, title: "Abroad", desc: "Use your iptv subscription anywhere in the world.", href: "/iptv-guide" },
]

const faqItems = [
  { question: "How do I reset my password?", answer: "Contact us via WhatsApp with your user ID. We will send you a new password within 30 minutes." },
  { question: "My subscription has expired, how do I renew?", answer: "Contact us via WhatsApp to renew. Your iptv subscription will be reactivated immediately after payment confirmation." },
  { question: "Can I transfer my subscription to a new device?", answer: "Yes, just install the app on your new device and log in with your current credentials." },
  { question: "What if a channel is not working?", answer: "Check your internet connection. If the issue persists, contact our support with the channel name." },
  { question: "How do I subscribe to a plan?", answer: "Contact us via WhatsApp to choose your offer and receive your login credentials for our premium iptv service." },
  { question: "How can I improve my iptv video quality?", answer: "Ensure you have a stable connection of at least 25 Mbps. Use an Ethernet connection, close background apps, and select a server close to you." },
  { question: "Does my subscription work abroad?", answer: "Yes, your doubleclick iptv subscription works worldwide. A stable internet connection is all you need." },
  { question: "Can I watch on multiple screens at the same time?", answer: "Yes, depending on your plan (1, 2 or 3 screens). Each family member can watch a different channel." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
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
    { "@type": "ListItem", position: 2, name: "Support", item: absoluteUrl("/support") },
  ],
}

export default function SupportPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={faqSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <HelpCircle className="h-3 w-3 mr-1" /> 24/7 Assistance
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">doubleclick iptv Support</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Our support team is available 24/7 to help you.
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Whether you need help with iptv installation, setup, or are experiencing a technical issue,
              we are here for you. Our expert team responds via WhatsApp within 30 minutes on average.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickHelp.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/50 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <item.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-border bg-card p-8 max-w-xl mx-auto">
            <MessageCircle className="mx-auto h-10 w-10 text-brand" />
            <h2 className="mt-4 text-2xl font-bold text-white">Priority WhatsApp Support</h2>
            <p className="mt-1 text-lg text-white font-semibold">+44 7828 714977</p>
            <p className="mt-1 text-muted-foreground">Guaranteed response within 30 minutes, 7 days a week</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-success px-6 py-3 text-sm font-semibold text-white hover:bg-success-hover transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Contact support
              </a>
              <a
                href={siteConfig.trialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-bold text-black hover:bg-brand-hover transition-colors"
              >
                {siteConfig.trialText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
