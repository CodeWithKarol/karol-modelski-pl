import { LucideIcon } from "lucide-react"
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs"

interface PageHeaderProps {
  title: string
  description: string
  breadcrumbs: BreadcrumbItem[]
  badge?: {
    text: string
    icon: LucideIcon
  }
}

export function PageHeader({ title, description, breadcrumbs, badge: Badge }: PageHeaderProps) {
  return (
    <div className="flex flex-col">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="bg-muted/30 py-16 sm:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {Badge && (
              <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
                <Badge.icon className="h-4 w-4" /> {Badge.text}
              </div>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground text-balance">
              {description}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
