import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GDPR privacy policy of doubleclick iptv.",
  robots: { index: false, follow: false },
  alternates: { canonical: absoluteUrl("/privacy-policy") },
}

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated : June 2026</p>
        <div className="mt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-lg font-semibold text-white">1. Data Collection</h2>
          <p>We collect the following data: name, email address, phone number, and payment information (via a third-party processor). This data is collected solely for the purpose of providing our service.</p>
          <h2 className="text-lg font-semibold text-white">2. Use of Data</h2>
          <p>Your data is used to: process your order, provide you with the service, provide technical support, and inform you of updates to our service.</p>
          <h2 className="text-lg font-semibold text-white">3. Data Sharing</h2>
          <p>We do not share your personal data with third parties, except where required by law or for payment processing purposes.</p>
          <h2 className="text-lg font-semibold text-white">4. Retention Period</h2>
          <p>Your data is retained for the duration of your subscription and up to 3 years after its termination, unless you request earlier deletion.</p>
          <h2 className="text-lg font-semibold text-white">5. Your GDPR Rights</h2>
          <p>In accordance with GDPR, you have the following rights: access, rectification, erasure, restriction, portability and objection. To exercise them, contact us by email.</p>
          <h2 className="text-lg font-semibold text-white">6. Cookies</h2>
          <p>This site uses technical cookies necessary for its operation. No advertising or tracking cookies are used without prior consent.</p>
          <h2 className="text-lg font-semibold text-white">7. Contact</h2>
          <p>For any questions regarding this policy, contact us by email or via WhatsApp.</p>
        </div>
      </div>
    </section>
  )
}
