import type { Metadata } from "next"
import Link from "next/link"
import { Download, Settings, CheckCircle, Tv, Smartphone, Monitor, MessageCircle } from "lucide-react"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Installation - Complete Guide",
  description: "Complete IPTV installation guide for Samsung, LG, Sony Smart TVs, Android, iPhone, Windows and Mac. Set up your doubleclick iptv subscription in 5 minutes.",
  alternates: { canonical: absoluteUrl("/iptv-installation") },
}

const steps = [
  { num: 1, icon: MessageCircle, title: "Choose your plan", desc: "Contact us via WhatsApp to choose your subscription and receive your login credentials.", color: "bg-brand/10 text-brand" },
  { num: 2, icon: Download, title: "Download the app", desc: "Install the doubleclick iptv app from the App Store, Google Play, Microsoft Store or Mac App Store depending on your device.", color: "bg-accent/10 text-accent" },
  { num: 3, icon: Settings, title: "Configure the app", desc: "Open the app, select 'Xtream Codes' or 'M3U URL', and enter the credentials received via WhatsApp.", color: "bg-brand/10 text-brand" },
  { num: 4, icon: CheckCircle, title: "Enjoy streaming", desc: "Access 25,000+ live TV channels, 100,000+ VOD and live sports in HD and 4K.", color: "bg-success/10 text-success" },
]

const deviceGuides = [
  { name: "Samsung Smart TV", href: "/iptv-samsung", icon: "📺" },
  { name: "LG Smart TV", href: "/iptv-lg", icon: "📺" },
  { name: "Sony Bravia", href: "/iptv-sony", icon: "📺" },
  { name: "Android TV / Box", href: "/iptv-android", icon: Tv },
  { name: "Amazon Fire TV Stick", href: "/iptv-smart-tv", icon: "📺" },
  { name: "iPhone / iPad", href: "/iptv-iphone", icon: Smartphone },
  { name: "Windows PC", href: "/iptv-windows", icon: Monitor },
  { name: "Mac / MacBook", href: "/iptv-mac", icon: Monitor },
]

const faqItems = [
  { question: "How long does installation take?", answer: "Full installation takes only 5 to 10 minutes. The longest part is downloading the app." },
  { question: "Do I need technical skills?", answer: "No, installation is simple and guided. If you encounter any issues, our technical support team assists you via WhatsApp." },
  { question: "Can I install IPTV on multiple devices?", answer: "Yes, depending on your plan (1, 2 or 3 devices). You can install the app on all your devices but simultaneous connections are limited." },
  { question: "What if the app is not available on my TV?", answer: "If doubleclick iptv is not in your TV's app store, use VLC or an Android TV box / Fire TV Stick." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Installation", item: absoluteUrl("/iptv-installation") },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install doubleclick iptv",
  step: steps.map((s) => ({
    "@type": "HowToStep",
    position: s.num,
    name: s.title,
    text: s.desc,
  })),
}

export default function InstallationIPTVPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={howToSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Guided Installation
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">IPTV Installation Guide</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to install and set up your doubleclick iptv subscription
              on any device. Takes less than 5 minutes.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-brand/40">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${step.color}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-black">
                      {step.num}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Guides by device</h2>
          <p className="mt-2 text-muted-foreground text-center">Choose your device for a detailed guide.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {deviceGuides.map((d) => (
              <Link key={d.name} href={d.href} className="rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-brand/50 hover:-translate-y-1">
                <span className="text-2xl">{typeof d.icon === "string" ? d.icon : ""}</span>
                {typeof d.icon !== "string" && <d.icon className="mx-auto h-6 w-6 text-brand" />}
                <p className="mt-2 text-sm font-medium text-white">{d.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Installation questions</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <CTASection title="Need help with installation?" subtitle="Our technical team guides you step by step via WhatsApp." />
    </>
  )
}
