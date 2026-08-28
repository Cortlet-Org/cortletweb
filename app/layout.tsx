import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar/navbarcomponent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cortlet | Stateful WebSockets Decoupled",
  description: "An ultra-fast real-time gateway proxy built natively for serverless cloud infrastructure.",
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
      <body className="min-h-full flex flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 font-mono">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NavbarComponent/>
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}
