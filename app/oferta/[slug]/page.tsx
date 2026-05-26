import { notFound } from "next/navigation";
import { Metadata } from "next";
import { OFFERS } from "@/lib/offers";
import { OfferPageTemplate } from "@/components/templates/offer-page-template";
import { getOfferProfessionalSchema } from "@/lib/schema";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const href = `/oferta/${slug}`;
  const data = Object.values(OFFERS).find(o => o.offer_url === href);

  if (!data) return {};

  return {
    title: data.seo_metadata.meta_title,
    description: data.seo_metadata.meta_description,
    alternates: {
      canonical: `https://karol-modelski.pl${data.offer_url}`,
    },
    openGraph: {
      title: data.seo_metadata.meta_title,
      description: data.seo_metadata.meta_description,
      url: `https://karol-modelski.pl${data.offer_url}`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return Object.values(OFFERS).map((offer) => ({
    slug: offer.offer_url.replace("/oferta/", ""),
  }));
}

export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const href = `/oferta/${slug}`;
  const data = Object.values(OFFERS).find(o => o.offer_url === href);

  if (!data) {
    notFound();
  }

  const [serviceSchema, profSchema] = getOfferProfessionalSchema(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profSchema) }}
      />
      <OfferPageTemplate data={data} />
    </>
  );
}
