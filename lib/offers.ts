import { Bot, Zap, BrainCircuit, ShieldAlert, FileText, Clock, Users, Database, GitBranch, Webhook, Mail, Target, BarChart, Banknote, Filter } from "lucide-react";
import { OfferPageData } from "@/lib/types";
import { TOOLS } from "./tools";

export const OFFERS: Record<string, OfferPageData> = {
  "/automatyzacja-sprzedazy": {
    metadata: {
      title: "Automatyzacja procesów sprzedaży i obsługi leadów",
      subtitle: "Automatyzacja Pipedrive & HubSpot CRM – zintegruj sprzedaż z resztą firmy przez n8n",
      metaDescription: "Zautomatyzuj proces sprzedaży w firmie. Połącz system CRM z formularzami WWW, kalendarzami i alertami na Slacku za pomocą stabilnych przepływów n8n.",
      breadcrumbLabel: "Automatyzacja Sprzedaży",
      href: "/oferta/automatyzacja-sprzedazy"
    },
    hero: { 
      title: "Automatyzacja Sprzedaży", 
      subtitle: "Automatyzacja Pipedrive & HubSpot CRM – zintegruj procesy przez n8n",
      description: "Przestań marnować czas handlowców na mechaniczną pracę administracyjną. Za pomocą n8n połączę Twój system CRM z formularzami www, kalendarzami i komunikatorami. Zamień ręczne przepisywanie danych na natychmiastową obsługę leadów w czasie rzeczywistym."
    },
    agitation: {
      title: "Czy to wyzwania Twojego działu sprzedaży?",
      painPoints: [
        { icon: Clock, title: "Zbyt wolny czas reakcji (Lead Response Time)", description: "Potencjalni klienci wysyłają zapytanie przez formularz, ale zanim handlowiec zauważy powiadomienie e-mail i ręcznie założy szansę sprzedaży w CRM, mijają kluczowe godziny. W tym czasie klient szuka dalej, a konkurencja przejmuje inicjatywę." },
        { icon: Users, title: "Chaos operacyjny i utrata kontaktu w lejku", description: "Handlowcy w natłoku codziennych obowiązków zapominają o logowaniu działań, wysyłaniu rutynowych follow-upów lub gubią notatki, przez co wartościowe zapytania bezpowrotnie przepadają na dnie lejka." },
        { icon: FileText, title: "Ręczna papierkologia po wygranej", description: "Gdy transakcja osiąga etap „Wygrana”, Twój zespół traci czas na przepisywanie danych klienta z CRM do systemów fakturowych, generowanie umów w PDF czy ręczne delegowanie zadań." },
      ]
    },
    scenarios: {
      title: "Produkcyjne Scenariusze Wdrożeń",
      scenarios: [
        { title: "Formularz WWW ➔ n8n ➔ CRM + Alert Slack", description: "W ułamku sekundy po wysłaniu formularza, n8n automatycznie tworzy nową Osobę, Firmę oraz Szansę Sprzedaży na pierwszym etapie lejka. System natychmiast wysyła sformatowany obiekt na Slacka/Teams z bezpośrednim linkiem, przydzielając handlowcowi zadanie typu 'Zadzwoń'." },
        { title: "Etap „Wygrana” ➔ n8n ➔ Automatyczna umowa i projekt", description: "Przeniesienie transakcji na etap końcowy automatycznie uruchamia proces operacyjny. n8n pobiera dane rejestrowe, generuje spersonalizowaną umowę PDF z szablonu, wysyła ją e-mailem do klienta, a w systemie ClickUp zakłada kompletną strukturę zadań wdrożeniowych." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Błyskawiczna synchronizacja (Webhooki v2)", description: "Zamiast obciążać system ciągłym odpytywaniem API (Polling), integracje opieram na natychmiastowych powiadomieniach Webhook. Każda zmiana statusu leada wyzwala akcję w ułamku sekundy." },
        { icon: Database, title: "Inteligentne zapobieganie duplikatom", description: "Przed utworzeniem jakiegokolwiek rekordu n8n przeszukuje bazę po unikalnych identyfikatorach (e-mail, telefon). Jeśli klient istnieje, dopisuje nową szansę do istniejącego profilu." },
        { icon: GitBranch, title: "Pełne mapowanie pól niestandardowych", description: "W pełni obsługuję customowe klucze API Twojego CRM, gwarantując płynny przepływ danych strukturyzowanych." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "W obszarze sprzedaży najczęściej wykorzystujemy synergię narzędzi:",
      links: TOOLS.map(t => ({ label: t.metadata.name, href: t.metadata.href }))
    },
    workflowTitle: "Jak wygląda gotowa automatyzacja Pipedrive w n8n?",
    workflowSubtitle: "Anatomia produkcyjnego, bezbłędnego przepływu danych krok po kroku",
    steps: [
      { step: "01", title: "Wyzwalacz (Webhook)", description: "Klient wypełnia formularz wyceny lub rezerwuje termin w kalendarzu. n8n w ułamku sekundy odbiera bezpieczny pakiet danych (Payload) i uruchamia proces." },
      { step: "02", title: "Walidacja i oczyszczanie", description: "Dedykowany kod JavaScript w n8n sprawdza poprawność e-maila, formatuje numer telefonu do standardu międzynarodowego i sprawdza bazę pod kątem duplikatów." },
      { step: "03", title: "Wzbogacanie danych (Data Enrichment)", description: "Na podstawie podanego numeru NIP, n8n automatycznie odpytuje rejestry publiczne (np. GUS), pobiera pełne dane firmy i uzupełnia profil klienta w CRM." },
      { step: "04", title: "Tworzenie Deal i alert zespołu", description: "System zakłada 'Deal' na pierwszym etapie lejka, przypisuje handlowca zgodnie z logiką rotacyjną (Round Robin) i wysyła sformatowany alert z linkiem na Slacka." }
    ],
    faq: {
      faqs: [
        { question: "Czy automatyzacja obsługuje wiele różnych lejków (Pipelines)?", answer: "Tak. W architekturze n8n możemy zaimplementować dowolną logikę warunkową. Na przykład leady z kampanii reklamowych mogą automatycznie trafiać do lejka 'Cold Outreach', podczas gdy zapytania ofertowe B2B z formularza zasilą lejek główny na dedykowanym etapie kwalifikacji." },
        { question: "Co jeśli API CRM będzie chwilowo niedostępne?", answer: "Stosuję mechanizmy Error Trigger oraz Retry On Fail. Jeśli system nie przyjmie danych, n8n wstrzyma proces, przechowa dane i ponowi próbę później." },
        { question: "Dlaczego n8n, a nie Zapier/Make?", answer: "Kluczowe są koszty oraz suwerenność danych. Zapier i Make pobierają opłaty za każdą pojedynczą operację, co przy dużej skali sprzedaży generuje setki dolarów kosztów miesięcznie. n8n w modelu Self-Hosted przetwarza nieograniczoną liczbę transakcji w stałej cenie serwera, gwarantując, że dane nie opuszczają Twojej infrastruktury." }
      ]
    }
  },
  "/automatyzacja-marketingu": {
    metadata: {
      title: "Automatyzacja marketingu i zaawansowana segmentacja danych",
      subtitle: "Zautomatyzuj lead nurturing i e-mail marketing za pomocą przepływów n8n",
      metaDescription: "Przestań zarządzać kampaniami ręcznie. Dzięki n8n połączę Twoje narzędzia marketingowe, CRM i systemy analityczne w jeden bezbłędny, spójny ekosystem.",
      breadcrumbLabel: "Automatyzacja Marketingu",
      href: "/oferta/automatyzacja-marketingu"
    },
    hero: { 
      title: "Automatyzacja Marketingu", 
      subtitle: "Zautomatyzuj lead nurturing i e-mail marketing za pomocą n8n",
      description: "Przestań zarządzać kampaniami ręcznie i przepłacać za drogie pakiety narzędzi SaaS. Dzięki n8n połączę Twoje narzędzia marketingowe, CRM i systemy analityczne w jeden spójny ekosystem. Zbuduj zaawansowane ścieżki automatyzacji, które pielęgnują Twoje leady w czasie rzeczywistym."
    },
    agitation: {
      title: "Czy to wyzwania Twojego działu marketingu?",
      painPoints: [
        { icon: Mail, title: "Nieskuteczny lub opóźniony lead nurturing", description: "Twoje leady nie otrzymują spersonalizowanych treści edukacyjnych w odpowiednim momencie. Brak automatycznych wysyłek sprawia, że potencjalni klienci tracą zainteresowanie ofertą przed kontaktem z handlowcem." },
        { icon: Target, title: "Silosy danych i rozproszenie", description: "Dane klientów są rozproszone pomiędzy różnymi narzędziami (CRM, Newsletter, WWW), co uniemożliwia pełny obraz klienta i precyzyjną segmentację." },
        { icon: BarChart, title: "Ręczna obsługa kampanii", description: "Przygotowanie list, eksportowanie plików CSV i ręczne przerzucanie kontaktów zajmuje zespołowi zbyt wiele czasu, zamiast skupiać się na strategii i kreatywności." },
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
        { icon: Bot, title: "Personalizacja oparta na AI", description: "Wykorzystuję AI do analizy zachowań użytkowników i automatycznego personalizowania treści e-maili." },
        { icon: Zap, title: "Synchronizacja w czasie rzeczywistym", description: "Natychmiastowe przenoszenie danych między platformami marketingowymi a CRM przy pomocy Webhooków." },
        { icon: Filter, title: "Zaawansowana segmentacja", description: "Dynamiczne tworzenie list odbiorców na podstawie zachowań wewnątrz n8n, bez konieczności ręcznego tagowania." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "W obszarze marketingu najczęściej wykorzystujemy synergię narzędzi:",
      links: TOOLS.map(t => ({ label: t.metadata.name, href: t.metadata.href }))
    },
    faq: {
      faqs: [
        { question: "Jak automatyzacja wpływa na jakość danych?", answer: "Automatyzacja eliminuje błędy ludzkie przy przenoszeniu danych, dba o ich czystość i unikalność w CRM." },
        { question: "Czy mogę integrować dowolne narzędzie marketingowe?", answer: "Tak, o ile posiada ono API lub Webhooki. n8n jest niezwykle elastyczny i pozwala łączyć niemal każdy nowoczesny system." },
        { question: "Co jeśli chcę zmienić strategię kampanii?", answer: "Automatyzacje w n8n są modularne. Zmiana strategii to zazwyczaj kwestia modyfikacji węzła logicznego, a nie przebudowy całego systemu." },
      ]
    }
  },
  "/automatyzacja-zarzadzania-projektami": {
    metadata: {
      title: "Automatyzacja zarządzania projektami i procesów operacyjnych",
      subtitle: "Uwolnij swój zespół od mechanicznego zakładania zadań, przeklejania briefów i ręcznego pilnowania terminów.",
      metaDescription: "Uwolnij swój zespół od mechanicznego zakładania zadań, przeklejania briefów i ręcznego pilnowania terminów. Zintegruj CRM z systemem operacyjnym w n8n.",
      breadcrumbLabel: "Zarządzanie Projektami",
      href: "/oferta/automatyzacja-zarzadzania-projektami"
    },
    hero: { 
      title: "Zarządzanie Projektami", 
      subtitle: "Automatyzacja zarządzania projektami – poukładaj operacje w firmie przez n8n",
      description: "Uwolnij swoich Project Managerów i zespół od mechanicznego zakładania zadań, przeklejania briefów i ręcznego pilnowania terminów. Za pomocą n8n połączę Twoje systemy operacyjne z działem sprzedaży."
    },
    agitation: {
      title: "Wyzwania w zarządzaniu projektami",
      painPoints: [
        { icon: Clock, title: "Przestoje na starcie", description: "Zespół produkcyjny dowiaduje się o nowym kliencie z opóźnieniem, czekając aż handlowiec ręcznie roześle maile." },
        { icon: Users, title: "Rozproszona wiedza", description: "Wytyczne, pliki i umowy zostają w skrzynce mailowej, zamiast trafiać bezpośrednio do zadań zespołu." },
        { icon: FileText, title: "Marnowanie czasu na statusowanie", description: "Menedżerowie tracą godziny na spotkania i dopytywanie pracowników o etap zadania, by zaktualizować klienta." },
      ]
    },
    scenarios: {
      title: "Produkcyjne Scenariusze Wdrożeń",
      scenarios: [
        { title: "Automatyczne uruchamianie projektów", description: "n8n tworzy przestrzeń projektową, kopiuje dane z CRM, generuje checklisty i ustawia terminy w ClickUp." },
        { title: "Inteligentny asystent powiadomień", description: "System agreguje najważniejsze zdarzenia (np. przekroczenie terminu) i wysyła sformatowane alerty na Slacka." },
        { title: "Raportowanie rentowności", description: "Automatyczne pobieranie czasu pracy z zadań i generowanie raportów rentowności w Google Sheets." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Dynamiczna struktura Hierarchy API", description: "Automatycznie tworzę całe struktury (Space -> Folder -> List) na podstawie szablonów dla każdego klienta." },
        { icon: Database, title: "Automatyzacja pól niestandardowych", description: "Mapuję dane z CRM prosto do pól typu Money, Dropdown czy Date, by budżet był widoczny od razu." },
        { icon: GitBranch, title: "Zaawansowane filtrowanie Webhooków", description: "Buduję filtry logiczne, które uruchamiają akcje tylko przy specyficznych zdarzeniach, oszczędzając zasoby." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "W obszarze zarządzania zadaniami najczęściej wykorzystujemy synergię narzędzi:",
      links: TOOLS.map(t => ({ label: t.metadata.name, href: t.metadata.href }))
    },
    faq: {
      faqs: [
        { question: "Czy automatyzacja nie zabierze nam kontroli?", answer: "n8n działa jako asystent – Ty decydujesz o punktach styku. Automatyzujemy tylko powtarzalne, techniczne czynności." },
        { question: "Jak szybko zobaczę efekty?", answer: "Dzięki n8n pierwsze efekty (Quick Wins) widzisz zazwyczaj w ciągu 7-10 dni od rozpoczęcia projektu." },
      ]
    }
  },
  "/automatyzacja-administracji-i-finansow": {
    metadata: {
      title: "Automatyzacja administracji, finansów i obiegu faktur",
      subtitle: "Wyeliminuj rutynę biurową i błędy w rozliczeniach dzięki n8n",
      metaDescription: "Zautomatyzuj obieg dokumentów finansowych. Połącz płatności Stripe z systemami fakturowania Infakt, wFirma lub Google Sheets przez n8n.",
      breadcrumbLabel: "Administracja i Finanse",
      href: "/oferta/automatyzacja-administracji-i-finansow"
    },
    hero: { 
      title: "Administracja i Finanse", 
      subtitle: "Automatyzacja administracji i finansów – eliminacja rutyny i bezbłędne rozliczenia",
      description: "Przestań marnować godziny na ręczne wystawianie faktur, generowanie umów w PDF i żmudne sprawdzanie płatności. Za pomocą n8n połączę Twoje bramki płatnicze, systemy księgowe i arkusze w jeden bezbłędny obieg dokumentów."
    },
    agitation: {
      title: "Wyzwania w administracji i finansach",
      painPoints: [
        { icon: FileText, title: "Ręczna papierkologia", description: "Kopiowanie danych rejestrowych z CRM do systemów księgowych generuje błędy i wydłuża procesy." },
        { icon: Banknote, title: "Brak kontroli nad płatnościami", description: "Ręczne weryfikowanie wyciągów bankowych i sprawdzanie, czy klient opłacił fakturę, tworzy wąskie gardła." },
        { icon: ShieldAlert, title: "Chaos w raportowaniu", description: "Dane finansowe rozproszone po wielu arkuszach utrudniają podejmowanie szybkich decyzji zarządczych." },
      ]
    },
    scenarios: {
      title: "Co realnie wdrażamy?",
      scenarios: [
        { title: "Generowanie dokumentów PDF", description: "n8n pobiera dane, uzupełnia szablony umów w PDF, wysyła je do klienta i archiwizuje." },
        { title: "Integracja płatności (np. Stripe)", description: "Każda płatność automatycznie wystawia fakturę w programie księgowym i oznacza transakcję w CRM." },
        { title: "Centralny Dashboard Finansowy", description: "Automatyczne zbieranie wydatków i przychodów w jednym, czytelnym arkuszu dla zarządu." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Bezpieczna autoryzacja", description: "Integrację n8n z Twoimi arkuszami i systemami konfiguruję przy użyciu protokołu OAuth2 lub dedykowanych kont usługowych." },
        { icon: Database, title: "Przetwarzanie wsadowe (Batching)", description: "W przypadku dużych zbiorów danych stosuję procesy wsadowe, które zapobiegają przeciążeniu pamięci i omijają limity API." },
        { icon: GitBranch, title: "Struktura odporna na zmiany", description: "W wdrożeniach n8n odwołuję się do nazw nagłówków kolumn lub kluczy obiektów, a nie do losowych indeksów arkusza." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "W obszarze administracji najczęściej wykorzystujemy synergię narzędzi:",
      links: [
        { label: "Stripe", href: "/narzedzia/automatyzacja-stripe" },
        { label: "Google Sheets", href: "/narzedzia/automatyzacja-google-sheets" },
        { label: "Slack", href: "/narzedzia/automatyzacja-slack" }
      ]
    },
    faq: {
      faqs: [
        { question: "Czy przetwarzanie danych finansowych jest bezpieczne?", answer: "Tak. n8n pozwala na pełną suwerenność danych (self-hosting), a połączenia API są szyfrowane i autoryzowane bezpiecznymi protokołami." },
        { question: "Jak automatyzacja radzi sobie ze stawkami VAT i walutami?", answer: "Implementuję zaawansowaną logikę, która automatycznie rozpoznaje kraj klienta, stawkę VAT lub przelicza kursy walut przed wystawieniem dokumentu." },
      ]
    }
  },
  "/automatyzacja-procesow-z-ai": {
    metadata: {
      title: "Integracja Google Gemini AI i automatyzacja procesów",
      subtitle: "Wdróż zaawansowane modele Google Gemini do codziennych zadań w n8n",
      metaDescription: "Projektujemy produkcyjne przepływy pracy w n8n, które trwale integrują zaawansowane modele językowe Google Gemini z Twoimi firmowymi systemami.",
      breadcrumbLabel: "Procesy z AI",
      href: "/oferta/automatyzacja-procesow-z-ai"
    },
    hero: { 
      title: "Procesy z AI", 
      subtitle: "Automatyzacja procesów z wykorzystaniem AI. Wdróż Google Gemini do codziennych zadań w n8n",
      description: "Przestań traktować sztuczną inteligencję jako zabawkę do losowego generowania tekstów. Projektujemy produkcyjne przepływy pracy w n8n, które trwale integrują zaawansowane modele językowe Google Gemini z Twoimi firmowymi systemami."
    },
    agitation: {
      title: "Wyzwania w pracy z AI",
      painPoints: [
        { icon: Bot, title: "Chaos w komunikacji", description: "Twój zespół tonie w powtarzalnych mailach, na które mógłby odpowiedzieć inteligentny asystent." },
        { icon: Zap, title: "Nieefektywne wykorzystanie danych", description: "Masz tysiące zapisanych rozmów z klientami, których nie potrafisz wykorzystać, by lepiej ich zrozumieć." },
        { icon: BrainCircuit, title: "Brak struktury w AI", description: "Obawiasz się, że AI będzie pisać chaotyczne odpowiedzi lub halucynować nieprawdziwe informacje." },
      ]
    },
    scenarios: {
      title: "Co realnie wdrażamy?",
      scenarios: [
        { title: "Inteligentna klasyfikacja maili", description: "n8n przesyła treść maila do Gemini, które analizuje intencję klienta i przygotowuje wersje robocze odpowiedzi w Twoim Gmailu." },
        { title: "Ekstrakcja danych ze skanów do JSON", description: "n8n przechwytuje pliki PDF lub skany umów, a Gemini przetwarza ich treść i mapuje dane bezpośrednio do Twojego CRM lub Google Sheets." },
      ]
    },
    technical: {
      features: [
        { icon: FileText, title: "Deterministyczne wyjście (JSON Schema)", description: "Wymuszamy na modelach LLM format JSON, co gwarantuje pełną stabilność i przewidywalność automatyzacji." },
        { icon: ShieldAlert, title: "Pełna ochrona prywatności (RODO)", description: "Integrujemy systemy przez produkcyjne API Google Gemini, dzięki czemu dane nie są wykorzystywane do trenowania modeli publicznych." },
        { icon: Bot, title: "Hybrydowa architektura z JS", description: "Łączymy wizualne bloczki n8n z dedykowanym kodem JS, co pozwala na budowanie zaawansowanych systemów obsługi błędów." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy",
      description: "W pracy z AI najczęściej wykorzystujemy synergię narzędzi:",
      links: TOOLS.map(t => ({ label: t.metadata.name, href: t.metadata.href }))
    },
    faq: {
      faqs: [
        { question: "Jakie są koszty utrzymania automatyzacji opartej o Google Gemini API?", answer: "W modelu self-hosted eliminujesz opłaty pośredników. Płacisz wyłącznie bezpośrednio do Google za faktyczne zużycie tokenów, co jest bardzo tanie przy małych procesach." },
        { question: "Czy AI nie zacznie wysyłać błędnych wiadomości?", answer: "Domyślnie pracujemy w trybie human-in-the-loop – AI przygotowuje wersję roboczą, którą Ty zatwierdzasz przed wysyłką." },
        { question: "Od czego najlepiej zacząć?", answer: "Od strategii małych kroków – np. automatyzacji CRM lub obiegu faktur, co daje najszybszy zwrot z inwestycji (ROI)." },
      ]
    }
  },
  "/automatyzacja-obslugi-klienta": {
    metadata: {
      title: "Obsługa Klienta",
      subtitle: "Automatyzacja obsługi klienta – skróć czas reakcji do minimum",
      metaDescription: "Zautomatyzuj obieg zgłoszeń (ticketów). Zapewnij priorytetyzację i natychmiastowe alerty dla zespołu.",
      breadcrumbLabel: "Obsługa Klienta",
      href: "/oferta/automatyzacja-obslugi-klienta"
    },
    hero: { 
      title: "Obsługa Klienta", 
      subtitle: "Automatyzacja obsługi klienta – skróć czas reakcji do minimum",
      description: "Przestań tonąć w zgłoszeniach. Zautomatyzuję obieg ticketów, zapewniając priorytetyzację i natychmiastowe alerty dla zespołu, aby każdy klient czuł się zaopiekowany w czasie rzeczywistym."
    },
    agitation: {
      title: "Problemy w obsłudze klienta",
      painPoints: [
        { icon: Clock, title: "Zgubione zgłoszenia", description: "Ważne zapytania giną w skrzynce info@, a zespół operacyjny dowiaduje się o nich zbyt późno." },
        { icon: Users, title: "Wąskie gardła w komunikacji", description: "Ręczne przekierowywanie zgłoszeń między działami trwa zbyt długo, co obniża CSAT." },
        { icon: FileText, title: "Brak wglądu w historię", description: "Zespół nie widzi kontekstu rozmów z CRM, co zmusza klientów do powtarzania swoich problemów." },
      ]
    },
    scenarios: {
      title: "Produkcyjne Scenariusze Wdrożeń",
      scenarios: [
        { title: "Automatyczny routing zgłoszeń", description: "n8n analizuje temat ticketa i automatycznie przydziela go do odpowiedniego specjalisty w ClickUp/Zendesk." },
        { title: "Alertowanie o priorytetach", description: "Krytyczne zgłoszenia (np. od kluczowych klientów) generują natychmiastowy alert na dedykowanym kanale Slack." },
        { title: "Inteligentne podsumowania", description: "Po zamknięciu zgłoszenia, AI generuje podsumowanie i wpisuje je do CRM jako notatkę dla handlowca." },
      ]
    },
    technical: {
      features: [
        { icon: Webhook, title: "Integracja z API Helpdesku", description: "Wykorzystuję natywne integracje API do zarządzania statusami ticketów w czasie rzeczywistym." },
        { icon: Database, title: "Mapowanie kontekstu klienta", description: "Przed przypisaniem ticketu, n8n pobiera dane klienta z CRM, by obsługa miała pełen obraz sytuacji." },
        { icon: GitBranch, title: "Warunkowe workflow", description: "Buduję skomplikowaną logikę rozgałęzień (np. inne ścieżki dla nowych klientów, inne dla VIP)." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy",
      description: "Synergia systemów wsparcia:",
      links: [
        { label: "ClickUp", href: "/narzedzia/automatyzacja-clickup" },
        { label: "Slack", href: "/narzedzia/automatyzacja-slack" },
        { label: "Google Sheets", href: "/narzedzia/automatyzacja-google-sheets" }
      ]
    },
    faq: {
      faqs: [
        { question: "Czy automatyzacja nie sprawi, że obsługa będzie brzmieć jak bot?", answer: "Automatyzujemy techniczne aspekty zgłoszeń (kolejkowanie, przypisywanie, pobieranie danych). Sama odpowiedź pozostaje domeną człowieka, wspieranego przez AI tylko w przygotowaniu draftów." },
        { question: "Jak szybko wdrożymy taki system?", answer: "Wdrożenie podstawowego routingu zgłoszeń to kwestia 1-2 tygodni pracy z n8n." },
      ]
    }
  }
};
