import { 
  Users, 
  AlertCircle, 
  TrendingUp, 
  Cpu, 
  UserCheck 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  {
    title: "Pracownicy jako „żywe mosty”",
    description: "Twój zespół marnuje godziny na ręczne przepisywanie danych między aplikacjami. To najdroższy i najmniej efektywny sposób zarządzania informacją.",
    icon: Users,
    tag: "🚩"
  },
  {
    title: "Kosztowne błędy ludzkie",
    description: "Jeden przeoczony e-mail lub błąd w arkuszu kosztuje tysiące. Moja automatyzacja pracy zastępuje zawodną pamięć niezawodnym algorytmem 24/7.",
    icon: AlertCircle,
    tag: "🚩"
  },
  {
    title: "Paraliż przed skalowaniem",
    description: "Boisz się nowych zleceń, bo obecny chaos ich nie udźwignie? Wdrażam automatyzację biznesu, która rośnie razem z Twoją firmą.",
    icon: TrendingUp,
    tag: "🚩"
  },
  {
    title: "Technologia, która ogranicza",
    description: "Nie musisz naginać firmy do gotowych programów. Jeśli czegoś brakuje na rynku, po prostu to dla Ciebie zakoduję.",
    icon: Cpu,
    tag: "🚩"
  }
]

export function PainPoints() {
  return (
    <section id="problemy" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Problem</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Twoja firma rośnie, a Ty masz coraz mniej czasu?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Często spotykam właścicieli firm, którzy uważają, że rozwój musi oznaczać więcej pracy. Ja wierzę w <strong className="text-foreground">mądrzejszą pracę</strong>. Jeśli rozpoznajesz u siebie te objawy, pomogę Ci przebić „szklany sufit”, w który właśnie uderzył Twój biznes:
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:max-w-none lg:gap-y-16">
            {painPoints.map((point) => (
              <div key={point.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <point.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  {point.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {point.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center">
          <Card className="max-w-3xl border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col items-center gap-6 p-8 sm:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-foreground">Ile kosztuje Cię brak automatyzacji?</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Każdy miesiąc zwlekania to dziesiątki roboczogodzin Twojego zespołu wyrzuconych do kosza na powtarzalne zadania. W skali roku to koszt równy zatrudnieniu nowego pracownika, który zamiast budować Twój zysk, zajmuje się „przekładaniem danych”.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
             <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-foreground">Dlaczego pracuję sam?</h3>
                <p className="mt-2 text-muted-foreground">
                  Bo biorę pełną odpowiedzialność za każdy wiersz kodu i każdy zautomatyzowany krok w Twojej firmie. Nie deleguję Twojego sukcesu do stażystów – osobiście projektuję system, który odzyska Twój czas.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
