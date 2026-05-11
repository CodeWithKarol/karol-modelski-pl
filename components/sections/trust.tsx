import { 
  Zap, 
  Settings, 
  ShieldCheck
} from "lucide-react"

const trustPoints = [
  {
    title: "Płacisz raz, korzystasz zawsze",
    description: "Otrzymujesz rozwiązanie na własność. Brak jakichkolwiek opłat licencyjnych czy abonamentów za stworzone narzędzia. To aktywo, które zostaje w Twojej firmie na lata.",
    icon: Zap
  },
  {
    title: "Interfejs uszyty na miarę",
    description: "Koniec z dopasowywaniem firmy do ograniczeń gotowych platform. To oprogramowanie dopasowuje się do Twoich procesów, dostarczając tylko tych funkcji, których naprawdę potrzebujesz.",
    icon: Settings
  },
  {
    title: "Bezpieczeństwo i standardy korporacyjne",
    description: "Przenoszę sprawdzone procedury bezpieczeństwa i standardy technologiczne z pracy dla międzynarodowych banków i korporacji bezpośrednio do Twojego biznesu.",
    icon: ShieldCheck
  }
]

export function Trust() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Wartości</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Dlaczego warto podjąć współpracę?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
            Pozycjonuję się jako Twój partner technologiczny. Dostarczam rozwiązania, które budują realną wartość biznesową i przewagę konkurencyjną.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-6 sm:p-8 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
