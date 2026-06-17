import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 transition-all duration-300 animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      {siteConfig.trialText}
    </a>
  )
}
