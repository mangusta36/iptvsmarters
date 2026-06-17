import type { Metadata } from "next"
import { CheckCircle, Shield, Clock, Headphones, RefreshCw, CreditCard } from "lucide-react"
import PricingCards from "@/components/PricingCards"
import FAQAccordion from "@/components/FAQAccordion"
import SchemaMarkup from "@/components/SchemaMarkup"
import Testimonials from "@/components/Testimonials"
import CTASection from "@/components/CTASection"
import TrustBadges from "@/components/TrustBadges"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Subscription - Premium Plans & Prices",
  description: "Discover our iptv subscription plans: 1 to 3 devices, prices from £29/month. HD & 4K quality, 25,000+ channels, 100,000+ VOD, 24/7 support for your premium iptv service. Contact us on WhatsApp.",
  openGraph: {
    title: "IPTV Subscription Premium",
    description: "Discover our iptv subscription plans: 1 to 3 devices, prices from £29/month.",
    url: absoluteUrl("/abonnement"),
  },
  alternates: { canonical: absoluteUrl("/abonnement") },
}

const guarantees = [
  { icon: Shield, title: "Satisfied or Refunded", desc: "7-day guarantee to test our iptv service risk-free." },
  { icon: Clock, title: "Fast Activation", desc: "Service activated within 24 hours after payment." },
  { icon: Headphones, title: "24/7 Support", desc: "Technical assistance available 7 days a week." },
  { icon: RefreshCw, title: "No Commitment", desc: "Cancel anytime, no fees or penalties." },
  { icon: CreditCard, title: "Secure Payment", desc: "PayPal, bank transfer and cryptocurrencies accepted." },
  { icon: CheckCircle, title: "Guaranteed Quality", desc: "HD, Full HD and 4K with anti-buffer technology." },
]

const faqItems = [
  { question: "How does payment work?", answer: "Payment is made via WhatsApp. We accept PayPal, bank transfer and cryptocurrencies. Once payment is confirmed, you receive your credentials within 24 hours." },
  { question: "How do I subscribe to a plan?", answer: "Contact us via WhatsApp to choose your offer and receive your login credentials for your iptv subscription." },
  { question: "Can I change my plan mid-subscription?", answer: "Yes, you can upgrade to a higher plan at any time. The difference will be calculated pro rata." },
  { question: "Is there a minimum commitment period?", answer: "No, no commitment. You can cancel at any time. Quarterly and annual plans offer a discount." },
  { question: "What if I have installation problems?", answer: "Our technical support team is available 24/7 to help you via WhatsApp. Installation is guided and only takes a few minutes." },
  { question: "Can I use my subscription on multiple devices?", answer: "Yes, depending on your plan: 1, 2 or 3 simultaneous connections on different devices." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Subscription", item: absoluteUrl("/abonnement") },
  ],
}

export default function AbonnementPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Flexible plans no commitment
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Our IPTV Subscriptions</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that suits your needs. All our iptv subscriptions include 25,000+ TV channels,
              100,000+ VOD, 24/7 support and a satisfied or refunded guarantee.
            </p>
          </div>
          <div className="mt-8">
            <TrustBadges />
          </div>
          <div className="mt-12">
            <PricingCards />
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Why choose us?</h2>
          <p className="mt-2 text-muted-foreground text-center">Solid guarantees for your peace of mind.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guarantees.map((g) => (
              <div key={g.title} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted group-hover:bg-brand/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/10">
                  <g.icon className="h-5 w-5 text-muted-foreground group-hover:text-brand transition-colors duration-300" />
                </div>
                <h3 className="mt-4 font-semibold text-white group-hover:text-brand transition-colors duration-300">{g.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center">Subscription Questions</h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <Testimonials />
      <CTASection title="Ready to join doubleclick iptv?" subtitle="Contact us on WhatsApp to discover our iptv subscription plans." />
    </>
  )
}
