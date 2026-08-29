import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cortlet // Documentation",
    description:
        "Explore Cortlet documentation for developer tools, APIs, integrations, setup guides, usage examples, and technical references.",

    metadataBase: new URL("https://cortlet.com"),

    // 1. FAVICON & APPLE TOUCH ICON CONFIGURATIONS
    icons: {
        icon: [
            {
                url: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon-48x48.png",
                sizes: "48x48",
                type: "image/png",
            },
            {
                url: "/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
        ],

        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },

    // 2. WEB APP MANIFEST
    manifest: "/site.webmanifest",

    // 3. OPEN GRAPH
    openGraph: {
        title: "Cortlet // Developer Documentation",
        description:
            "Technical documentation, setup guides, API references, integration instructions, and examples for Cortlet products and services.",

        url: "https://cortlet.com/docs",
        siteName: "Cortlet",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cortlet Developer Documentation",
            },
        ],

        locale: "en_US",
        type: "website",
    },

    // 4. TWITTER / X CARD
    twitter: {
        card: "summary_large_image",

        title: "Cortlet // Developer Documentation",

        description:
            "Guides, API references, integrations, examples, and technical documentation for Cortlet developers.",

        images: ["/twitter-card.png"],
    },

    // 5. MICROSOFT LEGACY LIVE TILE INTEGRATION
    other: {
        "msapplication-config": "/browserconfig.xml",
        "msapplication-TileColor": "#000000",
        "msapplication-TileImage": "/mstile-144x144.png",
    },
};

export default function DocsLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}