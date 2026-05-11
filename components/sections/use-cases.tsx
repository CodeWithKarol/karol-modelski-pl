import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Receipt, Laptop2 } from "lucide-react"

const cases = [
  {
    title: "Sprzedaż i CRM",
    description: "Automatyczna kwalifikacja leadów, natychmiastowe generowanie ofert w PDF i powiadomienia dla zespołu.",
    icon: BarChart3
  },
  {
    title: "Administracja i Dokumentacja",
    description: "Automatyczny i bezbłędny obieg faktur, umów i raportów bez angażowania ludzi.",
    icon: Receipt
  },
  {
    title: "Zarządzanie Danymi",
    description: "Wszystkie kluczowe wskaźniki firmy (KPI) zwizualizowane na jednym, czytelnym pulpicie menedżerskim.",
    icon: Laptop2
  }
]

export function UseCases() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Możliwości</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Obszary, które wspólnie zoptymalizujemy
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Wdrażam systemy tam, gdzie ręczna praca blokuje potencjał wzrostu. Zobacz praktyczne efekty automatyzacji.
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
