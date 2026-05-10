import { LayoutDashboard, Monitor, Database, Rocket, Lock } from "lucide-react"
import { ServiceTemplate } from "@/components/templates/service-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Systemy na Wymiar | Dedykowane Oprogramowanie dla Firm",
  description: "Buduję dedykowane panele sterowania i systemy zarządzania w React/Angular. Bez abonamentów, pełna własność i standard bankowy bezpieczeństwa.",
}

export default function SystemyNaWymiarPage() {
  return (
    <ServiceTemplate
      title="Systemy na wymiar"
      description="Tworzę intuicyjne systemy w Angularze i React, które zbierają wszystkie Twoje dane w jeden widok. Bez abonamentów, na Twoją wyłączną własność."
      badge={{ text: "Dedykowane Oprogramowanie", icon: LayoutDashboard }}
      breadcrumbs={[
        { name: "Oferta", href: "/uslugi" },
        { name: "Systemy na wymiar" }
      ]}
      
      painPointsTitle="Koniec z ograniczeniami SaaS"
      painPointsDescription="Większość firm korzysta z 10 różnych narzędzi, które ze sobą nie rozmawiają. Ja buduję jedno, które nimi wszystkimi zarządza."
      painPointsList={[
        "Płacisz wysokie abonamenty za funkcje, których nie używasz",
        "Dane są rozproszone w arkuszach i kilku różnych aplikacjach",
        "Gotowy system nie pozwala na dodanie unikalnej funkcji Twojej firmy",
        "Interfejs obecnych narzędzi jest zbyt skomplikowany dla zespołu"
      ]}
      benefitCards={[
        { title: "Interfejs klasy Premium", description: "Przejrzysty i szybki panel, który pokocha Twój zespół.", icon: Monitor },
        { title: "Wszystkie dane w 1 miejscu", description: "Jedno źródło prawdy dla Twojej firmy w jednej karcie przeglądarki.", icon: Database },
        { title: "Twoje Cyfrowe Aktywo", description: "Nie wynajmujesz softu – jesteś jego właścicielem na zawsze.", icon: Lock },
        { title: "Skalowalność bez limitów", description: "Dodajemy funkcje dokładnie wtedy, gdy ich potrzebujesz.", icon: Rocket }
      ]}
      
      processTitle="Droga do własnego systemu"
      processDescription="Projektuję architekturę, która jest nie tylko funkcjonalna, ale przede wszystkim bezpieczna i szybka."
      processSteps={[
        { title: "Projekt UX/UI", description: "Projektujemy widoki systemu tak, aby praca w nim była czystą przyjemnością." },
        { title: "Kodowanie (TS)", description: "Używamy TypeScript, aby system był bezawaryjny i łatwy w rozwoju." },
        { title: "Wdrożenie", description: "Uruchamiamy system na Twoich serwerach. Otrzymujesz kod na własność." }
      ]}
      
      authorityQuote="Moje doświadczenie w tworzeniu dashboardów dla Citi i BNP Paribas pozwala mi dostarczać interfejsy, które łączą prostotę z ogromną mocą obliczeniową pod maską."
      
      faqTitle="Pytania o Oprogramowanie"
      faqItems={[
        { question: "W jakiej technologii budowane są panele?", answer: "Angular lub React na froncie, nowoczesny backend w Node.js. Całość w TypeScript." },
        { question: "Dlaczego własny panel jest lepszy niż SaaS?", answer: "Bo dopasowuje się do Ciebie, a nie Ty do niego. I nie generuje kosztów abonamentowych." }
      ]}
    />
  )
}
