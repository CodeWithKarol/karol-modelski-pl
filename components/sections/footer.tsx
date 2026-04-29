import { 
  Landmark, 
  Lock, 
  Key, 
  MousePointer2,
  Mail,
  FileText
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand & Tagline */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground">Karol Modelski</h3>
              <p className="text-sm font-medium text-primary mt-1">Ekspert Automatyzacji Biznesu</p>
            </div>
            <p className="text-base leading-7 text-muted-foreground max-w-xs">
              Odzyskaj do 15 godzin tygodniowo dzięki technologii, która pracuje na Twoich zasadach.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/karol-modelski" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="mailto:kontakt@karol-modelski.pl" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">E-mail</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Guarantees Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Gwarancja jakości i bezpieczeństwa</h3>
                <ul role="list" className="space-y-6">
                  <li className="flex gap-4">
                    <Landmark className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Standard Bankowy</p>
                      <p className="text-xs text-muted-foreground mt-1">Stabilność systemów, którym ufają największe banki świata (Citi, BNP Paribas).</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Lock className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Bezpieczeństwo danych</p>
                      <p className="text-xs text-muted-foreground mt-1">Twoje informacje biznesowe są chronione zgodnie z najwyższymi standardami.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div className="xl:mt-11">
                <ul role="list" className="space-y-6">
                  <li className="flex gap-4">
                    <Key className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Pełna własność</p>
                      <p className="text-xs text-muted-foreground mt-1">Buduję narzędzia, które należą wyłącznie do Ciebie – bez ukrytych kosztów.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <MousePointer2 className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Prostota obsługi</p>
                      <p className="text-xs text-muted-foreground mt-1">Intuicyjne systemy, które nie wymagają specjalistycznej wiedzy technicznej.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Business Info Bar */}
        <div className="mt-16 border-t border-border pt-8 lg:flex lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-mono">Karol Modelski</p>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <FileText className="h-3 w-3" /> NIP: 6112800950 (Wystawiam faktury VAT)
            </p>
          </div>
          <p className="mt-8 text-xs text-muted-foreground lg:mt-0 font-mono">
            &copy; {new Date().getFullYear()} Karol Modelski. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
