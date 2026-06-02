import { KNOWLEDGE_CONTENT } from "@/lib/knowledge";
import { KNOWLEDGE_HUB_DATA } from "@/lib/knowledge-hub";
import { getKnowledgeHubSchema } from "@/lib/schema";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { FAQ } from "@/components/ui/faq";
import { GenericHero } from "@/components/sections/generic-hero"

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
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Hero Section */}
      <GenericHero 
        subtitle={KNOWLEDGE_HUB_DATA.hero_section.h1}
        description={KNOWLEDGE_HUB_DATA.hero_section.lead_paragraph}
        ctaText={KNOWLEDGE_HUB_DATA.hero_section.cta_label}
        ctaHref={KNOWLEDGE_HUB_DATA.hero_section.cta_url}
        breadcrumbItems={[{ label: "Baza wiedzy", href: "/baza-wiedzy" }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 py-16 sm:py-24">
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
                        <Card className={`h-full p-2 hover:border-primary/50 hover:bg-muted/30 hover:shadow-md hover:scale-[1.02] transition-all duration-300 border-border/30 bg-card/50 ${isFeatured ? "flex flex-col md:flex-row gap-4" : ""}`}>
                          <CardHeader className={`pb-4 ${isFeatured ? "md:w-1/3" : ""}`}>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {article.taxonomy.tags.slice(0, 2).map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs whitespace-nowrap">{tag}</Badge>
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
          <FAQ 
            title="Często zadawane pytania" 
            items={KNOWLEDGE_HUB_DATA.faq_section.map(faq => ({ question: faq.question, answer: faq.answer }))}
            className="w-full"
          />
        </section>

        {/* CTA Section */}
        <section className="mb-24 text-center bg-background p-12 rounded-2xl border border-amber-400/20 shadow-xl shadow-amber-500/5">
          <h2 className="text-2xl font-bold text-foreground mb-4">Chcesz przełożyć tę wiedzę na algorytmy w swojej firmie?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Skorzystaj z darmowej konsultacji i sprawdź, jak zautomatyzować Twoje procesy.</p>
          <Link 
            href="https://calendly.com/kontakt-karol-modelski/new-meeting" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-foreground/85 hover:shadow-lg"
          >
            Masz pytania po lekturze? Umów 15 min bezpłatnej diagnozy
          </Link>
        </section>
      </div>
    </main>
  );
}
