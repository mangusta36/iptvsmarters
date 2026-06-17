import { Star, Tv, Film, Monitor, Shield, Zap, Clock, Smartphone, Laptop, Tablet, Server, Wifi, Repeat, Sparkles, TrendingUp, Play, Satellite, Cable, Globe, Heart, Users, Coffee, BookOpen, Layout, Trophy, Music, Newspaper, Baby, Compass, Check, ArrowRight, MessageCircle, LifeBuoy, Lock, Radio, Layers, Cpu, Signal, HardDrive } from "lucide-react"
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
  description: "Premium IPTV subscription with 25,000+ live channels, 100,000+ VOD movies & series in HD & 4K. Watch live sports, movies, TV shows on any device. Contact us for instant setup.",
  openGraph: {
    title: "doubleclick iptv | Premium IPTV Subscription",
    description: "Get 25,000+ live channels, 100,000+ VOD movies & series with HD & 4K quality. Works on Smart TV, Fire Stick, Android, iOS. 24/7 support included.",
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

const channelCategories = [
  { icon: Trophy, name: "Sports", desc: "Premier League, Champions League, NFL, NBA, UFC, F1, MotoGP, tennis Grand Slams", color: "text-emerald-400" },
  { icon: Film, name: "Movies", desc: "Latest blockbusters, classics, all genres in HD & 4K with multi-language audio", color: "text-purple-400" },
  { icon: Heart, name: "Entertainment", desc: "Reality TV, talk shows, variety, game shows from UK, US and international networks", color: "text-pink-400" },
  { icon: Newspaper, name: "News", desc: "BBC, CNN, Sky News, Al Jazeera, France 24, RT and 200+ news channels worldwide", color: "text-blue-400" },
  { icon: Baby, name: "Kids", desc: "Cartoon Network, Disney, Nickelodeon, BBC CBeebies, educational content for all ages", color: "text-yellow-400" },
  { icon: Music, name: "Music", desc: "MTV, VH1, concert channels, music documentaries, 50+ dedicated music stations", color: "text-rose-400" },
  { icon: BookOpen, name: "Documentaries", desc: "BBC Earth, National Geographic, Discovery, History Channel, science & nature", color: "text-cyan-400" },
  { icon: Globe, name: "International", desc: "Channels in 40+ languages including Arabic, French, Spanish, Hindi, Urdu, Bengali", color: "text-orange-400" },
]

const devices = [
  { name: "Android", icon: "📱", description: "Phones, tablets & Android TV boxes", href: "/iptv-android" },
  { name: "Samsung", icon: "📺", description: "Samsung Smart TV Tizen OS", href: "/iptv-samsung" },
  { name: "LG", icon: "📺", description: "LG Smart TV webOS", href: "/iptv-lg" },
  { name: "Sony", icon: "📺", description: "Sony Bravia Android TV", href: "/iptv-sony" },
  { name: "Windows", icon: "💻", description: "Windows PC & laptops 10/11", href: "/iptv-windows" },
  { name: "Mac", icon: "💻", description: "macOS & MacBook", href: "/iptv-mac" },
  { name: "iPhone", icon: "📱", description: "iPhone & iPad on iOS", href: "/iptv-iphone" },
  { name: "Fire TV", icon: "📺", description: "Amazon Fire TV Stick & Cube", href: "/iptv-smart-tv" },
]

const faqItems = [
  { question: "What is IPTV and how does it work?", answer: "IPTV (Internet Protocol Television) delivers TV channels and video content over your internet connection instead of traditional satellite or cable. You simply install an app on your device, enter your login credentials, and start watching instantly. No dish, no aerial, no contract required." },
  { question: "How do I get a subscription?", answer: "Contact us on WhatsApp at +44 7828 714977 to choose your plan and receive your login credentials. Activation takes less than 24 hours." },
  { question: "What devices are compatible with doubleclick iptv?", answer: "Our service works on all major devices: Samsung Smart TV (Tizen), LG (webOS), Sony Bravia, Android TV boxes, Amazon Fire TV Stick, iPhone/iPad, Android phones/tablets, Windows PC and Mac. One subscription covers all your devices." },
  { question: "What channels and content do you offer?", answer: "We offer 25,000+ live TV channels including sports (Premier League, NFL, UFC, F1), movies, 24/7 news, kids shows, documentaries, music channels and international content in 40+ languages. Plus 100,000+ movies and series on demand." },
  { question: "What payment methods do you accept?", answer: "We accept PayPal, bank transfer and cryptocurrencies. Payment is secure and your information is confidential. Full details via WhatsApp." },
  { question: "Can I change my plan during my subscription?", answer: "Yes, you can upgrade to a higher plan at any time. The difference will be billed pro-rata. Downgrades take effect at renewal." },
  { question: "Does the subscription work abroad?", answer: "Yes, your subscription works worldwide. An internet connection is all you need, regardless of your location. Perfect for travellers and expats." },
  { question: "Can I watch on multiple devices at the same time?", answer: "Yes, depending on your plan you can watch on 1, 2 or 3 devices simultaneously. Each family member can watch a different channel on their own device." },
  { question: "What internet speed do I need?", answer: "For HD streaming, a minimum of 10 Mbps is recommended. For 4K Ultra HD, 25 Mbps or higher. A stable wired Ethernet connection provides the best experience." },
  { question: "How do I install and set up the service?", answer: "Setup takes less than 5 minutes. After receiving your credentials, open the IPTV app on your device, select Xtream Codes or M3U connection, enter your details and start watching. Our 24/7 support team can guide you step by step if needed." },
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

const howItWorks = [
  {
    step: "1",
    title: "Choose Your Plan",
    desc: "Select the subscription that fits your needs: 1, 2 or 3 simultaneous connections. All plans include 25,000+ channels, 100,000+ VOD and 24/7 support.",
    icon: Layout,
  },
  {
    step: "2",
    title: "Contact Us on WhatsApp",
    desc: "Send us a message on WhatsApp at +44 7828 714977. We will help you choose the right plan, process your payment and send your login credentials.",
    icon: MessageCircle,
  },
  {
    step: "3",
    title: "Install & Watch Instantly",
    desc: "Install the IPTV app on your device, enter your credentials, and start streaming. Our guided setup takes less than 5 minutes. Support is available if you need help.",
    icon: Zap,
  },
]

const trustPoints = [
  { icon: Server, title: "99.9% Uptime", desc: "Enterprise-grade server infrastructure with redundant systems ensuring your streams are always available." },
  { icon: Lock, title: "Secure & Private", desc: "Your data is encrypted and protected. We do not share your personal information with third parties." },
  { icon: LifeBuoy, title: "24/7 Technical Support", desc: "Real human support team available around the clock via WhatsApp. Average response time under 30 minutes." },
  { icon: Signal, title: "Optimized Streaming", desc: "Dedicated streaming servers with automatic load balancing and anti-buffer technology for smooth playback." },
  { icon: HardDrive, title: "Regular Content Updates", desc: "New channels, movies and series added weekly. Our VOD library grows continuously with the latest releases." },
  { icon: Layers, title: "Multi-Protocol Support", desc: "Compatible with Xtream Codes API, M3U playlists, and all major IPTV player apps including TiviMate and VLC." },
]

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

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <Radio className="h-3 w-3 mr-1" /> What is IPTV?
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">How IPTV Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              IPTV (Internet Protocol Television) delivers television content over your internet connection rather than through traditional satellite, cable or terrestrial formats. Instead of broadcasting multiple channels simultaneously and letting you tune in, IPTV sends only the channel you choose directly to your device.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-brand/30 transition-all">
              <Satellite className="h-8 w-8 text-brand mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No Satellite Dish Needed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Forget about expensive satellite installations, dish alignment or cable contracts. All you need is a working internet connection and a compatible device. IPTV gives you access to thousands of channels without the hardware hassle.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-brand/30 transition-all">
              <Cable className="h-8 w-8 text-brand mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No Cable Contracts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Traditional cable TV locks you into long contracts with hidden fees and limited channel packages. IPTV offers total flexibility: choose your plan, pay month-to-month or save with longer plans, and cancel anytime with no penalties.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-brand/30 transition-all">
              <Globe className="h-8 w-8 text-brand mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Watch Anywhere in the World</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Whether you are at home, travelling abroad, or living overseas, your subscription works everywhere. Access your home country channels wherever you are. Perfect for expats, frequent travellers and international families.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              No commitment &bull; Cancel anytime
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
              Everything you need for an exceptional IPTV experience. From live sports to on-demand movies, from catch-up TV to multi-screen viewing.
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

      <section className="py-24 relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <Trophy className="h-3 w-3 mr-1" /> Channel Categories
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">What You Can Watch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our 25,000+ channels cover every genre imaginable. Here is a glimpse of what is included in every subscription.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channelCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div key={cat.name} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted group-hover:bg-brand/10 transition-colors">
                      <Icon className={`h-5 w-5 ${cat.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-brand transition-colors">{cat.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              Plus dedicated channels for <strong className="text-white">religion</strong>, <strong className="text-white">shopping</strong>, <strong className="text-white">adult content</strong> (optional PIN-protected), <strong className="text-white">local UK channels</strong>, <strong className="text-white">regional European</strong> and <strong className="text-white">exclusive pay-per-view events</strong>. Our library is updated weekly with new additions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <Star className="h-3 w-3 mr-1" /> Why IPTV?
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">IPTV vs Traditional TV</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how IPTV compares to traditional cable and satellite television. The differences are clear.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="p-4 text-left text-white font-semibold"></th>
                    <th className="p-4 text-center text-brand font-semibold">doubleclick iptv</th>
                    <th className="p-4 text-center text-muted-foreground font-semibold">Cable TV</th>
                    <th className="p-4 text-center text-muted-foreground font-semibold">Satellite TV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-white font-medium">Channels</td>
                    <td className="p-4 text-center text-brand">25,000+</td>
                    <td className="p-4 text-center text-muted-foreground">200-500</td>
                    <td className="p-4 text-center text-muted-foreground">500-1000</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-white font-medium">VOD Library</td>
                    <td className="p-4 text-center text-brand">100,000+</td>
                    <td className="p-4 text-center text-muted-foreground">Limited</td>
                    <td className="p-4 text-center text-muted-foreground">Limited</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-white font-medium">Monthly Price</td>
                    <td className="p-4 text-center text-brand">From &pound;12/month</td>
                    <td className="p-4 text-center text-muted-foreground">&pound;30-100+</td>
                    <td className="p-4 text-center text-muted-foreground">&pound;25-80+</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-white font-medium">Contract</td>
                    <td className="p-4 text-center text-brand">No commitment</td>
                    <td className="p-4 text-center text-muted-foreground">12-24 months</td>
                    <td className="p-4 text-center text-muted-foreground">12-24 months</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-white font-medium">Device Flexibility</td>
                    <td className="p-4 text-center text-brand">All devices</td>
                    <td className="p-4 text-center text-muted-foreground">One box only</td>
                    <td className="p-4 text-center text-muted-foreground">One box only</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-white font-medium">Watch Abroad</td>
                    <td className="p-4 text-center text-brand">Yes, worldwide</td>
                    <td className="p-4 text-center text-muted-foreground">No</td>
                    <td className="p-4 text-center text-muted-foreground">No</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-white font-medium">4K Quality</td>
                    <td className="p-4 text-center text-brand">Yes</td>
                    <td className="p-4 text-center text-muted-foreground">Limited</td>
                    <td className="p-4 text-center text-muted-foreground">Limited</td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 text-white font-medium">Catch-up TV</td>
                    <td className="p-4 text-center text-brand">7 days</td>
                    <td className="p-4 text-center text-muted-foreground">Limited</td>
                    <td className="p-4 text-center text-muted-foreground">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              Watch on your TV, phone, tablet or computer. One subscription covers every device in your household. Setup takes less than 5 minutes.
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
              View installation guide <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <Zap className="h-3 w-3 mr-1" /> Quick start
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">How to Get Started in 3 Steps</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Getting started with doubleclick iptv is simple. Follow these three steps and you will be watching in minutes.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howItWorks.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative rounded-2xl border border-border bg-card p-6 text-center hover:border-brand/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-black text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-brand transition-colors">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-success px-6 py-3 text-sm font-semibold text-white hover:bg-success-hover transition-all hover:scale-105 shadow-lg shadow-success/25"
            >
              <MessageCircle className="h-4 w-4" />
              Get Started Now
            </a>
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
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              <Shield className="h-3 w-3 mr-1" /> Trust & Reliability
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Thousands Choose Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We take your entertainment seriously. Here is what makes doubleclick iptv a trusted choice for viewers worldwide.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((tp) => {
              const Icon = tp.icon
              return (
                <div key={tp.title} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted group-hover:bg-brand/10 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-muted-foreground group-hover:text-brand transition-colors" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-brand transition-colors">{tp.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tp.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-4">
              Got questions?
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about IPTV and our service.
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
              View all FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
