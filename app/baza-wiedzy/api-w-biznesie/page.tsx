import { KnowledgePageTemplate } from "@/components/templates/knowledge/knowledge-page-template"
import { Card, CardContent } from "@/components/ui/card"
import { GitBranch, Database, Bot } from "lucide-react"

export default function ApiBiznesiePage() {
  return (
    <KnowledgePageTemplate 
      title="API w biznesie – Cyfrowy most łączący systemy"
      subtitle="Dowiedz się, jak interfejsy programistyczne pozwalają na płynną wymianę informacji między programami w Twojej firmie."
      breadcrumbLabel="API w biznesie"
      href="/baza-wiedzy/api-w-biznesie"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Czym jest API? (Uniwersalny tłumacz)</h2>
        <p className="mb-4">
          <strong>API</strong> (Application Programming Interface) to zestaw reguł, które pozwalają różnym aplikacjom komputerowym na bezpośrednią rozmowę i wymianę danych.
        </p>
        <p>
          Jeśli Twoja firma korzysta z systemu CRM (np. Pipedrive) oraz programu do zarządzania projektami (np. ClickUp), bez API te dwa światy są od siebie całkowicie odcięte. API działa jak uniwersalny, cyfrowy port przeładunkowy, przez który programy bezpiecznie przesyłają bazy danych, pliki i statusy operacji.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8">Jak API i n8n transformują procesy operacyjne?</h2>
        <div className="grid gap-6">
            <Card className="border-border/60 bg-muted/20">
                <CardContent className="p-6 flex gap-4">
                    <GitBranch className="h-8 w-8 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">Likwidacja silosów informacyjnych</h3>
                        <p className="text-muted-foreground mt-1">Dane raz wprowadzone wędrują automatycznie do systemów księgowych i operacyjnych. Cała firma pracuje na „jednym źródle prawdy”.</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="border-border/60 bg-muted/20">
                <CardContent className="p-6 flex gap-4">
                    <Database className="h-8 w-8 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">Zautomatyzowane pobieranie danych</h3>
                        <p className="text-muted-foreground mt-1">Poprzez zapytania API możemy w ułamku sekundy wyciągać z systemów specyficzne informacje, np. dane rejestrowe spółki.</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="border-border/60 bg-muted/20">
                <CardContent className="p-6 flex gap-4">
                    <Bot className="h-8 w-8 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">Integracja z AI</h3>
                        <p className="text-muted-foreground mt-1">Oficjalne API pozwala na połączenie Twoich baz z modelami AI (np. Google Gemini) do automatycznej analizy treści.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Standard inżynieryjny to podstawa</h2>
        <p>
            Samo posiadanie API to za mało. Prawdziwa wartość pojawia się wtedy, gdy integracja jest zaprojektowana zgodnie ze sztuką deweloperską: posiada moduły obsługi błędów, systemy ponawiania zapytań przy przeciążeniu sieci oraz ścisłą walidację struktur JSON. Dopiero wtedy automatyzacja oparta o API staje się w pełni niezawodna.
        </p>
      </section>
    </KnowledgePageTemplate>
  )
}
