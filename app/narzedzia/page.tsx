'use client';

import { useState } from 'react';
import { TOOLS } from '@/lib/tools';
import { TOOLS_HUB_CONFIG } from "@/lib/tools-hub";
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FAQ } from '@/components/ui/faq';
import { Workflow, BrainCircuit, Database, MessageSquare, CreditCard } from 'lucide-react';
import { GenericHero } from "@/components/sections/generic-hero";
import { GenericCta } from "@/components/sections/generic-cta";

const iconMap: Record<string, React.ElementType> = {
  'Pipedrive': Workflow,
  'ClickUp': Workflow,
  'Google Sheets': Database,
  'HubSpot': BrainCircuit,
  'Slack': MessageSquare,
  'Stripe': CreditCard,
};

const faqs = [
  {
    question: "Jakie dane są potrzebne, aby rozpocząć automatyzację?",
    answer: "Nie wymagam haseł do Twoich systemów. Potrzebuję jedynie kluczy API lub dostępów typu 'read-only' do odpowiednich aplikacji. Stosuję standardy bezpieczeństwa klasy bankowej, gdzie dostęp jest ograniczony do niezbędnego minimum."
  },
  {
    question: "Czy automatyzacja jest bezpieczna dla moich danych w firmie?",
    answer: "Bezpieczeństwo to priorytet. Wykorzystuję doświadczenie z sektora bankowego, stosując szyfrowanie danych w tranzycie, bezpieczne zarządzanie kluczami i procedury ochrony zgodne z najlepszymi praktykami inżynierskimi."
  },
  {
    question: "Co się stanie, gdy system zewnętrzny zmieni swoje API?",
    answer: "Stosuję podejście 'future-proofing'. Moje rozwiązania są zaprojektowane z myślą o zmianach – używam mechanizmów walidacji danych i logowania błędów, które pozwalają na szybką adaptację do aktualizacji dostawców."
  },
  {
    question: "Ile czasu zajmuje wdrożenie gotowego rozwiązania?",
    answer: "Typowy proces wdrożenia zależy od złożoności, ale dzięki modularnej budowie ekosystemów, pierwsze efekty dostarczam zazwyczaj w ciągu 1-2 tygodni od zakończenia diagnozy."
  },
  {
    question: "Czy po wdrożeniu otrzymam wsparcie techniczne?",
    answer: "Tak, nie dostarczam jedynie 'kodu', ale działający ekosystem. Oferuję wsparcie powdrożeniowe, dzięki czemu możesz być pewien, że automatyzacja pracuje stabilnie i skaluje się wraz z Twoim biznesem."
  }
];

export default function NarzedziaPage() {
  const [activeCategory, setActiveCategory] = useState<string>('wszystkie');

  const categories = ['wszystkie', 'Automatyzacja', 'Zarządzanie', 'Bazy danych', 'Marketing', 'Komunikacja', 'Płatności'];

  const filteredTools = activeCategory === 'wszystkie' 
    ? TOOLS 
    : TOOLS.filter(tool => {
        if (activeCategory === 'Automatyzacja') return ['Pipedrive', 'ClickUp'].includes(tool.metadata.name);
        if (activeCategory === 'Bazy danych') return tool.metadata.name === 'Google Sheets';
        if (activeCategory === 'Marketing') return tool.metadata.name === 'HubSpot';
        if (activeCategory === 'Komunikacja') return tool.metadata.name === 'Slack';
        if (activeCategory === 'Płatności') return tool.metadata.name === 'Stripe';
        return true;
      });

  return (
    <main className="min-h-screen bg-background">
      <GenericHero 
        subtitle={TOOLS_HUB_CONFIG.hero.subtitle}
        description={TOOLS_HUB_CONFIG.hero.description}
        ctaText={TOOLS_HUB_CONFIG.hero.cta.label}
        ctaHref={TOOLS_HUB_CONFIG.hero.cta.href}
        breadcrumbItems={[{ label: "Automatyzacje", href: "/narzedzia" }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((cat) => (
              <Button 
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTools.map((tool) => {
              const Icon = iconMap[tool.metadata.name] || Workflow;
              return (
                <Link 
                  href={tool.metadata.href} 
                  key={tool.metadata.name}
                  aria-label={`Dowiedz się więcej o: ${tool.content.seo.title}`}
                  className="flex flex-col h-full group"
                >
                  <Card className="flex-grow transition-all hover:border-primary/50 hover:bg-muted/30 hover:shadow-md hover:scale-[1.02] cursor-pointer flex flex-col">
                    <CardHeader className="flex-grow">
                      <div className="mb-4 text-primary transition-colors group-hover:text-primary/80">
                        <Icon size={32} />
                      </div>
                      <CardTitle className="mb-2">{tool.metadata.name}</CardTitle>
                      <CardDescription className="mb-4">
                        {tool.content.seo.description}
                      </CardDescription>
                    </CardHeader>
                    <div className="px-6 pb-6 text-sm font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                      Zobacz automatyzację {tool.metadata.name} &rarr;
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <FAQ 
            title="Często zadawane pytania" 
            items={faqs} 
            className="max-w-3xl mx-auto"
          />
        </section>

        <GenericCta 
          headline={TOOLS_HUB_CONFIG.finalCta.headline}
          description={TOOLS_HUB_CONFIG.finalCta.description}
          ctaText={TOOLS_HUB_CONFIG.finalCta.label}
          ctaHref={TOOLS_HUB_CONFIG.finalCta.href}
        />
      </div>
    </main>
  );
}
