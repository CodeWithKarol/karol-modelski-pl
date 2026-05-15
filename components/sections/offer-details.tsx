import { CheckCircle2, AlertTriangle, Code2 } from "lucide-react"

export function EngineeringStandards() {
  const standards = [
    { icon: Code2, title: "Strukturyzowane Prompty", desc: "Wymuszamy na modelach LLM format JSON, co gwarantuje pełną stabilność systemów n8n." },
    { icon: AlertTriangle, title: "Zaawansowany Error Handling", desc: "Każdy proces posiada 'Error Trigger', buforowanie danych i pętle ponawiania prób (retry-loop)." },
    { icon: CheckCircle2, title: "Czysty kod JavaScript", desc: "Wykorzystujemy Code Node do skomplikowanej logiki, unikając długu technologicznego." },
  ]

  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Inżynieryjne Standardy Wdrożeń</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {standards.map((s) => (
            <div key={s.title} className="p-6 border-l-2 border-amber-500 bg-muted/20">
              <s.icon className="h-8 w-8 text-amber-600 mb-4" />
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ComparisonTable() {
  return (
    <section className="py-12 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">n8n Self-Hosted vs Tradycyjne Platformy</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-6">Cecha</th>
                <th className="py-4 px-6">Zapier / Make</th>
                <th className="py-4 px-6 text-amber-600">Nasz model (n8n)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-4 px-6 font-medium">Opłaty wolumenowe</td>
                <td className="py-4 px-6 text-muted-foreground">Rosną drastycznie z każdym leadem</td>
                <td className="py-4 px-6 font-bold">0 PLN opłat za zadania</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">Suwerenność danych</td>
                <td className="py-4 px-6 text-muted-foreground">Dane krążą po serwerach w USA</td>
                <td className="py-4 px-6 font-bold">100% Prywatności (Self-hosted)</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">Integracje AI</td>
                <td className="py-4 px-6 text-muted-foreground">Wysokie narzuty platformowe</td>
                <td className="py-4 px-6 font-bold">Czysty koszt API</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
