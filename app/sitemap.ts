import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://karol-modelski.pl';
  
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/wspolpraca`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/mapa-strony`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    
    // Produkty (Oferta) - Priorytet 0.8
    { url: `${baseUrl}/automatyzacja-sprzedazy`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/automatyzacja-administracji-i-finansow`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/automatyzacja-procesow-z-ai`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    
    // Obszary Biznesowe - Priorytet 0.7
    { url: `${baseUrl}/obszary/automatyzacja-sprzedazy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/obszary/automatyzacja-zarzadzania-projektami`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/obszary/automatyzacja-administracji-i-finansow`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    
    // Narzędzia - Priorytet 0.6
    { url: `${baseUrl}/integracja-pipedrive`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/integracja-clickup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/automatyzacja-google-sheets`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    
    // Baza wiedzy - Priorytet 0.5
    { url: `${baseUrl}/baza-wiedzy/co-to-jest-n8n`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/baza-wiedzy/co-to-jest-webhook`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/baza-wiedzy/api-w-biznesie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}
