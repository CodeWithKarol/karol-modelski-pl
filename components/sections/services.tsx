import { 
  Workflow, 
  BrainCircuit, 
  LayoutDashboard, 
  Code2 
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const pillars = [
  {
    id: "filar-1",
    title: "Filar I: Inteligentna automatyzacja procesów biznesowych",
    subtitle: "Twoje cyfrowe zaplecze, które nigdy nie śpi.",
    description: "Kompleksowa automatyzacja procesów w firmie eliminuje wąskie gardła w administracji i księgowości. Skupiam się na wyeliminowaniu najbardziej powtarzalnych i nudnych zadań w Twojej firmie.",
    benefits: "Automatyczny obieg faktur, bezbłędne raportowanie czasu pracy i błyskawiczną wymianę danych między Twoimi programami (np. CRM -> Fakturowanie -> Slack).",
    result: "Twoja automatyzacja procesów biznesowych sprawia, że zespół zajmuje się obsługą klientów, a nie „przekładaniem papierów”.",
    icon: Workflow
  },
  {
    id: "filar-2",
    title: "Filar II: Automatyzacja AI i analiza danych",
    subtitle: "Jak wdrożyć automatyzację AI w małej firmie?",
    description: "Wdrażam zaawansowaną automatyzację AI, która nie tylko wykonuje polecenia, ale pomaga Ci podejmować lepsze decyzje.",
    benefits: "Inteligentne sortowanie zapytań od klientów, automatyczne streszczenia długich raportów oraz systemy, które potrafią wyciągać kluczowe informacje z tysięcy dokumentów w kilka sekund.",
    result: "Wykorzystujesz najnowszą automatyzację, aby być o krok przed konkurencją, która wciąż działa „po staremu”.",
    icon: BrainCircuit
  },
  {
    id: "filar-3",
    title: "Filar III: Dedykowane systemy i panele zarządzania",
    subtitle: "Twoje centrum dowodzenia szyte na miarę.",
    description: "Gdy gotowe narzędzia na rynku zawodzą, wkraczam ja ze swoim zapleczem programistycznym. Buduję dla Ciebie dedykowane panele sterowania w technologiach, z których korzystają najwięksi gracze (Angular, React).",
    benefits: "Własny, czytelny panel (dashboard), który zbiera dane z całej Twojej firmy w jednym miejscu. To aplikacja stworzona pod Twoje unikalne procesy – bez zbędnych funkcji, prosta w obsłudze i w pełni skalowalna.",
    result: "Twoja automatyzacja biznesu zyskuje profesjonalną i bezpieczną twarz. Masz system, który dostosowuje się do Ciebie, a nie odwrotnie.",
    icon: LayoutDashboard
  }
]

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Oferta</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Jak konkretnie pomagam Twojej firmie?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Nie sprzedaję godzin programowania. Projektuję i wdrażam rozwiązania, które eliminują wąskie gardła w Twoim biznesie. Moje podejście opieram na trzech fundamentach:
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.id} 
              className={cn(
                "flex flex-col border-primary/10 transition-colors hover:border-primary/30",
                index === 2 && "md:col-span-2 lg:col-span-1"
              )}
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <pillar.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
                <p className="font-medium text-primary">{pillar.subtitle}</p>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col gap-4 text-muted-foreground">
                <p>{pillar.description}</p>
                <div>
                  <strong className="text-foreground">Co zyskujesz?</strong> {pillar.benefits}
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-sm italic">
                    <span className="font-semibold text-foreground">Efekt:</span> {pillar.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 rounded-2xl bg-muted p-8 sm:p-12 lg:flex lg:items-center lg:gap-x-12">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 lg:h-24 lg:w-24">
            <Code2 className="h-8 w-8 text-primary lg:h-12 lg:w-12" />
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="text-2xl font-bold text-foreground">Dlaczego to połączenie jest unikalne?</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Większość specjalistów od automatyzacji procesów kończy pracę na „połączeniu dwóch aplikacji”. Ja idę krok dalej. Jeśli Twój proces wymaga niestandardowego rozwiązania, po prostu je dla Ciebie koduję. Nie powiem Ci: „tego nie da się zrobić, bo program na to nie pozwala”. Ja stworzę program, który na to pozwoli.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
