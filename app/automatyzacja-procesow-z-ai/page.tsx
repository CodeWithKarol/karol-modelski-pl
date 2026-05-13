import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { Bot, Zap, BrainCircuit, ShieldAlert, FileText, Banknote } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function AutomatyzacjaAiPage() {
  const data = {
    hero: { 
      title: "Procesy z AI", 
      subtitle: "Automatyzacja procesów z wykorzystaniem AI. Wdróż Google Gemini do codziennych zadań w n8n",
      description: "Przestań traktować sztuczną inteligencję jako zabawkę do losowego generowania tekstów. Projektujemy produkcyjne przepływy pracy w n8n, które trwale integrują zaawansowane modele językowe Google Gemini z Twoimi firmowymi systemami."
    },
    agitation: {
      title: "Wyzwania w pracy z AI",
      painPoints: [
        { icon: Bot, title: "Chaos w komunikacji", description: "Twój zespół tonie w powtarzalnych mailach, na które mógłby odpowiedzieć inteligentny asystent." },
        { icon: Zap, title: "Nieefektywne wykorzystanie danych", description: "Masz tysiące zapisanych rozmów z klientami, których nie potrafisz wykorzystać, by lepiej ich zrozumieć." },
        { icon: BrainCircuit, title: "Brak struktury w AI", description: "Obawiasz się, że AI będzie pisać chaotyczne odpowiedzi lub halucynować nieprawdziwe informacje." },
      ]
    },
    scenarios: {
      title: "Co realnie wdrażamy?",
      scenarios: [
        { title: "Inteligentna klasyfikacja maili", description: "n8n przesyła treść maila do Gemini, które analizuje intencję klienta i przygotowuje wersję roboczą odpowiedzi w Twoim Gmailu." },
        { title: "Ekstrakcja danych ze skanów do JSON", description: "n8n przechwytuje pliki PDF lub skany umów, a Gemini przetwarza ich treść i mapuje dane bezpośrednio do Twojego CRM lub Google Sheets." },
      ]
    },
    technical: {
      features: [
        { icon: FileText, title: "Deterministyczne wyjście (JSON Schema)", description: "Wymuszamy na modelach LLM format JSON, co gwarantuje pełną stabilność i przewidywalność automatyzacji." },
        { icon: ShieldAlert, title: "Pełna ochrona prywatności (RODO)", description: "Integrujemy systemy przez produkcyjne API Google Gemini, dzięki czemu dane nie są wykorzystywane do trenowania modeli publicznych." },
        { icon: Bot, title: "Hybrydowa architektura z JS", description: "Łączymy wizualne bloczki n8n z dedykowanym kodem JS, co pozwala na budowanie zaawansowanych systemów obsługi błędów." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "W pracy z AI najczęściej wykorzystujemy synergię narzędzi:",
      links: [
        { label: "Google Sheets", href: "/automatyzacja-google-sheets" },
        { label: "Pipedrive", href: "/integracja-pipedrive" },
        { label: "ClickUp", href: "/integracja-clickup" }
      ]
    },
    faq: {
      faqs: [
        { question: "Jakie są koszty utrzymania automatyzacji opartej o Google Gemini API?", answer: "W modelu self-hosted eliminujesz opłaty pośredników. Płacisz wyłącznie bezpośrednio do Google za faktyczne zużycie tokenów, co jest bardzo tanie przy małych procesach." },
        { question: "Czy AI nie zacznie wysyłać błędnych wiadomości?", answer: "Domyślnie pracujemy w trybie human-in-the-loop – AI przygotowuje wersję roboczą, którą Ty zatwierdzasz przed wysyłką." },
        { question: "Od czego najlepiej zacząć?", answer: "Od strategii małych kroków – np. automatyzacji CRM lub obiegu faktur, co daje najszybszy zwrot z inwestycji (ROI)." },
      ]
    }
  }

  return (
    <>
      <OfferPageTemplate {...data} />
    </>
  )
}
