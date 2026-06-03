'use client'

import Link from "next/link"
import { MapPin, Mail } from "lucide-react"
import { FOOTER_CONFIG } from "../../lib/footer"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background" aria-label="Stopka strony">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Brand & Mission */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-lg font-bold tracking-tight text-foreground hover:underline"
              aria-label="Strona główna – Karol Modelski"
            >
              {FOOTER_CONFIG.brand.title}
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {FOOTER_CONFIG.brand.description}
            </p>
            
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href={`mailto:${FOOTER_CONFIG.contact.email}`} className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4 text-amber-500" /> {FOOTER_CONFIG.contact.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-500" /> {FOOTER_CONFIG.contact.address}
              </span>
            </div>
            
            <a
              href={FOOTER_CONFIG.brand.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 text-sm font-medium text-foreground hover:underline"
            >
              <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.359V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              {FOOTER_CONFIG.brand.linkedin.label}
            </a>
          </div>

          {/* SEO Optimized Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Usługi i specjalizacje
            </h4>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              {FOOTER_CONFIG.services.map((service) => (
                <Link key={service.href} href={service.href} className="hover:text-foreground">
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Data */}
          <div className="flex flex-col gap-5 text-sm text-muted-foreground">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Dane firmy
            </h4>
            <p>{FOOTER_CONFIG.companyData.name}</p>
            <p>{FOOTER_CONFIG.companyData.nip}</p>
            <p>{FOOTER_CONFIG.companyData.address}</p>
          </div>

        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8 text-xs text-muted-foreground">
          <p>&copy; {currentYear} {FOOTER_CONFIG.copyright}</p>
          <div className="flex gap-4">
            {FOOTER_CONFIG.bottomLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
