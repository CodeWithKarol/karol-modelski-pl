import { ToolPageTemplate } from "@/components/templates/tool-page-template"
import { CreditCard, FileText, BarChart, Zap } from "lucide-react"

export default function StripeFinancePage() {
  const data = {
    hero: { 
      title: "Stripe", 
      subtitle: "Automatyzacja Stripe: Od Transakcji do Księgowości",
      description: "Zautomatyzuj obieg dokumentów finansowych. Połącz Stripe z systemami ERP i księgowością, eliminując ręczne wystawianie faktur i błędy w rozliczeniach."
    },
    agitation: {
      title: "Wyzwania finansowe",
      painPoints: [
        { icon: FileText, title: "Ręczne fakturowanie", description: "Przepisywanie danych z płatności do faktur zajmuje godziny i generuje ryzyko błędów ludzkich." },
        { icon: BarChart, title: "Brak wglądu w ROI", description: "Analiza opłacalności kampanii marketingowych jest utrudniona bez automatycznego przepływu danych o płatnościach." },
        { icon: CreditCard, title: "Problemy z odzyskiwaniem płatności", description: "Obsługa odrzuconych kart płatniczych zajmuje czas, który mógłbyś poświęcić na sprzedaż." },
      ]
    },
    technical: {
      features: [
        { icon: FileText, title: "Automatyczne fakturowanie", description: "Każda płatność w Stripe wyzwala proces wystawienia faktury w systemie księgowym i wysyłkę do klienta." },
        { icon: BarChart, title: "Monitoring ROI", description: "Dane o płatnościach trafiają bezpośrednio do Google Sheets, gdzie budowane są dashboardy opłacalności kampanii." },
        { icon: Zap, title: "Obsługa błędów płatności (Dunning)", description: "Automatyczne scenariusze odzyskiwania leadów w przypadku odrzuconej karty, z personalizowaną komunikacją e-mail." },
      ]
    },
    faq: {
      faqs: [
        { question: "Czy mogę doliczać specyficzne rabaty?", answer: "Tak. W procesie n8n sprawdzamy historię klienta w CRM i automatycznie stosujemy odpowiednie rabaty przed wystawieniem faktury." },
        { question: "Jak wygląda kwestia bezpieczeństwa danych?", answer: "n8n operuje na tokenach API Stripe z ograniczonymi uprawnieniami (Read-only/Limited-write), zapewniając bezpieczeństwo Twoich danych finansowych." },
        { question: "Czy mogę zintegrować Stripe z dowolnym systemem ERP?", answer: "Tak, jeśli system ERP posiada API, n8n bez problemu połączy go ze Stripe w czasie rzeczywistym." },
      ]
    }
  }
  return <ToolPageTemplate {...data} />
}
