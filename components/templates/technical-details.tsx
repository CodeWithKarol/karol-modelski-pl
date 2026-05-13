import { ShieldCheck, Zap, Bot } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function TechnicalDetails({ features }: { features: { icon: any; title: string; description: string; link?: { label: string; href: string } }[] }) {
  return (
    <section className="py-12 sm:py-24 bg-muted/30 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Technologia
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Szczegóły wdrożenia</h2>
        </div>

        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 transition-colors duration-300 group-hover:bg-amber-100 dark:bg-amber-950/40 dark:group-hover:bg-amber-950/60">
                  <feature.icon
                    className="h-6 w-6 text-amber-600 dark:text-amber-400"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                    {feature.link && (
                      <Link href={feature.link.href} className="text-amber-600 hover:underline ml-1">
                        {feature.link.label}
                      </Link>
                    )}
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


