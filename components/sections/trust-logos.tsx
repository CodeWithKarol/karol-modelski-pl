import { ShieldCheck, BrainCircuit, LayoutDashboard } from "lucide-react"

export function TrustLogos() {
  const experiences = [
    {
      title: "Citi & BNP Paribas",
      description: "Gwarancja bezpieczeństwa danych i stabilności systemu, który nigdy się nie zawiesza.",
      icon: ShieldCheck
    },
    {
      title: "Silent Eight",
      description: "Unikalne know-how z zakresu zaawansowanej AI, które wykorzystuję przy integracji modeli Gemini.",
      icon: BrainCircuit
    },
    {
      title: "Amway",
      description: "Łączenie gigantycznych baz danych w jeden prosty i intuicyjny widok (React/Angular).",
      icon: LayoutDashboard
    }
  ]
  
  return (
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Doświadczenie z systemami dla milionów użytkowników – teraz w Twojej firmie
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Zamiast eksperymentów i niedopracowanego kodu, otrzymujesz architekturę IT przetestowaną w najtrudniejszych warunkach bojowych. Swoje doświadczenie budowałem, tworząc systemy dla globalnych liderów:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="flex flex-col gap-4 p-6 rounded-2xl bg-background/50 border border-border/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <exp.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

