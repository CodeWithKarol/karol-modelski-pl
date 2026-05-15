import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { Clock, Users, FileText, Webhook, Database, GitBranch } from "lucide-react"

export default function SprzedazPage() {
  const data = {
    hero: { 
      title: "Automatyzacja Sprzedaży", 
      subtitle: "Automatyzacja Pipedrive CRM – zintegruj sprzedaż z resztą firmy przez n8n",
      description: "Przestań marnować czas handlowców na mechaniczną pracę administracyjną. Za pomocą n8n połączę Twój system CRM z formularzami www, kalendarzami i komunikatorami. Zamień ręczne przepisywanie danych na natychmiastową obsługę leadów w czasie rzeczywistym."
    },
    agitation: {
      title: "Czy to wyzwania Twojego działu sprzedaży?",
      painPoints: [
        { icon: Clock, title: "Zbyt wolny czas reakcji", description: "Potencjalni klienci wysyłają formularz lub rezerwują termin, ale zanim handlowiec ręcznie założy szansę sprzedaży, mijają godziny." },
        { icon: Users, title: "Chaos i „zimne” szanse", description: "Handlowcy zapominają o logowaniu działań, wysyłaniu follow-upów lub gubią notatki, przez co cenne zapytania przepadają w lejku." },
        { icon: FileText, title: "Ręczna papierkologia", description: "Gdy transakcja osiąga etap „Wygrana”, Twój zespół musi ręcznie przepisywać dane do fakturowania lub systemów projektowych." },
      ]
    },
    scenarios: {
      title: "Produkcyjne Scenariusze Wdrożeń",
      scenarios: [
        { title: "Formularz WWW ➔ n8n ➔ CRM + Alert Slack", description: "Gdy klient wysyła zapytanie, n8n automatycznie tworzy Szansę Sprzedaży, mapuje dane i wysyła alert na Slacku z bezpośrednim linkiem do CRM." },
        { title: "Etap „Wygrana” ➔ n8n ➔ Automatyczna umowa", description: "W momencie przeniesienia transakcji na etap „Wygrana”, n8n generuje umowę PDF, wysyła ją klientowi i zakłada listę zadań w ClickUp." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Synchronizacja przez Webhooki v2", description: "Zamiast obciążać API ciągłym odpytywaniem, stosuję natychmiastowe Webhooki dla każdej zmiany w transakcji.", link: { label: "(Webhooki)", href: "/baza-wiedzy/co-to-jest-webhook" } },
        { icon: Database, title: "Inteligentna deduplikacja", description: "n8n weryfikuje unikalne identyfikatory, nie tworząc duplikatów i zachowując pełną historię kontaktu." },
        { icon: GitBranch, title: "Obsługa pól niestandardowych", description: "W pełni mapuję customowe klucze API Twojego CRM, gwarantując płynny przepływ danych.", link: { label: "(API)", href: "/baza-wiedzy/api-w-biznesie" } },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "W obszarze sprzedaży najczęściej wykorzystujemy synergię narzędzi:",
      links: [
        { label: "Pipedrive", href: "/integracja-pipedrive" },
        { label: "ClickUp", href: "/integracja-clickup" },
        { label: "Google Sheets", href: "/automatyzacja-google-sheets" },
        { label: "HubSpot", href: "/integracja-hubspot" },
        { label: "Slack", href: "/integracja-slack" },
        { label: "Stripe", href: "/automatyzacja-finansow" }
      ]
    },
    faq: {
      faqs: [
        { question: "Czy automatyzacja przez n8n obsługuje wiele lejków (Pipelines)?", answer: "Tak. W architekturze n8n możemy dowolnie kierować ruchem w zależności od warunków logicznych, zasilając różne lejki w oparciu o źródło leadów." },
        { question: "Co jeśli API CRM będzie chwilowo niedostępne?", answer: "Stosuję mechanizmy Error Trigger oraz Retry On Fail. Jeśli system nie przyjmie danych, n8n wstrzyma proces, przechowa dane i ponowi próbę później." },
        { question: "Dlaczego n8n, a nie Zapier/Make?", answer: "Kluczowe są koszty i suwerenność danych. n8n w modelu Self-Hosted nie pobiera opłat za każdą operację, co przy dużej skali sprzedaży oszczędza setki dolarów miesięcznie." },
      ]
    }
  }

  return <OfferPageTemplate {...data} />
}

