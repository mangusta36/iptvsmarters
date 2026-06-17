import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"
import ContactForm from "./contact-form"

export const metadata: Metadata = {
  title: "Contact IPTV Support - 24/7 Customer Service",
  description: "Contact doubleclick iptv support via WhatsApp. 24/7 technical assistance, IPTV setup help, troubleshooting, billing support and responsive customer service for your premium IPTV subscription.",
  openGraph: {
    title: "Contact - IPTV Support 24/7",
    description: "Need help with your IPTV subscription? Contact our support team via WhatsApp. Response within 30 minutes.",
    url: absoluteUrl("/contact"),
  },
  alternates: { canonical: absoluteUrl("/contact") },
}

export default function ContactPage() {
  return <ContactForm />
}
