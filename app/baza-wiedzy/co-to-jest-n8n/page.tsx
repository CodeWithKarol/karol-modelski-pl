import { KnowledgePageTemplate } from "@/components/templates/knowledge/knowledge-page-template"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, Lock, Plug } from "lucide-react"

export default function CoToJestN8nPage() {
  return (
    <KnowledgePageTemplate 
      title="Co to jest n8n?" 
      subtitle="Poznaj potężne narzędzie typu workflow automation, które rewolucjonizuje sposób, w jaki firmy łączą swoje aplikacje."
      breadcrumbLabel="Co to jest n8n?"
      href="/baza-wiedzy/co-to-jest-n8n"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Czym jest n8n?</h2>
        <p className="mb-4">
          n8n to zaawansowane narzędzie klasy <strong>workflow automation</strong>, które pozwala na bezszwowe łączenie różnych systemów, aplikacji i baz danych za pomocą wizualnych schematów.
        </p>
        <p>
          Działa jak cyfrowy dyrygent – odbiera sygnał z jednego programu (np. o nowym kliencie w systemie CRM) i natychmiast uruchamia kaskadę zaplanowanych działań w innych systemach (wystawia fakturę, zakłada projekt, wysyła alert na Slacku).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8">Dlaczego n8n to „Zapier-killer”?</h2>
        <div className="grid gap-6">
            <Card className="border-border/60 bg-muted/20">
                <CardContent className="p-6 flex gap-4">
                    <TrendingDown className="h-8 w-8 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">Brak opłat za wolumen</h3>
                        <p className="text-muted-foreground mt-1">Przetwarzasz miliony operacji bez dodatkowych opłat licencyjnych uzależnionych od liczby zadań.</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="border-border/60 bg-muted/20">
                <CardContent className="p-6 flex gap-4">
                    <Lock className="h-8 w-8 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">100% kontroli i zgodność z RODO</h3>
                        <p className="text-muted-foreground mt-1">Twoje dane pozostają wewnątrz Twojej własnej, zabezpieczonej infrastruktury chmurowej.</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="border-border/60 bg-muted/20">
                <CardContent className="p-6 flex gap-4">
                    <Plug className="h-8 w-8 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">Inżynieryjna elastyczność</h3>
                        <p className="text-muted-foreground mt-1">Dzięki wbudowanym węzłom Code Node, możesz wstrzyknąć własny kod JS/TS dla dowolnych transformacji danych.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Podsumowanie dla menedżera</h2>
        <p>
          n8n to rozwiązanie idealne dla firm, które chcą automatyzować procesy w sposób profesjonalny, stabilny i przewidywalny finansowo. Wybierając n8n, inwestujesz w kod i architekturę, które stają się trwałym, niezależnym aktywem Twojego przedsiębiorstwa.
        </p>
      </section>
    </KnowledgePageTemplate>
  )
}
