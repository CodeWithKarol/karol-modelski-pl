import { Button } from "@/components/ui/button"
import { Zap, MessageSquare, Database, Cog, Layers } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-32 pb-24 lg:pt-48 lg:pb-32 lg:px-8">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col text-left lg:col-span-7 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance leading-[1.1]">
              Automatyzacja procesów biznesowych, która uwalnia Twój czas i porządkuje chaos.
            </h1>
            <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-xl">
              Przejmij pełną kontrolę nad operacjami w swojej firmie. Tworzę intuicyjne widoki w Angularze i React, które zbierają wszystkie Twoje dane w jeden czytelny widok. Bez abonamentów, na Twoją wyłączną własność.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/20" asChild>
                <a href="#kontakt">
                  Zarezerwuj bezpłatną konsultację
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-bold border-2" asChild>
                <a href="#problemy">
                  Zobacz, jak działam
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative hidden lg:block lg:col-span-5 xl:col-span-6">
            <AutomationVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

function AutomationVisual() {
  return (
    <div className="relative w-full h-[400px] xl:h-[450px] bg-muted/20 rounded-[2.5rem] border border-border/50 p-4 sm:p-8 overflow-hidden flex items-center justify-center">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
      
      <div className="relative flex items-center gap-4 xl:gap-8 scale-90 xl:scale-100">
        {/* App 1 */}
        <div className="flex h-16 w-16 xl:h-20 xl:w-20 items-center justify-center rounded-2xl bg-background border border-border/50 shadow-xl z-10 animate-pulse">
          <MessageSquare className="h-8 w-8 xl:h-10 xl:w-10 text-blue-500" />
        </div>
        
        {/* Connecting line */}
        <div className="w-12 xl:w-16 h-1 bg-gradient-to-r from-blue-500/20 via-primary/50 to-primary relative rounded-full">
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
        </div>
        
        {/* Main Automation Hub */}
        <div className="flex h-24 w-24 xl:h-28 xl:w-28 items-center justify-center rounded-[2rem] bg-primary shadow-2xl shadow-primary/30 z-10 border-4 border-background">
          <Zap className="h-12 w-12 xl:h-14 xl:w-14 text-primary-foreground animate-bounce" />
        </div>
        
        {/* Connecting line */}
        <div className="w-12 xl:w-16 h-1 bg-gradient-to-r from-primary via-green-500/50 to-green-500/20 relative rounded-full">
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
        </div>
        
        {/* App 2 */}
        <div className="flex h-16 w-16 xl:h-20 xl:w-20 items-center justify-center rounded-2xl bg-background border border-border/50 shadow-xl z-10 animate-pulse delay-700">
          <Database className="h-8 w-8 xl:h-10 xl:w-10 text-green-500" />
        </div>
      </div>

      {/* Floating secondary elements */}
      <div className="absolute top-12 right-12 xl:top-16 xl:right-24 flex h-14 w-14 xl:h-16 xl:w-16 items-center justify-center rounded-2xl bg-background border border-border/50 shadow-lg animate-bounce [animation-duration:4s]">
        <Cog className="h-6 w-6 xl:h-8 xl:w-8 text-muted-foreground/60" />
      </div>
      <div className="absolute bottom-12 left-12 xl:bottom-16 xl:left-24 flex h-14 w-14 xl:h-16 xl:w-16 items-center justify-center rounded-2xl bg-background border border-border/50 shadow-lg animate-bounce [animation-duration:5s] delay-300">
        <Layers className="h-6 w-6 xl:h-8 xl:w-8 text-muted-foreground/60" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
    </div>
  )
}
