import { LucideIcon } from "lucide-react";

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export type CommercialPageContent = ToolPageData;

export interface PageMetadata {
  title: string;
  subtitle: string;
  metaDescription: string;
  breadcrumbLabel: string;
  href: string;
}

// --- Nowa struktura narzędziowa ---

export interface ToolSection {
  title: string;
  description: string;
  items: string[];
}

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolFAQSection {
  title: string;
  description: string;
  faqs: ToolFAQ[];
}

export interface ToolPageData {
  page_id: string;
  tool_name: string;
  hero: {
    h1: string;
    cta_label: string;
    cta_url: string;
  };
  problem: ToolSection;
  solution: {
    title: string;
    description: string;
    steps: string[];
  };
  benefits: ToolSection;
  faq: ToolFAQSection;
  seo: {
    title: string;
    keyword: string;
    description: string;
  };
}

// --- Pozostałe struktury ---

export interface Tool {
  metadata: { name: string; description: string; href: string };
  content: ToolPageData;
}

export interface OfferPageData {
  metadata: PageMetadata;
  hero: { title: string; subtitle: string; description: string };
  agitation: { title: string; painPoints: { icon: LucideIcon; title: string; description: string }[] };
  scenarios: { title: string; scenarios: { title: string; description: string }[] };
  technical: { 
    features: { 
      icon: LucideIcon; 
      title: string; 
      description: string; 
      link?: { label: string; href: string } 
    }[] 
  };
  workflowTitle?: string;
  workflowSubtitle?: string;
  steps?: { step: string; title: string; description: string }[];
  toolLinks: { title: string; description: string; links: { label: string; href: string }[] };
  faq: { faqs: ToolFAQ[] };
}

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
