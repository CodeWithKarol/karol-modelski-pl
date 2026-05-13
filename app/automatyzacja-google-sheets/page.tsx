import { ToolPageTemplate } from "@/components/templates/tool-page-template"
import { ShieldCheck, Zap, Bot, FileSpreadsheet, AlertTriangle, Database } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function GoogleSheetsPage() {
  const data = {
    hero: { 
      title: "Google Sheets", 
      subtitle: "Automatyzacja i integracja Google Sheets w firmach usługowych",
      description: "Przekształć swoje zwykłe arkusze w inteligentne centrum dowodzenia firmą. Za pomocą n8n połączę Twoje tabele z dowolnym systemem."
    },
    agitation: {
      title: "Dlaczego potrzebujesz automatyzacji?",
      painPoints: [
        { icon: FileSpreadsheet, title: "Ręczne przepisywanie danych", description: "Twoi pracownicy spędzają godziny na kopiowaniu wierszy z maili, formularzy czy systemów reklamowych do Excela lub Google Sheets." },
        { icon: AlertTriangle, title: "Błędy w raportach", description: "Przez ludzkie pomyłki, literówki lub pominięte komórki, Twoje statystyki sprzedaży i koszty po prostu się nie zgadzają." },
        { icon: Database, title: "Dane rozproszone w 10 plikach", description: "Każdy dział ma swój arkusz, nikt nie ma wglądu w pełen obraz firmy w czasie rzeczywistym." },
      ]
    },
    technical: {
      features: [
        { icon: ShieldCheck, title: "Bezpieczna autoryzacja danych", description: "Integrację n8n z Twoimi arkuszami konfiguruję przy użyciu protokołu OAuth2 lub dedykowanego konta usługowego." },
        { icon: Zap, title: "Nasłuchiwanie w czasie rzeczywistym", description: "Wykorzystuję mechanizmy Webhook oraz Cron, które uruchamiają procesy automatycznie." },
        { icon: Bot, title: "Inteligentne mapowanie i walidacja", description: "Zanim dane trafią do arkusza, n8n sprawdza ich poprawność i filtruje duplikaty." },
      ]
    },
    faq: {
      faqs: [
        { question: "Czy n8n poradzi sobie z plikami, które mają tysiące wierszy?", answer: "Tak. W przeciwieństwie do prostych integracji, w n8n projektuję procesy z wykorzystaniem przetwarzania wsadowego (batching). Dane są dzielone na mniejsze paczki, co zapobiega przeciążeniu pamięci." },
        { question: "Co się stanie, jeśli ktoś przypadkowo zmieni kolejność kolumn w arkuszu?", answer: "W moich wdrożeniach n8n odwołuje się do nazw nagłówków kolumn lub konkretnych kluczy w obiektach, a nie do losowych indeksów." },
        { question: "Czy zamiast Google Sheets mogę w ten sam sposób zautomatyzować Microsoft Excel?", answer: "Oczywiście. Schemat działania n8n jest zbliżony, jednak wymaga integracji z Microsoft OneDrive lub Sharepoint." },
      ]
    }
  }

  return (
    <>
      <ToolPageTemplate {...data} />
    </>
  )
}
