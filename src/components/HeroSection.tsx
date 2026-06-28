import Image from "next/image"
import { MessageCircle, Shield, Zap, Tv } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

interface HeroSectionProps {
  title: string
  subtitle?: string
  image?: boolean
  badge?: string
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
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/8583821/pexels-photo-8583821.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury home theater with leather recliners and large screen for doubleclick iptv premium IPTV streaming"
            fill
            sizes="100vw"
            className="object-cover scale-105 z-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-brand/[0.08] via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-brand rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent rounded-full blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs font-medium text-brand mb-6 backdrop-blur-sm">
              {badge}
            </span>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.trialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-4 text-base font-bold text-black hover:bg-brand-hover transition-all duration-300 shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              {siteConfig.trialText}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/60 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-card/80 transition-all duration-300"
            >
              <Tv className="h-5 w-5" />
              View Plans
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-brand" />
              25,000+ Channels
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              HD & 4K Quality
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-success" />
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}