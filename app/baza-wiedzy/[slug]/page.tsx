import { notFound } from "next/navigation";
import { Metadata } from "next";
import { KNOWLEDGE_CONTENT } from "@/lib/knowledge";
import { ArticlePageTemplate } from "@/components/templates/knowledge/article-page-template";
import { getArticleSchema } from "@/lib/schema";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const href = `/baza-wiedzy/${slug}`;
  const data = KNOWLEDGE_CONTENT[href];

  if (!data) return {};

  return {
    title: data.seo_metadata.meta_title,
    description: data.seo_metadata.meta_description,
    alternates: {
      canonical: `https://karol-modelski.pl${data.article_url}`,
    },
    openGraph: {
      title: data.seo_metadata.meta_title,
      description: data.seo_metadata.meta_description,
      url: `https://karol-modelski.pl${data.article_url}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return Object.values(KNOWLEDGE_CONTENT).map((article) => ({
    slug: article.article_url.replace("/baza-wiedzy/", ""),
  }));
}

export default async function KnowledgePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const href = `/baza-wiedzy/${slug}`;
  const data = KNOWLEDGE_CONTENT[href];

  if (!data) {
    notFound();
  }

  const articleSchema = getArticleSchema(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticlePageTemplate data={data} />
    </>
  );
}
