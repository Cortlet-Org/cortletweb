import Link from "next/link";

export default function LegalHubPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 font-mono p-6 md:p-12 max-w-2xl mx-auto space-y-12 selection:bg-emerald-500/20 antialiased">

            {/* HUD ROUTING HEADER */}
            <header className="space-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <h1 className="text-xs font-bold tracking-wider uppercase text-emerald-500">
                        Cortlet Legal
                    </h1>
                </div>
                <p className="text-[10px] text-zinc-500">All legal documents (e.g. privacy policy) links are here. Note: Cortlet is banned for EU users.</p>
            </header>

            {/* COMPLIANCE ROUTING ACTION GRID */}
            <div className="flex flex-col gap-4">
                <Link
                    href="/legal/privacy"
                    className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded text-xs hover:border-emerald-500 transition-colors flex justify-between items-center group"
                >
                    <span>01 - Privacy Policy</span>
                    <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">➔</span>
                </Link>

                <Link
                    href="/legal/tos"
                    className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded text-xs hover:border-emerald-500 transition-colors flex justify-between items-center group"
                >
                    <span>02 - Terms of Service</span>
                    <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">➔</span>
                </Link>
            </div>

            {/* PORTAL RETRACT PATH */}
            <footer className="pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs">
                <Link href="/" className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                    <span>➔</span> <span className="underline underline-offset-4">Return to homepage</span>
                </Link>
            </footer>
        </main>
    );
}

