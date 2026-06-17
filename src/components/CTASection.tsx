import { siteConfig } from "@/lib/site-config"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

interface CTASectionProps {
  title?: string
  subtitle?: string
  showPlans?: boolean
}

export default function CTASection({
  title = "Ready to get started with doubleclick iptv?",
  subtitle = "Contact us on WhatsApp to discover our plans. Customer support available 24/7.",
  showPlans = true,
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent" />
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand rounded-full blur-[200px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.trialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-3.5 text-base font-bold text-black hover:bg-brand-hover transition-all duration-300 shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            {siteConfig.trialText}
          </a>
          {showPlans && (
            <Link
              href="/abonnement"
              className="inline-flex items-center rounded-lg border border-border bg-card px-8 py-3.5 text-base font-semibold text-white hover:bg-muted transition-all duration-300 hover:border-brand/30"
            >
              View Plans
            </Link>
          )}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-success px-8 py-3.5 text-base font-semibold text-white hover:bg-success-hover transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Support
          </a>
        </div>
      </div>
    </section>
  )
}
