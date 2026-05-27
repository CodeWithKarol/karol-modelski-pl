import Link from "next/link"
import { Users, Receipt, BrainCircuit, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { OFFERS } from "@/lib/offers"

const clusters = [
  {
    icon: Users,
    accent: {
      iconBg: "bg-violet-100 dark:bg-violet-950/40",
      iconColor: "text-violet-600 dark:text-violet-400",
      label: "Sprzedaż i Obsługa Leadów",
      labelBg: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800/40",
      effectBg: "bg-violet-50 border-violet-100 dark:bg-violet-950/30 dark:border-violet-800/30",
      effectText: "text-violet-700 dark:text-violet-300",
      effectIcon: "text-violet-500 dark:text-violet-400",
    },
    cluster: "CRM Automation",
    title: "Sprzedaż i Obsługa Leadów",
    solution:
      "Automatyczne przechwytywanie kontaktów z formularza WWW lub kalendarza i błyskawiczne przesyłanie ich do HubSpot / Pipedrive.",
    effect:
      "Natychmiastowy alert na Slacku/Teams o nowym kliencie. Odpowiadasz zanim wyprzedzi Cię konkurencja.",
    href: OFFERS["/automatyzacja-sprzedazy"].offer_url,
  },
  {
    icon: Receipt,
    accent: {
      iconBg: "bg-amber-100 dark:bg-amber-950/40",
      iconColor: "text-amber-600 dark:text-amber-400",
      label: "Dokumenty i Finanse",
      labelBg: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40",
      effectBg: "bg-amber-50 border-amber-100 dark:bg-amber-950/30 dark:border-amber-800/30",
      effectText: "text-amber-700 dark:text-amber-300",
      effectIcon: "text-amber-500 dark:text-amber-400",
    },
    cluster: "Data & Invoice Automation",
    title: "Dokumenty i Finanse",
    solution:
      "Automatyzacja wprowadzania faktur. Każdy załącznik z fakturą trafiający na Twój Gmail jest automatycznie katalogowany na Google Drive, a najważniejsze dane lądują w dedykowanym Arkuszu Google Sheets.",
    effect:
      "Koniec z chaosem na koniec miesiąca i ręcznym przeszukiwaniem poczty dla księgowości.",
    href: OFFERS["/automatyzacja-administracji-i-finansow"].offer_url,
  },
  {
    icon: BrainCircuit,
    accent: {
      iconBg: "bg-indigo-100 dark:bg-indigo-950/40",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      label: "Inteligentne Procesy z AI",
      labelBg: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/40",
      effectBg: "bg-indigo-50 border-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-800/30",
      effectText: "text-indigo-700 dark:text-indigo-300",
      effectIcon: "text-indigo-500 dark:text-indigo-400",
    },
    cluster: "Google Gemini Integration",
    title: "Inteligentne Procesy z AI",
    solution:
      "Wdrożenie zaawansowanych modeli językowych Google Gemini bezpośrednio w Twoje workflow. Algorytm automatycznie analizuje treść maili, klasyfikuje intencje klientów i przygotowuje wersje robocze odpowiedzi.",
    effect:
      "Twoja skrzynka zaczyna wstępnie obsługiwać się sama, zachowując najwyższą jakość komunikacji.",
    href: OFFERS["/automatyzacja-procesow-z-ai"].offer_url,
  },
  {
    icon: BrainCircuit,
    accent: {
      iconBg: "bg-rose-100 dark:bg-rose-950/40",
      iconColor: "text-rose-600 dark:text-rose-400",
      label: "Automatyzacja Marketingu",
      labelBg: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/40",
      effectBg: "bg-rose-50 border-rose-100 dark:bg-rose-950/30 dark:border-rose-800/30",
      effectText: "text-rose-700 dark:text-rose-300",
      effectIcon: "text-rose-500 dark:text-rose-400",
    },
    cluster: "Marketing Automation",
    title: "Automatyzacja Marketingu",
    solution:
      "Zaawansowane ścieżki Lead Nurturing, inteligentna klasyfikacja leadów i automatyczna dystrybucja treści, połączone z Twoim CRM bez wysokich opłat.",
    effect:
      "Zwiększ konwersję dzięki personalizacji w czasie rzeczywistym, nie płacąc za każdy przesłany lead.",
    href: OFFERS["/automatyzacja-marketingu"].offer_url,
  },
  {
    icon: Users,
    accent: {
      iconBg: "bg-emerald-100 dark:bg-emerald-950/40",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      label: "Współpraca",
      labelBg: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40",
      effectBg: "bg-emerald-50 border-emerald-100 dark:bg-emerald-950/30 dark:border-emerald-800/30",
      effectText: "text-emerald-700 dark:text-emerald-300",
      effectIcon: "text-emerald-500 dark:text-emerald-400",
    },
    cluster: "Współpraca",
    title: "Jak możemy współpracować?",
    solution:
      "Sprawdź dostępne modele współpracy, od jednorazowych konsultacji n8n, przez audyty, po stałe wsparcie w automatyzacji Twoich procesów.",
    effect:
      "Znajdź model dopasowany do Twoich potrzeb i skali Twojego biznesu.",
    href: "/wspolpraca",
  },
]

export function OfferClusters() {
  return (
    <section
      id="oferta-klastry"
      aria-labelledby="offer-clusters-heading"
      className="relative overflow-hidden bg-background py-12 sm:py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-400/5 blur-3xl" />
        <div className="absolute -right-48 top-1/3 h-[400px] w-[400px] rounded-full bg-amber-400/5 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="offer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#offer-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Oferta
            </span>
          </div>

          <h2
            id="offer-clusters-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Małe integracje n8n, które{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">odciążą Twój biznes</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-2 bg-amber-400/25"
              />
            </span>{" "}
            natychmiast
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Nie musisz od razu rewolucjonizować całej firmy. Zacznij od jednego, konkretnego
            usprawnienia. Zobacz najpopularniejsze ekosystemy, które konfiguruję dla firm usługowych:
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {clusters.map((item) => {
              const CardContentWrapper = ({ children }: { children: React.ReactNode }) => (
                <Card
                  className="group relative flex flex-col border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 h-full"
                >
                  <CardContent className="flex flex-col gap-5 p-6 h-full">
                    {children}
                  </CardContent>
                </Card>
              )

              const content = (
                <>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${item.accent.iconBg}`}
                    >
                      <item.icon className={`h-5 w-5 ${item.accent.iconColor}`} aria-hidden="true" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold ${item.accent.labelBg}`}
                    >
                      {item.cluster}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-foreground">
                    {item.title}
                  </h3>

                  <div>
                    <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                      Rozwiązanie
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.solution}
                    </p>
                  </div>

                  <div
                    className={`mt-auto flex items-start gap-3 rounded-xl border p-4 ${item.accent.effectBg}`}
                  >
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${item.accent.effectIcon}`}
                      aria-hidden="true"
                    />
                    <p className={`text-sm leading-relaxed font-medium ${item.accent.effectText}`}>
                      {item.effect}
                    </p>
                  </div>
                </>
              )

              return item.href ? (
                <Link href={item.href} key={item.title} className="block">
                  <CardContentWrapper>{content}</CardContentWrapper>
                </Link>
              ) : (
                <div key={item.title}>
                  <CardContentWrapper>{content}</CardContentWrapper>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
