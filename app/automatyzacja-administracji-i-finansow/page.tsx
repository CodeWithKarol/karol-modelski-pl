import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { FileText, Banknote, ShieldAlert, Webhook, Database, GitBranch } from "lucide-react"

export default function AdministracjaFinansePage() {
  const data = {
    hero: { 
      title: "Administracja i Finanse", 
      subtitle: "Automatyzacja administracji i finansów – eliminacja rutyny i bezbłędne rozliczenia",
      description: "Przestań marnować godziny na ręczne wystawianie faktur, generowanie umów i sprawdzanie płatności. Połączę Twoje bramki płatnicze i systemy księgowe w jeden bezbłędny obieg dokumentów."
    },
    agitation: {
      title: "Wyzwania w administracji i finansach",
      painPoints: [
        { icon: FileText, title: "Ręczna papierkologia", description: "Kopiowanie danych rejestrowych z CRM do systemów księgowych generuje błędy i wydłuża procesy." },
        { icon: Banknote, title: "Brak kontroli nad płatnościami", description: "Ręczne weryfikowanie wyciągów bankowych i sprawdzanie, czy klient opłacił fakturę, tworzy wąskie gardła." },
        { icon: ShieldAlert, title: "Chaos w raportowaniu", description: "Dane finansowe rozproszone po wielu arkuszach utrudniają podejmowanie szybkich decyzji zarządczych." },
      ]
    },
    scenarios: {
      title: "Co realnie wdrażamy?",
      scenarios: [
        { title: "Generowanie dokumentów PDF", description: "n8n pobiera dane, uzupełnia szablony umów w PDF, wysyła je do klienta i archiwizuje." },
        { title: "Integracja płatności (np. Stripe)", description: "Każda płatność automatycznie wystawia fakturę w programie księgowym i oznacza transakcję w CRM." },
        { title: "Centralny Dashboard Finansowy", description: "Automatyczne zbieranie wydatków i przychodów w jednym, czytelnym arkuszu dla zarządu." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Bezpieczna autoryzacja", description: "Integrację n8n z Twoimi arkuszami i systemami konfiguruję przy użyciu protokołu OAuth2 lub dedykowanych kont usługowych.", link: { label: "(API)", href: "/baza-wiedzy/api-w-biznesie" } },
        { icon: Database, title: "Przetwarzanie wsadowe (Batching)", description: "W przypadku dużych zbiorów danych stosuję procesy wsadowe, które zapobiegają przeciążeniu pamięci i omijają limity API." },
        { icon: GitBranch, title: "Struktura odporna na zmiany", description: "W wdrożeniach n8n odwołuję się do nazw nagłówków kolumn lub kluczy obiektów, a nie do losowych indeksów arkusza." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "Najczęściej wykorzystujemy synergię narzędzi:",
      links: [
        { label: "Google Sheets", href: "/automatyzacja-google-sheets" },
        { label: "Pipedrive", href: "/integracja-pipedrive" },
        { label: "ClickUp", href: "/integracja-clickup" }
      ]
    },
    faq: {
      faqs: [
        { question: "Czy przetwarzanie danych finansowych jest bezpieczne?", answer: "Tak. n8n pozwala na pełną suwerenność danych (self-hosting), a połączenia API są szyfrowane i autoryzowane bezpiecznymi protokołami." },
        { question: "Jak automatyzacja radzi sobie ze stawkami VAT i walutami?", answer: "Implementuję zaawansowaną logikę, która automatycznie rozpoznaje kraj klienta, stawkę VAT lub przelicza kursy walut przed wystawieniem dokumentu." },
      ]
    }
  }

  return <OfferPageTemplate {...data} />
}

