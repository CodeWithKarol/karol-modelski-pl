import { notFound } from "next/navigation";
import { KnowledgeArticleLayout } from "@/components/templates/knowledge/knowledge-article-layout";
import { KNOWLEDGE_CONTENT } from "@/lib/knowledge";

export async function generateStaticParams() {
  return Object.keys(KNOWLEDGE_CONTENT).map((href) => ({
    slug: href.replace("/baza-wiedzy/", ""),
  }));
}

export default async function KnowledgePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const href = `/baza-wiedzy/${slug}`;
  const content = KNOWLEDGE_CONTENT[href];

  if (!content) {
    notFound();
  }

  return <KnowledgeArticleLayout content={content} />;
}
