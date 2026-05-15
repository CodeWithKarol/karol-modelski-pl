
import Link from "next/link"
import { Card } from "@/components/ui/card"

const narzedzia = [
  {
    name: "Pipedrive",
    description: "Zautomatyzuj proces sprzedaży dzięki n8n. Przesyłaj leady z formularzy WWW bezpośrednio do Pipedrive, automatycznie twórz deale i przypisuj zadania handlowcom, eliminując ręczną pracę administracyjną.",
    href: "/integracja-pipedrive"
  },
  {
    name: "ClickUp",
    description: "Inteligentne zarządzanie projektami w ClickUp. Automatycznie twórz struktury zadań i listy w oparciu o szablony, zapewniając pełną przejrzystość projektów bez ręcznego klikania.",
    href: "/integracja-clickup"
  },
  {
    name: "Google Sheets",
    description: "Przekształć arkusze w inteligentne centrum dowodzenia. Automatyzacja danych, raportowanie w czasie rzeczywistym i zaawansowana integracja z dowolnymi zewnętrznymi API przez n8n.",
    href: "/automatyzacja-google-sheets"
  },
  {
    name: "HubSpot",
    description: "Automatyzacja HubSpot pozwala na bezszwową synchronizację danych marketingowych z procesami sprzedaży w n8n. Zamiast ręcznie przepisywać leady, wdrażam przepływy, które w czasie rzeczywistym wzbogacają profile klientów o dane z zewnętrznych API i AI.",
    href: "/integracja-hubspot"
  },
  {
    name: "Slack",
    description: "Integracja Slack przekształca Twój komunikator w centrum operacyjne firmy, wysyłając natychmiastowe powiadomienia o zdarzeniach z webhooków. Dzięki Code Node w n8n, tworzę interaktywne przyciski, które pozwalają akceptować oferty lub delegować zadania do ClickUp bezpośrednio z poziomu czatu.",
    href: "/integracja-slack"
  },
  {
    name: "Stripe",
    description: "Automatyzacja Stripe to klucz do połączenia marketingu z realnym ROI poprzez natychmiastowe rejestrowanie transakcji w systemach księgowych i arkuszach Google. Wykorzystuję oficjalne API Stripe do budowania pętli analitycznych.",
    href: "/automatyzacja-finansow"
  },
]

export function NarzedziaGrid() {
  return (
    <section className="py-12 sm:py-24 bg-muted/30 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Technologie
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Narzędzia, które integruję</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Sprawdzone platformy, które łączę w wydajne ekosystemy automatyzacji.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {narzedzia.map((tool) => (
            <Card key={tool.name} className="flex flex-col h-full border-border/60 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5">
              <h3 className="text-xl font-bold text-foreground mb-4">{tool.name}</h3>
              <p className="text-sm text-muted-foreground flex-grow mb-6 leading-relaxed">{tool.description}</p>
              <Link
                href={tool.href}
                className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Zobacz integrację &rarr;
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
