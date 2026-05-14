import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function AreaToolLinks({ title, description, links }: { title: string; description: string; links: { label: string; href: string }[] }) {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
           <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
           <p className="mt-6 text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="group">
              <Card className="h-full flex items-center justify-center p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5 border-border/60 bg-background">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-foreground">
                  {link.label}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
