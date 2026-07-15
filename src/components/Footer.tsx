import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/abonnement" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/a-propos" },
  { label: "Support", href: "/support" },
  { label: "Legal Notice", href: "/legal-notice" },
  { label: "T&Cs", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

const guideLinks = [
  { label: "Installation Guide", href: "/iptv-installation" },
  { label: "Activation Guide", href: "/iptv-activation" },
  { label: "Complete IPTV Guide", href: "/iptv-guide" },
  { label: "Xtream Codes Guide", href: "/iptv-xtream-codes" },
  { label: "IPTV on Samsung", href: "/iptv-samsung" },
  { label: "IPTV on Android", href: "/iptv-android" },
  { label: "IPTV on LG", href: "/iptv-lg" },
]

const deviceLinks = [
  { label: "Smart TV", href: "/iptv-smart-tv" },
  { label: "Windows PC", href: "/iptv-windows" },
  { label: "Mac", href: "/iptv-mac" },
  { label: "iPhone & iPad", href: "/iptv-iphone" },
  { label: "Sony Bravia", href: "/iptv-sony" },
  { label: "Fire TV Stick", href: "/blog/iptv-fire-tv-stick-guide" },
]

const contentLinks = [
  { label: "Movies", href: "/films" },
  { label: "Series", href: "/series" },
  { label: "VOD Catalogue", href: "/vod" },
  { label: "IPTV in UK", href: "/iptv-france" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="text-xl font-bold text-white tracking-tight group-hover:text-brand transition-colors duration-300">
                <span className="text-brand">doubleclick</span> iptv
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="mt-4">
              <a
                href={siteConfig.trialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-bold text-black hover:bg-brand-hover transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-brand/20"
              >
                <MessageCircle className="h-4 w-4" />
                {siteConfig.trialText}
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              <span>Premium IPTV</span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-brand transition-colors duration-200 hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Guides
            </h3>
            <ul className="mt-4 space-y-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-brand transition-colors duration-200 hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Devices
            </h3>
            <ul className="mt-4 space-y-2">
              {[...deviceLinks, ...contentLinks].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-brand transition-colors duration-200 hover:translate-x-0.5 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-brand transition-colors duration-200"
                >
                  WhatsApp : +212 753936672
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.trialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-hover transition-colors duration-200"
                >
                  <MessageCircle className="h-3 w-3" />
                  {siteConfig.trialText}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/a-propos" className="text-xs text-muted-foreground hover:text-brand transition-colors duration-200">
                About
              </Link>
              <Link href="/legal-notice" className="text-xs text-muted-foreground hover:text-brand transition-colors duration-200">
                Legal Notice
              </Link>
              <Link href="/terms-conditions" className="text-xs text-muted-foreground hover:text-brand transition-colors duration-200">
                T&Cs
              </Link>
              <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-brand transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
