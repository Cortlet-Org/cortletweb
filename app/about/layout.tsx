import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",

    description:
        "Learn what Cortlet is, why it exists, and the principles behind its lightweight WebSocket-to-HTTP gateway for serverless applications.",

    alternates: {
        canonical: "/about",
    },

    openGraph: {
        title: "About Cortlet",
        description:
            "Cortlet exists to make realtime infrastructure simpler by bridging persistent WebSocket connections with ordinary HTTP backends.",
        url: "/about",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "About Cortlet",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About Cortlet",
        description:
            "Why Cortlet exists and the principles behind its lightweight realtime infrastructure.",
        images: ["/twitter-card.png"],
    },
};

export default function AboutLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}