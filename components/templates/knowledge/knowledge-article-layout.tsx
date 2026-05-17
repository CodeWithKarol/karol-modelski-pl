import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactDual } from "@/components/sections/contact-dual"
import { KnowledgePageContent } from "@/lib/types"

export function KnowledgeArticleLayout({ content }: { content: KnowledgePageContent }) {
  const { metadata, readingTime, managerSummary, contentBlocks, relatedTools } = content;

  return (
    <>
      <Breadcrumbs items={[{ label: metadata.breadcrumbLabel, href: metadata.href }]} />
      
      <main className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40 mb-6">
                  <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
                    {readingTime}
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">{metadata.title}</h1>
                <p className="mt-6 text-xl text-muted-foreground text-balance max-w-2xl mx-auto">{metadata.subtitle}</p>
            </header>

            <section className="mb-16 rounded-2xl border border-amber-400/20 bg-amber-50/50 p-8 dark:bg-amber-950/20 shadow-sm">
                <h2 className="text-sm font-bold text-amber-900 dark:text-amber-100 mb-3 uppercase tracking-wider">Podsumowanie dla menedżera</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">{managerSummary}</p>
            </section>

            <article className="prose prose-amber dark:prose-invert max-w-none space-y-12">
                {contentBlocks.map((block, idx) => (
                    <div key={idx} className="space-y-4">
                        {block.title && <h2 className="text-2xl font-bold">{block.title}</h2>}
                        {block.type === "paragraph" && <p className="leading-relaxed text-lg text-muted-foreground">{block.body}</p>}
                        {block.type === "code" && (
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                            <code>{block.body}</code>
                          </pre>
                        )}
                        {block.type === "quote" && (
                          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-foreground/70">
                            {block.body}
                          </blockquote>
                        )}
                    </div>
                ))}
            </article>

            {relatedTools && relatedTools.length > 0 && (
              <section className="mt-20 border-t border-border pt-12">
                <h3 className="text-lg font-bold mb-6">Powiązane automatyzacje:</h3>
                <div className="flex flex-wrap gap-4">
                  {relatedTools.map((tool) => (
                    <a key={tool.href} href={tool.href} className="px-4 py-2 rounded-lg bg-muted text-sm font-medium hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors">
                      {tool.label} →
                    </a>
                  ))}
                </div>
              </section>
            )}
        </div>
      </main>

      <ContactDual />
    </>
  )
}
