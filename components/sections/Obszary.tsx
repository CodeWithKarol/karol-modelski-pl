
import Link from "next/link"
import { AREAS_CONFIG } from "@/lib/areas"

export function Obszary() {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1">
            <span className="font-mono text-xs font-semibold tracking-wide text-muted-foreground">
              {AREAS_CONFIG.eyebrow}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {AREAS_CONFIG.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            {AREAS_CONFIG.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-2">
          {AREAS_CONFIG.areas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-muted/20 p-8 transition-all hover:border-primary/50 hover:bg-muted/40 hover:shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {area.description}
              </p>
              <p className="text-sm font-medium text-foreground italic">
                {area.benefit}
              </p>
              <span
                className="inline-flex items-center text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors mt-2"
              >
                {area.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
