import { ArrowRight, Sparkles, LayoutDashboard, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ServiceTeaser() {
  const categories = [
    { 
      name: "Automatyzacja AI", 
      icon: Sparkles, 
      href: "/uslugi/automatyzacja-ai",
      description: "Inteligentne moduły AI, które „myślą” nad Twoimi dokumentami."
    },
    { 
      name: "Systemy na wymiar", 
      icon: LayoutDashboard, 
      href: "/uslugi/systemy-na-wymiar",
      description: "Twój autorski, bezpieczny panel sterowania na wyłączną własność."
    },
    { 
      name: "Łączenie aplikacji", 
      icon: Share2, 
      href: "/uslugi/laczenie-aplikacji",
      description: "Bezbłędny obieg danych i integracja narzędzi w jeden organizm."
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Wybierz swoją drogę</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nie buduję skryptów. Buduję aktywa Twojej firmy.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Wybierz obszar, który wymaga usprawnienia, aby zobaczyć dedykowane rozwiązania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="group">
              <Card className="h-full border-primary/10 transition-all hover:border-primary/40 hover:shadow-lg bg-muted/30 group-hover:bg-background">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                    <cat.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{cat.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    Zobacz: {cat.name} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="ghost" className="rounded-full hover:text-primary">
            <Link href="/uslugi">Zobacz pełny katalog rozwiązań i cennik</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
