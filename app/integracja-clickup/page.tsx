import { ToolPageTemplate } from "@/components/templates/tool-page-template"
import { Clock, Users, FileText, Webhook, GitBranch, Database } from "lucide-react"

export default function ClickUpPage() {
  const data = {
    hero: { 
      title: "ClickUp", 
      subtitle: "Inteligentne zarządzanie projektami w ClickUp dzięki n8n",
      description: "Nie pozwól, by Twój zespół marnował czas na ręczne tworzenie zadań. Połączę Twój ClickUp z resztą firmy, zapewniając pełną transparentność procesów bez jednego kliknięcia więcej."
    },
    agitation: {
      title: "Dlaczego potrzebujesz automatyzacji w ClickUp?",
      painPoints: [
        { icon: Clock, title: "Brak \"podaży\" informacji ze sprzedaży", description: "Zespół operacyjny dowiaduje się o wygranych dealach z opóźnieniem lub z niekompletnych maili." },
        { icon: Users, title: "Gąszcz powiadomień", description: "Zespół tonie w powiadomieniach, przez co kluczowe terminy (Due Dates) umykają, a statusy zadań nie odzwierciedlają rzeczywistości." },
        { icon: FileText, title: "Ręczne tworzenie struktur", description: "Każdy nowy projekt wymaga ręcznego zakładania tych samych List, Folderów i zadań, co zajmuje godziny." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Dynamiczna struktura Hierarchy API", description: "Automatycznie tworzę całe struktury (Space -> Folder -> List) na podstawie szablonów dla każdego klienta." },
        { icon: Database, title: "Automatyzacja pól niestandardowych", description: "Mapuję dane z CRM prosto do pól typu Money, Dropdown czy Date, by budżet był widoczny od razu." },
        { icon: GitBranch, title: "Zaawansowane filtrowanie Webhooków", description: "Buduję filtry logiczne, które uruchamiają akcje tylko przy specyficznych zdarzeniach, oszczędzając zasoby." },
      ]
    },
    faq: {
      faqs: [
        { question: "Czy n8n może przesuwać zadania między listami?", answer: "Tak. Projektuję przepływy, które w zależności od reguł biznesowych przenoszą zadania między folderami, zmieniają priorytety lub dodają tagi." },
        { question: "Jak n8n przypisuje osoby do zadań?", answer: "Wykorzystuję mapowanie ID użytkowników. Możemy przypisywać zadania rotacyjnie (Round Robin) lub na podstawie obciążenia zespołu." },
        { question: "Czy mogę połączyć ClickUp z ewidencją czasu?", answer: "Oczywiście. n8n synchronizuje czas (Time Tracking) z Google Sheets lub systemami fakturowania do raportowania rentowności." },
      ]
    }
  }

  return (
    <>
      <ToolPageTemplate {...data} />
    </>
  )
}
