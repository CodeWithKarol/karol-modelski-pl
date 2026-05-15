import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface Scenario {
  title: string
  description: string
}

export function OfferScenarios({ title, scenarios }: { title: string; scenarios: Scenario[] }) {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
        </div>
        <div className="mx-auto max-w-4xl grid grid-cols-1 gap-6">
          {scenarios.map((s) => (
            <Card key={s.title} className="border-border/60 bg-muted/20">
              <CardContent className="flex gap-4 p-6 items-start">
                <CheckCircle2 className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
