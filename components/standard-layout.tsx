import { ReactNode } from "react"
import { PageHeader } from "@/components/ui/page-header"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { LucideIcon } from "lucide-react"

interface Breadcrumb {
  name: string
  href?: string
}

interface StandardLayoutProps {
  children: ReactNode
  title: string
  description: string
  breadcrumbs: Breadcrumb[]
  badge?: {
    text: string
    icon: LucideIcon
  }
}

export function StandardLayout({
  children,
  title,
  description,
  breadcrumbs,
  badge,
}: StandardLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col">
      <PageHeader 
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        badge={badge}
      />
      
      {/* Dynamic Content */}
      <div className="flex-grow">
        {children}
      </div>

      <Contact />
      <Footer />
    </main>
  )
}
