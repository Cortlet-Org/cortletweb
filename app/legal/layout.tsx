import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cortlet // Legal & Compliance",
    description:
        "Cortlet legal policies, terms, privacy information, licensing, acceptable use, and compliance documentation.",

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
        title: "Cortlet // Legal & Compliance",
        description:
            "Review Cortlet's Terms of Service, Privacy Policy, licensing terms, acceptable-use rules, and other legal documentation.",

        url: "https://cortlet.com/legal",
        siteName: "Cortlet",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cortlet Legal and Compliance",
            },
        ],

        locale: "en_US",
        type: "website",
    },

    // 4. TWITTER / X CARD
    twitter: {
        card: "summary_large_image",

        title: "Cortlet // Legal & Compliance",

        description:
            "Terms, privacy, licensing, acceptable use, and legal information for Cortlet products and services.",

        images: ["/twitter-card.png"],
    },

    // 5. MICROSOFT LEGACY LIVE TILE INTEGRATION
    other: {
        "msapplication-config": "/browserconfig.xml",
        "msapplication-TileColor": "#000000",
        "msapplication-TileImage": "/mstile-144x144.png",
    },
};

export default function LegalLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}