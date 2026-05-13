import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { Clock, Users, FileText, Webhook, Database, GitBranch } from "lucide-react"

export default function ZarzadzanieProjektamiPage() {
  const data = {
    hero: { 
      title: "Zarządzanie Projektami", 
      subtitle: "Automatyzacja zarządzania projektami – poukładaj operacje w firmie przez n8n",
      description: "Uwolnij swoich Project Managerów i zespół od mechanicznego zakładania zadań, przeklejania briefów i ręcznego pilnowania terminów. Połączę Twoje systemy operacyjne z działem sprzedaży."
    },
    agitation: {
      title: "Wyzwania w zarządzaniu projektami",
      painPoints: [
        { icon: Clock, title: "Przestoje na starcie", description: "Zespół produkcyjny dowiaduje się o nowym kliencie z opóźnieniem, czekając aż handlowiec ręcznie roześle maile." },
        { icon: Users, title: "Rozproszona wiedza", description: "Wytyczne, pliki i umowy zostają w skrzynce mailowej, zamiast trafiać bezpośrednio do zadań zespołu." },
        { icon: FileText, title: "Marnowanie czasu na statusowanie", description: "Menedżerowie tracą godziny na spotkania i dopytywanie pracowników o etap zadania, by zaktualizować klienta." },
      ]
    },
    scenarios: {
      title: "Produkcyjne Scenariusze Wdrożeń",
      scenarios: [
        { title: "Automatyczne uruchamianie projektów", description: "n8n tworzy przestrzeń projektową, kopiuje dane z CRM, generuje checklisty i ustawia terminy w ClickUp." },
        { title: "Inteligentny asystent powiadomień", description: "System agreguje najważniejsze zdarzenia (np. przekroczenie terminu) i wysyła sformatowane alerty na Slacka." },
        { title: "Raportowanie rentowności", description: "Automatyczne pobieranie czasu pracy z zadań i generowanie raportów rentowności w Google Sheets." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Dynamiczna struktura Hierarchy API", description: "Automatycznie tworzę całe struktury (Space -> Folder -> List) na podstawie szablonów dla każdego klienta." },
        { icon: Database, title: "Automatyzacja pól niestandardowych", description: "Mapuję dane z CRM prosto do pól typu Money, Dropdown czy Date, by budżet był widoczny od razu." },
        { icon: GitBranch, title: "Zaawansowane filtrowanie Webhooków", description: "Buduję filtry logiczne, które uruchamiają akcje tylko przy specyficznych zdarzeniach, oszczędzając zasoby." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "Najczęściej wykorzystujemy synergię narzędzi:",
      links: [
        { label: "ClickUp", href: "/integracja-clickup" },
        { label: "Google Sheets", href: "/automatyzacja-google-sheets" },
        { label: "Pipedrive", href: "/integracja-pipedrive" }
      ]
    },
    faq: {
      faqs: [
        { question: "Czy automatyzacja nie zabierze nam kontroli?", answer: "n8n działa jako asystent – Ty decydujesz o punktach styku. Automatyzujemy tylko powtarzalne, techniczne czynności." },
        { question: "Jak szybko zobaczę efekty?", answer: "Dzięki n8n pierwsze efekty (Quick Wins) widzisz zazwyczaj w ciągu 7-10 dni od rozpoczęcia projektu." },
      ]
    }
  }

  return <OfferPageTemplate {...data} />
}
