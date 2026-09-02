import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "EULA",

    description:
        "Review the Cortlet End User License Agreement governing use of Cortlet software and related application components.",

    alternates: {
        canonical: "/legal/eula",
    },

    openGraph: {
        title: "Cortlet EULA",
        description:
            "The End User License Agreement governing use of Cortlet software.",
        url: "/legal/eula",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cortlet End User License Agreement",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Cortlet EULA",
        description:
            "The End User License Agreement governing use of Cortlet software.",
        images: ["/twitter-card.png"],
    },
};

export default function EulaLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}