import { Clock, Users, FileText, Webhook, Database, GitBranch, ShieldCheck, Zap, Bot, FileSpreadsheet, AlertTriangle, Mail, Target, BarChart, Bell, MessageSquare, Workflow, CreditCard } from "lucide-react";
import { CommercialPageContent } from "./types";

export const TOOLS: { metadata: { name: string; description: string; href: string }; content: CommercialPageContent }[] = [
  {
    metadata: {
      name: "Pipedrive",
      description: "Zautomatyzuj proces sprzedaży w Pipedrive. Przesyłaj leady z formularzy i kalendarzy bezpośrednio do CRM, eliminując błędy i pracę ręczną.",
      href: "/narzedzia/automatyzacja-pipedrive"
    },
    content: {
      hero: { 
        title: "Pipedrive CRM", 
        subtitle: "Automatyzacja Pipedrive CRM – zintegruj sprzedaż z resztą firmy przez n8n",
        description: "Przestań marnować czas handlowców na mechaniczną pracę administracyjną. Za pomocą n8n połączę Twój system Pipedrive z formularzami www, komunikatorami i systemami operacyjnymi. Zamień ręczne przepisywanie danych na natychmiastową obsługę leadów w czasie rzeczywistym."
      },
      agitationTitle: "Dlaczego potrzebujesz automatyzacji w Pipedrive?",
      painPoints: [
        { icon: Clock, title: "Zbyt wolny czas reakcji (Lead Response)", description: "Zanim handlowiec zauważy powiadomienie mailowe i ręcznie założy szansę sprzedaży w Pipedrive, mijają kluczowe godziny. W tym czasie klient szuka dalej, a konkurencja może już z nim rozmawiać." },
        { icon: Users, title: "Chaos operacyjny i zimne szanse", description: "Handlowcy w natłoku obowiązków zapominają o logowaniu działań, wysyłaniu rutynowych follow-upów lub gubią notatki, przez co cenne zapytania bezpowrotnie przepadają na dnie lejka." },
        { icon: FileText, title: "Ręczna papierkologia po wygranej", description: "Gdy transakcja osiąga etap „Wygrana”, Twój zespół traci czas na przepisywanie danych klienta z CRM do systemów fakturowych, generowanie umów w PDF czy ręczne zakładanie projektów w operacjach." },
      ],
      technical: {
        features: [
          { icon: Webhook, title: "Błyskawiczna synchronizacja (Webhooki v2)", description: "Zamiast obciążać system ciągłym odpytywaniem API, integracje opieram na natychmiastowych powiadomieniach Webhook. Każda zmiana statusu wyzwala akcję w ułamku sekundy.", link: { label: "(Dowiedz się więcej o Webhookach)", href: "/baza-wiedzy/co-to-jest-webhook" } },
          { icon: Database, title: "Inteligentne zapobieganie duplikatom", description: "Przed utworzeniem rekordu n8n przeszukuje bazę po unikalnych identyfikatorach (e-mail, telefon). Jeśli klient istnieje, dopisuje nową szansę do istniejącego profilu." },
          { icon: GitBranch, title: "Pełne mapowanie pól niestandardowych", description: "W pełni obsługuję customowe klucze API Pipedrive, co pozwala na bezbłędne przesyłanie specyficznych danych biznesowych z dowolnego formularza na stronie.", link: { label: "(Jak działa API?)", href: "/baza-wiedzy/api-w-biznesie" } },
        ]
      },
      workflowTitle: "Jak wygląda gotowa automatyzacja Pipedrive w n8n?",
      workflowSubtitle: "Anatomia produkcyjnego, bezbłędnego przepływu danych krok po kroku",
      steps: [
        { step: "01", title: "Wyzwalacz (Webhook)", description: "Klient wypełnia formularz wyceny lub rezerwuje termin w kalendarzu. n8n w ułamku sekundy odbiera bezpieczny pakiet danych (Payload) i uruchamia proces." },
        { step: "02", title: "Walidacja i oczyszczanie", description: "Dedykowany kod JavaScript w n8n sprawdza poprawność e-maila, formatuje numer telefonu do standardu międzynarodowego i sprawdza bazę pod kątem duplikatów." },
        { step: "03", title: "Wzbogacanie danych (Data Enrichment)", description: "Na podstawie podanego numeru NIP, n8n automatycznie odpytuje rejestry publiczne (np. GUS), pobiera pełne dane firmy i uzupełnia profil klienta w CRM." },
        { step: "04", title: "Tworzenie Deal i alert zespołu", description: "System zakłada 'Deal' na pierwszym etapie lejka, przypisuje handlowca zgodnie z logiką rotacyjną (Round Robin) i wysyła sformatowany alert z linkiem na Slacka." }
      ],
      faqs: [
        { question: "Czy automatyzacja obsługuje wiele różnych lejków (Pipelines)?", answer: "Tak. W architekturze n8n możemy zaimplementować dowolną logikę warunkową. Na przykład leady z kampanii reklamowych mogą automatycznie trafiać do lejka 'Cold Outreach', podczas gdy zapytania ofertowe B2B z formularza zasilą lejek główny na dedykowanym etapie kwalifikacji." },
        { question: "Co się stanie, jeśli API Pipedrive będzie chwilowo niedostępne?", answer: "W każdym workflow wdrażam zaawansowane mechanizmy obsługi błędów (Error Trigger) oraz automatyczne pętle ponawiania prób (Retry Loops). Jeśli Pipedrive zanotuje przerwę techniczną, n8n bezpiecznie przetrzyma dane leada w buforze i ponowi próbę za kilka minut, informując o tym na Slacku." },
        { question: "Dlaczego warto połączyć CRM przez n8n, a nie Zapier czy Make?", answer: "Kluczowe są koszty oraz suwerenność danych. Zapier i Make pobierają opłaty za każdą pojedynczą operację, co przy skróconym czasie reakcji generuje setki dolarów kosztów miesięcznie. n8n w modelu Self-Hosted przetwarza nieograniczoną liczbę transakcji w stałej cenie serwera, gwarantując, że dane nie opuszczają Twojej infrastruktury." }
      ]
    }
  },
  {
    metadata: {
      name: "ClickUp",
      description: "Automatyzacja ClickUp przez n8n. Projektuj bezobsługowy obieg zadań, automatyczne klonowanie projektów z szablonów i dynamiczny podział obowiązków.",
      href: "/narzedzia/automatyzacja-clickup"
    },
    content: {
      hero: { 
        title: "ClickUp", 
        subtitle: "Inteligentne zarządzanie projektami w ClickUp dzięki n8n",
        description: "Nie pozwól, by Twój zespół marnował czas na ręczne tworzenie zadań, przeklejanie briefów i pilnowanie terminów. Połączę Twój ClickUp z resztą firmy, zapewniając bezobsługowe uruchamianie projektów w ułamku sekundy po wygranej sprzedaży."
      },
      agitationTitle: "Dlaczego potrzebujesz automatyzacji w ClickUp?",
      painPoints: [
        { icon: Clock, title: "Opóźnienia na starcie projektów", description: "Zespół produkcyjny dowiaduje się o nowym kliencie z dużym opóźnieniem, czekając aż handlowiec ręcznie rośle maile, przekaże ustalenia i założy przestrzeń projektową." },
        { icon: Users, title: "Gąszcz powiadomień i chaos", description: "Pracownicy toną w setkach powiadomień mailowych z systemu, przez co kluczowe terminy (Due Dates) umykają, a statusy zadań nie odzwierciedlają rzeczywistego stanu prac." },
        { icon: FileText, title: "Powtarzalne tworzenie struktur", description: "Każdy nowy klient wymaga ręcznego wyklikania tych samych List, Folderów i zadań. To mechaniczna praca, która zabiera cenne godziny Project Managerom." },
      ],
      technical: {
        features: [
          { icon: Webhook, title: "Struktura Hierarchy API", description: "Wykorzystuję zaawansowane funkcje API ClickUp do automatycznego klonowania całych struktur (Space -> Folder -> List) na podstawie wzorcowych szablonów." },
          { icon: Database, title: "Synchronizacja pól niestandardowych", description: "Automatycznie przenoszę kluczowe dane z CRM (np. budżet, specyfikacja, link do umowy) prosto do pól typu Custom Fields w zadaniach wykonawców." },
          { icon: GitBranch, title: "Filtrowanie i agregacja zdarzeń", description: "Buduję filtry logiczne w n8n, które eliminują szum informacyjny. System reaguje tylko na kluczowe kamienie milowe projektu, oszczędzając zasoby serwera." },
        ]
      },
      workflowTitle: "Jak wygląda gotowa automatyzacja ClickUp w n8n?",
      workflowSubtitle: "Automatyczne i bezbłędne uruchamianie procesów operacyjnych",
      steps: [
        { step: "01", title: "Wykrycie zamknięcia sprzedaży", description: "W momencie, gdy handlowiec zmienia status transakcji na 'Wygrana' w CRM, n8n natychmiast przechwytuje ten sygnał i pobiera kompletną specyfikację zamówionych usług." },
        { step: "02", title: "Klonowanie projektu z szablonu", description: "Poprzez ClickUp Hierarchy API, n8n odnajduje odpowiedni szablon operacyjny w ClickUp i automatycznie tworzy nową Listę zadań nazwaną imieniem i nazwiskiem lub firmą klienta." },
        { step: "03", title: "Dynamiczne ustawianie terminów", description: "Algorytm oblicza terminy cząstkowe (Due Dates) dla poszczególnych zadań na podstawie daty startu projektu i automatycznie przypisuje do nich odpowiednich specjalistów." },
        { step: "04", title: "Dystrybucja briefu i powitanie", description: "n8n generuje bezpośredni link do nowej przestrzeni w ClickUp, wysyła uporządkowany brief na kanał zespołu na Slacku oraz przesyła automatyczną wiadomość powitalną do klienta." }
      ],
      faqs: [
        { question: "Czy n8n może automatycznie przesuwać zadania między listami?", answer: "Tak. Możemy zaprogramować przepływ n8n tak, aby zmiana statusu zadania (np. z 'In Review' na 'Approved') automatycznie przenosiła je do innego folderu, zmieniała jego priorytet, przypisywała nową osobę (np. klienta do akceptacji) lub dodawała odpowiednie tagi." },
        { question: "Jak n8n radzi sobie z przypisywaniem pracowników do zadań?", answer: "Wykorzystujemy mapowanie ID użytkowników w ClickUp. Przydział może odbywać się na podstawie danych z CRM (kto sprzedał, ten realizuje), na podstawie typu zakupionej usługi lub za pomocą algorytmu rotacyjnego (Round Robin)." },
        { question: "Czy można połączyć ClickUp z ewidencją czasu pracy?", answer: "Jak najbardziej. n8n potrafi w tle monitorować czas zalogowany przez Twoich pracowników w zadaniach ClickUp, agregować te dane i automatycznie eksportować je do Google Sheets w celu weryfikacji rentowności projektów." }
      ]
    }
  },
  {
    metadata: {
      name: "Google Sheets",
      description: "Automatyzacja Google Sheets przez n8n. Przekształć arkusze w bezbłędne bazy danych, agreguj raporty i łącz tabele z zewnętrznymi systemami.",
      href: "/narzedzia/automatyzacja-google-sheets"
    },
    content: {
      hero: { 
        title: "Google Sheets", 
        subtitle: "Automatyzacja i integracja Google Sheets w firmach usługowych",
        description: "Przekształć swoje zwykłe arkusze w inteligentne i bezpieczne centrum dowodzenia firmą. Za pomocą n8n połączę Twoje tabele z dowolnym systemem CRM, bramką płatniczą czy komunikatorem, eliminując ręczne przepisywanie danych raz na zawsze."
      },
      agitationTitle: "Dlaczego potrzebujesz automatyzacji w arkuszach?",
      painPoints: [
        { icon: FileSpreadsheet, title: "Ręczne i żmudne kopiowanie wierszy", description: "Twoi pracownicy spędzają cenne godziny na mechanicznym przepisywaniu danych z maili, formularzy kontaktowych czy systemów reklamowych bezpośrednio do tabel Google Sheets lub Excela." },
        { icon: AlertTriangle, title: "Błędy ludzkie i uszkodzone raporty", description: "Przez ludzkie pomyłki, przypadkowe usunięcia komórek, literówki czy błędne formatowanie danych, Twoje kluczowe statystyki sprzedaży, marże i koszty po prostu się nie zgadzają." },
        { icon: Database, title: "Chaos i silosy informacyjne", description: "Każdy dział w Twojej firmie prowadzi swój osobny, odizolowany arkusz. Brak centralnego punktu prawdy sprawia, że zarząd nie widzi aktualnego stanu finansów i operacji w czasie rzeczywistym." },
      ],
      technical: {
        features: [
          { icon: ShieldCheck, title: "Autoryzacja przez Service Accounts", description: "Integrację n8n z Twoimi arkuszami konfiguruję przy użyciu bezpiecznych kont usługowych Google Cloud lub protokołu OAuth2. Twoje poufne dane firmowe są w 100% bezpieczne.", link: { label: "(Więcej o bezpieczeństwie API)", href: "/baza-wiedzy/api-w-biznesie" } },
          { icon: Zap, title: "Nasłuchiwanie zdarzeń w czasie rzeczywistym", description: "Wykorzystuję natywne powiadomienia i harmonogramy czasowe (Cron), które uruchamiają procesy automatycznie, natychmiast po dodaniu nowego wiersza lub o określonej godzinie." },
          { icon: Bot, title: "Walidacja i formatowanie danych", description: "Zanim dane trafią do komórek arkusza, n8n uruchamia moduł weryfikacji – oczyszcza tekst, standaryzuje formaty dat i odrzuca duplikaty." },
        ]
      },
      workflowTitle: "Jak wygląda gotowa automatyzacja Google Sheets w n8n?",
      workflowSubtitle: "Bezpieczna agregacja danych i automatyczne raportowanie w tle",
      steps: [
        { step: "01", title: "Przechwycenie transakcji (bramka płatnicza)", description: "Gdy klient opłaca fakturę lub subskrypcję w systemie Stripe, bramka natychmiast wysyła cyfrowo podpisany komunikat Webhook bezpośrednio do Twojej instancji n8n." },
        { step: "02", title: "Parsowanie i transformacja danych", description: "Za pomocą węzła Code Node w n8n, surowy obiekt danych JSON jest oczyszczany. System automatycznie oblicza kwoty netto/brutto oraz konwertuje waluty według oficjalnego kursu NBP." },
        { step: "03", title: "Bezpieczny zapis przez API Google", description: "n8n łączy się z wybranym arkuszem. Zamiast nadpisywać losowe komórki, system lokalizuje pierwszy wolny wiersz i wykonuje precyzyjną, atomową operację Append Row." },
        { step: "04", title: "Kontrola anomalii i powiadomienie", description: "Jeśli kwota transakcji nie zgadza się z cennikiem, n8n automatycznie oznacza wiersz kolorem ostrzegawczym i wysyła alert do działu księgowości." }
      ],
      faqs: [
        { question: "Czy n8n poradzi sobie z arkuszami, które mają tysiące wierszy?", answer: "Tak. W przeciwieństwie do prostych skryptów, w n8n projektuję procesy z wykorzystaniem przetwarzania wsadowego (batching). Dane są dzielone na mniejsze, kontrolowane paczki, co zapobiega przeciążeniu pamięci serwera i pozwala bez problemu omijać limity narzucane przez Google API." },
        { question: "Co się stanie, jeśli pracownik przypadkowo zmieni kolejność kolumn w arkuszu?", answer: "W moich wdrożeniach n8n odwołuje się bezpośrednio do nazw nagłówków kolumn lub specyficznych kluczy obiektów, a nie do sztywnych indeksów (np. kolumna A, B, C). Dzięki temu drobne zmiany wizualne w tabeli nie przerywają działania automatyzacji." },
        { question: "Czy zamiast Google Sheets mogę w ten sam sposób zautomatyzować Microsoft Excel?", answer: "Jak najbardziej. Logika biznesowa i standard obsługi błędów pozostają identyczne. Różnica polega na warstwie technologicznej – n8n łączy się wtedy z ekosystemem Microsoft 365 poprzez oficjalne API usług OneDrive lub SharePoint." }
      ]
    }
  },
  {
    metadata: {
      name: "HubSpot",
      description: "Automatyzacja HubSpot w n8n. Wdrażam stabilne przepływy, które synchronizują marketing ze sprzedażą i wzbogacają profile klientów przez AI.",
      href: "/narzedzia/automatyzacja-hubspot"
    },
    content: {
      hero: { 
        title: "HubSpot", 
        subtitle: "Integracja HubSpot + n8n: Skalowalny Marketing i Sprzedaż",
        description: "Przestań przepłacać za wysokie pakiety operacji w Zapierze czy Make. Buduj zaawansowane przepływy danych marketingowych i sprzedażowych z wykorzystaniem sztucznej inteligencji w n8n, zachowując 100% kontroli nad własnymi budżetami."
      },
      agitationTitle: "Problemy, które rozwiązujemy w HubSpot",
      painPoints: [
        { icon: Mail, title: "Wykładnicze koszty skalowania", description: "Twoje opłaty w chmurowych integratorach rosną drastycznie wraz z każdym nowym leadem z kampanii? Model n8n całkowicie odcina Cię od opłat wolumenowych." },
        { icon: Target, title: "Niska jakość i luki w danych", description: "Leady trafiają do Twojego CRM niekompletne, zmuszając handlowców do ręcznego szukania informacji o wielkości firmy czy branży w wyszukiwarkach przed wykonaniem telefonu." },
        { icon: BarChart, title: "Brak priorytetyzacji w bazie", description: "Handlowcy tracą cenny czas na 'zimne' lub przypadkowe kontakty, ponieważ system nie potrafi automatycznie ocenić intencji i wartości zapytania." },
      ],
      technical: {
        features: [
          { icon: Database, title: "Automatyczny Data Enrichment", description: "Wykorzystuję zewnętrzne API do automatycznego uzupełniania profili firm w HubSpot o dane rejestrowe, wielkość zatrudnienia i branżę bez udziału człowieka." },
          { icon: Zap, title: "Dwuetapowa synchronizacja", description: "Zapewniam perfekcyjną spójność danych. HubSpot zawsze odzwierciedla realny stan faktyczny z arkuszy kalkulacyjnych oraz systemów finansowo-księgowych." },
          { icon: ShieldCheck, title: "AI Content Repurposing", description: "Integruję HubSpot z modelami LLM w n8n, co pozwala na automatyczne generowanie spersonalizowanych notatek i maili follow-up po spotkaniach handlowych." },
        ]
      },
      workflowTitle: "Jak wygląda gotowa automatyzacja HubSpot w n8n?",
      workflowSubtitle: "Inteligentne zarządzanie i scoring leadów przy użyciu AI",
      steps: [
        { step: "01", title: "Przechwycenie kontaktu w CRM", description: "Nowy kontakt wpada do bazy HubSpot z kampanii reklamowej lub formularza. n8n natychmiast rejestruje zdarzenie i pobiera surowe dane wprowadzone przez użytkownika." },
        { step: "02", title: "Analiza intencji przez Google Gemini", description: "n8n przesyła treść zapytania do API Google Gemini. Model AI analizuje tekst pod kątem potencjału budżetowego, określa pilność i zwraca ustrukturyzowany wynik JSON." },
        { step: "03", title: "Aktualizacja scoringu w HubSpot", description: "Na podstawie odpowiedzi z AI, n8n automatycznie aktualizuje dedykowane pola niestandardowe w HubSpot (np. Lead Score), kategoryzując kontakt." },
        { step: "04", title: "Uruchomienie sekwencji priorytetowej", description: "Jeśli lead zyskał wysoki priorytet, n8n wymusza natychmiastowe powiadomienie SMS dla handlowca i przenosi klienta do priorytetowej ścieżki newsletterowej." }
      ],
      faqs: [
        { question: "Jak HubSpot technicznie łączy się z platformą n8n?", answer: "Wykorzystujemy oficjalny, natywny węzeł HubSpot w n8n, który komunikuje się z serwerami przez bezpieczny protokół REST API. Pozwala to na pełne operacje CRUD (tworzenie, odczyt, aktualizacja, usuwanie) na wszystkich kluczowych obiektach systemowych, takich jak Kontakty, Firmy, Szanse Sprzedaży (Deals) oraz Zadania." },
        { question: "Czy automatyzacja n8n obsługuje specyficzne pola niestandardowe w HubSpot?", answer: "Jak najbardziej. Podczas mapowania danych n8n zaczytuje kompletną strukturę Twojej bazy HubSpot, w tym wszystkie unikalne wewnętrzne nazwy pól (Internal Names). Pozwala to na pełną personalizację procesów biznesowych i przesyłanie dowolnych danych niestandardowych." },
        { question: "Jak wygląda kwestia bezpieczeństwa danych przy integracji HubSpot?", answer: "Połączenie n8n z HubSpot jest w pełni autoryzowane poprzez oficjalny protokół OAuth2 lub dedykowane klucze Private App Access Tokens. Wszystkie dane są przesyłane przez szyfrowany kanał HTTPS, a dzięki architekturze Self-Hosted n8n, wrażliwe dane marketingowe Twojej firmy nie trafiają do żadnych niezweryfikowanych podmiotów chmurowych." }
      ]
    }
  },
  {
    metadata: {
      name: "Slack",
      description: "Automatyzacja Slack przez n8n. Przekształć komunikator w interaktywne centrum operacyjne – zatwierdzaj oferty i twórz zadania bezpośrednio z poziomu czatu.",
      href: "/narzedzia/automatyzacja-slack"
    },
    content: {
      hero: { 
        title: "Slack", 
        subtitle: "Automatyzacja Slack: Twoje Centrum Operacyjne w Czasie Rzeczywistym",
        description: "Przekształć Slacka z prostego komunikatora w potężne, interaktywne narzędzie do zarządzania całą firmą. Monitoruj procesy, akceptuj oferty i deleguj zadania do ClickUp bez opuszczania aplikacji."
      },
      agitationTitle: "Problemy, które rozwiązujemy w komunikacji",
      painPoints: [
        { icon: Bell, title: "Przegapione okazje i alerty", description: "Ważne powiadomienia o nowych, dużych leadach lub awariach systemowych giną w setkach maili lub na przeładowanych kanałach, przez co zespół reaguje za późno." },
        { icon: MessageSquare, title: "Marnowanie czasu na przełączanie kart", description: "Pracownicy bez przerwy przełączają się między CRM-em, e-mailem, systemem projektowym a czatem, co drastycznie obniża ich produktywność i skupienie." },
        { icon: Workflow, title: "Brak reaktywności w komunikacji", description: "Większość powiadomień na czacie ma charakter czysto informacyjny. Aby podjąć działanie, pracownik i tak musi wejść do innego programu i ręcznie wyklikać zmianę statusu." },
      ],
      technical: {
        features: [
          { icon: Bell, title: "Interaktywne bloki decyzyjne", description: "Projektuję bogate powiadomienia z wykorzystaniem Slack Block Kit – dodaję przyciski akcji (np. 'Zatwierdź fakturę', 'Przypisz do mnie') działające bezpośrednio w oparciu o API." },
          { icon: Zap, title: "Automatyczne raporty poranne", description: "n8n codziennie o stałej porze agreguje dane z CRM oraz arkuszy i wysyła na kanał zarządu przejrzyste, sformatowane podsumowanie kluczowych wskaźników KPI." },
          { icon: Workflow, title: "Skróty i komendy botów (Slash Commands)", description: "Wdrażam niestandardowe komendy. Wpisanie prostej frazy na Slacku automatycznie uruchamia workflow n8n, który np. generuje raport lub zakłada klienta." },
        ]
      },
      workflowTitle: "Jak wygląda gotowa automatyzacja Slack w n8n?",
      workflowSubtitle: "Przekształcenie czatu w interaktywne centrum decyzyjne firmy",
      steps: [
        { step: "01", title: "Detekcja zdarzenia krytycznego", description: "W systemie zewnętrznym (np. błąd płatności w Stripe lub opóźnienie zadania w ClickUp) występuje zdarzenie wymagające natychmiastowej interwencji managera." },
        { step: "02", title: "Budowa interfejsu (Slack Block Kit)", description: "n8n generuje zaawansowany obiekt JSON zgodny ze standardami wizualnymi Slacka, tworząc czytelny alert z kompletem danych i przyciskami operacyjnymi." },
        { step: "03", title: "Publikacja i stan nasłuchiwania", description: "Wiadomość trafia na zabezpieczony kanał operacyjny. n8n przechodzi w stan zawieszenia i nasłuchuje na Webhook zwrotny, czekając na fizyczne kliknięcie przycisku przez użytkownika." },
        { step: "04", title: "Wykonanie akcji w API systemów", description: "Gdy manager klika 'Zatwierdź', Slack wysyła sygnał do n8n. System w 1 sekundę aktualizuje status w CRM lub ClickUp, podmieniając treść wiadomości na zielony status 'Rozwiązane'." }
      ],
      faqs: [
        { question: "Czy mogę wysyłać powiadomienia automatyczne do konkretnych osób (DM)?", answer: "Tak. n8n potrafi dynamicznie mapować wewnętrzne identyfikatory użytkowników (Slack User ID) na podstawie ich adresów e-mail z systemów CRM lub HR. Dzięki temu system może wysyłać spersonalizowane, prywatne wiadomości bezpośrednie dokładnie do osoby odpowiedzialnej za dany proces." },
        { question: "Czy integracja wymaga tworzenia własnej aplikacji w panelu Slacka?", answer: "Tak, dla zapewnienia pełnego bezpieczeństwa i stabilności tworzymy dedykowaną, prywatną aplikację (Slack App) wewnątrz Twojego workspace'u. Pozwala to na precyzyjne ograniczenie uprawnień (Scopes) wyłącznie do funkcji, które są niezbędne do realizacji Twoich automatyzacji." },
        { question: "Jak zabezpieczone są interaktywne przyciski przed nieautoryzowanym kliknięciem?", answer: "Każda interakcja ze Slack Block Kit przesyła w pakiecie danych unikalny token oraz ID użytkownika, który kliknął przycisk. W n8n implementujemy węzły weryfikujące (Conditional Nodes), które sprawdzają, czy dana osoba znajduje się na liście uprawnionych managerów. Jeśli przycisk kliknie osoba nieupoważniona, system zignoruje akcję i wyświetli komunikat o braku dostępu." }
      ]
    }
  },
  {
    metadata: {
      name: "Stripe",
      description: "Automatyzacja Stripe przez n8n. Połącz płatności online z arkuszami i systemem księgowym, automatyzując wystawianie faktur i kontrolę ROI.",
      href: "/narzedzia/automatyzacja-stripe"
    },
    content: {
      hero: { 
        title: "Stripe", 
        subtitle: "Automatyzacja Stripe: Od Transakcji do Bezbłędnej Księgowości",
        description: "Zautomatyzuj obieg dokumentów finansowych i połącz płatności online z rdzeniem operacyjnym swojej firmy. Za pomocą n8n połączę Stripe z systemami księgowymi i arkuszami, całkowicie eliminując ręczną papierkologię."
      },
      agitationTitle: "Wyzwania finansowe i administracyjne w obsłudze płatności",
      painPoints: [
        { icon: FileText, title: "Żmudne, ręczne fakturowanie", description: "Ręczne przepisywanie danych z każdej udanej płatności Stripe do programów takich jak iFirma czy Infakt zajmuje godziny, frustruje zespół i generuje ryzyko błędów podatkowych." },
        { icon: BarChart, title: "Brak realnego wglądu w analitykę ROI", description: "Dane o przychodach są odcięte od systemów marketingowych i CRM. Szef firmy nie widzi w jednym miejscu, które kampanie generują realny, opłacony zysk w czasie rzeczywistym." },
        { icon: CreditCard, title: "Utrata przychodów przez błędy kart (Churn)", description: "Obsługa odrzuconych płatności subskrypcyjnych bywa zaniedbywana. Brak natychmiastowej, automatycznej reakcji sprawia, że klienci odchodzą, a firma traci stabilne przychody." },
      ],
      technical: {
        features: [
          { icon: FileText, title: "Bezbłędne, automatyczne faktury", description: "Każda udana transakcja automatycznie wyzwala proces w n8n – system pobiera dane, generuje oficjalną fakturę PDF w programie księgowym i wysyła ją e-mailem." },
          { icon: BarChart, title: "Pętle analityczne w arkuszach", description: "Przesyłam pełne pakiety danych o płatnościach bezpośrednio do centralnych baz danych, tworząc dla zarządu aktualizowane automatycznie dashboardy finansowe." },
          { icon: Zap, title: "Inteligentne systemy Dunningu", description: "Projektuję automatyczne scenariusze odzyskiwania płatności. W przypadku błędu karty n8n natychmiast wysyła spersonalizowany monit z bezpiecznym linkiem do aktualizacji danych." },
        ]
      },
      workflowTitle: "Jak wygląda gotowa automatyzacja Stripe w n8n?",
      workflowSubtitle: "Automatyczny i bezpieczny obieg dokumentów finansowo-księgowych",
      steps: [
        { step: "01", title: "Szyfrowany Webhook ze Stripe", description: "W momencie udanego pobrania środków ze Stripe (np. status invoice.payment_succeeded), bramka płatnicza wysyła zabezpieczony podpisem cyfrowym komunikat bezpośrednio do n8n." },
        { step: "02", title: "Ekstrakcja danych i walidacja", description: "n8n wyciąga z danych Stripe adres e-mail, dane do faktury oraz ukryte metadane (np. ID klienta w CRM). Następuje automatyczna konwersja waluty." },
        { step: "03", title: "Generowanie dokumentu w API", description: "System przesyła oczyszczone dane do API Twojego programu księgowego (np. Infakt, wFirma), który wystawia fakturę i zwraca plik PDF." },
        { step: "04", title: "Wysyłka i zamknięcie transakcji", description: "n8n automatycznie pobiera PDF, wysyła go elegancką wiadomością e-mail do klienta, a w systemie CRM oznacza transakcję jako w 100% rozliczoną." }
      ],
      faqs: [
        { question: "Czy mogę doliczać specyficzne rabaty?", answer: "Tak. W procesie n8n sprawdzamy historię klienta w CRM i automatycznie stosujemy odpowiednie rabaty przed wystawieniem faktury." },
        { question: "Jak wygląda kwestia bezpieczeństwa danych przy kluczach API?", answer: "n8n operuje na tokenach API Stripe z ograniczonymi uprawnieniami (Read-only/Limited-write), zapewniając bezpieczeństwo Twoich danych finansowych." },
        { question: "Czy mogę zintegrować Stripe z dowolnym systemem ERP?", answer: "Tak, jeśli system ERP posiada API, n8n bez problemu połączy go ze Stripe w czasie rzeczywistym." }
      ]
    }
  }
];
