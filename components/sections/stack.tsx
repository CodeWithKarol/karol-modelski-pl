import { 
  Atom, 
  Hexagon, 
  Share2, 
  Sparkles,
  ShieldCheck
} from "lucide-react"

const techs = [
  {
    name: "Panele sterowania",
    description: "Buduję intuicyjne aplikacje (Angular/React), które zbierają dane w jednym miejscu. Twoja automatyzacja biznesu staje się prosta w obsłudze.",
    icon: Atom
  },
  {
    name: "Integracja narzędzi",
    description: "Łączę Twoje programy w jeden system (n8n/Make). Automatyzacja procesów w firmie wyklucza błędy przy ręcznym przepisywaniu danych.",
    icon: Share2
  },
  {
    name: "Inteligentne moduły AI",
    description: "Wdrażam automatyzację AI (Google Gemini), która potrafi czytać faktury, streszczać maile i analizować dokumenty w kilka sekund.",
    icon: Sparkles
  },
  {
    name: "Stabilność i bezpieczeństwo",
    description: "Stosuję standardy bankowe (TypeScript – technologia, która wyłapuje błędy w kodzie, zanim system trafi do użytku), zapewniając bezawaryjną automatyzację pracy.",
    icon: Hexagon
  }
]

export function Stack() {
  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Twoje bezpieczeństwo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Technologia, która daje Ci spokój na lata
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
            Zamiast eksperymentów, wybieram sprawdzone narzędzia, na których polegają liderzy rynku. Dzięki temu Twoja automatyzacja procesów jest nie tylko szybka, ale przede wszystkim przewidywalna i łatwa w utrzymaniu.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {techs.map((tech) => (
              <div key={tech.name} className="flex flex-col rounded-2xl bg-background p-8 border border-border transition-all hover:border-primary/20">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <tech.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{tech.name}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <div className="max-w-3xl rounded-2xl bg-primary/5 p-8 border border-primary/10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">Dlaczego to ma znaczenie?</h3>
              <p className="mt-2 text-muted-foreground">
                Wybierając standardy rynkowe, eliminuję ryzyko „uzależnienia od programisty”. Gdybym kiedykolwiek przestał wspierać Twój projekt, każdy inny profesjonalista na świecie będzie potrafił przejąć i rozwijać Twój system. To najwyższy standard bezpieczeństwa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
