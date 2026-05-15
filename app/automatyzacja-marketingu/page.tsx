import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { Mail, Target, BarChart, Bot, Zap, Filter } from "lucide-react"

export default function MarketingAutomationPage() {
  const data = {
    hero: { 
      title: "Automatyzacja Marketingu", 
      subtitle: "Zautomatyzuj lead nurturing i e-mail marketing za pomocą n8n",
      description: "Przestań zarządzać kampaniami ręcznie. Dzięki n8n połączę Twoje narzędzia marketingowe, CRM i systemy analityczne w jeden spójny ekosystem. Zbuduj zaawansowane ścieżki automatyzacji, które pielęgnują Twoje leady w czasie rzeczywistym."
    },
    agitation: {
      title: "Czy to wyzwania Twojego marketingu?",
      painPoints: [
        { icon: Mail, title: "Nieskuteczny lead nurturing", description: "Twoje leady nie otrzymują spersonalizowanych treści w odpowiednim momencie, przez co tracisz szanse na sprzedaż." },
        { icon: Target, title: "Silosy danych", description: "Dane klientów są rozproszone pomiędzy różnymi narzędziami (CRM, Newsletter, WWW), co uniemożliwia pełny obraz klienta." },
        { icon: BarChart, title: "Ręczna obsługa kampanii", description: "Przygotowanie i wysyłka kampanii zajmuje zespołowi zbyt wiele czasu, zamiast skupiać się na strategii i kreatywności." },
      ]
    },
    scenarios: {
      title: "Przykłady Wdrożeń Automatyzacji",
      scenarios: [
        { title: "Lead Magnet ➔ Automatyczna ścieżka powitalna", description: "Klient pobiera e-book, a n8n automatycznie dodaje go do CRM, segmentuje i uruchamia 5-dniową serię e-maili edukacyjnych." },
        { title: "Scoring Leada ➔ Automatyczne powiadomienie handlowca", description: "Gdy lead uzyska odpowiedni wynik aktywności w systemie marketingowym, n8n przekazuje go bezpośrednio do CRM z alertem dla handlowca." },
      ]
    },
    technical: {
      features: [
        { icon: Bot, title: "Personalizacja oparta na AI", description: "Wykorzystuję AI do analizy zachowań użytkowników i automatycznego personalizowania treści e-maili.", link: { label: "(Procesy z AI)", href: "/automatyzacja-procesow-z-ai" } },
        { icon: Zap, title: "Synchronizacja w czasie rzeczywistym", description: "Natychmiastowe przenoszenie danych między platformami marketingowymi a CRM przy pomocy Webhooków." },
        { icon: Filter, title: "Zaawansowana segmentacja", description: "Dynamiczne tworzenie list odbiorców na podstawie zachowań wewnątrz n8n, bez konieczności ręcznego tagowania." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "W obszarze marketingu najczęściej wykorzystujemy synergię narzędzi:",
      links: [
        { label: "HubSpot", href: "/integracja-hubspot" },
        { label: "Pipedrive", href: "/integracja-pipedrive" },
        { label: "ClickUp", href: "/integracja-clickup" },
        { label: "Google Sheets", href: "/automatyzacja-google-sheets" },
        { label: "Slack", href: "/integracja-slack" },
        { label: "Stripe", href: "/automatyzacja-finansow" }
      ]
    },
    faq: {
      faqs: [
        { question: "Jak automatyzacja wpływa na jakość danych?", answer: "Automatyzacja eliminuje błędy ludzkie przy przenoszeniu danych, dba o ich czystość i unikalność w CRM." },
        { question: "Czy mogę integrować dowolne narzędzie marketingowe?", answer: "Tak, o ile posiada ono API lub Webhooki. n8n jest niezwykle elastyczny i pozwala łączyć niemal każdy nowoczesny system." },
        { question: "Co jeśli chcę zmienić strategię kampanii?", answer: "Automatyzacje w n8n są modularne. Zmiana strategii to zazwyczaj kwestia modyfikacji węzła logicznego, a nie przebudowy całego systemu." },
      ]
    }
  }

  return <OfferPageTemplate {...data} />
}
