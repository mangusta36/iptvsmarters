"use client"

import { MessageCircle, Clock, Shield, Zap } from "lucide-react"
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
  { question: "How can I contact you?", answer: "All support is via WhatsApp at +44 7828 714977. It's the fastest way to get a response within 30 minutes." },
  { question: "What are your opening hours?", answer: "Our support team is available 24/7. Send us a WhatsApp message anytime." },
  { question: "How do I get a subscription?", answer: "Contact us directly via WhatsApp at +44 7828 714977 to choose your plan and receive your credentials." },
  { question: "What is the activation time?", answer: "Your subscription is activated within 24 hours maximum after payment confirmation via WhatsApp." },
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
              on WhatsApp. It&apos;s the fastest way to reach us.
            </p>
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
              <p className="mt-1 text-sm text-muted-foreground">24/7 - 7 days a week</p>
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
        </div>
      </section>
      <CTASection title="Ready to try doubleclick iptv?" subtitle="Contact us on WhatsApp for any questions or information." />
    </>
  )
}
