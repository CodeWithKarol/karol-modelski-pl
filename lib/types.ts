import { LucideIcon } from "lucide-react";

export interface PageMetadata {
  title: string;
  subtitle: string;
  metaDescription: string;
  breadcrumbLabel: string;
  href: string;
}

// --- Komercyjny (Narzędzia) ---
export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: { label: string; href: string };
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolPageData {
  hero: { title: string; subtitle: string; description: string };
  agitationTitle: string;
  painPoints: PainPoint[];
  technical: {
    features: {
      icon: LucideIcon;
      title: string;
      description: string;
      link?: { label: string; href: string };
    }[];
  };
  workflowTitle: string;
  workflowSubtitle: string;
  steps: WorkflowStep[];
  faqs: ToolFAQ[];
}

export interface Tool {
  metadata: { name: string; description: string; href: string };
  content: ToolPageData;
}

export type CommercialPageContent = ToolPageData;

export interface OfferPageData {
  hero: { title: string; subtitle: string; description: string };
  agitation: { title: string; painPoints: PainPoint[] };
  scenarios: { title: string; scenarios: { title: string; description: string }[] };
  technical: { features: { icon: LucideIcon; title: string; description: string }[] };
  toolLinks: { title: string; description: string; links: { label: string; href: string }[] };
  faq: { faqs: ToolFAQ[] };
}

// --- Edukacyjny (Baza wiedzy) ---
export interface ArticleContentBlock {
  type: "paragraph" | "code" | "quote";
  title?: string;
  body: string;
  language?: string;
}

export interface KnowledgePageContent {
  metadata: PageMetadata;
  readingTime: string;
  managerSummary: string;
  contentBlocks: ArticleContentBlock[];
  relatedTools?: { label: string; href: string }[];
}
