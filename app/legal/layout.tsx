import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal",

    description:
        "Review Cortlet's Terms of Service, Privacy Policy, acceptable use rules, licensing information, and other legal documentation.",

    alternates: {
        canonical: "/legal",
    },

    openGraph: {
        title: "Cortlet Legal",
        description:
            "Terms, privacy, acceptable use, licensing, and other legal information for Cortlet.",
        url: "/legal",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cortlet Legal",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Cortlet Legal",
        description:
            "Terms, privacy, acceptable use, licensing, and other legal information for Cortlet.",
        images: ["/twitter-card.png"],
    },
};

export default function LegalLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}