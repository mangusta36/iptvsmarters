"use client"

import { MessageCircle, Clock, Shield, Zap, Headphones, Globe, Smartphone, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import SchemaMarkup from "@/components/SchemaMarkup"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl("/contact") },
  ],
}

const faqItems = [
  { question: "How can I contact you?", answer: "All support is via WhatsApp at +44 7828 714977. It is the fastest way to get a response within 30 minutes. We do not currently offer phone or email support." },
  { question: "What are your opening hours?", answer: "Our support team is available 24/7, 365 days a year. Send us a WhatsApp message anytime and we will respond promptly." },
  { question: "How do I get a subscription?", answer: "Contact us directly via WhatsApp at +44 7828 714977 to choose your plan and receive your credentials. We will guide you through the process." },
  { question: "What is the activation time?", answer: "Your subscription is activated within 24 hours maximum after payment confirmation via WhatsApp. Most activations happen within 2 hours." },
  { question: "Can you help with installation?", answer: "Yes, our support team will guide you step by step through the installation process on any device. Setup takes less than 5 minutes." },
  { question: "What payment methods do you accept?", answer: "We accept PayPal, bank transfer and cryptocurrencies. All transactions are secure and your information is confidential." },
]

const supportReasons = [
  { icon: Zap, title: "New Subscription", desc: "Choose a plan, make payment, receive credentials", color: "text-brand" },
  { icon: Smartphone, title: "Installation Help", desc: "Step-by-step setup on Smart TV, Fire Stick, phone or PC", color: "text-blue-400" },
  { icon: Globe, title: "Technical Issue", desc: "Buffering, connection problems, channels not loading", color: "text-rose-400" },
  { icon: Shield, title: "Account Support", desc: "Password reset, renewal, plan upgrade or cancellation", color: "text-emerald-400" },
]

export default function ContactForm() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <MessageCircle className="h-3 w-3 mr-1" /> Support 24/7
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact doubleclick iptv</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A question or technical issue? Our team is available 24/7 - 7 days a week
              on WhatsApp. It is the fastest way to reach us.
            </p>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Whether you need a new subscription, installation help, or have a technical problem, our expert support team is ready to assist you within minutes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {supportReasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div key={reason.title} className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4 hover:border-brand/30 transition-all hover:-translate-y-0.5">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted ${reason.color} [&>svg]:text-brand`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 mx-auto max-w-2xl">
            <div className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-success/10 mb-4">
                <MessageCircle className="h-8 w-8 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact us on WhatsApp</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                <span className="text-white font-semibold">+44 7828 714977</span>
              </p>
              <p className="mt-1 text-sm text-brand">Response guaranteed within 30 minutes</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-success px-8 py-3.5 text-base font-bold text-white hover:bg-success-hover transition-all hover:scale-105 shadow-lg shadow-success/25"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send a WhatsApp message
                </a>
                <a
                  href={siteConfig.trialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-3.5 text-base font-bold text-black hover:bg-brand-hover transition-all hover:scale-105 shadow-lg shadow-brand/25"
                >
                  <Zap className="h-5 w-5" />
                  {siteConfig.trialText}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <Clock className="mx-auto h-8 w-8 text-brand" />
              <h3 className="mt-3 font-semibold text-white">Availability</h3>
              <p className="mt-1 text-sm text-muted-foreground">24/7 - 365 days a year</p>
              <p className="text-xs text-muted-foreground mt-1">Technical & Sales Support</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <MessageCircle className="mx-auto h-8 w-8 text-brand" />
              <h3 className="mt-3 font-semibold text-white">Single Point of Contact</h3>
              <p className="mt-1 text-sm text-muted-foreground">+44 7828 714977</p>
              <p className="text-xs text-muted-foreground mt-1">All support via WhatsApp</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <Shield className="mx-auto h-8 w-8 text-brand" />
              <h3 className="mt-3 font-semibold text-white">Secure Payment</h3>
              <p className="mt-1 text-sm text-muted-foreground">PayPal, Bank Transfer, Crypto</p>
              <p className="text-xs text-muted-foreground mt-1">Protected Transactions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-white hover:bg-muted transition-all duration-300 hover:border-brand/30"
            >
              View all FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <CTASection title="Ready to try doubleclick iptv?" subtitle="Contact us on WhatsApp for any questions or information." />
    </>
  )
}
