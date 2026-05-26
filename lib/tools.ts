import { CommercialPageContent } from "./types";

export const TOOLS: { metadata: { name: string; description: string; href: string }; content: CommercialPageContent }[] = [
  {
    metadata: {
      name: "Pipedrive",
      description: "Zautomatyzuj proces sprzedaży w Pipedrive. Przesyłaj leady z formularzy i kalendarzy bezpośrednio do CRM, eliminując błędy i pracę ręczną.",
      href: "/narzedzia/automatyzacja-pipedrive"
    },
    content: {
      page_id: "automatyzacja-pipedrive",
      tool_name: "Pipedrive",
      hero: {
        h1: "Automatyzacja Pipedrive – zintegruj sprzedaż z resztą firmy",
        cta_label: "Umów bezpłatną konsultację",
        cta_url: "/kontakt"
      },
      problem: {
        title: "Dlaczego potrzebujesz automatyzacji w Pipedrive?",
        description: "Najczęstsze problemy, które rozwiązujemy",
        items: [
          "Zbyt wolny czas reakcji: Zanim handlowiec ręcznie założy szansę w Pipedrive, mijają godziny.",
          "Chaos operacyjny: Handlowcy zapominają o logowaniu działań, co powoduje gubienie leadów.",
          "Ręczna papierkologia: Przepisywanie danych do systemów fakturowych po wygranej."
        ]
      },
      solution: {
        title: "Jak to działa?",
        description: "Anatomia produkcyjnego przepływu danych",
        steps: [
          "Wyzwalacz (Webhook) po wypełnieniu formularza",
          "Walidacja i oczyszczanie danych w n8n",
          "Wzbogacanie danych firmy z rejestrów publicznych",
          "Automatyczne zakładanie Deal i alert na Slacku"
        ]
      },
      benefits: {
        title: "Korzyści z automatyzacji",
        description: "Wartości, które zyskujesz",
        items: [
          "Błyskawiczna reakcja na leady",
          "Eliminacja ręcznej pracy",
          "Pełna synchronizacja danych"
        ]
      },
      faq: {
        title: "Najczęściej zadawane pytania",
        description: "Rozwiewamy wątpliwości dotyczące automatyzacji",
        faqs: [
          { question: "Czy automatyzacja obsługuje wiele lejków?", answer: "Tak, wdrażamy dowolną logikę warunkową." },
          { question: "Co jeśli API jest niedostępne?", answer: "Stosujemy mechanizmy Retry Loops i bezpieczne buforowanie danych." }
        ]
      },
      seo: {
        title: "Automatyzacja Pipedrive z n8n – integracja i optymalizacja sprzedaży | Karol Modelski",
        keyword: "automatyzacja Pipedrive n8n",
        description: "Zautomatyzuj Pipedrive z n8n. Eliminuj ręczną pracę, przyspiesz obsługę leadów i zintegruj sprzedaż z firmą. Sprawdź scenariusze i umów konsultację."
      }
    }
  },
  {
    metadata: {
      name: "ClickUp",
      description: "Automatyzacja ClickUp przez n8n. Projektuj bezobsługowy obieg zadań.",
      href: "/narzedzia/automatyzacja-clickup"
    },
    content: {
      page_id: "automatyzacja-clickup",
      tool_name: "ClickUp",
      hero: {
        h1: "Automatyzacja ClickUp – inteligentne zarządzanie projektami",
        cta_label: "Umów bezpłatną konsultację",
        cta_url: "/kontakt"
      },
      problem: {
        title: "Dlaczego potrzebujesz automatyzacji w ClickUp?",
        description: "Najczęstsze problemy w zarządzaniu",
        items: [
          "Opóźnienia na starcie projektów: Zespół produkcyjny czeka na ręczne przekazanie ustaleń.",
          "Gąszcz powiadomień: Pracownicy toną w mailach, terminy umykają.",
          "Powtarzalne tworzenie struktur: Każdy klient wymaga ręcznego wyklikania list."
        ]
      },
      solution: {
        title: "Jak to działa?",
        description: "Automatyczne i bezbłędne uruchamianie projektów",
        steps: [
          "Wykrycie zamknięcia sprzedaży w CRM",
          "Automatyczne klonowanie struktury zadań z szablonu",
          "Dynamiczne przypisanie terminów i osób",
          "Dystrybucja briefu i powiadomienie zespołu"
        ]
      },
      benefits: {
        title: "Korzyści z automatyzacji",
        description: "Zyskaj czas i spokój",
        items: [
          "Natychmiastowy start projektów",
          "Pełna przejrzystość zadań",
          "Oszczędność czasu projektowego"
        ]
      },
      faq: {
        title: "Najczęściej zadawane pytania",
        description: "Rozwiewamy wątpliwości dotyczące automatyzacji",
        faqs: [
          { question: "Czy n8n może przesuwać zadania?", answer: "Tak, automatyzujemy zmiany statusów i przenoszenie zadań." }
        ]
      },
      seo: {
        title: "Automatyzacja ClickUp z n8n – zarządzanie projektami | Karol Modelski",
        keyword: "automatyzacja ClickUp n8n",
        description: "Zautomatyzuj projekty w ClickUp za pomocą n8n. Przyspiesz pracę zespołu i eliminuj błędy. Zobacz jak to działa i umów się na darmową konsultację."
      }
    }
  },
  {
    metadata: {
      name: "Google Sheets",
      description: "Automatyzacja Google Sheets przez n8n. Przekształć arkusze w bazy danych.",
      href: "/narzedzia/automatyzacja-google-sheets"
    },
    content: {
      page_id: "automatyzacja-google-sheets",
      tool_name: "Google Sheets",
      hero: {
        h1: "Automatyzacja Google Sheets – bezbłędne bazy danych",
        cta_label: "Umów bezpłatną konsultację",
        cta_url: "/kontakt"
      },
      problem: {
        title: "Problemy z arkuszami",
        description: "Najczęstsze wyzwania przy pracy z arkuszami",
        items: [
          "Ręczne kopiowanie danych: Żmudne przepisywanie z maili i systemów.",
          "Błędy ludzkie: Przypadkowe usunięcia i literówki niszczą raporty.",
          "Silosy danych: Brak centralnego punktu prawdy w firmie."
        ]
      },
      solution: {
        title: "Jak to działa?",
        description: "Bezpieczna agregacja danych i raportowanie",
        steps: [
          "Przechwycenie transakcji przez Webhook",
          "Walidacja i transformacja danych",
          "Precyzyjny zapis do arkusza",
          "Kontrola anomalii i alerty dla księgowości"
        ]
      },
      benefits: {
        title: "Korzyści z automatyzacji",
        description: "Zyskaj bezbłędne raporty",
        items: [
          "Automatyczne raportowanie",
          "Czyste dane bez błędów",
          "Centralizacja informacji"
        ]
      },
      faq: {
        title: "Najczęściej zadawane pytania",
        description: "Rozwiewamy wątpliwości dotyczące automatyzacji",
        faqs: [
          { question: "Czy obsłuży tysiące wierszy?", answer: "Tak, stosujemy przetwarzanie wsadowe (batching)." }
        ]
      },
      seo: {
        title: "Automatyzacja Google Sheets z n8n – raporty i bazy | Karol Modelski",
        keyword: "automatyzacja Google Sheets n8n",
        description: "Zintegruj Google Sheets z dowolnym systemem za pomocą n8n. Automatyzuj raporty i bazy danych. Sprawdź korzyści i umów bezpłatną konsultację."
      }
    }
  },
  {
    metadata: {
      name: "HubSpot",
      description: "Automatyzacja HubSpot w n8n. Synchronizuj marketing ze sprzedażą.",
      href: "/narzedzia/automatyzacja-hubspot"
    },
    content: {
      page_id: "automatyzacja-hubspot",
      tool_name: "HubSpot",
      hero: {
        h1: "Automatyzacja HubSpot – skalowalny marketing i sprzedaż",
        cta_label: "Umów bezpłatną konsultację",
        cta_url: "/kontakt"
      },
      problem: {
        title: "Wyzwania w HubSpot",
        description: "Najczęstsze problemy w zarządzaniu marketingiem",
        items: [
          "Wysokie koszty skalowania w chmurze.",
          "Niska jakość leadów trafiających do CRM.",
          "Brak priorytetyzacji kontaktów."
        ]
      },
      solution: {
        title: "Jak to działa?",
        description: "Inteligentne zarządzanie leadami z użyciem AI",
        steps: [
          "Przechwycenie kontaktu w CRM",
          "Analiza intencji przez AI",
          "Aktualizacja scoringu w HubSpot",
          "Uruchomienie priorytetowej ścieżki"
        ]
      },
      benefits: {
        title: "Korzyści z automatyzacji",
        description: "Zyskaj lepsze wyniki",
        items: [
          "Lepsza jakość leadów dzięki AI",
          "Niższe koszty operacyjne",
          "Wydajniejsza sprzedaż"
        ]
      },
      faq: {
        title: "Najczęściej zadawane pytania",
        description: "Rozwiewamy wątpliwości dotyczące automatyzacji",
        faqs: [
          { question: "Czy n8n obsłuży pola niestandardowe?", answer: "Tak, w pełni mapujemy strukturę Twojej bazy HubSpot." }
        ]
      },
      seo: {
        title: "Automatyzacja HubSpot z n8n – marketing i sprzedaż | Karol Modelski",
        keyword: "automatyzacja HubSpot n8n",
        description: "Zintegruj HubSpot z n8n dla lepszych wyników sprzedaży. Zautomatyzuj marketing i oszczędzaj czas. Zobacz jak zacząć i umów konsultację."
      }
    }
  },
  {
    metadata: {
      name: "Slack",
      description: "Automatyzacja Slack przez n8n. Przekształć komunikator w interaktywne centrum operacyjne.",
      href: "/narzedzia/automatyzacja-slack"
    },
    content: {
      page_id: "automatyzacja-slack",
      tool_name: "Slack",
      hero: {
        h1: "Automatyzacja Slack – wyeliminuj manualne powiadomienia",
        cta_label: "Umów bezpłatną konsultację",
        cta_url: "/kontakt"
      },
      problem: {
        title: "Problemy z komunikacją",
        description: "Najczęstsze problemy w komunikacji",
        items: [
          "Przegapione okazje i alerty w szumie wiadomości.",
          "Marnowanie czasu na ciągłe przełączanie między kartami.",
          "Brak reaktywności – czaty są tylko informacyjne."
        ]
      },
      solution: {
        title: "Jak to działa?",
        description: "Przekształcenie czatu w interaktywne centrum decyzyjne",
        steps: [
          "Detekcja zdarzenia krytycznego",
          "Budowa alertu z przyciskami w Slack",
          "Nasłuchiwanie interakcji użytkownika",
          "Wykonanie akcji w systemach zewnętrznych"
        ]
      },
      benefits: {
        title: "Korzyści z automatyzacji",
        description: "Zyskaj lepszą komunikację",
        items: [
          "Szybsza reakcja na zgłoszenia",
          "Większy spokój zespołu",
          "Pełna synchronizacja danych"
        ]
      },
      faq: {
        title: "Najczęściej zadawane pytania",
        description: "Rozwiewamy wątpliwości dotyczące automatyzacji",
        faqs: [
          { question: "Czy automatyzacja Slacka jest bezpieczna?", answer: "Tak, stosujemy dedykowane prywatne aplikacje z restrykcyjnymi uprawnieniami." }
        ]
      },
      seo: {
        title: "Automatyzacja Slack z n8n – interaktywne centrum operacyjne | Karol Modelski",
        keyword: "automatyzacja Slack n8n",
        description: "Zautomatyzuj Slacka z n8n dla lepszej efektywności. Przekształć czat w centrum operacyjne. Sprawdź korzyści i umów bezpłatną konsultację."
      }
    }
  },
  {
    metadata: {
      name: "Stripe",
      description: "Automatyzacja Stripe przez n8n. Łącz płatności z księgowością.",
      href: "/narzedzia/automatyzacja-stripe"
    },
    content: {
      page_id: "automatyzacja-stripe",
      tool_name: "Stripe",
      hero: {
        h1: "Automatyzacja Stripe – płynny obieg dokumentów",
        cta_label: "Umów bezpłatną konsultację",
        cta_url: "/kontakt"
      },
      problem: {
        title: "Wyzwania w obsłudze płatności",
        description: "Najczęstsze problemy w finansach",
        items: [
          "Żmudne ręczne fakturowanie.",
          "Brak realnego wglądu w analitykę ROI.",
          "Utrata przychodów przez błędy w kartach."
        ]
      },
      solution: {
        title: "Jak to działa?",
        description: "Automatyczny obieg dokumentów finansowych",
        steps: [
          "Webhook ze Stripe po płatności",
          "Walidacja i parsowanie danych",
          "Generowanie faktury w systemie księgowym",
          "Wysyłka faktury do klienta"
        ]
      },
      benefits: {
        title: "Korzyści z automatyzacji",
        description: "Zyskaj spokój w finansach",
        items: [
          "Pełna automatyzacja księgowości",
          "Precyzyjne raporty ROI",
          "Szybsze odzyskiwanie płatności"
        ]
      },
      faq: {
        title: "Najczęściej zadawane pytania",
        description: "Rozwiewamy wątpliwości dotyczące automatyzacji",
        faqs: [
          { question: "Czy można doliczać rabaty?", answer: "Tak, sprawdzamy historię klienta przed wystawieniem faktury." }
        ]
      },
      seo: {
        title: "Automatyzacja Stripe z n8n – księgowość i finanse | Karol Modelski",
        keyword: "automatyzacja Stripe n8n",
        description: "Połącz Stripe z systemem księgowym za pomocą n8n. Automatyzuj faktury i kontroluj finanse. Sprawdź jak zacząć i umów bezpłatną konsultację."
      }
    }
  }
];
