import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://acriotech.com';
  
  // List all major routes
  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/services',
    '/solutions',
    '/work',
    '/industries',
    '/insights',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/refund-policy',
    '/gdpr-compliance',
    '/trademark-policy',
    '/abuse-policy'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
