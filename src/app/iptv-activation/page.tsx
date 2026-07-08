import type { Metadata } from "next"
import Link from "next/link"
import { CreditCard, Mail, Smartphone, CheckCircle, MessageCircle, AlertCircle } from "lucide-react"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Activation - Activation Guide",
  description: "Guide to activating your doubleclick iptv subscription. Simple steps to activate your account within 24 hours and start watching your channels.",
  openGraph: {
    title: "IPTV Activation Guide - doubleclick iptv",
    description: "Simple step-by-step activation guide. Activate your IPTV subscription within 24 hours and start watching.",
    url: absoluteUrl("/iptv-activation"),
  },
  alternates: { canonical: absoluteUrl("/iptv-activation") },
}

const steps = [
  { icon: CreditCard, title: "1. Choose your plan", desc: "Select the subscription that suits you (1, 2 or 3 devices) and contact us via WhatsApp." },
  { icon: MessageCircle, title: "2. Make payment", desc: "Pay via PayPal, bank transfer or cryptocurrencies. Secure payment." },
  { icon: Mail, title: "3. Receive your credentials", desc: "Within 24 hours maximum, you will receive your login credentials (username, password, Xtream Codes server)." },
  { icon: Smartphone, title: "4. Configure the app", desc: "Install doubleclick iptv on your device, enter your credentials and enjoy the service." },
  { icon: CheckCircle, title: "5. Enjoy streaming", desc: "Access 25,000+ channels, VOD and live sports in HD and 4K." },
]

const faqItems = [
  { question: "How long after payment is my account activated?", answer: "Activation usually takes less than 24 hours. In most cases, your credentials are sent within 2 to 6 hours." },
  { question: "What if I haven't received my credentials?", answer: "Contact us via WhatsApp with your name and payment email. We will verify your order and send the credentials." },
  { question: "How do I choose my subscription?", answer: "Contact us via WhatsApp to discover our offers and subscribe to the plan that suits you." },
  { question: "Is activation immediate on weekends?", answer: "Yes, our activation service operates 7 days a week. Credentials are sent even on weekends and public holidays." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IPTV Activation", item: absoluteUrl("/iptv-activation") },
  ],
}

export default function ActivationIPTVPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Fast Activation
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Activating your IPTV subscription</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Activate your doubleclick iptv subscription in a few simple steps. Allow less than 24 hours
              between your order and receiving your credentials.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {steps.map((step) => (
              <div key={step.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-brand/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  <step.icon className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <AlertCircle className="h-6 w-6 shrink-0 text-brand" />
            <div>
              <h3 className="font-semibold text-white">Need priority activation?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Contact our WhatsApp support for express activation within 1 hour.</p>
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover transition-colors">
                <MessageCircle className="h-4 w-4" />
                Priority activation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Activation questions</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <CTASection title="Ready to activate your subscription?" subtitle="Contact us now to get started." />
    </>
  )
}
