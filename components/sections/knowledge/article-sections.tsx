import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArticlePageData } from "@/lib/types";

export function ArticleHeroSection({ h1, lead_paragraph, reading_time_minutes, metadata }: ArticlePageData["hero_section"] & { metadata: ArticlePageData["metadata"] }) {
  return (
    <section className="py-12 sm:py-20 text-left">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-4 mb-6 text-muted-foreground text-sm font-medium">
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {reading_time_minutes} min czytania</span>
          <span className="text-border">|</span>
          <span>{metadata.publication_date}</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8 leading-[1.1]">
          {h1}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {lead_paragraph}
        </p>
        <div className="mt-8 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {metadata.author_name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
                <p className="text-sm font-bold text-foreground">{metadata.author_name}</p>
                <p className="text-xs text-muted-foreground">{metadata.author_role}</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export function ArticleTOCSection({ items, content_blocks }: { items: string[], content_blocks: ArticlePageData["content_blocks"] }) {
  return (
    <nav className="my-12 p-6 rounded-2xl bg-secondary/30 border border-border">
      <h3 className="font-bold text-lg mb-4">Spis treści</h3>
      <ul className="space-y-2">
        {content_blocks.map((block, i) => (
          <li key={i} className="text-muted-foreground hover:text-primary transition-colors">
            <a href={`#${block.content_block_id}`}>{block.h2}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ArticleLinksSection({ internal_linking }: { internal_linking: ArticlePageData["internal_linking"] }) {
  return (
    <section className="mt-16 grid gap-8 md:grid-cols-2">
      {internal_linking.related_tools.length > 0 && (
        <div className="p-6 rounded-xl border bg-card">
          <h4 className="font-bold mb-4">Powiązane narzędzia</h4>
          <div className="flex flex-wrap gap-2">
            {internal_linking.related_tools.map((tool) => (
              <a key={tool.url} href={tool.url} className="px-3 py-1 text-sm bg-secondary rounded-full hover:bg-primary/10 transition-colors">
                {tool.name}
              </a>
            ))}
          </div>
        </div>
      )}
      {internal_linking.related_offers.length > 0 && (
        <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
          <h4 className="font-bold mb-2 text-primary">Sprawdź ofertę</h4>
          {internal_linking.related_offers.map((offer) => (
            <div key={offer.url}>
              <p className="text-sm mb-3">{offer.cta_text}</p>
              <a href={offer.url} className="text-sm font-semibold text-primary hover:underline">
                {offer.name} →
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export function ArticleFaqSection({ faqs }: { faqs: ArticlePageData["faq_section"] }) {
  return (
    <section id="najczestsze-pytania" className="py-12 border-t border-border/50">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">Najczęściej zadawane pytania</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

