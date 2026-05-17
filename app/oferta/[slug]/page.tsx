import { notFound } from "next/navigation";
import { OFFERS } from "@/lib/offers";
import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template";

export async function generateStaticParams() {
  return Object.keys(OFFERS).map((href) => ({
    slug: href.replace("/", ""),
  }));
}

export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const href = `/${slug}`;
  const data = OFFERS[href];

  if (!data) {
    notFound();
  }

  return <OfferPageTemplate data={data} />;
}
