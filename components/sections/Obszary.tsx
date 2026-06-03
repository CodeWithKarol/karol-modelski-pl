
import Link from "next/link"
import { AREAS_CONFIG } from "@/lib/areas"

export function Obszary() {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-500">
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
        <div className="mx-auto mt-16 max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          {AREAS_CONFIG.categories.map((category) => (
            <Link
              key={category.groupTitle}
              href={category.href}
              className="group flex flex-col justify-between rounded-xl border border-border bg-muted/20 p-8 transition-all hover:border-amber-400/50 hover:bg-muted/40 hover:shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{category.groupTitle}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-500">
                {category.cta} &rarr;
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
