import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactDual } from "@/components/sections/contact-dual"
import { KnowledgePageData } from "@/lib/types"

export function KnowledgePageTemplate({ data, children }: { data: KnowledgePageData, children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={[{ label: data.breadcrumbLabel, href: data.href }]} />
      
      <main className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Background decoration matching other sections */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-64 -top-32 h-[600px] w-[600px] rounded-full bg-amber-400/5 blur-3xl" />
          <div className="absolute -bottom-32 -right-48 h-[500px] w-[500px] rounded-full bg-indigo-400/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40 mb-6">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
                    Baza wiedzy
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">{data.title}</h1>
                <p className="mt-6 text-lg text-muted-foreground text-balance">
                    {data.subtitle}
                </p>
            </header>

            <article className="prose prose-amber dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight">
                {children}
            </article>

            {data.managerSummary && (
                <section className="mt-16 rounded-2xl border border-amber-400/20 bg-amber-50/50 p-8 dark:bg-amber-950/20">
                    <h2 className="text-xl font-bold mb-4">{data.managerSummary.title || "Podsumowanie dla menedżera"}</h2>
                    <div className="text-foreground leading-relaxed">
                        {data.managerSummary.content}
                    </div>
                </section>
            )}
        </div>
      </main>

      <ContactDual />
    </>
  )
}

