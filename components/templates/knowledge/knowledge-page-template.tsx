import { Breadcrumbs } from "@/components/breadcrumbs"
import { Footer } from "@/components/sections/footer"
import { ContactDual } from "@/components/sections/contact-dual"

interface KnowledgePageProps {
  title: string
  subtitle: string
  breadcrumbLabel: string
  href: string
  children: React.ReactNode
}

export function KnowledgePageTemplate({ title, subtitle, breadcrumbLabel, href, children }: KnowledgePageProps) {
  return (
    <>
      <Breadcrumbs items={[{ label: breadcrumbLabel, href }]} />
      
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
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">{title}</h1>
                <p className="mt-6 text-lg text-muted-foreground text-balance">
                    {subtitle}
                </p>
            </header>

            <article className="prose prose-amber dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight">
                {children}
            </article>
        </div>
      </main>

      <ContactDual />
      <Footer />
    </>
  )
}
