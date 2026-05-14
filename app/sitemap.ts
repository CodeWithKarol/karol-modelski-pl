import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://karol-modelski.pl';
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/wspolpraca`, lastModified: new Date() },
    { url: `${baseUrl}/mapa-strony`, lastModified: new Date() },
    
    // Oferta (Produkty)
    { url: `${baseUrl}/automatyzacja-sprzedazy`, lastModified: new Date() },
    { url: `${baseUrl}/automatyzacja-administracji-i-finansow`, lastModified: new Date() },
    { url: `${baseUrl}/automatyzacja-procesow-z-ai`, lastModified: new Date() },
    
    // Obszary Biznesowe
    { url: `${baseUrl}/obszary/automatyzacja-sprzedazy`, lastModified: new Date() },
    { url: `${baseUrl}/obszary/automatyzacja-zarzadzania-projektami`, lastModified: new Date() },
    { url: `${baseUrl}/obszary/automatyzacja-administracji-i-finansow`, lastModified: new Date() },
    
    // Narzędzia
    { url: `${baseUrl}/integracja-pipedrive`, lastModified: new Date() },
    { url: `${baseUrl}/integracja-clickup`, lastModified: new Date() },
    { url: `${baseUrl}/automatyzacja-google-sheets`, lastModified: new Date() },
    
    // Baza wiedzy
    { url: `${baseUrl}/baza-wiedzy/co-to-jest-n8n`, lastModified: new Date() },
    { url: `${baseUrl}/baza-wiedzy/co-to-jest-webhook`, lastModified: new Date() },
    { url: `${baseUrl}/baza-wiedzy/api-w-biznesie`, lastModified: new Date() },
  ];
}
