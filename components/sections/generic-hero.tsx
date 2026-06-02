import { WorkflowDiagram } from "@/components/workflow-diagram"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"

interface GenericHeroProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaHref?: string
  isExternal?: boolean
  breadcrumbItems?: { label: string; href: string }[]
}

export function GenericHero({ 
  title, 
  subtitle, 
  description, 
  ctaText = "Bezpłatna Konsultacja", 
  ctaHref = "https://calendly.com/kontakt-karol-modelski/new-meeting",
  isExternal = true,
  breadcrumbItems
}: GenericHeroProps) {
  const CTAComponent = isExternal ? "a" : Link
  const ctaProps = isExternal 
    ? { href: ctaHref, target: "_blank", rel: "noopener noreferrer" } 
    : { href: ctaHref }

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-64 -top-32 h-[600px] w-[600px] rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-48 h-[500px] w-[500px] rounded-full bg-indigo-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {breadcrumbItems && (
          <div className="mb-8 hidden w-full justify-center sm:flex">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        )}
        <div className="grid items-center gap-12 lg:grid-cols-1 lg:gap-16">
          <div className="flex flex-col gap-8 text-center items-center">
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl max-w-3xl">
              {subtitle}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAComponent
                {...ctaProps}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all hover:bg-foreground/85"
              >
                {ctaText}
              </CTAComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
