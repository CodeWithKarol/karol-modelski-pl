import { ToolPageTemplate } from "@/components/templates/tool-page-template"
import { ShieldCheck, Zap, Database, Mail, Target, BarChart } from "lucide-react"

export default function HubSpotPage() {
  const data = {
    hero: { 
      title: "HubSpot", 
      subtitle: "Integracja HubSpot + n8n: Skalowalny Marketing i Sprzedaż",
      description: "Przestań płacić za 'puste' operacje w Zapierze. Buduj zaawansowane przepływy danych z wykorzystaniem AI i n8n, zachowując 100% kontroli nad procesem."
    },
    agitation: {
      title: "Problemy, które rozwiązujemy",
      painPoints: [
        { icon: Mail, title: "Wysokie koszty skalowania", description: "Twoje opłaty w SaaS rosną wraz z każdym nowym leadem? Model n8n eliminuje opłaty wolumenowe." },
        { icon: Target, title: "Niska jakość danych", description: "Leady trafiają do CRM niekompletne? Automatycznie wzbogacamy je o dane z zewnętrznych API (np. dane rejestrowe) przed przekazaniem do handlowca." },
        { icon: BarChart, title: "Brak priorytetyzacji", description: "Handlowcy tracą czas na 'zimne' kontakty? Wdrażamy Lead Scoring oparty na modelach Google Gemini, który ocenia intencję zapytania w 1 sekundę." },
      ]
    },
    technical: {
      features: [
        { icon: Database, title: "Automatyczny Data Enrichment", description: "Pełna wiedza o kliencie (branża, wielkość firmy) bez ręcznego researchu." },
        { icon: Zap, title: "Synchronizacja dwukierunkowa", description: "HubSpot zawsze odzwierciedla stan faktyczny z arkuszy kalkulacyjnych i systemów finansowych." },
        { icon: ShieldCheck, title: "AI Content Repurposing", description: "Automatyczne tworzenie spersonalizowanych wiadomości follow-up na podstawie notatek ze spotkań." },
      ]
    },
    faq: {
      faqs: [
        { question: "Jak HubSpot łączy się z n8n?", answer: "Wykorzystujemy dedykowany węzeł HubSpot w n8n, który pozwala na pełną operację na obiektach Contacts, Companies, Deals." },
        { question: "Czy automatyzacja obejmuje pola niestandardowe?", answer: "Tak, w pełni mapujemy customowe pola w HubSpot, co pozwala na pełną personalizację procesów biznesowych." },
        { question: "Jak wygląda kwestia bezpieczeństwa danych?", answer: "n8n łączy się z HubSpot przez oficjalne OAuth2, zapewniając bezpieczny i autoryzowany dostęp do danych Twojej firmy." },
      ]
    }
  }
  return <ToolPageTemplate {...data} />
}
