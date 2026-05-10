import { Share2, RefreshCcw, Boxes, Link, Coins } from "lucide-react"
import { ServiceTemplate } from "@/components/templates/service-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Łączenie aplikacji i automatyzacja workflow | n8n & Make",
  description: "Zautomatyzuj obieg danych między Twoimi narzędziami. Integracje n8n i Make, które eliminują ręczne przepisywanie. Odzyskaj czas swojego zespołu.",
}

export default function LaczenieAplikacjiPage() {
  return (
    <ServiceTemplate
      title="Łączenie aplikacji i automatyzacja"
      description="Automatyzuję powtarzalne zadania i łączę Twoje ulubione narzędzia (n8n, Make), aby dane płynęły same – bez błędów i bez Twojego udziału."
      badge={{ text: "Automatyzacja n8n/Make", icon: Share2 }}
      breadcrumbs={[
        { name: "Oferta", href: "/uslugi" },
        { name: "Łączenie aplikacji" }
      ]}
      
      painPointsTitle="Koniec z ręcznym przepisywaniem"
      painPointsDescription="Przestań być „żywym mostem” między aplikacjami. Ręczne wprowadzanie danych to strata czasu i ryzyko błędu."
      painPointsList={[
        "Pracownicy tracą godziny na kopiowanie danych między arkuszami",
        "Informacje o klientach nie synchronizują się między CRM a księgowością",
        "Faktury i raporty są generowane ręcznie, co rodzi pomyłki",
        "Brak automatycznych powiadomień o ważnych zdarzeniach"
      ]}
      benefitCards={[
        { title: "Ciągła Synchronizacja", description: "Twoje dane są zawsze aktualne we wszystkich systemach jednocześnie.", icon: RefreshCcw },
        { title: "Potężne Integracje", description: "Łączę narzędzia no-code z własnym kodem, aby dowieźć rozwiązanie bez limitów.", icon: Boxes },
        { title: "Automatyczny Obieg", description: "Dany proces (np. sprzedaż) dzieje się sam od początku do końca.", icon: Link },
        { title: "Skalowanie bez kosztów", description: "Obsługuj więcej zleceń tym samym zespołem dzięki automatyzacji.", icon: Coins }
      ]}
      
      processTitle="Jak łączymy aplikacje?"
      processDescription="Buduję systemy, które są stabilne, posiadają obsługę błędów i powiadomienia o awariach zewnętrznych serwisów."
      processSteps={[
        { title: "Mapa Procesu", description: "Rysujemy schemat przepływu danych między Twoimi aplikacjami." },
        { title: "Budowa Scenariuszy", description: "Tworzymy automatyzacje w n8n lub Make, łącząc je z API Twoich systemów." },
        { title: "Testy i SLA", description: "Testujemy system na skrajnych przypadkach i wdrażamy monitoring działania." }
      ]}
      
      authorityQuote="W bankowości integracje muszą działać 24/7 bez najmniejszego błędu. To samo podejście stosuję przy łączeniu Twoich aplikacji firmowych."
      
      faqTitle="Pytania o Integracje"
      faqItems={[
        { question: "Jakie aplikacje można połączyć?", answer: "Praktycznie wszystkie z API: CRM, systemy księgowe, Slack, arkusze Google, bazy danych." },
        { question: "Co jeśli aplikacja nie ma integracji?", answer: "Jako programista piszę dedykowany skrypt, który tworzy brakujące połączenie." }
      ]}
    />
  )
}
