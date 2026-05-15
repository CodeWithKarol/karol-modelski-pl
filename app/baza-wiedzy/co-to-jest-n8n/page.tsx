import { KnowledgePageTemplate } from "@/components/templates/knowledge/knowledge-page-template"
import { KnowledgeSection, KnowledgeBenefitsList, KnowledgeManagerSummary } from "@/components/sections/knowledge/blocks"
import { TrendingDown, Lock, Plug } from "lucide-react"

export default function CoToJestN8nPage() {
  return (
    <KnowledgePageTemplate 
      title="Co to jest n8n?" 
      subtitle="Poznaj potężne narzędzie typu workflow automation, które rewolucjonizuje sposób, w jaki firmy łączą swoje aplikacje."
      breadcrumbLabel="Co to jest n8n?"
      href="/baza-wiedzy/co-to-jest-n8n"
    >
      <KnowledgeSection title="Czym jest n8n?">
        <p className="mb-4">
          n8n to zaawansowane narzędzie klasy <strong>workflow automation</strong>, które pozwala na bezszwowe łączenie różnych systemów, aplikacji i baz danych za pomocą wizualnych schematów.
        </p>
        <p>
          Działa jak cyfrowy dyrygent – odbiera sygnał z jednego programu (np. o nowym kliencie w systemie CRM) i natychmiast uruchamia kaskadę zaplanowanych działań w innych systemach (wystawia fakturę, zakłada projekt, wysyła alert na Slacku).
        </p>
      </KnowledgeSection>

      <KnowledgeSection title="Dlaczego n8n to „Zapier-killer”?">
        <KnowledgeBenefitsList items={[
            { icon: TrendingDown, title: "Brak opłat za wolumen", description: "Przetwarzasz miliony operacji bez dodatkowych opłat licencyjnych uzależnionych od liczby zadań." },
            { icon: Lock, title: "100% kontroli i zgodność z RODO", description: "Twoje dane pozostają wewnątrz Twojej własnej, zabezpieczonej infrastruktury chmurowej." },
            { icon: Plug, title: "Inżynieryjna elastyczność", description: "Dzięki wbudowanym węzłom Code Node, możesz wstrzyknąć własny kod JS/TS dla dowolnych transformacji danych." }
        ]} />
      </KnowledgeSection>

      <KnowledgeManagerSummary>
        <p>
          n8n to rozwiązanie idealne dla firm, które chcą automatyzować procesy w sposób profesjonalny, stabilny i przewidywalny finansowo. Wybierając n8n, inwestujesz w kod i architekturę, które stają się trwałym, niezależnym aktywem Twojego przedsiębiorstwa.
        </p>
      </KnowledgeManagerSummary>
    </KnowledgePageTemplate>
  )
}
