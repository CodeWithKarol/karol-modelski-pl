'use client';

import { useState } from 'react';
import { TOOLS } from '@/lib/tools';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Workflow, BrainCircuit, Database, MessageSquare, CreditCard } from 'lucide-react';
import { Breadcrumbs } from "@/components/breadcrumbs";

const iconMap: Record<string, any> = {
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
      <section className="relative border-b border-border pt-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full">
             <Breadcrumbs items={[{ label: "Automatyzacje", href: "/narzedzia" }]} />
          </div>
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Zamień powtarzalne zadania w zyski – odkryj potęgę inteligentnych integracji
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Zamiast tracić godziny na żmudne procesy, zintegryj swoje narzędzia w jeden, bezbłędny system. Sprawdź, jak odzyskać czas swojego zespołu.
            </p>
            <div className="mt-10">
              <Link 
                href="https://calendly.com/kontakt-karol-modelski/new-meeting" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-foreground/85 hover:shadow-lg"
              >
                Zdiagnozuj swoje procesy – odzyskaj czas zespołu
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                  <Card className="flex-grow transition-all hover:border-primary cursor-pointer flex flex-col">
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
          <h2 className="text-2xl font-bold mb-8 text-center">Często zadawane pytania</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="mb-24 text-center bg-background p-12 rounded-2xl border border-amber-400/20 shadow-xl shadow-amber-500/5">
          <h2 className="text-2xl font-bold text-foreground mb-4">Nie trać czasu na ręczne procesy.</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Wybierz diagnozę, która pokaże Ci drogę do skalowalnego biznesu.</p>
          <Link 
            href="https://calendly.com/kontakt-karol-modelski/new-meeting" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-foreground/85 hover:shadow-lg"
          >
            Nie wiesz, od czego zacząć automatyzację? Umów 15 min diagnozy technicznej.
          </Link>
        </section>
      </div>
    </main>
  );
}
