import Link from "next/link"
import { Card } from "@/components/ui/card"
import { TOOLS } from "@/lib/tools"

export function OfferToolLinks() {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Poznaj nasze automatyzacje
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Wybierz narzędzie, które chcesz zintegrować i zautomatyzować w swojej firmie.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link key={tool.metadata.name} href={tool.metadata.href} className="group">
              <Card className="h-full flex items-center justify-center p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5 border-border/60 bg-background">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-foreground">
                  {tool.metadata.name}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
