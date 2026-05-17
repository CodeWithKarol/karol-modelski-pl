
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { LayoutDashboard, Target, PiggyBank, MessageSquareText } from "lucide-react"
import { OFFERS } from "@/lib/offers"

const obszary = [
  { 
    title: "Sprzedaż", 
    description: "Automatyzacja procesów sprzedażowych, lead management i integracja z CRM dla szybszej obsługi klientów.",
    icon: Target, 
    href: OFFERS["/automatyzacja-sprzedazy"].metadata.href 
  },
  { 
    title: "Zarządzanie", 
    description: "Uporządkuj zadania i projekty. Automatyczne tworzenie struktur, przypisywanie zadań i śledzenie statusów w jednym miejscu.",
    icon: LayoutDashboard, 
    href: OFFERS["/automatyzacja-zarzadzania-projektami"].metadata.href 
  },
  { 
    title: "Finanse", 
    description: "Zautomatyzuj obieg dokumentów i faktur. Dane trafiają tam, gdzie powinny, bez ręcznego przepisywania i błędów.",
    icon: PiggyBank, 
    href: OFFERS["/automatyzacja-administracji-i-finansow"].metadata.href 
  },
  { 
    title: "Obsługa Klienta", 
    description: "Skróć czas reakcji dzięki inteligentnemu kolejkowaniu zgłoszeń i automatycznym alertom o priorytetowych ticketach.",
    icon: MessageSquareText, 
    href: OFFERS["/automatyzacja-obslugi-klienta"].metadata.href 
  },
]

export function Obszary() {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Obszary
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Obszary automatyzacji</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Obszary, w których pomagam firmom zyskać czas i efektywność.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {obszary.map((obszar) => (
            <Card key={obszar.title} className="flex flex-col h-full border-border/60 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 mb-6 dark:bg-amber-950/40">
                <obszar.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{obszar.title}</h3>
              <p className="text-sm text-muted-foreground flex-grow mb-6 leading-relaxed">{obszar.description}</p>
              <Link
                href={obszar.href}
                className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Zobacz rozwiązania &rarr;
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
