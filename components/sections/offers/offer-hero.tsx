import { WorkflowDiagram } from "@/components/workflow-diagram"
import Link from "next/link"

export function OfferHero({ title, subtitle, description }: { title: string; subtitle: string; description: string }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-64 -top-32 h-[600px] w-[600px] rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-48 h-[500px] w-[500px] rounded-full bg-indigo-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
                {title}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {subtitle}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/wspolpraca"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all hover:bg-foreground/85"
              >
                Bezpłatna Konsultacja
              </Link>
            </div>
          </div>

          <div className="relative">
            <WorkflowDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
