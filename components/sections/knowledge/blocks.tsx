import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

export function KnowledgeSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

export function KnowledgeIntro({ children }: { children: ReactNode }) {
  return <div className="prose prose-amber dark:prose-invert prose-lg max-w-none mb-12">{children}</div>
}

export function KnowledgeBenefitsList({ items }: { items: { icon: LucideIcon; title: string; description: string }[] }) {
  return (
    <div className="grid gap-6">
      {items.map((item, i) => (
        <div key={i} className="border border-border/60 bg-muted/20 p-6 flex gap-4 rounded-xl">
          <item.icon className="h-8 w-8 text-amber-600 dark:text-amber-400 shrink-0" />
          <div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-muted-foreground mt-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function KnowledgeManagerSummary({ title = 'Podsumowanie dla menedżera', children }: { title?: string, children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-amber-400/20 bg-amber-50/50 p-8 dark:bg-amber-950/20">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="text-foreground leading-relaxed">{children}</div>
    </section>
  )
}

