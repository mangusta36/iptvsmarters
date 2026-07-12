import { pricingPlans } from "@/lib/pricing-data"
import { siteConfig } from "@/lib/site-config"
import { Check, Sparkles, MessageCircle, Zap } from "lucide-react"

interface PricingCardsProps {
  showAll?: boolean
}

const packageNames: Record<string, string> = {
  basic: "Basic Package",
  standard: "Silver Package",
  ultimate: "Gold Package",
}

function formatPrice(price: number): string {
  return `$${price.toFixed(0)}`
}

export default function PricingCards({ showAll = false }: PricingCardsProps) {
  const plans = showAll ? pricingPlans : pricingPlans

  return (
    <>
      <div className="text-center mb-12">
        <a
          href={siteConfig.trialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-hover px-8 py-3.5 text-sm font-bold text-black hover:scale-105 transition-all duration-300 shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/40"
        >
          <Zap className="h-4 w-4" />
          {siteConfig.trialText}
        </a>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:gap-6 xl:gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col rounded-2xl bg-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              plan.popular
                ? "border-2 border-brand shadow-xl shadow-brand/10 bg-gradient-to-b from-brand/[0.03] to-transparent ring-1 ring-brand/20"
                : "border border-border hover:border-brand/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-brand/5"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-amber-400 px-5 py-1.5 text-xs font-bold text-black shadow-lg shadow-brand/30">
                  <Sparkles className="h-3 w-3" />
                  Best Selling
                </span>
              </div>
            )}

            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            </div>

            <div className="mb-8 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold text-white tracking-tight">
                  {formatPrice(plan.price)}
                </span>
              </div>
              <p className="mt-2 text-base text-brand font-semibold">
                /{plan.duration}
              </p>
              {plan.popular && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Best value — save compared to monthly
                </p>
              )}
            </div>

            <ul className="mb-8 flex-1 space-y-3.5">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm group/li">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand group-hover/li:scale-110 transition-transform" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hi doubleclicktv, I'm interested in the ${packageNames[plan.id] || plan.name} — ${plan.duration} — ${formatPrice(plan.price)}. Please send me more details.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-sm font-bold transition-all duration-300 ${
                plan.popular
                  ? "bg-brand text-black hover:bg-brand-hover shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 hover:scale-[1.02]"
                  : "bg-muted text-white hover:bg-secondary hover:shadow-lg hover:scale-[1.02]"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              Subscribe Now
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
