import { 
  Rocket, 
  Brain, 
  Wrench, 
  Handshake,
  Quote
} from "lucide-react"

const trustPoints = [
  {
    title: "Szybkość gotowych narzędzi, potęga programowania",
    description: "W moich projektach wykorzystuję najnowocześniejsze narzędzia do automatyzacji, aby dowieźć Ci rozwiązanie w tygodnie, a nie miesiące. Jeśli jednak napotkamy na ograniczenie techniczne, którego nie da się „wyklikać” – po prostu siadam i dopisuję brakującą funkcjonalność w nowoczesnych technologiach. Dla Ciebie oznacza to system bez limitów.",
    icon: Rocket
  },
  {
    title: "Automatyzacja AI pod Twoją kontrolą",
    description: "Wielu mówi o sztucznej inteligencji, ja wdrażam ją w Twoje realne procesy. Moja automatyzacja AI to nie tylko chaty – to inteligentne moduły, które integruję bezpośrednio z Twoim nowym panelem zarządzania. Dzięki temu masz pewność, że dane są bezpieczne i służą konkretnym celom biznesowym.",
    icon: Brain
  },
  {
    title: "Rozwiązania „szyte na miarę”, a nie „z pudełka”",
    description: "Nie naginam Twojej firmy do możliwości oprogramowania. Projektując Twoją automatyzację biznesu, skupiam się na Twoich unikalnych potrzebach. Jeśli potrzebujesz specyficznego panelu zarządczego, którego nie ma żaden gotowy system na świecie – ja go dla Ciebie stworzę.",
    icon: Wrench
  },
  {
    title: "Bezpośrednia współpraca z architektem",
    description: "Pracując ze mną, nie rozmawiasz z handlowcem ani Project Managerem. Rozmawiasz bezpośrednio z osobą, która projektuje Twoją automatyzację procesów biznesowych i pisze każdą linię kodu. To gwarancja, że nic nie zginie „w tłumaczeniu”, a system będzie działał dokładnie tak, jak ustaliliśmy.",
    icon: Handshake
  }
]

export function Trust() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Twoje korzyści</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pomagam Ci tam, gdzie standardowe rozwiązania zawodzą.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Większość firm oferuje gotowe wtyczki, które wymuszają na Tobie zmianę sposobu pracy. Ja działam inaczej – buduję systemy, które dopasowują się do Twojego biznesu, usuwając techniczne przeszkody z Twojej drogi do wzrostu.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-6 sm:p-8 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-24 flex flex-col items-center justify-center text-center">
          <div className="relative max-w-3xl px-6 sm:px-0">
            <Quote className="absolute -top-6 -left-1 md:left-0 sm:-top-8 sm:-left-8 h-8 w-8 sm:h-16 sm:w-16 text-primary/10" />
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground italic">Moja filozofia:</h3>
              <p className="mt-4 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Nie ograniczam Cię do tego, co potrafi gotowy program. Jeśli czegoś nie ma na rynku – zakoduję to specjalnie dla Ciebie. Twoja <span className="text-foreground font-semibold underline decoration-primary/30">automatyzacja procesów</span> ma wspierać Twój wzrost, a nie wyznaczać jego granice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
