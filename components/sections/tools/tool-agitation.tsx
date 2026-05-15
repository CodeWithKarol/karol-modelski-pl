import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface PainPoint {
  icon: LucideIcon
  title: string
  description: string
}

export function ToolAgitation({ title = "Dlaczego potrzebujesz automatyzacji?", painPoints }: { title?: string; painPoints: PainPoint[] }) {
  return (
    <section className="py-12 sm:py-24 bg-muted/50 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-400/40 bg-red-50 px-3 py-1 dark:bg-red-950/40">
            <span className="font-mono text-xs font-semibold tracking-wide text-red-700 dark:text-red-300">
              Problemy
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Codzienne frustracje, które kosztują Twoją firmę czas i pieniądze.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {painPoints.map((point) => (
            <Card
              key={point.title}
              className="group relative border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:shadow-xl hover:shadow-red-500/5"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 transition-colors duration-300 group-hover:bg-red-100 dark:bg-red-950/40 dark:group-hover:bg-red-950/60">
                  <point.icon
                    className="h-6 w-6 text-red-600 dark:text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
