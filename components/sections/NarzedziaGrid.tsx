
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const narzedzia = [
  { name: "Pipedrive", href: "/integracja-pipedrive" },
  { name: "ClickUp", href: "/integracja-clickup" },
  { name: "Google Sheets", href: "/automatyzacja-google-sheets" },
]

export function NarzedziaGrid() {
  return (
    <section className="py-12 sm:py-24 bg-muted/30 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Technologie
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Narzędzia, które wdrażam</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Sprawdzone platformy, które łączę w wydajne ekosystemy automatyzacji.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {narzedzia.map((tool) => (
            <Link href={tool.href} key={tool.name} className="group">
              <Card className="h-full flex items-center justify-center p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5 border-border/60">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-foreground">
                  {tool.name}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
