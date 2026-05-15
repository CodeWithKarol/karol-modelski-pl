import { LucideIcon } from "lucide-react";

export interface ToolHero {
  title: string;
  subtitle: string;
  description: string;
}

// Reusable for Offers as well
export interface OfferHero {
  title: string;
  subtitle: string;
  description: string;
}

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AgitationData {
  title: string;
  painPoints: PainPoint[];
}

export interface TechnicalFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: { label: string; href: string };
}

export interface TechnicalData {
  features: TechnicalFeature[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  faqs: FaqItem[];
}

export interface Scenario {
  title: string;
  description: string;
}

export interface ScenariosData {
  title: string;
  scenarios: Scenario[];
}

export interface OfferToolLinksData {
  title: string;
  description: string;
  links: { label: string; href: string }[];
}

export interface Tool {
  metadata: ToolMetadata;
  content: ToolPageData;
}

export interface ToolMetadata {
  name: string;
  description: string;
  href: string;
}

export interface ToolMetadata {
  name: string;
  description: string;
  href: string;
}

export interface Tool {
  metadata: ToolMetadata;
  content: ToolPageData;
}

export interface WorkflowStep {
  step: string;
  text: string;
}

export interface WorkflowDetailData {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

export interface ToolPageData {
  hero: ToolHero;
  agitation: AgitationData;
  technical: TechnicalData;
  workflowDetail: WorkflowDetailData;
  faq: FaqData;
}


export interface KnowledgePageData {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  href: string;
  managerSummary?: {
    title?: string;
    content: string;
  };
}

export interface OfferPageData {
  hero: OfferHero;
  agitation: AgitationData;
  scenarios: ScenariosData;
  technical: TechnicalData;
  toolLinks: OfferToolLinksData;
  faq: FaqData;
}

