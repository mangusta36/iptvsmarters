import type { Metadata } from "next"
import Link from "next/link"
import { Settings, Wifi, Video, CreditCard, HelpCircle, MessageCircle, Download, RefreshCw, Smartphone, Globe, Tv, Monitor, Zap, Shield, BookOpen, ArrowRight } from "lucide-react"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Support - Help & Assistance 24/7",
  description: "doubleclick iptv support and help centre. Setup guides, troubleshooting tips, connection fixes, video quality optimisation and 24/7 WhatsApp assistance for your doubleclick iptv subscription. Response within 30 minutes.",
  openGraph: {
    title: "doubleclick iptv Support - 24/7 Assistance",
    description: "Need help with your doubleclick iptv subscription? Setup, troubleshooting, billing and technical support available 24/7 via WhatsApp.",
    url: absoluteUrl("/support"),
  },
  alternates: { canonical: absoluteUrl("/support") },
}

const quickHelp = [
  { icon: Settings, title: "Installation", desc: "Step-by-step doubleclick iptv installation guide for all your devices.", href: "/iptv-installation" },
  { icon: Wifi, title: "Connection Issues", desc: "Fix buffering, freezing and connection problems on doubleclick iptv.", href: "/iptv-guide" },
  { icon: Video, title: "Video Quality", desc: "Optimise HD, Full HD and 4K quality on your doubleclick iptv subscription.", href: "/iptv-4k" },
  { icon: RefreshCw, title: "Reset Password", desc: "Reset your doubleclick iptv password or recover your account.", href: "/faq" },
  { icon: Download, title: "Download Apps", desc: "Download the IPTV app for doubleclick iptv on all your devices.", href: "/iptv-installation" },
  { icon: CreditCard, title: "Payment & Billing", desc: "Payments, renewals and doubleclick iptv subscription management.", href: "/abonnement" },
  { icon: Smartphone, title: "Multi-Screen Setup", desc: "Watch doubleclick iptv on multiple devices simultaneously.", href: "/abonnement" },
  { icon: Globe, title: "Watch Abroad", desc: "Use your doubleclick iptv subscription anywhere in the world.", href: "/iptv-guide" },
  { icon: Tv, title: "Smart TV Setup", desc: "Install doubleclick iptv on Samsung, LG, Sony Smart TVs.", href: "/iptv-smart-tv" },
  { icon: Monitor, title: "EPG Guide", desc: "Set up and use the Electronic Program Guide for doubleclick iptv.", href: "/iptv-guide" },
  { icon: Shield, title: "VPN Setup", desc: "Configure a VPN for private doubleclick iptv streaming.", href: "/blog/iptv-vpn-guide" },
  { icon: BookOpen, title: "M3U & Xtream Codes", desc: "Configure connection protocols for doubleclick iptv on your devices.", href: "/blog/xtream-codes-api-guide" },
]

const troubleshootingSteps = [
  {
    title: "Channels not loading",
    steps: ["Check your internet connection is active and stable", "Restart the IPTV app and your device", "Verify your doubleclick iptv subscription is active and not expired", "Try switching from WiFi to Ethernet", "Contact doubleclick iptv support if the issue persists"],
    icon: Wifi,
  },
  {
    title: "Buffering or freezing",
    steps: ["Run a speed test (need 10+ Mbps for HD, 25+ for 4K on doubleclick iptv)", "Close bandwidth-heavy background apps", "Use a wired Ethernet connection instead of WiFi", "Reduce video quality in app settings", "Try using a VPN to prevent ISP throttling on doubleclick iptv"],
    icon: Zap,
  },
  {
    title: "Login issues",
    steps: ["Double-check your doubleclick iptv username and password for typos", "Ensure Caps Lock is off", "Copy and paste your doubleclick iptv credentials if possible", "Contact us via WhatsApp for a doubleclick iptv password reset", "Check your doubleclick iptv subscription has not expired"],
    icon: Shield,
  },
]

const faqItems = [
  { question: "How do I reset my doubleclick iptv password?", answer: "Contact us via WhatsApp with your user ID. We will send you a new password within 30 minutes for your doubleclick iptv account." },
  { question: "My subscription has expired, how do I renew?", answer: "Contact us via WhatsApp to renew. Your doubleclick iptv subscription will be reactivated immediately after payment confirmation." },
  { question: "Can I transfer my doubleclick iptv subscription to a new device?", answer: "Yes, just install the app on your new device and log in with your current doubleclick iptv credentials. Your subscription is linked to your account, not your device." },
  { question: "What if a channel is not working on doubleclick iptv?", answer: "First check your internet connection. If the issue persists, contact doubleclick iptv support with the channel name and we will investigate." },
  { question: "How do I subscribe to a doubleclick iptv plan?", answer: "Contact us via WhatsApp to choose your offer and receive your login credentials for your doubleclick iptv subscription." },
  { question: "How can I improve my video quality on doubleclick iptv?", answer: "Ensure you have a stable connection of at least 25 Mbps for 4K on doubleclick iptv. Use an Ethernet connection, close background apps, and check your device display settings." },
  { question: "Does my doubleclick iptv subscription work abroad?", answer: "Yes, your doubleclick iptv subscription works worldwide. A stable internet connection is all you need, regardless of your location." },
  { question: "Can I watch doubleclick iptv on multiple screens at the same time?", answer: "Yes, depending on your plan (1, 2 or 3 screens). Each family member can watch a different channel on their own device with their doubleclick iptv subscription." },
  { question: "What devices are compatible with doubleclick iptv?", answer: "Samsung Smart TV (Tizen), LG (webOS), Sony Bravia (Android TV), Fire TV Stick, Android TV boxes, iPhone/iPad, Android phones/tablets, Windows PC and Mac — all compatible with doubleclick iptv." },
  { question: "How do I use Xtream Codes or M3U with doubleclick iptv?", answer: "When setting up the app, select Xtream Codes API and enter your portal URL, username and password. For M3U, paste the playlist URL provided by your doubleclick iptv subscription." },
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
            <h1 className="text-4xl font-bold text-white sm:text-5xl">doubleclick iptv Help & Support</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Our support team is available 24/7 to help you with doubleclick iptv installation, troubleshooting and any questions about your service.
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Whether you need help with doubleclick iptv setup, or are experiencing a technical issue,
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Common Issues & Solutions</h2>
          <p className="mt-2 text-muted-foreground text-center max-w-2xl mx-auto">Follow these step-by-step guides to resolve the most common doubleclick iptv issues before contacting support.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {troubleshootingSteps.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.title} className="rounded-2xl border border-border bg-card p-6 hover:border-brand/30 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  </div>
                  <ol className="space-y-2">
                    {section.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-medium text-white mt-0.5">{idx + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog/iptv-buffering-solutions"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-white hover:bg-muted transition-all duration-300 hover:border-brand/30"
            >
              View detailed troubleshooting guide <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-border bg-card p-8 max-w-xl mx-auto">
            <MessageCircle className="mx-auto h-10 w-10 text-brand" />
            <h2 className="mt-4 text-2xl font-bold text-white">Priority doubleclick iptv Support</h2>
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
