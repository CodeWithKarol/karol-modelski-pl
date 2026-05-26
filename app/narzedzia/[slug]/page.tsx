import { notFound } from "next/navigation";
import { ToolPageTemplate } from "@/components/templates/tool-page-template";
import { TOOLS } from "@/lib/tools";
import { Metadata } from "next";

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.metadata.href.replace("/narzedzia/", ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const toolEntry = TOOLS.find((t) => t.metadata.href === `/narzedzia/${slug}`);
  
  if (!toolEntry) return { title: "Narzędzie nie znalezione" };

  return {
    title: toolEntry.content.seo.title,
    description: toolEntry.content.seo.description,
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const toolEntry = TOOLS.find((t) => t.metadata.href === `/narzedzia/${slug}`);

  if (!toolEntry) {
    notFound();
  }

  return <ToolPageTemplate data={toolEntry.content} />;
}
