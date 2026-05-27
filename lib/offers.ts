import { Bot, Zap, BrainCircuit, ShieldAlert, FileText, Clock, Users, Database, GitBranch, Webhook, Mail, Target, BarChart, Banknote, Filter } from "lucide-react";
import { OfferPageData } from "@/lib/types";
import { TOOLS } from "./tools";

export const OFFERS: Record<string, OfferPageData> = {
  "/automatyzacja-sprzedazy": {
    page_id: "automatyzacja-sprzedazy",
    offer_url: "/oferta/automatyzacja-sprzedazy",
    offer_name: "Automatyzacja Sprzedaży i Obsługi Leadów",
    hero_section: {
      h1: "Automatyzacja sprzedaży: Skaluj przychody, eliminując ręczną pracę w zespole",
      subtitle: "Wdrażamy systemy automatyzacji oparte na n8n, które przejmują powtarzalne czynności – od generowania ofert po przypomnienia o follow-up – pozwalając Twojemu zespołowi skupić się wyłącznie na budowaniu relacji i sprzedaży.",
      cta_label: "Umów bezpłatną konsultację",
      cta_url: "/kontakt",
      cta_microcopy: "Sprawdź, ile godzin zaoszczędzisz w swoim procesie"
    },
    business_pains: {
      section_title: "Zidentyfikuj wąskie gardła w swoim dziale sprzedaży",
      section_description: "Większość działów sprzedaży traci nawet do 40% czasu na czynności, które mogłyby wykonać systemy automatyczne.",
      pains_list: [
        "Handlowcy spędzają zbyt dużo czasu na administrowaniu danymi zamiast na rozmowach z klientami.",
        "Leady uciekają z powodu opóźnień w pierwszym kontakcie lub braku systematycznego follow-upu.",
        "Ręczne przygotowywanie ofert i umów generuje błędy i opóźnia proces decyzyjny."
      ]
    },
    modules_section: {
      section_title: "Obszary, które usprawnimy w Twojej firmie",
      section_description: "Budujemy dopasowane rozwiązania, które eliminują chaos informacyjny i odciążają zespół.",
      modules: [
        {
          module_title: "Inteligentny obieg leadów (Lead Management)",
          problem: "Leady z różnych źródeł giną w chaosie skrzynki e-mail.",
          solution: "Automatyczne pobieranie danych z formularzy, reklam czy LinkedIn w czasie rzeczywistym, ich weryfikacja i natychmiastowe przypisanie do handlowca w CRM.",
          outcome: "Skrócenie czasu reakcji na zapytanie z godzin do pojedynczych sekund."
        },
        {
          module_title: "Automatyczne generowanie i wysyłka ofert",
          problem: "Marnowanie godzin na ręczne przepisywanie danych do szablonów Excel/Word.",
          solution: "Dynamiczne tworzenie spersonalizowanych ofert PDF na bazie danych z CRM lub formularza i ich automatyczna wysyłka e-mailem.",
          outcome: "Klient otrzymuje precyzyjną ofertę natychmiast po zgłoszeniu zapotrzebowania."
        },
        {
          module_title: "Systematyczny Follow-up",
          problem: "Brak czasu na przypominanie się klientom po wysłaniu oferty.",
          solution: "Automatyczne sekwencje przypomnień e-mail/SMS oraz automatyczne zadania w kalendarzu handlowca, jeśli klient nie odpowiada przez określony czas.",
          outcome: "Zwiększenie współczynnika konwersji bez angażowania uwagi zespołu."
        }
      ]
    },
    tech_ecosystem: {
      section_title: "Technologie i integracje",
      section_description: "Nie zmuszamy Cię do zmiany narzędzi. Łączymy systemy, z których już korzystasz, tworząc spójne środowisko pracy.",
      supported_tools: ["n8n", "Systemy CRM", "Google Sheets", "Bazy danych", "Komunikatory"]
    },
    faq_section: [
      {
        question: "Czy automatyzacja sprzedaży wymaga wdrożenia nowego systemu CRM?",
        answer: "Nie. Wykorzystując n8n, integrujemy narzędzia, które już funkcjonują w Twojej firmie (np. Pipedrive, HubSpot, bazy SQL czy arkusze). Budujemy automatyzację wokół Twojego obecnego procesu."
      },
      {
        question: "Jak szybko widoczne są efekty wdrożenia?",
        answer: "Oszczędność czasu handlowców jest odczuwalna natychmiast po uruchomieniu pierwszego scenariusza. Wzrost konwersji i lepsze domykanie leadów stają się mierzalne w perspektywie od 1 do 3 miesięcy."
      }
    ],
    seo_metadata: {
      focus_keyword: "automatyzacja sprzedaży",
      meta_title: "Automatyzacja Sprzedaży i Procesów Biznesowych | n8n",
      meta_description: "Zautomatyzuj lejek sprzedażowy, obieg leadów i ofertowanie. Poznaj mierzalne korzyści biznesowe wdrożenia automatyzacji z n8n."
    }
  },
  "/audyt-i-strategia-automatyzacji": {
    page_id: "audyt-i-strategia-automatyzacji",
    offer_url: "/oferta/audyt-i-strategia-automatyzacji",
    offer_name: "Audyt i Strategia Automatyzacji Procesów",
    hero_section: {
      h1: "Audyt automatyzacji: Zmień chaos w uporządkowane procesy, które pracują dla Ciebie",
      subtitle: "Zidentyfikujemy wąskie gardła w Twojej firmie i przygotujemy precyzyjny plan wdrożenia automatyzacji. Zamiast wdrażać narzędzia po omacku, zbudujemy strategię, która realnie oszczędzi czas Twojego zespołu i zwiększy marżę.",
      cta_label: "Zamów audyt procesów",
      cta_url: "/kontakt",
      cta_microcopy: "Otrzymaj mapę drogową automatyzacji Twojej firmy"
    },
    business_pains: {
      section_title: "Wyzwania, które rozwiązujemy",
      section_description: "Audyt to nie tylko lista błędów – to zestawienie kosztów, które ponosisz w wyniku nieefektywnych procesów.",
      pains_list: [
        "Nie wiesz, od czego zacząć automatyzację, by nie zmarnować budżetu.",
        "Twoje narzędzia (CRM, e-mail, Excel) nie współpracują ze sobą.",
        "Koszty operacyjne rosną wraz z każdą kolejną sprzedażą."
      ]
    },
    modules_section: {
      section_title: "Co zawiera nasz audyt?",
      section_description: "Dostarczamy gotową mapę drogową, która jasno definiuje priorytety wdrożeń.",
      modules: [
        {
          module_title: "Inwentaryzacja procesów",
          problem: "Brak pełnego obrazu powtarzalnych czynności.",
          solution: "Szczegółowa analiza Twojego workflow w celu wyłonienia najbardziej czasochłonnych zadań.",
          outcome: "Przejrzysta lista procesów gotowych do automatyzacji."
        },
        {
          module_title: "Projektowanie architektury",
          problem: "Chaos w technologiach i integracjach.",
          solution: "Projektowanie optymalnego przepływu danych między Twoimi obecnymi narzędziami.",
          outcome: "Spójny, skalowalny model Twojej przyszłej pracy."
        },
        {
          module_title: "Priorytetyzacja wdrożenia",
          problem: "Rozmycie celów i brak szybkich efektów.",
          solution: "Analiza ROI – wskazujemy, co wdrożyć najpierw, by najszybciej odczuć realne zyski.",
          outcome: "Plan działania z konkretnym harmonogramem."
        }
      ]
    },
    tech_ecosystem: {
      section_title: "Nasze podejście",
      section_description: "Audyt opieramy na twardych danych i Twoich celach biznesowych. Nie sprzedajemy technologii – sprzedajemy spokój i efektywność.",
      supported_tools: ["n8n", "CRM", "Google Workspace", "Bazy danych", "API"]
    },
    faq_section: [
      {
        question: "Czy po audycie muszę wdrożyć automatyzację z Wami?",
        answer: "Nie. Otrzymujesz gotowy, kompletny dokument strategii, z którym możesz pracować samodzielnie, z dowolnym zespołem programistycznym lub z nami."
      },
      {
        question: "Ile trwa audyt?",
        answer: "W zależności od skali firmy, proces audytu trwa od 2 do 5 dni roboczych."
      }
    ],
    seo_metadata: {
      focus_keyword: "audyt automatyzacji",
      meta_title: "Audyt Automatyzacji Procesów Biznesowych | Strategia",
      meta_description: "Zidentyfikuj wąskie gardła i zaprojektuj skalowalne procesy. Profesjonalny audyt automatyzacji, który przekłada się na realne oszczędności."
    }
  },
  "/automatyzacja-marketingu": {
    page_id: "automatyzacja-marketingu",
    offer_url: "/oferta/automatyzacja-marketingu",
    offer_name: "Automatyzacja Marketingu",
    hero_section: {
      h1: "Automatyzacja marketingu: Skaluj kampanie i pielęgnuj leady bez ręcznej pracy",
      subtitle: "Przestań zarządzać kampaniami ręcznie. Dzięki n8n połączę Twoje narzędzia marketingowe, CRM i systemy analityczne w jeden spójny ekosystem.",
      cta_label: "Umów bezpłatną konsultację",
      cta_url: "/kontakt",
      cta_microcopy: "Dowiedz się, jak zautomatyzować lead nurturing"
    },
    business_pains: {
      section_title: "Wyzwania w marketingu",
      section_description: "Automatyzacja marketingu pozwala na skalowanie komunikacji bez proporcjonalnego wzrostu kosztów i pracy zespołu.",
      pains_list: [
        "Nieskuteczny lead nurturing – leady tracą zainteresowanie, bo nie otrzymują treści w odpowiednim momencie.",
        "Silosy danych – brak jednego obrazu klienta przez rozproszenie narzędzi.",
        "Ręczna obsługa kampanii – marnowanie czasu na eksporty plików i tagowanie."
      ]
    },
    modules_section: {
      section_title: "Obszary marketingu, które zautomatyzujemy",
      section_description: "Budujemy sprawne systemy, które pielęgnują relacje z klientem w każdej fazie lejka.",
      modules: [
        {
          module_title: "Lead Nurturing",
          problem: "Leady nie są edukowane w odpowiednim czasie.",
          solution: "Automatyczne ścieżki e-mail/SMS uruchamiane na podstawie zachowań użytkownika.",
          outcome: "Wyższa jakość leadów przekazywanych do sprzedaży."
        },
        {
          module_title: "Segmentacja danych",
          problem: "Dane rozproszone w różnych systemach.",
          solution: "Dynamiczne tworzenie list odbiorców na podstawie aktywności wewnątrz n8n.",
          outcome: "Precyzyjne targetowanie i lepsze wyniki kampanii."
        },
        {
          module_title: "Automatyzacja kampanii",
          problem: "Ręczne tagowanie i przenoszenie danych.",
          solution: "W pełni zautomatyzowany przepływ między reklamami, WWW i CRM.",
          outcome: "Zwiększenie efektywności zespołu o dziesiątki godzin miesięcznie."
        }
      ]
    },
    tech_ecosystem: {
      section_title: "Nasze podejście",
      section_description: "Łączymy Twoje narzędzia marketingowe w spójny ekosystem danych.",
      supported_tools: ["n8n", "CRM", "Newsletter Tools", "Analityka"]
    },
    faq_section: [
      {
        question: "Jak automatyzacja wpływa na jakość danych?",
        answer: "Eliminuje błędy ludzkie przy ręcznym przenoszeniu danych, zapewniając czystość i unikalność kontaktów w CRM."
      },
      {
        question: "Czy mogę integrować dowolne narzędzie marketingowe?",
        answer: "Tak, o ile system posiada API lub Webhooki. n8n pozwala na elastyczne łączenie niemal każdego narzędzia."
      }
    ],
    seo_metadata: {
      focus_keyword: "automatyzacja marketingu",
      meta_title: "Automatyzacja Marketingu i Lead Nurturingu | n8n",
      meta_description: "Zautomatyzuj lead nurturing, segmentację i kampanie marketingowe. Połącz swoje narzędzia w jeden wydajny ekosystem."
    }
  },
  "/automatyzacja-zarzadzania-projektami": {
    page_id: "automatyzacja-zarzadzania-projektami",
    offer_url: "/oferta/automatyzacja-zarzadzania-projektami",
    offer_name: "Automatyzacja Zarządzania Projektami",
    hero_section: {
      h1: "Uwolnij swój zespół: Automatyzacja zarządzania projektami",
      subtitle: "Przestań przeklejać briefy i pilnować terminów ręcznie. Zautomatyzuj operacje i skup się na dowożeniu wartości.",
      cta_label: "Uporządkuj swoje projekty",
      cta_url: "/kontakt",
      cta_microcopy: "Zaoszczędź czas Project Managerów"
    },
    business_pains: {
      section_title: "Wyzwania w projektach",
      section_description: "Zdejmujemy z Twojego zespołu żmudne czynności operacyjne, które spowalniają realizację projektów.",
      pains_list: [
        "Przestoje na starcie – zespół dowiaduje się o klientach z dużym opóźnieniem.",
        "Rozproszona wiedza – pliki i wytyczne giną w mailach.",
        "Marnowanie czasu na statusowanie – menedżerowie tracą godziny na dopytywanie o etap zadań."
      ]
    },
    modules_section: {
      section_title: "Nasze rozwiązania projektowe",
      section_description: "Budujemy systemy, które dbają o porządek w Twoich projektach automatycznie.",
      modules: [
        {
          module_title: "Automatyczny onboarding klienta",
          problem: "Ręczne zakładanie projektów dla każdego nowego klienta.",
          solution: "Automatyczne tworzenie przestrzeni, folderów, checklist i ustawianie terminów w ClickUp po zmianie statusu w CRM.",
          outcome: "Projekt startuje w ułamku sekundy od wygrania sprzedaży."
        },
        {
          module_title: "Inteligentny asystent powiadomień",
          problem: "Przeoczone terminy i brak przepływu informacji.",
          solution: "Agregacja zdarzeń projektowych i wysyłka czytelnych alertów na Slacka.",
          outcome: "Pełna kontrola nad terminami bez konieczności ciągłego sprawdzania systemu."
        },
        {
          module_title: "Raportowanie automatyczne",
          problem: "Ręczne generowanie raportów rentowności.",
          solution: "Automatyczne pobieranie czasu pracy z zadań i przesyłanie do arkusza Google.",
          outcome: "Gotowe raporty dostępności i kosztów dostępne na żądanie."
        }
      ]
    },
    tech_ecosystem: {
      section_title: "Narzędzia i integracje",
      section_description: "Automatyzujemy współpracę pomiędzy działami i systemami.",
      supported_tools: ["ClickUp", "CRM", "Slack", "Google Sheets"]
    },
    faq_section: [
      {
        question: "Czy automatyzacja nie ogranicza naszej kontroli?",
        answer: "Wprost przeciwnie. Automatyzacja zdejmuje z zespołu czynności techniczne, pozwalając w pełni skupić się na merytorycznej kontroli nad projektem."
      },
      {
        question: "Jak szybko widać efekty?",
        answer: "Pierwsze usprawnienia (tzw. quick wins) w procesach operacyjnych wdrażamy zazwyczaj w ciągu 7-10 dni."
      }
    ],
    seo_metadata: {
      focus_keyword: "automatyzacja zarządzania projektami",
      meta_title: "Automatyzacja Zarządzania Projektami i Operacji | n8n",
      meta_description: "Zautomatyzuj zakładanie projektów, raportowanie i komunikację w zespole. Uwolnij czas swoich Project Managerów."
    }
  },
  "/automatyzacja-administracji-i-finansow": {
    page_id: "automatyzacja-administracji-i-finansow",
    offer_url: "/oferta/automatyzacja-administracji-i-finansow",
    offer_name: "Automatyzacja Administracji i Finansów",
    hero_section: {
      h1: "Wyeliminuj rutynę: Automatyzacja finansów i administracji",
      subtitle: "Przestań wystawiać faktury ręcznie i weryfikować płatności w banku. Zautomatyzujemy obieg dokumentów i rozliczenia.",
      cta_label: "Usprawnij swoje finanse",
      cta_url: "/kontakt",
      cta_microcopy: "Wyeliminuj błędy w rozliczeniach"
    },
    business_pains: {
      section_title: "Wyzwania w administracji",
      section_description: "Zautomatyzuj obieg dokumentów i finansów, aby uniknąć pomyłek i opóźnień w rozliczeniach.",
      pains_list: [
        "Ręczna papierkologia – kopiowanie danych z CRM do księgowości generuje błędy.",
        "Brak kontroli nad płatnościami – żmudne sprawdzanie wyciągów bankowych.",
        "Chaos w raportowaniu – rozproszone dane finansowe utrudniają decyzje."
      ]
    },
    modules_section: {
      section_title: "Automatyzacja finansowa w praktyce",
      section_description: "Budujemy bezbłędny system rozliczeniowy, który działa w tle, podczas gdy Ty skupiasz się na rozwoju.",
      modules: [
        {
          module_title: "Obieg faktur",
          problem: "Ręczne wystawianie i wysyłanie faktur.",
          solution: "Automatyczne generowanie dokumentów w systemie księgowym po opłaceniu zamówienia.",
          outcome: "Faktury trafiają do klientów bez Twojej ingerencji."
        },
        {
          module_title: "Weryfikacja płatności",
          problem: "Ręczne sprawdzanie, czy przelew dotarł.",
          solution: "Integracja bramki płatniczej z systemem CRM i księgowością.",
          outcome: "Status płatności aktualizuje się natychmiast w Twoim CRM."
        },
        {
          module_title: "Dashboardy finansowe",
          problem: "Dane o przychodach rozsiane po wielu miejscach.",
          solution: "Zbieranie wszystkich danych finansowych w jeden, czytelny arkusz Google.",
          outcome: "Pełny wgląd w kondycję finansową firmy w czasie rzeczywistym."
        }
      ]
    },
    tech_ecosystem: {
      section_title: "Technologie",
      section_description: "Łączymy bezpiecznie systemy księgowe, płatnicze i analityczne.",
      supported_tools: ["Stripe", "Google Sheets", "Systemy Księgowe", "n8n"]
    },
    faq_section: [
      {
        question: "Czy to jest bezpieczne?",
        answer: "Tak. Stosujemy szyfrowane połączenia API i protokoły OAuth2. Dane finansowe pozostają pod Twoją pełną kontrolą."
      },
      {
        question: "Czy system obsłuży różne waluty?",
        answer: "Tak. Implementujemy logikę automatycznego przeliczania kursów i rozpoznawania kraju klienta dla prawidłowych stawek VAT."
      }
    ],
    seo_metadata: {
      focus_keyword: "automatyzacja finansów",
      meta_title: "Automatyzacja Finansów i Obiegu Faktur | n8n",
      meta_description: "Zautomatyzuj obieg dokumentów finansowych i wystawianie faktur. Zapewnij bezbłędne rozliczenia dzięki integracjom n8n."
    }
  },
  "/automatyzacja-procesow-z-ai": {
    page_id: "automatyzacja-procesow-z-ai",
    offer_url: "/oferta/automatyzacja-procesow-z-ai",
    offer_name: "Automatyzacja Procesów z wykorzystaniem AI",
    hero_section: {
      h1: "Wdróż AI do pracy: Inteligentna automatyzacja procesów",
      subtitle: "Przestań traktować AI jako zabawkę. Zintegruj Google Gemini ze swoimi systemami i zautomatyzuj pracę z danymi.",
      cta_label: "Wdróż AI w swoim procesie",
      cta_url: "/kontakt",
      cta_microcopy: "Zobacz, co może Twoje nowe AI"
    },
    business_pains: {
      section_title: "Wyzwania w pracy z AI",
      section_description: "Dzięki n8n AI staje się produkcyjnym elementem Twojej firmy, a nie tylko zabawką do pisania tekstów.",
      pains_list: [
        "Chaos w komunikacji – zespół tonie w powtarzalnych zapytaniach.",
        "Niewykorzystane dane – masz tysiące historii rozmów, których nie analizujesz.",
        "Brak struktury – obawa przed halucynacjami i chaotycznymi odpowiedziami AI."
      ]
    },
    modules_section: {
      section_title: "Co zrobimy z Twoim AI?",
      section_description: "Wdrażamy sprawdzone przepływy, które integrują Gemini z Twoim CRM i pocztą.",
      modules: [
        {
          module_title: "Inteligentne przetwarzanie maili",
          problem: "Ręczna obsługa setek zapytań dziennie.",
          solution: "AI analizuje intencję maila i przygotowuje gotowe wersje odpowiedzi w Twoim Gmailu.",
          outcome: "Skrócenie czasu obsługi zapytania o 80%."
        },
        {
          module_title: "Ekstrakcja danych z dokumentów",
          problem: "Ręczne przepisywanie danych z PDF do systemu.",
          solution: "AI wyciąga kluczowe dane z umów i skanów, mapując je bezpośrednio do CRM/Sheets.",
          outcome: "Pełna automatyzacja wprowadzania danych z dokumentów."
        },
        {
          module_title: "Analiza zachowań",
          problem: "Dane o kliencie są w nieuporządkowanych notatkach.",
          solution: "AI analizuje historię relacji i podpowiada handlowcom najlepszy kolejny krok.",
          outcome: "Zwiększenie konwersji dzięki lepszej wiedzy o kliencie."
        }
      ]
    },
    tech_ecosystem: {
      section_title: "Technologia",
      section_description: "Stosujemy produkcyjne API Google Gemini, zapewniając bezpieczeństwo i prywatność danych.",
      supported_tools: ["Google Gemini AI", "n8n", "CRM", "Gmail"]
    },
    faq_section: [
      {
        question: "Czy dane są bezpieczne?",
        answer: "Tak. Korzystamy wyłącznie z produkcyjnego API, które nie wykorzystuje Twoich danych do trenowania modeli publicznych."
      },
      {
        question: "Kto zatwierdza decyzje AI?",
        answer: "Domyślnie pracujemy w trybie human-in-the-loop – AI przygotowuje propozycję, Ty ją zatwierdzasz."
      }
    ],
    seo_metadata: {
      focus_keyword: "automatyzacja z AI",
      meta_title: "Automatyzacja Procesów z Google Gemini AI | n8n",
      meta_description: "Zintegruj Google Gemini ze swoimi systemami. Inteligentna automatyzacja przetwarzania danych, maili i dokumentów."
    }
  },
  "/automatyzacja-obslugi-klienta": {
    page_id: "automatyzacja-obslugi-klienta",
    offer_url: "/oferta/automatyzacja-obslugi-klienta",
    offer_name: "Automatyzacja Obsługi Klienta",
    hero_section: {
      h1: "Obsługa klienta w czasie rzeczywistym: Zautomatyzuj ticketowanie",
      subtitle: "Przestań tracić zgłoszenia. Zautomatyzujemy obieg ticketów, priorytetyzację i alerty, by klient zawsze czuł się zaopiekowany.",
      cta_label: "Uporządkuj zgłoszenia",
      cta_url: "/kontakt",
      cta_microcopy: "Skróć czas reakcji zespołu"
    },
    business_pains: {
      section_title: "Wyzwania w obsłudze",
      section_description: "Automatyzacja pozwala zamienić chaotyczny dział obsługi w sprawny, przewidywalny system.",
      pains_list: [
        "Zgubione zgłoszenia – ważne sprawy giną w ogólnej skrzynce e-mail.",
        "Wąskie gardła – ręczne przekierowywanie ticketów trwa zbyt długo.",
        "Brak historii – klient musi za każdym razem przypominać swój problem."
      ]
    },
    modules_section: {
      section_title: "Automatyzacja obsługi",
      section_description: "Systematyzujemy przyjmowanie, priorytetyzację i rozwiązywanie zgłoszeń.",
      modules: [
        {
          module_title: "Inteligentny routing zgłoszeń",
          problem: "Chaotyczny podział zgłoszeń między specjalistów.",
          solution: "Analiza treści ticketa i automatyczne przypisanie go do odpowiedniego specjalisty.",
          outcome: "Szybsza ścieżka do rozwiązania sprawy."
        },
        {
          module_title: "Alertowanie o priorytetach",
          problem: "Krytyczne sprawy czekają w kolejce.",
          solution: "Automatyczne wykrywanie priorytetowych klientów i wysyłka alertu na Slack.",
          outcome: "Błyskawiczna reakcja na sprawy krytyczne."
        },
        {
          module_title: "Integracja z CRM",
          problem: "Zespół obsługi nie widzi kontekstu rozmów.",
          solution: "Wyświetlanie pełnej historii klienta obok treści zgłoszenia.",
          outcome: "Profesjonalna obsługa bez zbędnych pytań."
        }
      ]
    },
    tech_ecosystem: {
      section_title: "Technologia",
      section_description: "Łączymy narzędzia do komunikacji w jeden wydajny system.",
      supported_tools: ["ClickUp", "Slack", "Zendesk", "CRM"]
    },
    faq_section: [
      {
        question: "Czy obsługa nie stanie się zbyt techniczna?",
        answer: "Automatyzujemy tylko aspekty techniczne (kolejkowanie, dane). Sama komunikacja pozostaje w pełni ludzka."
      },
      {
        question: "Jak szybko wdrożymy routing?",
        answer: "Podstawowy system automatyzacji zgłoszeń wdrażamy zazwyczaj w ciągu 1-2 tygodni."
      }
    ],
    seo_metadata: {
      focus_keyword: "automatyzacja obsługi klienta",
      meta_title: "Automatyzacja Obsługi Klienta | Ticketing",
      meta_description: "Zautomatyzuj obieg zgłoszeń i priorytetyzację. Skróć czas odpowiedzi na zapytania klientów dzięki inteligentnym integracjom."
    }
  }
};
