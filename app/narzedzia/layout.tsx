import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatyzacja Procesów Biznesowych – Narzędzia i Integracje',
  description: 'Skaluj biznes dzięki profesjonalnej automatyzacji. Poznaj narzędzia n8n, AI i API, które eliminują chaos i oszczędzają czas Twojego zespołu. Umów bezpłatną diagnozę.',
};

export default function NarzedziaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
