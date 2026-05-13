
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { LayoutDashboard, Target, PiggyBank } from "lucide-react"

const obszary = [
  { title: "Sprzedaż", icon: Target, href: "/automatyzacja-sprzedazy" },
  { title: "Zarządzanie", icon: LayoutDashboard, href: "/automatyzacja-zarzadzania-projektami" },
  { title: "Finanse", icon: PiggyBank, href: "/automatyzacja-administracji-i-finansow" },
]

export function Obszary() {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Obszary
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Obszary automatyzacji</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Obszary, w których pomagam firmom zyskać czas i efektywność.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {obszary.map((obszar) => (
            <Link href={obszar.href} key={obszar.title} className="group">
              <Card className="h-full border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5">
                <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 transition-colors duration-300 group-hover:bg-amber-100 dark:bg-amber-950/40 dark:group-hover:bg-amber-950/60">
                    <obszar.icon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{obszar.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
