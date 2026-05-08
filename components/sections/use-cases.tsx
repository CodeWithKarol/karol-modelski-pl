import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Users2, Receipt, Laptop2, MessageSquare, Ship } from "lucide-react"

const cases = [
  {
    title: "Sprzedaż i CRM",
    description: "Automatyczne wprowadzanie leadów, generowanie ofert i synchronizacja danych między systemami.",
    icon: BarChart3
  },
  {
    title: "Finanse i Księgowość",
    description: "Bezbłędny obieg faktur, automatyczne przypomnienia o płatnościach i raportowanie zysków.",
    icon: Receipt
  },
  {
    title: "Obsługa Klienta",
    description: "Inteligentne sortowanie zapytań przez AI i automatyczne odpowiedzi na powtarzalne pytania.",
    icon: MessageSquare
  },
  {
    title: "Operacje i Logistyka",
    description: "Śledzenie statusów zamówień, automatyzacja dokumentacji i optymalizacja obiegu informacji.",
    icon: Ship
  },
  {
    title: "Zarządzanie Zespołem",
    description: "Automatyczne raporty czasu pracy, onboarding pracowników i centralne panele dashboardów.",
    icon: Users2
  },
  {
    title: "Dedykowane Rozwiązania",
    description: "Jeśli Twój proces jest unikalny, stworzę system 'na wymiar', który go obsłuży.",
    icon: Laptop2
  }
]

export function UseCases() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Zastosowania</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Gdzie automatyzacja przynosi największy zysk?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Moje systemy wdrażam tam, gdzie chaos informacyjny blokuje rozwój firmy. Zobacz, w jakich obszarach możemy odzyskać Twój czas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <Card key={item.title} className="border-border bg-muted/30 transition-all hover:border-primary/20 hover:bg-background group">
              <CardContent className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6 group-hover:bg-primary transition-colors">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
