import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { Clock, Users, FileText, Webhook, Database, GitBranch } from "lucide-react"

export default function ObslugaKlientaPage() {
  const data = {
    hero: { 
      title: "Obsługa Klienta", 
      subtitle: "Automatyzacja obsługi klienta – skróć czas reakcji do minimum",
      description: "Przestań tonąć w zgłoszeniach. Zautomatyzuję obieg ticketów, zapewniając priorytetyzację i natychmiastowe alerty dla zespołu, aby każdy klient czuł się zaopiekowany w czasie rzeczywistym."
    },
    agitation: {
      title: "Problemy w obsłudze klienta",
      painPoints: [
        { icon: Clock, title: "Zgubione zgłoszenia", description: "Ważne zapytania giną w skrzynce info@, a zespół operacyjny dowiaduje się o nich zbyt późno." },
        { icon: Users, title: "Wąskie gardła w komunikacji", description: "Ręczne przekierowywanie zgłoszeń między działami trwa zbyt długo, co obniża CSAT." },
        { icon: FileText, title: "Brak wglądu w historię", description: "Zespół nie widzi kontekstu rozmów z CRM, co zmusza klientów do powtarzania swoich problemów." },
      ]
    },
    scenarios: {
      title: "Produkcyjne Scenariusze Wdrożeń",
      scenarios: [
        { title: "Automatyczny routing zgłoszeń", description: "n8n analizuje temat ticketa i automatycznie przydziela go do odpowiedniego specjalisty w ClickUp/Zendesk." },
        { title: "Alertowanie o priorytetach", description: "Krytyczne zgłoszenia (np. od kluczowych klientów) generują natychmiastowy alert na dedykowanym kanale Slack." },
        { title: "Inteligentne podsumowania", description: "Po zamknięciu zgłoszenia, AI generuje podsumowanie i wpisuje je do CRM jako notatkę dla handlowca." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Integracja z API Helpdesku", description: "Wykorzystuję natywne integracje API do zarządzania statusami ticketów w czasie rzeczywistym." },
        { icon: Database, title: "Mapowanie kontekstu klienta", description: "Przed przypisaniem ticketu, n8n pobiera dane klienta z CRM, by obsługa miała pełen obraz sytuacji." },
        { icon: GitBranch, title: "Warunkowe workflow", description: "Buduję skomplikowaną logikę rozgałęzień (np. inne ścieżki dla nowych klientów, inne dla VIP)." },
      ]
    },
    toolLinks: {
        title: "Narzędzia, które integrujemy",
        description: "Synergia systemów wsparcia:",
        links: [
            { label: "ClickUp", href: "/integracja-clickup" },
            { label: "Slack", href: "/integracja-slack" },
            { label: "HubSpot", href: "/integracja-hubspot" }
        ]
    },
    faq: {
      faqs: [
        { question: "Czy automatyzacja nie sprawi, że obsługa będzie brzmieć jak bot?", answer: "Automatyzujemy techniczne aspekty zgłoszeń (kolejkowanie, przypisywanie, pobieranie danych). Sama odpowiedź pozostaje domeną człowieka, wspieranego przez AI tylko w przygotowaniu draftów." },
        { question: "Jak szybko wdrożymy taki system?", answer: "Wdrożenie podstawowego routingu zgłoszeń to kwestia 1-2 tygodni pracy z n8n." },
      ]
    }
  }

  return <OfferPageTemplate {...data} />
}
