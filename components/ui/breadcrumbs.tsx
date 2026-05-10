import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("bg-background border-b border-border h-11 flex items-center", className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <ol className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="hover:text-primary inline-flex items-center gap-1.5 transition-colors"
            >
              <Home className="h-3.5 w-3.5 shrink-0" />
              <span>Start</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-40" />
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-foreground font-semibold">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
