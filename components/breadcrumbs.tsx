import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full text-left">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground justify-start">
        <li>
          <Link href="/" className="hover:text-amber-600 transition-colors">Strona Główna</Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link 
              href={item.href} 
              className={index === items.length - 1 ? "font-medium text-foreground" : "hover:text-amber-600 transition-colors"}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
