import { ArticlePageData } from "@/lib/types";
import { 
  ArticleHeroSection, 
  ArticleTOCSection, 
  ArticleLinksSection,
  ArticleFaqSection 
} from "@/components/sections/knowledge/article-sections";
import { ContactDual } from "@/components/sections/contact-dual";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function ArticlePageTemplate({ data }: { data: ArticlePageData }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 hidden sm:block">
        <Breadcrumbs items={[{ label: data.hero_section.h1, href: "#" }]} />
      </div>
      
      <ArticleHeroSection {...data.hero_section} metadata={data.metadata} />
      
      <ArticleTOCSection items={data.table_of_contents} content_blocks={data.content_blocks} />

      <article className="prose prose-lg dark:prose-invert max-w-none mb-16 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
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
  );
}
