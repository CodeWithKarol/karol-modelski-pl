import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/sections/contact-form"
import { CheckCircle2, Workflow } from "lucide-react"

interface ServiceLandingProps {
  title: string
  lead: string
  problemTitle: string
  problems: string[]
  workflowTitle: string
  workflows: { title: string; description: string }[]
}

export function ServiceLanding({
  title,
  lead,
  problemTitle,
  problems,
  workflowTitle,
  workflows,
}: ServiceLandingProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {lead}
          </p>
        </div>
        <Card className="border-border/60 bg-muted/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Bezpłatna wycena wdrożenia</h3>
            <ContactForm />
          </CardContent>
        </Card>
      </div>

      {/* Problems Section */}
      <section className="mt-24">
        <h2 className="text-2xl font-bold text-foreground">{problemTitle}</h2>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((problem, idx) => (
            <li key={idx} className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
              <span className="text-muted-foreground">{problem}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Workflows Section */}
      <section className="mt-24">
        <h2 className="text-2xl font-bold text-foreground">{workflowTitle}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflows.map((wf, idx) => (
            <Card key={idx} className="border-border/60">
              <CardContent className="p-6 flex flex-col gap-3">
                <Workflow className="h-6 w-6 text-indigo-500" />
                <h3 className="font-semibold text-foreground">{wf.title}</h3>
                <p className="text-sm text-muted-foreground">{wf.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
