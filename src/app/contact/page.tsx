import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site-config"
import ContactForm from "./contact-form"

export const metadata: Metadata = {
  title: "Contact - 24/7 Support",
  description: "Contact doubleclick iptv via WhatsApp. 24/7 technical support, iptv setup assistance, troubleshooting and responsive customer service for your iptv subscription.",
  openGraph: {
    title: "Contact - 24/7 Support",
    description: "Need help? Contact our iptv support team via WhatsApp. Response within 30 minutes.",
    url: absoluteUrl("/contact"),
  },
  alternates: { canonical: absoluteUrl("/contact") },
}

export default function ContactPage() {
  return <ContactForm />
}
