import { KnowledgePageTemplate } from "@/components/templates/knowledge/knowledge-page-template"
import { KnowledgeSection, KnowledgeBenefitsList } from "@/components/sections/knowledge/blocks"
import { Zap, ShieldCheck, Target } from "lucide-react"
import { KNOWLEDGE_PAGES } from "@/lib/knowledge"

export default function WebhookPage() {
  return (
    <KnowledgePageTemplate data={KNOWLEDGE_PAGES["/baza-wiedzy/co-to-jest-webhook"]}>
      <KnowledgeSection title="Istota działania: Zasada „Nie dzwoń do nas, to my zadzwonimy do Ciebie”">
        <p className="mb-4">
          Aby zrozumieć Webhook, wyobraź sobie dwie metody sprawdzania, czy masz nowy list w skrzynce pocztowej:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Odpytywanie (Polling):</strong> Podchodzisz do skrzynki co 5 minut przez cały dzień i sprawdzasz, czy coś w niej jest. To marnowanie czasu i energii. Tak działają przestarzałe automatyzacje.</li>
            <li><strong>Webhook:</strong> Siedzisz wygodnie w domu, a listonosz dzwoni do drzwi tylko wtedy, gdy faktycznie ma dla Ciebie list.</li>
        </ul>
        <p>Technicznie rzecz biorąc, Webhook to mechanizm, w którym jedna aplikacja (np. Pipedrive) automatycznie wysyła pakiet danych pod wskazany adres URL systemu n8n <strong>dokładnie w momencie, gdy wydarzy się określone zdarzenie</strong> (np. handlowiec przesunie transakcję na etap „Wygrana”).</p>
      </KnowledgeSection>

      <KnowledgeSection title="Dlaczego Webhooki są kluczowe w biznesie?">
        <KnowledgeBenefitsList items={[
            { icon: Zap, title: "Natychmiastowa reakcja (Real-Time)", description: "Dane o nowym leadzie trafiają do zespołu w ułamku sekundy. Czas reakcji spada do absolutnego minimum." },
            { icon: ShieldCheck, title: "Oszczędność i stabilność", description: "System nie musi bez przerwy „pytać” drugiej aplikacji o nowe dane, co nie obciąża serwerów i gwarantuje ciągłość działania biznesu." },
            { icon: Target, title: "Precyzja danych", description: "Webhook przesyła precyzyjnie ustrukturyzowany obiekt JSON z kompletem informacji o konkretnym zdarzeniu." }
        ]} />
      </KnowledgeSection>

    </KnowledgePageTemplate>
  )
}


