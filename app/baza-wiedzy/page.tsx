import { KNOWLEDGE_CONTENT } from "@/lib/knowledge";
import { KNOWLEDGE_HUB_DATA } from "@/lib/knowledge-hub";
import { getKnowledgeHubSchema } from "@/lib/schema";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { FAQ } from "@/components/ui/faq";

export const metadata: Metadata = {
  title: KNOWLEDGE_HUB_DATA.seo_metadata.meta_title,
  description: KNOWLEDGE_HUB_DATA.seo_metadata.meta_description,
  alternates: {
    canonical: `https://karol-modelski.pl${KNOWLEDGE_HUB_DATA.url}`,
  },
};

export default function BazaWiedzyIndexPage() {
  const articles = Object.values(KNOWLEDGE_CONTENT);

  const schema = getKnowledgeHubSchema(KNOWLEDGE_HUB_DATA);

  return (
    <div className="space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full">
        {/* Background decoration */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-64 -top-32 h-[600px] w-[600px] rounded-full bg-amber-400/5 blur-3xl" />
          <div className="absolute -bottom-32 -right-48 h-[500px] w-[500px] rounded-full bg-indigo-400/5 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="w-full px-4 pt-20 pb-24 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 mb-6 dark:bg-amber-950/40">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Ekspercka wiedza o automatyzacji
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl mb-8 max-w-4xl mx-auto">
            {KNOWLEDGE_HUB_DATA.hero_section.h1}
          </h1>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground sm:text-lg mb-10">
            {KNOWLEDGE_HUB_DATA.hero_section.lead_paragraph}
          </p>
          
          <Link 
            href={KNOWLEDGE_HUB_DATA.hero_section.cta_url} 
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {KNOWLEDGE_HUB_DATA.hero_section.cta_label}
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-20">
        {/* Intro Section */}
        <section className="bg-card p-8 rounded-2xl border border-border">
          <h2 className="text-2xl font-bold mb-4">{KNOWLEDGE_HUB_DATA.intro_section.h2}</h2>
          <p className="text-muted-foreground">{KNOWLEDGE_HUB_DATA.intro_section.content}</p>
        </section>

        {/* Categories Grid */}
        <div className="space-y-16">
          {KNOWLEDGE_HUB_DATA.categories_display.map((category) => {
            const categoryArticles = articles.filter((a) => a.taxonomy.category === category.name);
            
            return (
              <section key={category.slug}>
                <h2 className="text-2xl font-bold mb-3">{category.name}</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl">{category.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryArticles.map((article, index) => {
                    const isFeatured = index === 0;
                    return (
                      <Link 
                        href={article.article_url} 
                        key={article.article_id} 
                        className={`block group ${isFeatured ? "md:col-span-2 lg:col-span-2" : ""}`}
                      >
                        <Card className={`h-full p-2 hover:shadow-sm hover:border-border/60 transition-all duration-300 border-border/30 bg-card/50 ${isFeatured ? "flex flex-col md:flex-row gap-4" : ""}`}>
                          <CardHeader className={`pb-4 ${isFeatured ? "md:w-1/3" : ""}`}>
                            <div className="flex gap-2 mb-2">
                              {article.taxonomy.tags.slice(0, 2).map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                              ))}
                            </div>
                            <CardTitle className={`${isFeatured ? "text-2xl" : "text-lg"} leading-snug group-hover:text-primary transition-colors`}>
                              {article.hero_section.h1}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className={isFeatured ? "md:w-2/3" : ""}>
                            <p className={`${isFeatured ? "text-base" : "text-sm"} text-muted-foreground mb-4 line-clamp-3`}>
                              {article.hero_section.lead_paragraph}
                            </p>
                            <div className="flex items-center text-xs text-muted-foreground gap-4">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.hero_section.reading_time_minutes} min
                              </span>
                              <span>{new Date(article.metadata.publication_date).toLocaleDateString()}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto py-12">
          <FAQ items={KNOWLEDGE_HUB_DATA.faq_section} title="Często zadawane pytania" />
        </section>

        {/* CTA Section */}
        <section className="p-8 md:p-12 bg-primary/5 rounded-2xl text-center border border-primary/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Chcesz przełożyć tę wiedzę na algorytmy w swojej firmie?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Skorzystaj z darmowej konsultacji i sprawdź, jak zautomatyzować Twoje procesy.</p>
          <Link href={KNOWLEDGE_HUB_DATA.hero_section.cta_url} className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-primary/20">
            {KNOWLEDGE_HUB_DATA.hero_section.cta_label}
          </Link>
        </section>
      </div>
    </div>
  );
}
