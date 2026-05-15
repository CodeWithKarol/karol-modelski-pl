import { KnowledgePageTemplate } from "@/components/templates/knowledge/knowledge-page-template"
import { KnowledgeSection, KnowledgeBenefitsList, KnowledgeManagerSummary } from "@/components/sections/knowledge/blocks"
import { GitBranch, Database, Bot } from "lucide-react"

export default function ApiBiznesiePage() {
  return (
    <KnowledgePageTemplate 
      title="API w biznesie – Cyfrowy most łączący systemy"
      subtitle="Dowiedz się, jak interfejsy programistyczne pozwalają na płynną wymianę informacji między programami w Twojej firmie."
      breadcrumbLabel="API w biznesie"
      href="/baza-wiedzy/api-w-biznesie"
    >
      <KnowledgeSection title="Czym jest API? (Uniwersalny tłumacz)">
        <p className="mb-4">
          <strong>API</strong> (Application Programming Interface) to zestaw reguł, które pozwalają różnym aplikacjom komputerowym na bezpośrednią rozmowę i wymianę danych.
        </p>
        <p>
          Jeśli Twoja firma korzysta z systemu CRM (np. Pipedrive) oraz programu do zarządzania projektami (np. ClickUp), bez API te dwa światy są od siebie całkowicie odcięte. API działa jak uniwersalny, cyfrowy port przeładunkowy, przez który programy bezpiecznie przesyłają bazy danych, pliki i statusy operacji.
        </p>
      </KnowledgeSection>

      <KnowledgeSection title="Jak API i n8n transformują procesy operacyjne?">
        <KnowledgeBenefitsList items={[
            { icon: GitBranch, title: "Likwidacja silosów informacyjnych", description: "Dane raz wprowadzone wędrują automatycznie do systemów księgowych i operacyjnych. Cała firma pracuje na „jednym źródle prawdy”." },
            { icon: Database, title: "Zautomatyzowane pobieranie danych", description: "Poprzez zapytania API możemy w ułamku sekundy wyciągać z systemów specyficzne informacje, np. dane rejestrowe spółki." },
            { icon: Bot, title: "Integracja z AI", description: "Oficjalne API pozwala na połączenie Twoich baz z modelami AI (np. Google Gemini) do automatycznej analizy treści." }
        ]} />
      </KnowledgeSection>

      <KnowledgeManagerSummary title="Standard inżynieryjny to podstawa">
        <p>
            Samo posiadanie API to za mało. Prawdziwa wartość pojawia się wtedy, gdy integracja jest zaprojektowana zgodnie ze sztuką deweloperską: posiada moduły obsługi błędów, systemy ponawiania zapytań przy przeciążeniu sieci oraz ścisłą walidację struktur JSON. Dopiero wtedy automatyzacja oparta o API staje się w pełni niezawodna.
        </p>
      </KnowledgeManagerSummary>
    </KnowledgePageTemplate>
  )
}
