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
  page_id: string;
  offer_url: string;
  offer_name: string;
  hero_section: {
    h1: string;
    subtitle: string;
    cta_label: string;
    cta_url: string;
    cta_microcopy: string;
  };
  business_pains: {
    section_title: string;
    section_description: string;
    pains_list: string[];
  };
  modules_section: {
    section_title: string;
    section_description: string;
    modules: {
      module_title: string;
      problem: string;
      solution: string;
      outcome: string;
    }[];
  };
  tech_ecosystem: {
    section_title: string;
    section_description: string;
    supported_tools: string[];
  };
  faq_section: ToolFAQ[];
  seo_metadata: {
    focus_keyword: string;
    meta_title: string;
    meta_description: string;
  };
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
