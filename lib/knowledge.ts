import { KnowledgePageData } from "./types";

export const KNOWLEDGE_PAGES: Record<string, KnowledgePageData> = {
  "/baza-wiedzy/co-to-jest-n8n": {
    title: "Co to jest n8n?",
    subtitle: "Poznaj potężne narzędzie typu workflow automation, które rewolucjonizuje sposób, w jaki firmy łączą swoje aplikacje.",
    breadcrumbLabel: "Co to jest n8n?",
    href: "/baza-wiedzy/co-to-jest-n8n",
    managerSummary: {
      content: "n8n to rozwiązanie idealne dla firm, które chcą automatyzować procesy w sposób profesjonalny i przewidywalny finansowo. Wybierając n8n, inwestujesz w kod i architekturę, które stają się trwałym, niezależnym aktywem Twojego przedsiębiorstwa."
    }
  },
  "/baza-wiedzy/api-w-biznesie": {
    title: "API w biznesie – Cyfrowy most łączący systemy",
    subtitle: "Dowiedz się, jak interfejsy programistyczne pozwalają na płynną wymianę informacji między programami w Twojej firmie.",
    breadcrumbLabel: "API w biznesie",
    href: "/baza-wiedzy/api-w-biznesie",
    managerSummary: {
      title: "Standard inżynieryjny to podstawa",
      content: "Samo posiadanie API to za mało. Prawdziwa wartość pojawia się wtedy, gdy integracja jest zaprojektowana zgodnie ze sztuką deweloperską: posiada moduły obsługi błędów, systemy ponawiania zapytań przy przeciążeniu sieci oraz ścisłą walidację struktur JSON. Dopiero wtedy automatyzacja oparta o API staje się w pełni niezawodna."
    }
  },
  // ... i tak dalej dla pozostałych
  "/baza-wiedzy/co-to-jest-webhook": {
    title: "Co to jest Webhook? Klucz do automatyzacji w czasie rzeczywistym",
    subtitle: "Zrozum mechanizm, który pozwala Twoim aplikacjom komunikować się natychmiast, bez zbędnych opóźnień i marnowania zasobów.",
    breadcrumbLabel: "Co to jest Webhook?",
    href: "/baza-wiedzy/co-to-jest-webhook",
    managerSummary: {
      content: "Gdy klient rezerwuje termin w Twoim kalendarzu online, system rezerwacji wysyła Webhook do n8n. W ułamku sekundy n8n odbiera te dane, sprawdza bazę, zakłada klienta w CRM i wysyła alert na Slacku. Wszystko dzieje się automatycznie, zanim użytkownik zamknie kartę w przeglądarce."
    }
  },
  "/baza-wiedzy/automatyzacja-marketingu-n8n-vs-saas": {
    title: "n8n vs SaaS (Zapier/Make): Wybór narzędzia do automatyzacji marketingu",
    subtitle: "Czy budżetowe rozwiązanie typu SaaS zawsze się opłaca? Analizujemy koszty i wolumeny automatyzacji w kontekście skalowalności biznesu.",
    breadcrumbLabel: "n8n vs SaaS",
    href: "/baza-wiedzy/automatyzacja-marketingu-n8n-vs-saas",
    managerSummary: {
      title: "Podsumowanie",
      content: "Nie ma jednego \"najlepszego\" rozwiązania. SaaS oferuje szybkość, natomiast n8n oferuje skalowalność i oszczędności przy dużych skalach. Jeśli Twoja firma intensywnie korzysta z automatyzacji, przejście na n8n jest naturalnym krokiem w optymalizacji kosztów."
    }
  }
};
