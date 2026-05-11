import { 
  Search, 
  Zap, 
  ShieldCheck
} from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Faza 0 (Darmowa diagnostyka)",
    description: "Rozmawiamy o Twojej firmie i wąskich gardłach. Bez zobowiązań analizujemy, gdzie ucieka najwięcej czasu.",
    deliverable: "Identyfikacja pola do automatyzacji.",
    icon: Search
  },
  {
    id: 2,
    title: "Projekt i wdrożenie",
    description: "Tworzę spójne środowisko i buduję dedykowany panel w React/Angular spięty z Twoimi systemami.",
    deliverable: "Gotowy system na Twoją własność.",
    icon: Zap
  },
  {
    id: 3,
    title: "Wsparcie i opieka (Retainer)",
    description: "Nie zostawiam Cię samego. Dbam o to, by automatyzacja działała stabilnie w miarę rozwoju Twojej firmy.",
    deliverable: "Ciągłość działania i rozwój systemu.",
    icon: ShieldCheck
  }
]

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Współpraca</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Jak wygląda nasza wspólna droga?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Wdrożenie nowej technologii nie musi być skomplikowane. Prowadzę Cię przez jasny, 3-etapowy proces – od pierwszej rozmowy, aż po stałe wsparcie Twojego biznesu.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-12">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold leading-7 text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-6 rounded-xl bg-muted p-4">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-primary font-bold">Rezultat:</span> {step.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
