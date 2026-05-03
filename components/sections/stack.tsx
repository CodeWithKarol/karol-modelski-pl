import { 
  Atom, 
  Hexagon, 
  Share2, 
  Sparkles,
  ShieldCheck
} from "lucide-react"

const techs = [
  {
    name: "Angular / React",
    description: "Błyskawiczne i intuicyjne panele zarządzania, które ułatwiają codzienną pracę.",
    icon: Atom
  },
  {
    name: "n8n / Make",
    description: "„Mózg” operacyjny łączący wszystkie Twoje aplikacje w jeden, spójny ekosystem.",
    icon: Share2
  },
  {
    name: "Google Gemini",
    description: "Najnowocześniejsza automatyzacja AI do inteligentnej i szybkiej analizy danych.",
    icon: Sparkles
  },
  {
    name: "TypeScript",
    description: "Fundament bezawaryjnego i bezpiecznego kodu, który przetrwa lata intensywnej pracy.",
    icon: Hexagon
  }
]

export function Stack() {
  return (
    <section className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Technologia</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Zaplecze technologiczne – Twoja gwarancja jakości
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            W moich projektach nie ma miejsca na przypadek. Dobieram narzędzia, których używają liderzy rynku, aby Twoja automatyzacja procesów była szybka, bezpieczna i skalowalna.
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
