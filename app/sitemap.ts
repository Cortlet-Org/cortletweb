import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cortlet.com';

    // Use the current deployment date as the last modified date
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1.0, // Highest priority for the landing page
        },
        {
            url: `${baseUrl}/docs`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8, // Secondary priority for documentation
        },
        {
            url: `${baseUrl}/legal/privacy`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.5, // Lower priority for static legal pages
        },
        {
            url: `${baseUrl}/legal/tos`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];
}