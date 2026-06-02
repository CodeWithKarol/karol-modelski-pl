import Link from "next/link"

interface GenericCtaProps {
  headline: string
  description: string
  ctaText: string
  ctaHref: string
  isExternal?: boolean
}

export function GenericCta({ 
  headline, 
  description, 
  ctaText, 
  ctaHref,
  isExternal = true
}: GenericCtaProps) {
  const CTAComponent = isExternal ? "a" : Link
  const ctaProps = isExternal 
    ? { href: ctaHref, target: "_blank", rel: "noopener noreferrer" } 
    : { href: ctaHref }

  return (
    <section className="mb-24 text-center bg-background p-12 rounded-2xl border border-amber-400/20 shadow-xl shadow-amber-500/5">
      <h2 className="text-2xl font-bold text-foreground mb-4">{headline}</h2>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{description}</p>
      <CTAComponent
        {...ctaProps}
        className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-foreground/85 hover:shadow-lg"
      >
        {ctaText}
      </CTAComponent>
    </section>
  )
}
