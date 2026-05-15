import Link from "next/link"
import { MapPin, Mail, ExternalLink } from "lucide-react"

const navLinks: { href: string; label: string; external?: boolean; internal?: boolean }[] = [
  { href: "/#oferta-klastry", label: "Oferta" },
  { href: "/wspolpraca", label: "Współpraca" },
  { href: "/#o-mnie", label: "O mnie" },
  { href: "/#faq", label: "FAQ" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background" aria-label="Stopka strony">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">

          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
              aria-label="Strona główna – Karol Modelski"
            >
              Karol Modelski
            </Link>

            {/* AI-optimized blurb */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              Projektuję i wdrażam punktowe automatyzacje procesów biznesowych z wykorzystaniem
              platformy <strong className="font-medium text-foreground">n8n</strong> oraz
              sztucznej inteligencji (Google Gemini). Pomagam małym i średnim firmom eliminować
              rutynowe zadania, oszczędzać czas i redukować koszty operacyjne bez rewolucji
              w strukturze IT.
            </p>

            {/* Local SEO */}
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
              <span>
                Działam hybrydowo w{" "}
                <strong className="font-medium text-foreground">Warszawie</strong> oraz
                zdalnie na terenie całej Polski.
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Menu strony
            </h4>
            <nav aria-label="Nawigacja w stopce">
              <ul className="flex flex-col gap-3" role="list">
                {navLinks.map((link) =>
                  link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <ExternalLink
                          className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ) : link.internal ? (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          {/* Column 3: Education */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Baza wiedzy
            </h4>
            <ul className="flex flex-col gap-3" role="list">
              <li><Link href="/baza-wiedzy/co-to-jest-n8n" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Co to jest n8n?</Link></li>
              <li><Link href="/baza-wiedzy/co-to-jest-webhook" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Co to jest Webhook?</Link></li>
              <li><Link href="/baza-wiedzy/api-w-biznesie" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API w biznesie</Link></li>
            </ul>
          </div>

          {/* Column 4: Company Data (E-E-A-T) */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Kontakt i dane firmy
            </h4>

            <address className="not-italic">
              <ul className="flex flex-col gap-3" role="list">
                <li>
                  <a
                    href="mailto:kontakt@karol-modelski.pl"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                    kontakt@karol-modelski.pl
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/karol-modelski"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Profil Karola Modelskiego na LinkedIn (otwiera nową kartę)"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 shrink-0 text-amber-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Forma prawna:</span>{" "}
                  Jednoosobowa Działalność Gospodarcza
                </li>
                <li className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">NIP:</span> 6112800950
                </li>
                <li className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                  Warszawa, Polska
                </li>
              </ul>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">
            Copyright &copy; {currentYear} Karol Modelski. Wszelkie prawa zastrzeżone.
          </p>
          <Link href="/mapa-strony" className="text-xs text-muted-foreground hover:text-foreground">
            Mapa strony
          </Link>
        </div>
      </div>
    </footer>
  )
}
