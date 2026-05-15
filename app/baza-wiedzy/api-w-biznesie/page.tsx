import { KnowledgePageTemplate } from "@/components/templates/knowledge/knowledge-page-template"
import { KnowledgeSection, KnowledgeBenefitsList } from "@/components/sections/knowledge/blocks"
import { GitBranch, Database, Bot } from "lucide-react"
import { KNOWLEDGE_PAGES } from "@/lib/knowledge"

export default function ApiBiznesiePage() {
  return (
    <KnowledgePageTemplate data={KNOWLEDGE_PAGES["/baza-wiedzy/api-w-biznesie"]}>
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
    </KnowledgePageTemplate>
  )
}
