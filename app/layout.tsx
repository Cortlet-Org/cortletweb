import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar/navbarcomponent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "Cortlet // Real-Time Serverless Gateway Proxy",
    description: "Ultra-low latency stateless WebSocket-to-HTTP serverless orchestration layer.",
    metadataBase: new URL("https://cortlet.com"),

    // 1. DYNAMIC FAVICON & APPLE TOUCH ICON CONFIGURATIONS
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },

    // 2. WEB APP MANIFEST ASSIGNMENT
    manifest: "/site.webmanifest",

    // 3. VIRAL SOCIAL LINKS (OPEN GRAPH LAYER)
    openGraph: {
        title: "Cortlet // Stateless WebSocket Proxy Gateway",
        description: "Translate real-time persistent WebSockets cleanly into stateless serverless webhooks.",
        url: "https://cortlet.com",
        siteName: "Cortlet",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cortlet Proxy Control HUD Matrix",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    // 4. TAILORED TWITTER GRAPH CARDS
    twitter: {
        card: "summary_large_image",
        title: "Cortlet // Real-Time Serverless Gateway",
        description: "Stop paying for always-on server instances just to handle long-lived WebSockets.",
        images: ["/twitter-card.png"],
    },

    // 5. MICROSOFT LEGACY LIVE TILE INTEGRATION
    other: {
        "msapplication-config": "/browserconfig.xml",
        "msapplication-TileColor": "#000000",
        "msapplication-TileImage": "/mstile-144x144.png",
    },
    // 6. KEYWORDS
    keywords: [
        "webhook tools",
        "developer webhook utilities",
        "serverless webhook proxy",
        "websocket to webhook translation",
        "realtime event routing",
        "stateless webhook relay",
        "backend developer tools"
    ],
};


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html
          lang="en"
          suppressHydrationWarning
          className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      >
      <body className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 antialiased max-w-full overflow-x-hidden font-mono">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavbarComponent/>
            {children}
            <SpeedInsights/>
            <Analytics/>
      </ThemeProvider>
      </body>
      </html>
      );
}
