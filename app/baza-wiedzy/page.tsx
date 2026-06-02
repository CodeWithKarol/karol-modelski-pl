import { KNOWLEDGE_CONTENT } from "@/lib/knowledge";
import { KNOWLEDGE_HUB_DATA } from "@/lib/knowledge-hub";
import { getKnowledgeHubSchema } from "@/lib/schema";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { FAQ } from "@/components/ui/faq";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/breadcrumbs";

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
      <section className="relative border-b border-border pt-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full">
            <Breadcrumbs items={[{ label: "Baza wiedzy", href: "/baza-wiedzy" }]} />
          </div>
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              {KNOWLEDGE_HUB_DATA.hero_section.h1}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {KNOWLEDGE_HUB_DATA.hero_section.lead_paragraph}
            </p>
            <div className="mt-10">
              <Link 
                href="https://calendly.com/kontakt-karol-modelski/new-meeting" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-foreground/85 hover:shadow-lg"
              >
                Edukacja to pierwszy krok. Diagnoza to pierwszy zysk.
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-20 py-16 sm:py-24">
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
          <h2 className="text-3xl font-bold text-center mb-10">Często zadawane pytania</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-primary">Standardy techniczne</h3>
          <Accordion type="single" collapsible className="w-full mb-8">
            <AccordionItem value="tech-1">
              <AccordionTrigger>Czy schematy n8n z artykułów mogę wdrożyć samodzielnie?</AccordionTrigger>
              <AccordionContent>Schematy udostępniam w formie otwartej, aby każdy mógł zrozumieć logikę działania danego procesu. Jeśli masz doświadczenie z n8n, możesz je zaimportować i dostosować. Pamiętaj jednak, że standardy produkcyjne wymagają obsługi błędów (Error Handling) oraz bezpiecznego przechowywania poświadczeń, o czym piszę w artykułach.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="tech-2">
              <AccordionTrigger>Czy schematy n8n są bezpieczne w środowisku produkcyjnym?</AccordionTrigger>
              <AccordionContent>Bezpieczeństwo to fundament, wyniesiony z pracy w sektorze bankowym. Każdy schemat, który wdrażam, przechodzi testy pod kątem Data Compliance oraz stabilności działania (Retry Loops). Ucząc się na moich przykładach, wdrażasz techniki minimalizujące ryzyko przestojów.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="tech-3">
              <AccordionTrigger>Jak często aktualizowana jest baza wiedzy?</AccordionTrigger>
              <AccordionContent>Baza wiedzy jest aktualizowana w trybie ciągłym – publikuję nowe materiały, gdy tylko pojawiają się istotne zmiany w narzędziach (np. nowe wersje API) lub gdy wypracuję nową, bardziej wydajną metodę rozwiązania problemu.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3 className="text-xl font-semibold mb-4 text-primary">Współpraca i wdrożenia</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="biz-1">
              <AccordionTrigger>Czy baza wiedzy jest przeznaczona tylko dla programistów?</AccordionTrigger>
              <AccordionContent>Absolutnie nie. Moim celem jest tłumaczenie złożonych procesów na język biznesowych korzyści. Jeśli jesteś właścicielem firmy lub managerem, artykuły pokażą Ci, jak automatyzacja rozwiązuje Twoje problemy. Jeśli potrzebujesz wdrożenia, zajmę się techniczną stroną projektu.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="biz-2">
              <AccordionTrigger>Czy mogę zamówić wdrożenie rozwiązania opisanego w artykule?</AccordionTrigger>
              <AccordionContent>Tak. Wiele artykułów bazuje na wdrożeniach, które realizuję. Jeśli widzisz rozwiązanie idealnie pasujące do Twojej firmy, umów bezpłatną diagnozę – dostosuję schemat tak, aby przyniósł maksymalny ROI w Twoim środowisku. <Link href="https://calendly.com/kontakt-karol-modelski/new-meeting" className="text-primary hover:underline font-semibold">Umów diagnozę</Link>.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="biz-3">
              <AccordionTrigger>Co jeśli wdrożę schemat i coś przestanie działać?</AccordionTrigger>
              <AccordionContent>Systemy zewnętrzne (np. Pipedrive, HubSpot) czasem zmieniają swoje API. Jeśli utkniesz przy samodzielnym wdrożeniu, zapraszam na diagnozę techniczną – pomogę zidentyfikować "wąskie gardło" i przywrócić stabilność. <Link href="https://calendly.com/kontakt-karol-modelski/new-meeting" className="text-primary hover:underline font-semibold">Umów diagnozę</Link>.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="biz-4">
              <AccordionTrigger>Dlaczego dzielisz się tą wiedzą za darmo?</AccordionTrigger>
              <AccordionContent>Wierzę, że przejrzyste automatyzacje budują długofalowe relacje. Dzieląc się rozwiązaniami, pokazuję mój inżynierski standard pracy. Wolę, żebyś poznał sposób, w jaki myślę o systemach, zanim zdecydujesz o współpracy przy profesjonalnym wdrożeniu.</AccordionContent>
            </AccordionItem>
          </Accordion>
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
