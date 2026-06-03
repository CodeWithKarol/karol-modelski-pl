import { STACK_CONFIG } from "@/lib/stack-config"
import { Map, Cpu, BookOpen, User } from "lucide-react"

export function StackSection() {
  const icons = [Map, Cpu, BookOpen, User]

  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-500">
              {STACK_CONFIG.hook}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {STACK_CONFIG.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            {STACK_CONFIG.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl grid gap-6">
          {STACK_CONFIG.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="flex flex-col sm:flex-row gap-6 p-8 rounded-xl border border-border bg-muted/20">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <h3 className="font-bold text-xl text-foreground leading-tight">{item.title}</h3>
                    <span className="text-xs font-mono bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded text-amber-700 dark:text-amber-400 whitespace-nowrap self-start">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-foreground p-8 text-background text-center">
          <p className="mb-8 text-xl font-medium">
            Łączna wartość pakietu: <span className="font-bold">{STACK_CONFIG.totalValue}</span><br />
            Twoja inwestycja: <span className="font-bold underline">0 zł (oraz 15 minut Twojego czasu)</span>
          </p>
          
          <div className="flex flex-col gap-3 items-center w-full max-w-sm mx-auto px-4 sm:px-0">
            <a
              href={STACK_CONFIG.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-background px-6 py-4 font-bold text-foreground transition-all hover:bg-background/90 w-full text-center text-sm sm:text-base whitespace-normal"
            >
              {STACK_CONFIG.cta.label}
            </a>
            <p className="text-[12px] text-background/70 text-center leading-snug w-full">{STACK_CONFIG.cta.subtext}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
