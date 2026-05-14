import { ToolPageTemplate } from "@/components/templates/tool-page-template"
import { Clock, Users, FileText, Webhook, GitBranch, Database } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function PipedrivePage() {
  const data = {
    hero: { 
      title: "Pipedrive CRM", 
      subtitle: "Automatyzacja Pipedrive CRM – zintegruj sprzedaż z resztą firmy przez n8n",
      description: "Przestań marnować czas handlowców na mechaniczną pracę administracyjną. Za pomocą n8n połączę Twój system Pipedrive z formularzami www, komunikatorami i systemami operacyjnymi."
    },
    agitation: {
      title: "Dlaczego potrzebujesz automatyzacji w Pipedrive?",
      painPoints: [
        { icon: Clock, title: "Zbyt wolny czas reakcji", description: "Zanim handlowiec ręcznie założy szansę sprzedaży w Pipedrive, mija kilka godzin. Konkurencja może już z nimi rozmawiać." },
        { icon: Users, title: "Chaos w szansach sprzedaży", description: "Handlowcy zapominają o logowaniu działań lub gubią notatki, przez co cenne leady bezpowrotnie przepadają." },
        { icon: FileText, title: "Ręczna papierkologia", description: "Po wygraniu transakcji zespół musi ręcznie przepisywać dane do fakturowania lub systemów projektowych." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Synchronizacja przez Webhooki v2", description: "Zamiast obciążać API ciągłym odpytywaniem, stosuję natychmiastowe Webhooki dla każdej zmiany w transakcji." },
        { icon: Database, title: "Inteligentna deduplikacja", description: "n8n weryfikuje unikalne identyfikatory (e-mail, telefon), nie tworząc duplikatów i zachowując pełną historię kontaktu." },
        { icon: GitBranch, title: "Obsługa pól niestandardowych", description: "W pełni mapuję customowe klucze API Pipedrive, gwarantując płynny przepływ danych strukturyzowanych." },
      ]
    },
    faq: {
      faqs: [
        { question: "Czy automatyzacja obsługuje wiele lejków?", answer: "Tak. W architekturze n8n możemy dowolnie kierować ruchem w zależności od warunków logicznych, zasilając różne lejki w oparciu o źródło leadów." },
        { question: "Co jeśli API Pipedrive będzie niedostępne?", answer: "Stosuję mechanizmy Error Trigger oraz Retry On Fail. Jeśli Pipedrive nie przyjmie danych, n8n wstrzyma proces, przechowa dane i ponowi próbę później." },
        { question: "Dlaczego n8n, a nie Zapier/Make?", answer: "Kluczowe są koszty i suwerenność danych. n8n pozwala na self-hosting, co eliminuje opłaty za każdą operację i zapewnia pełną prywatność danych." },
      ]
    }
  }

  return (
    <>
      <ToolPageTemplate {...data} />
    </>
  )
}
