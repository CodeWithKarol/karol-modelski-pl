import { WHY_ME_CONFIG } from "@/lib/why-me"
import { ShieldCheck, Layers, BotMessageSquare } from "lucide-react"

export function WhyMeSection() {
  const icons = [ShieldCheck, Layers, BotMessageSquare]

  return (
    <section id="o-mnie" className="py-12 sm:py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 mb-4">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-500">
              {WHY_ME_CONFIG.hook}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl mx-auto">
            {WHY_ME_CONFIG.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="prose prose-muted leading-relaxed space-y-4 px-4 sm:px-0 text-left">
            {WHY_ME_CONFIG.story.split('\n\n').map((para, i) => (
              <p key={i} className="text-base sm:text-lg">{para}</p>
            ))}
          </div>
          
          <div className="grid gap-6 px-4 sm:px-0">
            {WHY_ME_CONFIG.pillars.map((pillar, i) => {
              const Icon = icons[i]
              return (
                <div key={i} className="flex flex-col sm:flex-row gap-4 p-6 rounded-xl border border-border bg-background shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col gap-3 items-center w-full max-w-sm mx-auto">
            <a
              href={WHY_ME_CONFIG.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-4 font-bold text-background transition-all hover:bg-foreground/90 w-full text-center text-sm sm:text-base"
            >
              {WHY_ME_CONFIG.cta.label}
            </a>
            <p className="text-[12px] text-muted-foreground text-center leading-snug w-full px-2">
              {WHY_ME_CONFIG.cta.subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
