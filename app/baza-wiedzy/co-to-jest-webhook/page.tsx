import { KnowledgePageTemplate } from "@/components/templates/knowledge/knowledge-page-template"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, ShieldCheck, Target } from "lucide-react"

export default function WebhookPage() {
  return (
    <KnowledgePageTemplate 
      title="Co to jest Webhook? Klucz do automatyzacji w czasie rzeczywistym"
      subtitle="Zrozum mechanizm, który pozwala Twoim aplikacjom komunikować się natychmiast, bez zbędnych opóźnień i marnowania zasobów."
      breadcrumbLabel="Co to jest Webhook?"
      href="/baza-wiedzy/co-to-jest-webhook"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Istota działania: Zasada „Nie dzwoń do nas, to my zadzwonimy do Ciebie”</h2>
        <p className="mb-4">
          Aby zrozumieć Webhook, wyobraź sobie dwie metody sprawdzania, czy masz nowy list w skrzynce pocztowej:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Odpytywanie (Polling):</strong> Podchodzisz do skrzynki co 5 minut przez cały dzień i sprawdzasz, czy coś w niej jest. To marnowanie czasu i energii. Tak działają przestarzałe automatyzacje.</li>
            <li><strong>Webhook:</strong> Siedzisz wygodnie w domu, a listonosz dzwoni do drzwi tylko wtedy, gdy faktycznie ma dla Ciebie list.</li>
        </ul>
        <p>Technicznie rzecz biorąc, Webhook to mechanizm, w którym jedna aplikacja (np. Pipedrive) automatycznie wysyła pakiet danych pod wskazany adres URL systemu n8n <strong>dokładnie w momencie, gdy wydarzy się określone zdarzenie</strong> (np. handlowiec przesunie transakcję na etap „Wygrana”).</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8">Dlaczego Webhooki są kluczowe w biznesie?</h2>
        <div className="grid gap-6">
            <Card className="border-border/60 bg-muted/20">
                <CardContent className="p-6 flex gap-4">
                    <Zap className="h-8 w-8 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">Natychmiastowa reakcja (Real-Time)</h3>
                        <p className="text-muted-foreground mt-1">Dane o nowym leadzie trafiają do zespołu w ułamku sekundy. Czas reakcji spada do absolutnego minimum.</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="border-border/60 bg-muted/20">
                <CardContent className="p-6 flex gap-4">
                    <ShieldCheck className="h-8 w-8 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">Oszczędność i stabilność</h3>
                        <p className="text-muted-foreground mt-1">System nie musi bez przerwy „pytać” drugiej aplikacji o nowe dane, co nie obciąża serwerów i gwarantuje ciągłość działania biznesu.</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="border-border/60 bg-muted/20">
                <CardContent className="p-6 flex gap-4">
                    <Target className="h-8 w-8 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">Precyzja danych</h3>
                        <p className="text-muted-foreground mt-1">Webhook przesyła precyzyjnie ustrukturyzowany obiekt JSON z kompletem informacji o konkretnym zdarzeniu.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Przykład zastosowania</h2>
        <p>
          Gdy klient rezerwuje termin w Twoim kalendarzu online, system rezerwacji wysyła Webhook do n8n. W ułamku sekundy n8n odbiera te dane, sprawdza bazę, zakłada klienta w CRM i wysyła alert na Slacku. Wszystko dzieje się automatycznie, zanim użytkownik zamknie kartę w przeglądarce.
        </p>
      </section>
    </KnowledgePageTemplate>
  )
}


