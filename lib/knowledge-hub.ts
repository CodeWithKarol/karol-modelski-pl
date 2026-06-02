import { ToolFAQ } from "@/lib/types";

export interface KnowledgeCategory {
  slug: string;
  name: string;
  content_block_id: string;
  description: string;
  icon: string;
}

export interface KnowledgeHubData {
  page_id: string;
  url: string;
  hero_section: {
    h1: string;
    lead_paragraph: string;
    cta_label: string;
    cta_url: string;
  };
  intro_section: {
    content_block_id: string;
    h2: string;
    content: string;
  };
  categories_display: KnowledgeCategory[];
  faq_section: ToolFAQ[];
  seo_metadata: {
    focus_keyword: string;
    meta_title: string;
    meta_description: string;
  };
}

export const KNOWLEDGE_HUB_DATA: KnowledgeHubData = {
  page_id: "baza-wiedzy-main",
  url: "/baza-wiedzy",
  
  hero_section: {
    h1: "Baza Wiedzy: Automatyzacja Procesów Biznesowych od A do Z",
    lead_paragraph: "Zrozumienie technologii to pierwszy krok do optymalizacji biznesu. Przygotowaliśmy dla Ciebie kompletne, eksperckie poradniki, definicje oraz instrukcje krok po kroku, które pomogą Ci wyeliminować rutynę, wdrożyć n8n i skutecznie wyskalować operacje w Twojej firmie.",
    cta_label: "Edukacja to pierwszy krok. Diagnoza to pierwszy zysk.",
    cta_url: "https://calendly.com/kontakt-karol-modelski/new-meeting"
  },

  intro_section: {
    content_block_id: "hub-intro-dlaczego-warto-wiedziec",
    h2: "Jak korzystać z naszej Bazy Wiedzy?",
    content: "Rynek automatyzacji procesów (BPA, RPA) oraz rozwiązań opartych o sztuczną inteligencję (AI) rozwija się w błyskawicznym tempie. Dla właścicieli firm, dyrektorów operacyjnych i menedżerów barierą często nie jest brak budżetu, ale brak uporządkowanej wiedzy technicznej. Nasz hub został zaprojektowany jako samowystarczalne centrum edukacyjne. Znajdziesz tutaj zarówno biznesowe analizy rentowności (ROI) wdrożeń low-code, jak i głębokie, inżynieryjne przewodniki po protokołach API czy architekturze n8n self-hosted. Treści podzieliliśmy na logiczne sekcje, abyś mógł bez trudu przejść od teorii do realnych oszczędności."
  },

  categories_display: [
    {
      slug: "ksiegowosc-i-finanse",
      name: "Księgowość i Finanse",
      content_block_id: "hub-cat-ksiegowosc-finanse",
      description: "Automatyzacja procesów finansowych to fundament nowoczesnego back-office. W tej sekcji dowiesz się, jak wyeliminować manualne błędy, zintegrować systemy sprzedaży z programami fakturowymi (Fakturownia, wFirma, iFirma) za pomocą n8n oraz bezpiecznie przesyłać dane transakcyjne.",
      icon: "/assets/icons/finance.svg"
    },
    {
      slug: "narzedzia",
      name: "Narzędzia",
      content_block_id: "hub-cat-narzedzia-platformy",
      description: "Przeglądy i bezkompromisowe porównania technologii automatyzacyjnych. Analizujemy różnice między modelami SaaS (Zapier, Make) a systemami open-source/fair-code wariantu self-hosted. Pokażemy Ci, jak unikać pułapek kosztów liniowych w miarę skalowania firmy.",
      icon: "/assets/icons/tools.svg"
    },
    {
      slug: "pojecia-techniczne",
      name: "Pojęcia techniczne",
      content_block_id: "hub-cat-pojecia-techniczne",
      description: "Tłumaczymy skomplikowany żargon IT na prosty język biznesu. Zrozumienie, czym są webhooki, payloady, tokeny autoryzacyjne czy zapytania REST API pozwoli Ci podejmować świadome decyzje architektoniczne i skutecznie rozmawiać z dostawcami oprogramowania.",
      icon: "/assets/icons/tech.svg"
    },
    {
      slug: "strategia",
      name: "Strategia",
      content_block_id: "hub-cat-strategia-optymalizacja",
      description: "Poradniki menedżerskie skupione wokół mapowania procesów biznesowych (as-is / to-be), identyfikacji wąskich gardeł w zespołach oraz obliczania wskaźnika zwrotu z inwestycji (ROI) przed przystąpieniem do prac programistycznych.",
      icon: "/assets/icons/strategy.svg"
    },
    {
      slug: "baza-wiedzy",
      name: "Baza Wiedzy",
      content_block_id: "hub-cat-baza-wiedzy",
      description: "Podstawowe informacje o automatyzacji procesów biznesowych.",
      icon: "/assets/icons/strategy.svg"
    }
  ],

  faq_section: [
    {
      question: "Jak często aktualizowana jest baza wiedzy o automatyzacji?",
      answer: "Świat technologii low-code i API zmienia się dynamicznie, dlatego wszystkie nasze poradniki przechodzą regularny audyt techniczny. Aktualizujemy opisy węzłów n8n, zmiany w protokołach bezpieczeństwa oraz nowe wytyczne RODO, aby dostarczać wyłącznie sprawdzone, działające w praktyce rozwiązania."
    },
    {
      question: "Czy schematy n8n z artykułów mogę wdrożyć samodzielnie?",
      answer: "Schematy udostępniam w formie otwartej, aby każdy mógł zrozumieć logikę działania danego procesu. Jeśli masz doświadczenie z n8n, możesz je zaimportować i dostosować. Pamiętaj jednak, że standardy produkcyjne wymagają obsługi błędów (Error Handling) oraz bezpiecznego przechowywania poświadczeń, o czym piszę w artykułach."
    },
    {
      question: "Czy schematy n8n są bezpieczne w środowisku produkcyjnym?",
      answer: "Bezpieczeństwo to fundament, wyniesiony z pracy w sektorze bankowym. Każdy schemat, który wdrażam, przechodzi testy pod kątem Data Compliance oraz stabilności działania (Retry Loops). Ucząc się na moich przykładach, wdrażasz techniki minimalizujące ryzyko przestojów."
    },
    {
      question: "Czy baza wiedzy jest przeznaczona tylko dla programistów?",
      answer: "Absolutnie nie. Moim celem jest tłumaczenie złożonych procesów na język biznesowych korzyści. Jeśli jesteś właścicielem firmy lub managerem, artykuły pokażą Ci, jak automatyzacja rozwiązuje Twoje problemy. Jeśli potrzebujesz wdrożenia, zajmę się techniczną stroną projektu."
    },
    {
      question: "Czy mogę zamówić wdrożenie rozwiązania opisanego w artykule?",
      answer: "Tak. Wiele artykułów bazuje na wdrożeniach, które realizuję. Jeśli widzisz rozwiązanie idealnie pasujące do Twojej firmy, umów bezpłatną diagnozę – dostosuję schemat tak, aby przyniósł maksymalny ROI w Twoim środowisku."
    },
    {
      question: "Co jeśli wdrożę schemat i coś przestanie działać?",
      answer: "Systemy zewnętrzne (np. Pipedrive, HubSpot) czasem zmieniają swoje API. Jeśli utkniesz przy samodzielnym wdrożeniu, zapraszam na diagnozę techniczną – pomogę zidentyfikować 'wąskie gardło' i przywrócić stabilność."
    },
    {
      question: "Dlaczego dzielisz się tą wiedzą za darmo?",
      answer: "Wierzę, że przejrzyste automatyzacje budują długofalowe relacje. Dzieląc się rozwiązaniami, pokazuję mój inżynierski standard pracy. Wolę, żebyś poznał sposób, w jaki myślę o systemach, zanim zdecydujesz o współpracy przy profesjonalnym wdrożeniu."
    }
  ],

  seo_metadata: {
    focus_keyword: "baza wiedzy automatyzacja",
    meta_title: "Baza Wiedzy o Automatyzacji Biznesu | n8n & API",
    meta_description: "Ekspercki hub wiedzy o automatyzacji procesów. Dowiedz się, jak krok po kroku wdrożyć n8n, zintegrować systemy przez API i zoptymalizować koszty w firmie."
  }
};
