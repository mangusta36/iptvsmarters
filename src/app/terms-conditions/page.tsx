import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Terms & Conditions of Sale",
  description: "Terms and conditions of sale for doubleclick iptv subscriptions.",
  robots: { index: false, follow: false },
  alternates: { canonical: absoluteUrl("/terms-conditions") },
}

export default function CGVPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Terms & Conditions of Sale</h1>
        <div className="mt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-lg font-semibold text-white">Article 1 : Purpose</h2>
          <p>These terms and conditions govern the sale of IPTV subscriptions by doubleclick iptv. By subscribing, the customer accepts these conditions without reservation.</p>
          <h2 className="text-lg font-semibold text-white">Article 2 : Subscription</h2>
          <p>The subscription provides access to an IPTV streaming service including TV channels, VOD and live sports. The duration and features vary according to the chosen plan.</p>
          <h2 className="text-lg font-semibold text-white">Article 3 : Price and payment</h2>
          <p>Prices are indicated in pounds sterling (£) inclusive of all taxes. Payment is due immediately at the time of order. Accepted payment methods are communicated at the time of order.</p>
          <h2 className="text-lg font-semibold text-white">Article 4 : Activation time</h2>
          <p>Subscription activation occurs within a maximum of 24 business hours after receipt of payment.</p>
          <h2 className="text-lg font-semibold text-white">Article 5 : Right of withdrawal</h2>
          <p>In accordance with applicable law, the customer has a period of 14 days to exercise their right of withdrawal. However, for digital services whose execution has begun with the customer&apos;s agreement, this right may be limited.</p>
          <h2 className="text-lg font-semibold text-white">Article 6 : Liability</h2>
          <p>doubleclick iptv is committed to providing a quality service. However, the provider&apos;s liability shall not be engaged in cases of force majeure, technical problems beyond its control, or improper use of the service by the customer.</p>
          <h2 className="text-lg font-semibold text-white">Article 7 : Cancellation</h2>
          <p>The customer may cancel their subscription at any time without charge. Cancellation takes effect immediately. No refund is made for the current period.</p>
        </div>
      </div>
    </section>
  )
}
