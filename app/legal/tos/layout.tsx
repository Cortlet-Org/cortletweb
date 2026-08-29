import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service // Cortlet",
    description:
        "Read the terms governing access to and use of Cortlet websites, software, APIs, developer tools, and services.",

    openGraph: {
        title: "Terms of Service // Cortlet",
        description:
            "Terms governing the use of Cortlet products, websites, APIs, developer tools, and related services.",
        url: "https://cortlet.com/legal/terms",
    },

    twitter: {
        title: "Terms of Service // Cortlet",
        description:
            "Terms governing the use of Cortlet products and services.",
    },
};

export default function TOSLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}