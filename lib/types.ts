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

export interface KnowledgeCategory {
  slug: string;
  name: string;
  content_block_id: string;
  description: string;
  icon: string;
}

export interface KnowledgeHubData {
  page_id: string;
  url: string;
  hero_section: {
    h1: string;
    lead_paragraph: string;
    cta_label: string;
    cta_url: string;
  };
  intro_section: {
    content_block_id: string;
    h2: string;
    content: string;
  };
  categories_display: KnowledgeCategory[];
  faq_section: ToolFAQ[];
  seo_metadata: {
    focus_keyword: string;
    meta_title: string;
    meta_description: string;
  };
}

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

export interface ArticlePageData {
  article_id: string;
  article_url: string; // Dodane pole
  article_type: string;
  taxonomy: {
    category: string;
    tags: string[];
  };
  metadata: {
    author_name: string;
    author_role: string;
    publication_date: string;
    last_modified_date: string;
  };
  hero_section: {
    h1: string;
    lead_paragraph: string;
    reading_time_minutes: number;
  };
  table_of_contents: string[];
  content_blocks: {
    content_block_id: string;
    type: "text_with_image" | "text" | "code";
    h2: string;
    content: string;
    image_url?: string;
    image_alt?: string;
  }[];
  internal_linking: {
    related_articles?: { name: string; url: string }[];
    related_tools?: { name: string; url: string }[];
    related_offers: { name: string; url: string; cta_text: string }[];
  };
  faq_section: ToolFAQ[];
  seo_metadata: {
    focus_keyword: string;
    meta_title: string;
    meta_description: string;
  };
}
