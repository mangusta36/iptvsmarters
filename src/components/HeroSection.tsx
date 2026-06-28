import Image from "next/image"
import { MessageCircle, Shield, Zap, Tv } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import type { ReactNode } from "react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  image?: boolean
  badge?: string
}

const goldTokens = ["HD & 4K", "Ultra HD", "25,000+ Channels"]

function renderTitle(text: string): ReactNode {
  const parts: ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    const matches = goldTokens
      .map((token) => ({ token, index: remaining.indexOf(token) }))
      .filter((m) => m.index !== -1)
      .sort((a, b) => a.index - b.index)

    if (matches.length === 0) {
      parts.push(<span key={key++}>{remaining}</span>)
      break
    }

    const { token, index } = matches[0]
    if (index > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, index)}</span>)
    }
    parts.push(
      <span key={key++} className="text-gold">
        {token}
      </span>
    )
    remaining = remaining.slice(index + token.length)
  }

  return parts
}

export default function HeroSection({
  title,
  subtitle,
  image: showBg,
  badge,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {showBg && (
        <>
          <Image
            src="https://images.pexels.com/photos/29942709/pexels-photo-29942709.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern smart TV displaying vibrant streaming apps in a dark ambient living room with neon lighting"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/[0.07] via-transparent to-transparent" />
        </>
      )}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="max-w-xl py-32 sm:py-40 lg:py-48">
          {badge && (
            <span className="inline-flex items-center rounded-full bg-brand/15 border border-brand/25 px-4 py-1.5 text-xs font-semibold text-brand tracking-wider uppercase mb-8 backdrop-blur-sm">
              {badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] text-shadow-glow">
            {renderTitle(title)}
          </h1>
          {subtitle && (
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed font-light text-shadow-subtle">
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.trialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-brand px-8 py-4 text-base font-bold text-black hover:bg-brand-hover transition-all duration-300 shadow-xl shadow-brand/30 hover:shadow-2xl hover:shadow-brand/40 hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              {siteConfig.trialText}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Tv className="h-5 w-5" />
              View Plans
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-4">
            <span className="flex items-center gap-2.5 text-sm text-gray-400">
              <Shield className="h-4 w-4 text-brand" />
              <span>25,000+ Channels</span>
            </span>
            <span className="flex items-center gap-2.5 text-sm text-gray-400">
              <Zap className="h-4 w-4 text-accent" />
              <span>HD & 4K Quality</span>
            </span>
            <span className="flex items-center gap-2.5 text-sm text-gray-400">
              <MessageCircle className="h-4 w-4 text-success" />
              <span>24/7 Support</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
