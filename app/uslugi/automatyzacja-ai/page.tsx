import { Sparkles, BrainCircuit, Zap, Lock, Coins } from "lucide-react"
import { ServiceTemplate } from "@/components/templates/service-template"

export default function AutomatyzacjaAIPage() {
  return (
    <ServiceTemplate
      title="Automatyzacja AI dla Biznesu"
      description="Wdrażam moduły AI oparte o Google Gemini, które myślą, sortują i wyciągają wnioski z Twoich danych – bezpiecznie i na Twoich zasadach."
      badge={{ text: "Google Gemini AI", icon: Sparkles }}
      breadcrumbs={[
        { name: "Oferta", href: "/uslugi" },
        { name: "Automatyzacja AI" }
      ]}
      
      painPointsTitle="Dlaczego Twoja firma potrzebuje AI?"
      painPointsDescription="Tradycyjna automatyzacja działa tam, gdzie są sztywne reguły. Automatyzacja AI wchodzi tam, gdzie potrzebna jest interpretacja danych."
      painPointsList={[
        "Pracownicy tracą 20% czasu na czytanie i streszczanie dokumentów",
        "Błędy przy ręcznym przepisywaniu danych z faktur i umów",
        "Zbyt wolna reakcja na zapytania klientów wymagające analizy",
        "Obawa przed wyciekiem danych do publicznych czatów (ChatGPT)"
      ]}
      benefitCards={[
        { title: "Analiza dokumentów", description: "AI czyta PDF-y i maile, wyciągając z nich to, co najważniejsze.", icon: BrainCircuit },
        { title: "Szybka decyzyjność", description: "Automatyczna kategoryzacja spraw w kilka sekund.", icon: Zap },
        { title: "Pełne bezpieczeństwo", description: "Twoje dane nie opuszczają bezpiecznego środowiska firmowego.", icon: Lock },
        { title: "Oszczędność czasu", description: "Odzyskaj godziny pracy zespołu tygodniowo.", icon: Coins }
      ]}
      
      processTitle="Jak wygląda wdrożenie AI?"
      processDescription="Nie oferuję gotowych abonamentów. Buduję dedykowane moduły AI dopasowane do Twojego workflow."
      processSteps={[
        { title: "Audyt AI (Faza Zero)", description: "Analizujemy Twoje procesy i wybieramy te, gdzie AI przyniesie największy zysk." },
        { title: "Integracja", description: "Łączę AI (Google Gemini) z Twoimi obecnymi narzędziami (CRM, Slack, e-mail)." },
        { title: "Własność", description: "Dostajesz system na własność. Płacisz tylko za faktyczne zużycie." }
      ]}
      
      authorityQuote="Przez lata budowałem systemy dla instytucji takich jak Citi czy BNP Paribas. Wdrażając AI w Twojej firmie, stosuję te same rygorystyczne standardy ochrony danych."
      
      faqTitle="Pytania o Automatyzację AI"
      faqItems={[
        { question: "Czy moje dane będą bezpieczne?", answer: "Tak. Wykorzystuję API enterprise, które gwarantuje, że Twoje dane nie są używane do trenowania modeli." },
        { question: "Ile kosztuje utrzymanie AI?", answer: "Dzięki modelowi serverless płacisz tylko za faktyczne zużycie – zazwyczaj kilkanaście zł miesięcznie." }
      ]}
    />
  )
}
