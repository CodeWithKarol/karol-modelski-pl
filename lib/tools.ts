import { Clock, Users, FileText, Webhook, Database, GitBranch, ShieldCheck, Zap, Bot, FileSpreadsheet, AlertTriangle, Mail, Target, BarChart, Bell, MessageSquare, Workflow, CreditCard } from "lucide-react";
import { Tool } from "./types";

export const TOOLS: Tool[] = [
  {
    metadata: {
      name: "Pipedrive",
      description: "Zautomatyzuj swój proces sprzedaży. Przesyłaj leady z formularzy WWW bezpośrednio do Pipedrive, eliminując ręczną pracę administracyjną.",
      href: "/narzedzia/automatyzacja-pipedrive"
    },
    content: {
      hero: { 
        title: "Pipedrive CRM", 
        subtitle: "Automatyzacja Pipedrive CRM – zintegruj sprzedaż z resztą firmy przez n8n",
        description: "Przestań marnować czas handlowców na mechaniczną pracę administracyjną. Za pomocą n8n połączę Twój system Pipedrive z formularzami www, komunikatorami i systemami operacyjnymi. Zamień ręczne przepisywanie danych na natychmiastową obsługę leadów w czasie rzeczywistym."
      },
      agitation: {
        title: "Dlaczego potrzebujesz automatyzacji w Pipedrive?",
        painPoints: [
          { icon: Clock, title: "Zbyt wolny czas reakcji", description: "Zanim handlowiec ręcznie założy szansę sprzedaży w Pipedrive, mija kilka godzin. Konkurencja może już z nimi rozmawiać." },
          { icon: Users, title: "Chaos i „zimne” szanse", description: "Handlowcy zapominają o logowaniu działań, wysyłaniu follow-upów lub gubią notatki, przez co cenne zapytania przepadają w lejku." },
          { icon: FileText, title: "Ręczna papierkologia", description: "Gdy transakcja osiąga etap „Wygrana”, Twój zespół musi ręcznie przepisywać dane do fakturowania lub systemów projektowych." },
        ]
      },
      technical: {
        features: [
          { icon: Webhook, title: "Synchronizacja przez Webhooki v2", description: "Zanim obciążyć API ciągłym odpytywaniem, stosuję natychmiastowe Webhooki dla każdej zmiany w transakcji.", link: { label: "(Webhooki)", href: "/baza-wiedzy/co-to-jest-webhook" } },
          { icon: Database, title: "Inteligentna deduplikacja", description: "n8n weryfikuje unikalne identyfikatory, nie tworząc duplikatów i zachowując pełną historię kontaktu." },
          { icon: GitBranch, title: "Obsługa pól niestandardowych", description: "W pełni mapuję customowe klucze API Pipedrive, gwarantując płynny przepływ danych strukturyzowanych.", link: { label: "(API)", href: "/baza-wiedzy/api-w-biznesie" } },
        ]
      },
      workflowDetail: {
        title: "Jak wygląda gotowa automatyzacja Pipedrive w n8n?",
        subtitle: "Anatomia bezpiecznego przepływu danych krok po kroku",
        steps: [
          { step: "01 / Wyzwalacz (Webhook)", text: "Klient wypełnia formularz wyceny na Twojej stronie (np. Elementor, Typeform). n8n w ułamku sekundy odbiera bezpieczny pakiet danych (Payload) i uruchamia proces operacyjny bez opóźnień." },
          { step: "02 / Walidacja i Filtrowanie", text: "Zanim dane trafią do CRM, dedykowany kod JavaScript w n8n sprawdza poprawność adresu e-mail, formatuje numer telefonu do standardu międzynarodowego i weryfikuje bazę w poszukiwaniu duplikatów." },
          { step: "03 / Wzbogacanie bazy (API GUS)", text: "Na podstawie podanego numeru NIP, n8n automatycznie odpytuje rejestry publiczne. Pobiera pełną nazwę firmy oraz adres i automatycznie uzupełnia profil klienta w Pipedrive przed kontaktem handlowca." },
          { step: "04 / Tworzenie i Przydział Deal", text: "System zakłada nowy 'Deal' na pierwszym etapie lejka, przypisuje odpowiedniego handlowca zgodnie z logiką rotacyjną (Round Robin) i ustawia automatyczne powiadomienie na Slacku z bezpośrednim linkiem." }
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
  },
  {
    metadata: {
      name: "ClickUp",
      description: "Inteligentne zarządzanie projektami. Automatycznie twórz zadania i listy w ClickUp na podstawie zgłoszeń od klientów.",
      href: "/narzedzia/automatyzacja-clickup"
    },
    content: {
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
      workflowDetail: {
        title: "Jak wygląda gotowa automatyzacja ClickUp w n8n?",
        subtitle: "Bezobsługowe uruchamianie projektów operacyjnych",
        steps: [
          { step: "01 / Detekcja zdarzenia wygranej", text: "Gdy transakcja w Twoim CRM (np. Pipedrive) zmienia status na 'Wygrana', n8n natychmiast przechwytuje zdarzenie i pobiera pełną specyfikację zamówionych usług." },
          { step: "02 / Klonowanie struktury z szablonu", text: "Poprzez ClickUp Hierarchy API, n8n odnajduje dedykowany szablon projektu i automatycznie tworzy nową Listę zadań nazwaną nazwiskiem lub firmą klienta." },
          { step: "03 / Dynamiczne daty i przypisanie PM", text: "Algorytm oblicza terminy cząstkowe (Due Dates) na podstawie daty startu projektu i automatycznie przypisuje zadania do odpowiednich specjalistów, uzupełniając pola niestandardowe o budżet." },
          { step: "04 / Synchronizacja komunikacji", text: "n8n generuje bezpośredni link do nowej przestrzeni ClickUp, wysyła uporządkowany brief na kanał zespołu na Slacku i przesyła powitanie e-mailowe bezpośrednio do klienta." }
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
  },
  {
    metadata: {
      name: "Google Sheets",
      description: "Przekształć arkusze w centrum dowodzenia. Automatyzacja danych, raportowanie i integracja z zewnętrznymi API w czasie rzeczywistym.",
      href: "/narzedzia/automatyzacja-google-sheets"
    },
    content: {
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
      workflowDetail: {
        title: "Jak wygląda gotowa automatyzacja Google Sheets w n8n?",
        subtitle: "Bezpieczna agregacja danych i automatyczne raportowanie finansowe",
        steps: [
          { step: "01 / Przechwycenie transakcji (np. Stripe)", text: "Gdy klient opłaca fakturę lub subskrypcję, n8n natychmiast odbiera Webhook z bramki płatniczej zawierający kwotę, walutę oraz identyfikator transakcji." },
          { step: "02 / Parsowanie i transformacja danych", text: "Za pomocą węzła Code Node w n8n, surowy obiekt JSON ze Stripe jest mapowany, podatki są wyliczane automatycznie, a dane klienta są formatowane do jednego standardu tekstowego." },
          { step: "03 / Bezpieczny zapis (Google Sheets API)", text: "n8n łączy się za pomocą autoryzowanego Service Account z Arkuszem. Zamiast nadpisywać losowe komórki, system lokalizuje pierwszy wolny wiersz i wykonuje operację Append Row." },
          { step: "04 / Weryfikacja anomalii i raport", text: "Jeśli kwota transakcji odbiega od zdefiniowanego cennika lub wystąpił błąd waluty, n8n zatrzymuje proces, oznacza wiersz kolorem czerwonym i wysyła alert do działu księgowości." }
        ]
      },
      faq: {
        faqs: [
          { question: "Czy n8n poradzi sobie z plikami, które mają tysiące wierszy?", answer: "Tak. W przeciwieństwie do prostych integracji, w n8n projektuję procesy z wykorzystaniem przetwarzania wsadowego (batching). Dane są dzielone na mniejsze paczki, co zapobiega przeciążeniu pamięci." },
          { question: "Co jeśli ktoś przypadkowo zmieni kolejność kolumn w arkuszu?", answer: "W moich wdrożeniach n8n odwołuje się do nazw nagłówków kolumn lub konkretnych kluczy w obiektach, a nie do losowych indeksów." },
          { question: "Czy zamiast Google Sheets mogę w ten sam sposób zautomatyzować Microsoft Excel?", answer: "Oczywiście. Schemat działania n8n jest zbliżony, jednak wymaga integracji z Microsoft OneDrive lub Sharepoint." },
        ]
      }
    }
  },
  {
    metadata: {
      name: "HubSpot",
      description: "Automatyzacja HubSpot w n8n. Wdrażam przepływy, które w czasie rzeczywistym synchronizują dane marketingowe i wzbogacają profile klientów przez AI.",
      href: "/narzedzia/automatyzacja-hubspot"
    },
    content: {
      hero: { 
        title: "HubSpot", 
        subtitle: "Integracja HubSpot + n8n: Skalowalny Marketing i Sprzedaż",
        description: "Przestań płacić za 'puste' operacje w Zapierze. Buduj zaawansowane przepływy danych z wykorzystaniem AI i n8n, zachowując 100% kontroli nad procesem."
      },
      agitation: {
        title: "Problemy, które rozwiązujemy",
        painPoints: [
          { icon: Mail, title: "Wysokie koszty skalowania", description: "Twoje opłaty w SaaS rosną wraz z każdym nowym leadem? Model n8n eliminuje opłaty wolumenowe." },
          { icon: Target, title: "Niska jakość danych", description: "Leady trafiają do CRM niekompletne? Automatycznie wzbogacamy je o dane z zewnętrznych API (np. dane rejestrowe) przed przekazaniem do handlowca." },
          { icon: BarChart, title: "Brak priorytetyzacji", description: "Handlowcy tracą czas na 'zimne' kontakty? Wdrażamy Lead Scoring oparty na modelach Google Gemini, który ocenia intencję zapytania w 1 sekundę." },
        ]
      },
      technical: {
        features: [
          { icon: Database, title: "Automatyczny Data Enrichment", description: "Pełna wiedza o kliencie (branża, wielkość firmy) bez ręcznego researchu." },
          { icon: Zap, title: "Synchronizacja dwukierunkowa", description: "HubSpot zawsze odzwierciedla stan faktyczny z arkuszy kalkulacyjnych i systemów finansowych." },
          { icon: ShieldCheck, title: "AI Content Repurposing", description: "Automatyczne tworzenie spersonalizowanych wiadomości follow-up na podstawie notatek ze spotkań." },
        ]
      },
      workflowDetail: {
        title: "Jak wygląda gotowa automatyzacja HubSpot w n8n?",
        subtitle: "Inteligentne zarządzanie i scoring leadów przy użyciu AI",
        steps: [
          { step: "01 / Przechwycenie leada (HubSpot API)", text: "Nowy kontakt wpada do HubSpot z kampanii reklamowej lub formularza. n8n natychmiast rejestruje zdarzenie i pobiera surowe dane wprowadzone przez użytkownika." },
          { step: "02 / Analiza intencji przez Google Gemini", text: "n8n przesyła treść zapytania do API Google Gemini. Model LLM analizuje tekst pod kątem potencjału budżetowego, określa pilność i zwraca ustrukturyzowany wynik (JSON)." },
          { step: "03 / Przypisanie segmentu i scoringu", text: "Na podstawie odpowiedzi z AI, n8n automatycznie aktualizuje pola niestandardowe w HubSpot (Lead Score, Potencjalna Branża) i kategoryzuje klienta do odpowiedniego segmentu." },
          { step: "04 / Uruchomienie precyzyjnej sekwencji", text: "Jeśli lead ma wysoki priorytet, n8n wymusza natychmiastowe powiadomienie SMS dla przypisanego handlowca i przenosi klienta do priorytetowej kolejki newsletterowej." }
        ]
      },
      faq: {
        faqs: [
          { question: "Jak HubSpot łączy się z n8n?", answer: "Wykorzystujemy dedykowany węzeł HubSpot w n8n, który pozwala na pełną operację na obiektach Contacts, Companies, Deals." },
          { question: "Czy automatyzacja obejmuje pola niestandardowe?", answer: "Tak, w pełni mapujemy customowe pola w HubSpot, co pozwala na pełną personalizację procesów biznesowych." },
          { question: "Jak wygląda kwestia bezpieczeństwa danych?", answer: "n8n łączy się z HubSpot przez oficjalne OAuth2, zapewniając bezpieczny i autoryzowany dostęp do danych Twojej firmy." },
        ]
      }
    }
  },
  {
    metadata: {
      name: "Slack",
      description: "Automatyzacja Slack z n8n. Przekształć komunikator w centrum operacyjne firmy. Zarządzaj zadaniami i akceptuj oferty bezpośrednio z poziomu czatu.",
      href: "/narzedzia/automatyzacja-slack"
    },
    content: {
      hero: { 
        title: "Slack", 
        subtitle: "Automatyzacja Slack: Twoje Centrum Operacyjne w Czasie Rzeczywistym",
        description: "Przekształć Slacka z prostego czatu w potężne narzędzie do zarządzania firmą. Monitoruj procesy, akceptuj oferty i deleguj zadania bez opuszczania aplikacji."
      },
      agitation: {
        title: "Problemy, które rozwiązujemy",
        painPoints: [
          { icon: Bell, title: "Przegapione okazje sprzedażowe", description: "Ważne powiadomienia o leadach giną w gąszczu maili lub na innych kanałach komunikacji." },
          { icon: MessageSquare, title: "Rozproszona komunikacja", description: "Przełączanie się między CRM, e-mailem a Slackiem zabija produktywność zespołu." },
          { icon: Workflow, title: "Brak reaktywności", description: "Twoje procesy wymagają manualnej obsługi, zamiast automatycznych akcji w odpowiedzi na zdarzenia." },
        ]
      },
      technical: {
        features: [
          { icon: Bell, title: "Interaktywne powiadomienia", description: "Otrzymuj informacje o nowych transakcjach z Pipedrive z przyciskami 'Akceptuj' lub 'Odrzuć' bezpośrednio na kanale Slack." },
          { icon: Zap, title: "Automatyczne raporty", description: "Codzienne podsumowania sprzedaży i marketingu generowane przez n8n i wysyłane automatycznie o 8:00 rano." },
          { icon: Workflow, title: "Szybkie delegowanie", description: "Jedna komenda na Slacku tworzy zadanie w ClickUp, przypisuje osobę i ustawia termin na podstawie kontekstu rozmowy." },
        ]
      },
      workflowDetail: {
        title: "Jak wygląda gotowa automatyzacja Slack w n8n?",
        subtitle: "Przekształcenie komunikatora w interaktywne centrum decyzyjne",
        steps: [
          { step: "01 / Detekcja zdarzenia krytycznego", text: "W systemie zewnętrznym (np. awaria płatności w Stripe lub opóźnienie zadania w ClickUp) występuje zdarzenie wymagające natychmiastowej interwencji managera." },
          { step: "02 / Budowa interfejsu (Slack Block Kit)", text: "n8n generuje zaawansowany obiekt JSON zgodny ze standardem Slack Block Kit. Tworzy bogatą wizualnie wiadomość zawierającą szczegóły błędu oraz interaktywne przyciski akcji." },
          { step: "03 / Publikacja i nasłuchiwanie na akcję", text: "Wiadomość trafia na dedykowany, zabezpieczony kanał firmowy. n8n przechodzi w stan nasłuchiwania na kliknięcie przycisku decyzyjnego (np. 'Przypisz do mnie' lub 'Ignoruj')." },
          { step: "04 / Wykonanie akcji zwrotnej w API", text: "Gdy deweloper lub manager klika przycisk, Slack wysyła Webhook zwrotny do n8n. System w ułamku sekundy aktualizuje status w CRM lub ClickUp i podmienia treść wiadomości na Slacku na zielony status 'Rozwiązane'." }
        ]
      },
      faq: {
        faqs: [
          { question: "Czy mogę wysyłać powiadomienia do konkretnych osób?", answer: "Tak. n8n może mapować ID użytkowników Slacka i wysyłać powiadomienia bezpośrednie (DM) lub na konkretne kanały." },
          { question: "Czy integracja wymaga specjalnych uprawnień?", answer: "Tak, Slack App wymaga uprawnień do publikowania wiadomości, co konfigurujemy bezpiecznie za pomocą tokenów OAuth." },
          { question: "Jak wygląda kwestia bezpieczeństwa?", answer: "Wykorzystujemy dedykowane Webhooki Slacka, które szyfrują komunikację między n8n a Twoim workspace'em." },
        ]
      }
    }
  },
  {
    metadata: {
      name: "Stripe",
      description: "Automatyzacja Stripe przez n8n. Połącz płatności online z arkuszami i systemem księgowym, eliminując błędy i ręczne wystawianie faktur.",
      href: "/narzedzia/automatyzacja-stripe"
    },
    content: {
      hero: { 
        title: "Stripe", 
        subtitle: "Automatyzacja Stripe: Od Transakcji do Księgowości",
        description: "Zautomatyzuj obieg dokumentów finansowych. Połącz Stripe z systemami ERP i księgowością, eliminując ręczne wystawianie faktur i błędy w rozliczeniach."
      },
      agitation: {
        title: "Wyzwania finansowe",
        painPoints: [
          { icon: FileText, title: "Ręczne fakturowanie", description: "Przepisywanie danych z płatności do faktur zajmuje godziny i generuje ryzyko błędów ludzkich." },
          { icon: BarChart, title: "Brak wglądu w ROI", description: "Analiza opłacalności kampanii marketingowych jest utrudniona bez automatycznego przepływu danych o płatnościach." },
          { icon: CreditCard, title: "Problemy z odzyskiwaniem płatności", description: "Obsługa odrzuconych kart płatniczych zajmuje czas, który mógłbyś poświęcić na sprzedaż." },
        ]
      },
      technical: {
        features: [
          { icon: FileText, title: "Automatyczne fakturowanie", description: "Każda płatność w Stripe wyzwala proces wystawienia faktury w systemie księgowym i wysyłkę do klienta." },
          { icon: BarChart, title: "Monitoring ROI", description: "Dane o płatnościach trafiają bezpośrednio do Google Sheets, gdzie budowane są dashboardy opłacalności kampanii." },
          { icon: Zap, title: "Obsługa błędów płatności (Dunning)", description: "Automatyczne scenariusze odzyskiwania leadów w przypadku odrzuconej karty, z personalizowaną komunikacją e-mail." },
        ]
      },
      workflowDetail: {
        title: "Jak wygląda gotowa automatyzacja Stripe w n8n?",
        subtitle: "Automatyczny i bezbłędny obieg dokumentów księgowych",
        steps: [
          { step: "01 / Autoryzowany Webhook Stripe", text: "W momencie udanego pobrania środków ze Stripe (np. status invoice.payment_succeeded), bramka płatnicza wysyła szyfrowany Webhook z podpisem cyfrowym do n8n." },
          { step: "02 / Parsowanie metadanych i danych klienta", text: "n8n wyciąga z Payloudu Stripe adres e-mail, dane do faktury oraz ukryte metadane (np. ID klienta w CRM). Następuje automatyczna konwersja waluty według oficjalnego kursu NBP." },
          { step: "03 / Generowanie faktury przez API księgowe", text: "System przesyła oczyszczony obiekt danych do systemu księgowego (np. Infakt, wFirma). API systemu natychmiast generuje oficjalną fakturę i zwraca plik PDF." },
          { step: "04 / Wysyłka i aktualizacja statusu", text: "n8n automatycznie pobiera PDF, wysyła go spersonalizowanym mailem bezpośrednio do klienta, a w systemie CRM oznacza transakcję jako zamkniętą i w 100% rozliczoną finansowo." }
        ]
      },
      faq: {
        faqs: [
          { question: "Czy mogę doliczać specyficzne rabaty?", answer: "Tak. W procesie n8n sprawdzamy historię klienta w CRM i automatycznie stosujemy odpowiednie rabaty przed wystawieniem faktury." },
          { question: "Jak wygląda kwestia bezpieczeństwa danych?", answer: "n8n operuje na tokenach API Stripe z ograniczonymi uprawnieniami (Read-only/Limited-write), zapewniając bezpieczeństwo Twoich danych finansowych." },
          { question: "Czy mogę zintegrować Stripe z dowolnym systemem ERP?", answer: "Tak, jeśli system ERP posiada API, n8n bez problemu połączy go ze Stripe w czasie rzeczywistym." },
        ]
      }
    }
  }
];
