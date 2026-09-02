import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarComponent } from "@/components/navbar/navbarcomponent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://cortlet.com"),

    title: {
        default: "Cortlet — WebSockets for Serverless",
        template: "%s — Cortlet",
    },

    description:
        "Cortlet keeps WebSocket connections alive and translates realtime events into ordinary HTTP webhooks for serverless backends.",

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

    manifest: "/site.webmanifest",

    openGraph: {
        title: "Cortlet — WebSockets for Serverless",
        description:
            "Persistent WebSocket connections in. Ordinary HTTP webhooks out.",
        url: "https://cortlet.com",
        siteName: "Cortlet",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cortlet WebSocket gateway",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Cortlet — WebSockets for Serverless",
        description:
            "Persistent WebSocket connections in. Ordinary HTTP webhooks out.",
        images: ["/twitter-card.png"],
    },

    keywords: [
        "Cortlet",
        "WebSocket gateway",
        "WebSockets",
        "serverless WebSockets",
        "WebSocket proxy",
        "WebSocket to HTTP",
        "WebSocket webhook",
        "serverless gateway",
        "realtime infrastructure",
        "developer tools",
    ],

    other: {
        "msapplication-config": "/browserconfig.xml",
        "msapplication-TileColor": "#000000",
        "msapplication-TileImage": "/mstile-144x144.png",
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.variable} ${jetBrainsMono.variable}`}
        >
        <body className="min-h-screen overflow-x-hidden bg-white font-sans text-zinc-950 antialiased dark:bg-black dark:text-zinc-50">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <NavbarComponent />

            {children}

            <SpeedInsights />
            <Analytics />
        </ThemeProvider>
        </body>
        </html>
    );
}