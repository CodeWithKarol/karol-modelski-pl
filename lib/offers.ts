import { Bot, Zap, BrainCircuit, ShieldAlert, FileText, Clock, Users, Database, GitBranch, Webhook, Mail, Target, BarChart, Banknote, Filter } from "lucide-react";
import { OfferPageData } from "./types";
import { TOOLS } from "./tools";

export const OFFERS: Record<string, OfferPageData> = {
  "/automatyzacja-sprzedazy": {
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
        { icon: Webhook, title: "Synchronizacja przez Webhooki v2", description: "Zamiast obciążać API ciągłym odpytywaniem, stosuję natychmiastowe Webhooki dla każdej zmiany w transakcji." },
        { icon: Database, title: "Inteligentna deduplikacja", description: "n8n weryfikuje unikalne identyfikatory, nie tworząc duplikatów i zachowując pełną historię kontaktu." },
        { icon: GitBranch, title: "Obsługa pól niestandardowych", description: "W pełni mapuję customowe klucze API Twojego CRM, gwarantując płynny przepływ danych strukturyzowanych." },
      ]
    },
    toolLinks: {
      title: "Narzędzia, które integrujemy w tym obszarze",
      description: "W obszarze sprzedaży najczęściej wykorzystujemy synergię narzędzi:",
      links: TOOLS.map(t => ({ label: t.metadata.name, href: t.metadata.href }))
    },
    faq: {
      faqs: [
        { question: "Czy automatyzacja przez n8n obsługuje wiele lejków (Pipelines)?", answer: "Tak. W architekturze n8n możemy dowolnie kierować ruchem w zależności od warunków logicznych, zasilając różne lejki w oparciu o źródło leadów." },
        { question: "Co jeśli API CRM będzie chwilowo niedostępne?", answer: "Stosuję mechanizmy Error Trigger oraz Retry On Fail. Jeśli system nie przyjmie danych, n8n wstrzyma proces, przechowa dane i ponowi próbę później." },
        { question: "Dlaczego n8n, a nie Zapier/Make?", answer: "Kluczowe są koszty i suwerenność danych. n8n w modelu Self-Hosted nie pobiera opłat za każdą operację, co przy dużej skali sprzedaży oszczędza setki dolarów miesięcznie." },
      ]
    }
  },
  "/automatyzacja-marketingu": {
    hero: { 
      title: "Automatyzacja Marketingu", 
      subtitle: "Zautomatyzuj lead nurturing i e-mail marketing za pomocą n8n",
      description: "Przestań zarządzać kampaniami ręcznie. Dzięki n8n połączę Twoje narzędzia marketingowe, CRM i systemy analityczne w jeden spójny ekosystem. Zbuduj zaawansowane ścieżki automatyzacji, które pielęgnują Twoje leady w czasie rzeczywistym."
    },
    agitation: {
      title: "Czy to wyzwania Twojego marketingu?",
      painPoints: [
        { icon: Mail, title: "Nieskuteczny lead nurturing", description: "Twoje leady nie otrzymują spersonalizowanych treści w odpowiednim momencie, przez co traci szanse na sprzedaż." },
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
    hero: { 
      title: "Zarządzanie Projektami", 
      subtitle: "Automatyzacja zarządzania projektami – poukładaj operacje w firmie przez n8n",
      description: "Uwolnij swoich Project Managerów i zespół od mechanicznego zakładania zadań, przeklejania briefów i ręcznego pilnowania terminów. Połączę Twoje systemy operacyjne z działem sprzedaży."
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
      description: "Najczęściej wykorzystujemy synergię narzędzi:",
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
    hero: { 
      title: "Administracja i Finanse", 
      subtitle: "Automatyzacja administracji i finansów – eliminacja rutyny i bezbłędne rozliczenia",
      description: "Przestań marnować godziny na ręczne wystawianie faktur, generowanie umów i sprawdzanie płatności. Połączę Twoje bramki płatnicze i systemy księgowe w jeden bezbłędny obieg dokumentów."
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
      description: "Najczęściej wykorzystujemy synergię narzędzi:",
      links: TOOLS.map(t => ({ label: t.metadata.name, href: t.metadata.href }))
    },
    faq: {
      faqs: [
        { question: "Czy przetwarzanie danych finansowych jest bezpieczne?", answer: "Tak. n8n pozwala na pełną suwerenność danych (self-hosting), a połączenia API są szyfrowane i autoryzowane bezpiecznymi protokołami." },
        { question: "Jak automatyzacja radzi sobie ze stawkami VAT i walutami?", answer: "Implementuję zaawansowaną logikę, która automatycznie rozpoznaje kraj klienta, stawkę VAT lub przelicza kursy walut przed wystawieniem dokumentu." },
      ]
    }
  },
  "/automatyzacja-procesow-z-ai": {
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
        { title: "Inteligentna klasyfikacja maili", description: "n8n przesyła treść maila do Gemini, które analizuje intencję klienta i przygotowuje wersję roboczą odpowiedzi w Twoim Gmailu." },
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
      links: TOOLS.map(t => ({ label: t.metadata.name, href: t.metadata.href }))
    },
    faq: {
      faqs: [
        { question: "Czy automatyzacja nie sprawi, że obsługa będzie brzmieć jak bot?", answer: "Automatyzujemy techniczne aspekty zgłoszeń (kolejkowanie, przypisywanie, pobieranie danych). Sama odpowiedź pozostaje domeną człowieka, wspieranego przez AI tylko w przygotowaniu draftów." },
        { question: "Jak szybko wdrożymy taki system?", answer: "Wdrożenie podstawowego routingu zgłoszeń to kwestia 1-2 tygodni pracy z n8n." },
      ]
    }
  }
};
