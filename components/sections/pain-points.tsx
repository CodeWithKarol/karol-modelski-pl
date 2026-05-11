import { 
  Users, 
  Search, 
  Zap,
  TrendingUp
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  {
    title: "Ręczne przepisywanie danych",
    description: "Twój zespół marnuje godziny na przenoszenie informacji między systemami, aplikacjami i arkuszami Excel.",
    icon: Users,
  },
  {
    title: "Rozproszona wiedza",
    description: "Korzystasz z wielu narzędzi, ale brakuje Ci jednego, spójnego źródła prawdy o kondycji firmy.",
    icon: Search,
  },
  {
    title: "Brak rąk do pracy",
    description: "Zamiast skupiać się na skalowaniu biznesu i obsłudze klientów, stale gasisz pożary i pilnujesz powtarzalnych zadań.",
    icon: Zap,
  }
]

export function PainPoints() {
  return (
    <section id="problemy" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Wyzwania</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Z którymi z tych wyzwań mierzysz się każdego dnia?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Często spotykam właścicieli firm, którzy utknęli w codziennej operacyjności. Moim celem jest uwolnienie Cię od powtarzalnych zadań, abyś mógł skupić się na tym, co naprawdę ważne.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 md:max-w-none lg:gap-y-16">
            {painPoints.map((point) => (
              <div key={point.title} className="relative flex flex-col items-center text-center px-4">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                  <point.icon className="h-8 w-8 text-primary-foreground" aria-hidden="true" />
                </div>
                <dt className="text-xl font-bold leading-7 text-foreground">
                  {point.title}
                </dt>
                <dd className="mt-4 text-base leading-7 text-muted-foreground">
                  {point.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col items-center gap-6 p-6 sm:p-8 sm:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-foreground">Ile kosztuje Cię brak automatyzacji?</h3>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                  Każdy miesiąc zwlekania to dziesiątki roboczogodzin Twojego zespołu wyrzuconych do kosza na powtarzalne zadania. W skali roku to koszt równy zatrudnieniu nowego pracownika, który zamiast budować Twój zysk, zajmuje się „przekładaniem danych”.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
