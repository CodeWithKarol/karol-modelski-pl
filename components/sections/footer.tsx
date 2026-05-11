import { 
  Landmark, 
  Lock, 
  Key, 
  MousePointer2,
  Mail,
  FileText
} from "lucide-react"

import Link from "next/link"

export function Footer() {
  const serviceLinks = [
    { name: "Automatyzacja AI", href: "/uslugi/automatyzacja-ai" },
    { name: "Systemy na wymiar", href: "/uslugi/systemy-na-wymiar" },
    { name: "Łączenie aplikacji", href: "/uslugi/laczenie-aplikacji" },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          
          {/* Brand & Tagline */}
          <div className="space-y-8 xl:col-span-1">
            <div>
              <h3 className="text-xl font-bold text-foreground">Karol Modelski</h3>
              <p className="text-sm font-medium text-primary mt-1 text-balance">
                Karol Modelski | Automatyzacja procesów biznesowych | Warszawa
              </p>
            </div>
            <p className="text-base leading-7 text-muted-foreground max-w-xs">
              Odzyskaj do 15 godzin tygodniowo dzięki technologii, która pracuje na Twoich zasadach.
            </p>
          </div>

          {/* New Service Links Column (SEO Power) */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Usługi</h3>
                <ul role="list" className="space-y-4">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/uslugi" className="text-sm font-bold text-primary hover:underline transition-colors">
                      Pełny katalog →
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Firma</h3>
                <ul role="list" className="space-y-4">
                  <li><Link href="/o-mnie" className="text-sm text-muted-foreground hover:text-primary transition-colors">O mnie</Link></li>
                  <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                  <li><Link href="/#kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Gwarancja jakości</h3>
                <ul role="list" className="space-y-6">
                  <li className="flex gap-4">
                    <Landmark className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Standard Bankowy</p>
                      <p className="text-xs text-muted-foreground mt-1">Stabilność systemów Citi i BNP Paribas.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Lock className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Własność Cyfrowa</p>
                      <p className="text-xs text-muted-foreground mt-1">Żadnych ukrytych abonamentów.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Business Info Bar */}
        <div className="mt-12 sm:mt-16 border-t border-border pt-8 lg:flex lg:items-center lg:justify-between">
          <div className="space-y-2 text-center lg:text-left">
            <p className="text-xs text-muted-foreground font-mono">Karol Modelski</p>
            <p className="text-xs text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              <FileText className="h-3 w-3" /> NIP: 6112800950 (Faktura VAT)
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-6 lg:mt-0 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Karol Modelski. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

