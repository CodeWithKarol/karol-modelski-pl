import { 
  Search, 
  Map, 
  Zap, 
  ShieldCheck,
  UserCircle2
} from "lucide-react"

const steps = [
  {
    id: 1,
    title: "KROK 1: Bezpłatny Audyt i Strategia",
    description: "Analizuję Twoje działania i wskazuję obszary z najwyższym zwrotem z inwestycji.",
    deliverable: "Listę zadań do natychmiastowej automatyzacji.",
    icon: Search
  },
  {
    id: 2,
    title: "KROK 2: Projekt „Mapy Drogowej”",
    description: "Rysuję plan przepływu danych i wygląd Twojego nowego panelu zarządzania.",
    deliverable: "Wizualny schemat systemu przed rozpoczęciem prac.",
    icon: Map
  },
  {
    id: 3,
    title: "KROK 3: Budowa i Wdrożenie",
    description: "Buduję Twój system w technologiach, z których korzystają najwięksi gracze (Angular/React), łączę aplikacje i szkolę Twój zespół.",
    deliverable: "Gotową do pracy, przetestowaną automatyzację procesów biznesowych.",
    icon: Zap
  },
  {
    id: 4,
    title: "KROK 4: Opieka i Rozwój",
    description: "Monitoruję system 24/7 i rozbudowuję go wraz ze wzrostem Twojej firmy.",
    deliverable: "Gwarancję bezpieczeństwa i stałe wsparcie techniczne.",
    icon: ShieldCheck
  }
]

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Proces</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cztery kroki do firmy, która pracuje na Twoich zasadach
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Wdrożenie nowej technologii nie musi być skomplikowane ani stresujące. Jako Twój jedyny punkt kontaktu, prowadzę Cię przez jasny proces – od identyfikacji problemu, aż po stałe wsparcie gotowego systemu.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 xl:grid-cols-4 xl:gap-x-8">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col gap-6 px-2 sm:px-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold leading-7 text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground flex-grow">
                    {step.description}
                  </p>
                  <div className="mt-6 rounded-xl bg-muted p-4">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-primary font-bold">Co otrzymujesz?</span> {step.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-3xl bg-primary/5 p-6 sm:p-12 border border-primary/10">
          <div className="flex flex-col items-center gap-6 md:gap-8 md:flex-row md:text-left text-center">
            <div className="flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <UserCircle2 className="h-10 w-10 md:h-12 md:w-12 text-primary" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Dlaczego to działa?</h3>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Pracując ze mną, nie trafiasz do kolejki w wielkiej agencji. Masz bezpośredni kontakt z architektem Twojego systemu. Dzięki połączeniu zwinności gotowych narzędzi (tzw. no-code) z potęgą programowania, dostarczam rozwiązania, które są niemożliwe do osiągnięcia przy użyciu samych szablonów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
