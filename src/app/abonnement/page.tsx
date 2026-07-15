import type { Metadata } from "next"
import { CheckCircle, Shield, Clock, Headphones, RefreshCw, CreditCard, Globe, Smartphone, Monitor, Zap, Star, Users, Award, ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import PricingCards from "@/components/PricingCards"
import FAQAccordion from "@/components/FAQAccordion"
import SchemaMarkup from "@/components/SchemaMarkup"
import CTASection from "@/components/CTASection"
import TrustBadges from "@/components/TrustBadges"
import { siteConfig, absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "IPTV Subscription - Premium Plans & Prices 2026",
  description: "doubleclick iptv subscription plans from £37/3mo: available live channels, on-demand content movies & series in HD & 4K. Multi-device support, anti-buffer technology, 24/7 support. Start streaming today.",
  openGraph: {
    images: [{ url: absoluteUrl("/og-image.svg"), width: 1200, height: 630, alt: "doubleclick iptv" }],
    title: "doubleclick iptv Subscription Plans",
    description: "Choose your doubleclick iptv subscription plan: available channels, on-demand content, HD & 4K, multi-device. From £37/3mo for premium IPTV.",
    url: absoluteUrl("/abonnement"),
  },
  alternates: { canonical: absoluteUrl("/abonnement") },
}

const guarantees = [
  { icon: Shield, title: "Satisfied or Refunded", desc: "7-day guarantee to test your doubleclick iptv service risk-free. If you are not satisfied, we will refund your payment." },
  { icon: Clock, title: "Fast Activation", desc: "doubleclick iptv subscription activated within 24 hours after payment confirmation. Most activations happen within 2 hours." },
  { icon: Headphones, title: "24/7 Support", desc: "doubleclick iptv support available 7 days a week via WhatsApp. Response times vary with request volume." },
  { icon: RefreshCw, title: "No Commitment", desc: "Cancel your doubleclick iptv plan anytime, no fees or penalties. No long-term contracts. You are in control." },
  { icon: CreditCard, title: "Secure Payment", desc: "PayPal, bank transfer and cryptocurrencies accepted for your doubleclick iptv subscription. Your information is always protected." },
  { icon: CheckCircle, title: "Guaranteed Quality", desc: "HD, Full HD and 4K with anti-buffer technology and monitored service availability and practical playback support." },
  { icon: Globe, title: "Works Worldwide", desc: "Use your doubleclick iptv subscription anywhere in the world. Perfect for travellers, expats and international families." },
  { icon: Smartphone, title: "All Devices", desc: "Compatible with Smart TV, Fire TV Stick, Android, iOS, Windows, Mac. One doubleclick iptv subscription covers everything." },
  { icon: Star, title: "Premium Content", desc: "available live channels, on-demand content movies & series with your doubleclick iptv subscription. Sports, news, entertainment and more." },
]

const faqItems = [
  { question: "How does payment work for doubleclick iptv?", answer: "Payment is made via WhatsApp for your doubleclick iptv subscription. We accept PayPal, bank transfer and cryptocurrencies. Once payment is confirmed, you receive your credentials within 24 hours." },
  { question: "How do I subscribe to a doubleclick iptv plan?", answer: "Contact us via WhatsApp to choose your offer and receive your login credentials for your doubleclick iptv subscription." },
  { question: "Can I change my plan mid-subscription?", answer: "Yes, you can upgrade to a higher doubleclick iptv plan at any time. The difference will be calculated pro rata. Downgrades take effect at next renewal." },
  { question: "Is there a minimum commitment period?", answer: "No, no commitment. You can cancel your doubleclick iptv plan at any time. Quarterly and annual plans offer better value with significant discounts." },
  { question: "What if I have installation problems?", answer: "Our doubleclick iptv technical support team is available 24/7 to help you via WhatsApp. Installation is guided and only takes a few minutes." },
  { question: "Can I use my doubleclick iptv subscription on multiple devices?", answer: "Yes, depending on your plan: 1, 2 or 3 simultaneous connections on different devices. Each person watches their own channel with their doubleclick iptv subscription." },
  { question: "What channels are included with doubleclick iptv?", answer: "available live channels across all categories: sports (Premier League, NFL, UFC, F1), movies, 24/7 news, kids, documentaries, music, international channels in 40+ languages — included with every doubleclick iptv plan." },
  { question: "Is 4K streaming available on doubleclick iptv?", answer: "Yes, 4K Ultra HD streaming is available on doubleclick iptv for supported channels and VOD content. Requires 25+ Mbps internet connection and a compatible device." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Subscription", item: absoluteUrl("/abonnement") },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}

export default function AbonnementPage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={faqSchema} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Flexible plans no commitment
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">doubleclick iptv Plans</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the doubleclick iptv subscription that suits your needs. All our plans include a broad selection TV channels,
              an on-demand movie and series catalogue on demand, HD & 4K streaming, 24/7 support and a satisfied or refunded guarantee.
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
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white">Why choose doubleclick iptv?</h2>
            <p className="mt-2 text-muted-foreground">Solid guarantees and premium features for your peace of mind.</p>
          </div>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white">What is included in every plan</h2>
            <p className="mt-2 text-muted-foreground">Every doubleclick iptv subscription includes the following features regardless of which plan you choose.</p>
          </div>
          <div className="mt-10 max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "available live channels worldwide",
              "an on-demand movie and series catalogue on demand",
              "HD, Full HD & 4K Ultra HD quality",
              "Anti-buffer streaming technology",
              "Electronic Program Guide (EPG)",
              "7-day catch-up TV & replay",
              "Xtream Codes API & M3U support",
              "24/7 technical support via WhatsApp",
              "Instant activation within 24 hours",
              "No long-term contracts or commitment",
              "Works on all devices & platforms",
              "Regular content updates & additions",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 mt-0.5">
                  <CheckCircle className="h-3.5 w-3.5 text-brand" />
                </div>
                <span className="text-sm text-muted-foreground">{item}</span>
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
      <CTASection title="Ready to join doubleclick iptv?" subtitle="Contact us on WhatsApp to discover our IPTV subscription plans." />
    </>
  )
}
