import { Star, Tv, Film, Monitor, Shield, Zap, Clock, Smartphone, Laptop, Tablet, Server, Wifi, Repeat, Sparkles, TrendingUp, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import HeroSection from "@/components/HeroSection"
import ValueProposition from "@/components/ValueProposition"
import PricingCards from "@/components/PricingCards"
import DeviceCard from "@/components/DeviceCard"
import SchemaMarkup from "@/components/SchemaMarkup"
import Testimonials from "@/components/Testimonials"
import FAQAccordion from "@/components/FAQAccordion"
import CTASection from "@/components/CTASection"
import { siteConfig, absoluteUrl } from "@/lib/site-config"
import { trendingMedia } from "@/lib/media-data"

export const metadata: Metadata = {
  title: "doubleclick iptv | Premium IPTV Subscription",
  description: "Premium IPTV subscription with 25,000+ live channels, 100,000+ VOD movies & series in HD & 4K. Contact us for instant setup.",
  openGraph: {
    title: "doubleclick iptv | Premium IPTV Subscription",
    description: "Get 25,000+ live channels, 100,000+ VOD movies & series with HD & 4K quality. 24/7 support included.",
    url: absoluteUrl("/"),
  },
  alternates: { canonical: absoluteUrl("/") },
}

const features = [
  { icon: Tv, title: "25,000+ Channels", desc: "Live TV channels from around the world : sports, movies, documentaries, kids, music, news 24/7." },
  { icon: Film, title: "100,000+ VOD & Series", desc: "Latest movies, classics, popular series and documentaries in unlimited streaming. Updated weekly." },
  { icon: Monitor, title: "HD & 4K Ultra HD", desc: "Streaming in HD, Full HD and 4K with automatic bitrate adaptation technology." },
  { icon: Shield, title: "Anti-Buffer Technology", desc: "Optimized servers and anti-buffer technology for smooth, interruption-free streaming." },
  { icon: Zap, title: "5-Minute Setup", desc: "Step-by-step guided configuration. Compatible with IPTV apps, TiviMate and VLC." },
  { icon: Clock, title: "24/7 Priority Support", desc: "Technical team available 7 days a week via WhatsApp. Response within 30 minutes." },
  { icon: Smartphone, title: "Multi-Platform", desc: "Works on Smart TV, Android, iOS, Windows, Mac, Fire TV Stick and Android TV Box." },
  { icon: Wifi, title: "Replay & Catch-up TV", desc: "Watch your shows up to 7 days after broadcast. Never miss a program again." },
  { icon: Repeat, title: "Built-in EPG", desc: "Electronic Program Guide for all channels. View real-time scheduling." },
  { icon: Server, title: "High-Speed Servers", desc: "State-of-the-art server infrastructure with 99.9% uptime guarantee." },
  { icon: Tablet, title: "Multi-Screen", desc: "Up to 3 simultaneous connections depending on your plan. Watch together as a family." },
  { icon: Laptop, title: "Xtream Codes & M3U", desc: "Full support for Xtream Codes API and M3U playlists for maximum compatibility." },
]

const devices = [
  { name: "Android", icon: "📱", description: "Phones, tablets & Android TV", href: "/iptv-android" },
  { name: "Samsung", icon: "📺", description: "Samsung Smart TV Tizen", href: "/iptv-samsung" },
  { name: "LG", icon: "📺", description: "LG Smart TV webOS", href: "/iptv-lg" },
  { name: "Sony", icon: "📺", description: "Sony Bravia Smart TV", href: "/iptv-sony" },
  { name: "Windows", icon: "💻", description: "Windows PC 10/11", href: "/iptv-windows" },
  { name: "Mac", icon: "💻", description: "macOS & MacBook", href: "/iptv-mac" },
  { name: "iPhone", icon: "📱", description: "iPhone & iPad iOS", href: "/iptv-iphone" },
  { name: "Fire TV", icon: "📺", description: "Amazon Fire TV Stick", href: "/iptv-smart-tv" },
]

const faqItems = [
  { question: "How do I get a subscription?", answer: "Contact us on WhatsApp at +44 7828 714977 to choose your plan and receive your login credentials." },
  { question: "What payment methods do you accept?", answer: "We accept PayPal, bank transfer and cryptocurrencies. Payment is secure and your information is confidential." },
  { question: "Can I change my plan during my subscription?", answer: "Yes, you can upgrade to a higher plan at any time. The difference will be billed pro-rata." },
  { question: "Does the subscription work abroad?", answer: "Yes, your subscription works worldwide. An internet connection is all you need, regardless of your location." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
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

export default function HomePage() {
  return (
    <>
      <SchemaMarkup jsonLd={breadcrumbSchema} />
      <SchemaMarkup jsonLd={faqSchema} />
      <HeroSection
        title="Premium IPTV with 25,000+ Channels in HD & 4K"
        subtitle="doubleclick iptv : premium IPTV subscription with unlimited VOD, live sports and 24/7 support. Easy setup on all your devices."
        badge="24/7 Customer Support"
        image
      />
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              No commitment • Cancel anytime
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Choose Your Plan</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your needs. All plans include 25,000+ channels, 100,000+ VOD, and 24/7 support.
            </p>
          </div>
          <PricingCards />
        </div>
      </section>
      <ValueProposition />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Everything you need
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Premium Features</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for an exceptional IPTV experience.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted group-hover:bg-brand/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/10">
                  <f.icon className="h-6 w-6 text-muted-foreground group-hover:text-brand transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-brand transition-colors duration-300">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Works on all devices
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Compatible Devices</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch on your TV, phone, tablet or computer. One subscription, all your devices.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {devices.map((d) => (
              <DeviceCard key={d.name} name={d.name} icon={d.icon} description={d.description} href={d.href} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/iptv-installation"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-white hover:bg-muted transition-all duration-300 hover:border-brand/30"
            >
              View installation guide
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="py-24 relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <Sparkles className="h-3 w-3 mr-1" /> Recently added
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Movies & Series</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest additions to our VOD catalog. Movies and series in HD & 4K.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {trendingMedia.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5">
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={item.poster}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand shadow-lg shadow-brand/30 transform transition-transform group-hover:scale-110">
                      <Play className="h-5 w-5 text-black ml-0.5" />
                    </div>
                  </div>
                  {item.isNew && (
                    <div className="absolute top-2 right-2">
                      <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-black">New</span>
                    </div>
                  )}
                  <div className="absolute top-2 left-2">
                    <span className="rounded-md bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-white/90">{item.type === "movie" ? "Movie" : "Series"}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-sm font-bold text-white leading-tight line-clamp-1">{item.title}</h3>
                    <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span>{item.year}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        {item.rating}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {item.genres.map((genre) => (
                        <span key={genre} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/80">{genre}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/vod"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-white hover:bg-muted transition-all duration-300 hover:border-brand/30"
            >
              View full catalog <TrendingUp className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Got questions?
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know before subscribing.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-white hover:bg-muted transition-all duration-300 hover:border-brand/30"
            >
              View all FAQs
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}