import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export const FAQ = ({ items, title, className = '' }: FAQProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-200 last:border-b-0">
            <AccordionTrigger className="font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
