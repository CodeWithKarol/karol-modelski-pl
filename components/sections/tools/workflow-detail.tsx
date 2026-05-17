import { Card } from "@/components/ui/card";
import { WorkflowStep } from "@/lib/types";

export function WorkflowDetailSection({ title, subtitle, steps }: { title: string; subtitle: string; steps: WorkflowStep[] }) {
  return (
    <section className="py-12 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <Card key={index} className="p-6 border-border/60 bg-background transition-all hover:border-amber-400/40">
              <div className="text-amber-500 font-mono font-bold mb-4">{item.step}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
