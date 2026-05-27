import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactDual } from "@/components/sections/contact-dual"
import { ArticlePageData } from "@/lib/types"

export function KnowledgeArticleLayout({ content }: { content: ArticlePageData }) {
  const { hero_section, content_blocks, faq_section, internal_linking } = content;

  return (
    <>
      <main className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40 mb-6">
                  <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
                    {hero_section.reading_time_minutes} min czytania
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">{hero_section.h1}</h1>
                <p className="mt-6 text-xl text-muted-foreground text-balance max-w-2xl mx-auto">{hero_section.lead_paragraph}</p>
            </header>

            <article className="prose prose-amber dark:prose-invert max-w-none space-y-12">
                {content_blocks.map((block, idx) => (
                    <div key={idx} className="space-y-4">
                        {block.h2 && <h2 className="text-2xl font-bold">{block.h2}</h2>}
                        {block.type === "text" && <p className="leading-relaxed text-lg text-muted-foreground">{block.content}</p>}
                        {block.type === "code" && (
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono">
                            <code>{block.content}</code>
                          </pre>
                        )}
                        {block.type === "text_with_image" && (
                          <div className="space-y-4">
                             <p className="leading-relaxed text-lg text-muted-foreground">{block.content}</p>
                             {block.image_url && <img src={block.image_url} alt={block.image_alt || ""} className="rounded-lg shadow-md" />}
                          </div>
                        )}
                    </div>
                ))}
            </article>

            {internal_linking.related_tools && internal_linking.related_tools.length > 0 && (
              <section className="mt-20 border-t border-border pt-12">
                <h3 className="text-lg font-bold mb-6">Powiązane narzędzia:</h3>
                <div className="flex flex-wrap gap-4">
                  {internal_linking.related_tools.map((tool) => (
                    <a key={tool.url} href={tool.url} className="px-4 py-2 rounded-lg bg-muted text-sm font-medium hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors">
                      {tool.name} →
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
