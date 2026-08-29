import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://cortlet.com';

    return {
        rules: [
            // 1. Allowed Bots: Mirrors Arcjet's SEARCH_ENGINE and PREVIEW categories
            // Includes core search, AI retrieval (for citations), and social unfurling
            {
                userAgent: [
                    'Googlebot',
                    'Bingbot',
                    'Applebot',
                    'DuckDuckBot',
                    'YandexBot',
                    'Baiduspider',
                    'OAI-SearchBot',
                    'PerplexityBot',
                    'ChatGPT-User',
                    'Twitterbot',
                    'Slackbot',
                    'Discordbot',
                    'LinkedInBot',
                ],
                allow: ['/', '/docs', '/legal', '/legal/privacy', '/legal/tos'],
                disallow: ['/api/'], // Protects your waitlist API from being crawled
            },

            // 2. Blocked Bots: AI Data Harvesters & Commercial SEO Scrapers
            {
                userAgent: [
                    'GPTBot',
                    'CCBot',
                    'Google-Extended',
                    'ClaudeBot',
                    'anthropic-ai',
                    'Bytespider',
                    'Diffbot',
                    'cohere-ai',
                    'FacebookBot',
                    'Omgilibot',
                    'AhrefsBot',
                    'SemrushBot',
                    'DotBot',
                    'MJ12bot',
                    'PetalBot',
                ],
                disallow: ['/'],
            },

            // 3. Global Fallback for any standard bots not explicitly named above
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}