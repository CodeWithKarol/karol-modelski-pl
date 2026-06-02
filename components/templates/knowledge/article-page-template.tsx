import { ArticlePageData } from "@/lib/types";
import { 
  ArticleTOCSection, 
  ArticleLinksSection,
  ArticleFaqSection 
} from "@/components/sections/knowledge/article-sections";
import { GenericHero } from "@/components/sections/generic-hero";
import { ContactDual } from "@/components/sections/contact-dual";

export function ArticlePageTemplate({ data }: { data: ArticlePageData }) {
  return (
    <div className="min-h-screen bg-background">
      <GenericHero 
        title="Baza wiedzy"
        subtitle={data.hero_section.h1}
        description={data.hero_section.lead_paragraph}
        ctaText="Umów bezpłatną konsultację"
        ctaHref="https://calendly.com/kontakt-karol-modelski/new-meeting"
        breadcrumbItems={[
          { label: "Baza wiedzy", href: "/baza-wiedzy" },
          { label: data.hero_section.h1, href: "#" }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 sm:py-12">
          {/* Metadata info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 text-muted-foreground text-sm font-medium">
             <span>Data: {data.metadata.publication_date}</span>
             <div className="flex items-center gap-3 sm:border-l sm:pl-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs shrink-0">
                    {data.metadata.author_name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                    <p className="text-sm font-bold text-foreground">{data.metadata.author_name}</p>
                    <p className="text-xs text-muted-foreground">{data.metadata.author_role}</p>
                </div>
            </div>
          </div>

          <ArticleTOCSection items={data.table_of_contents} content_blocks={data.content_blocks} />

          <article className="prose prose-lg dark:prose-invert max-w-4xl mb-16 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            {data.content_blocks.map((block, idx) => (
                <div key={idx} className="my-10" id={block.content_block_id}>
                  <h2 className="text-3xl font-bold mb-6 text-foreground tracking-tight">{block.h2}</h2>
                  {block.type === "text" && <p className="leading-relaxed text-muted-foreground">{block.content}</p>}
                  {block.type === "code" && (
                    <pre className="p-5 bg-muted/50 rounded-xl border border-border overflow-x-auto text-sm font-mono text-muted-foreground shadow-sm">
                      <code>{block.content}</code>
                    </pre>
                  )}
                  {block.type === "text_with_image" && (
                    <div className="space-y-6">
                      <p className="leading-relaxed text-muted-foreground">{block.content}</p>
                    </div>
                  )}
                </div>
            ))}
          </article>

          {data.faq_section.length > 0 && <ArticleFaqSection faqs={data.faq_section} />}

          <div className="mt-24">
            <ArticleLinksSection internal_linking={data.internal_linking} />
          </div>
          <div className="mt-24">
            <ContactDual />
          </div>
        </div>
      </div>
    </div>
  );
}
