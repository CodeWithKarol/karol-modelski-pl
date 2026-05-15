import { ToolPageTemplate } from "@/components/templates/tool-page-template"
import { Bell, MessageSquare, Workflow, Zap } from "lucide-react"

export default function SlackPage() {
  const data = {
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
    faq: {
      faqs: [
        { question: "Czy mogę wysyłać powiadomienia do konkretnych osób?", answer: "Tak. n8n może mapować ID użytkowników Slacka i wysyłać powiadomienia bezpośrednie (DM) lub na konkretne kanały." },
        { question: "Czy integracja wymaga specjalnych uprawnień?", answer: "Tak, Slack App wymaga uprawnień do publikowania wiadomości, co konfigurujemy bezpiecznie za pomocą tokenów OAuth." },
        { question: "Jak wygląda kwestia bezpieczeństwa?", answer: "Wykorzystujemy dedykowane Webhooki Slacka, które szyfrują komunikację między n8n a Twoim workspace'em." },
      ]
    }
  }
  return <ToolPageTemplate {...data} />
}
