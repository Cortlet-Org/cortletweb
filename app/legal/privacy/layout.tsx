import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy // Cortlet",
    description:
        "Learn how Cortlet handles, processes, protects, and manages information across its websites, products, and services.",

    openGraph: {
        title: "Privacy Policy // Cortlet",
        description:
            "Information about Cortlet's privacy practices and handling of user data.",
        url: "https://cortlet.com/legal/privacy",
    },

    twitter: {
        title: "Privacy Policy // Cortlet",
        description:
            "Learn about Cortlet's privacy and data-handling practices.",
    },
};

export default function PrivacyLayout({               children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}