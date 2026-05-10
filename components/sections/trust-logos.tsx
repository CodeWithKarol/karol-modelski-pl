import { Quote } from "lucide-react"

export function TrustLogos() {
  const brands = ["Citi", "BNP Paribas", "Silent Eight"]
  
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Ekspertyza potwierdzona doświadczeniem</h2>
          <p className="text-muted-foreground text-sm">Pracowałem nad architekturą systemów i automatyzacją dla globalnych liderów:</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:opacity-100 transition-all duration-500">
          {brands.map((brand) => (
            <div key={brand} className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground/80 font-mono">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
