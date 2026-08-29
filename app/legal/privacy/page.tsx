import Link from "next/link";
import { PRIVACY_POLICY } from "./policyData";
export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 font-mono p-6 md:p-12 max-w-3xl mx-auto space-y-8 selection:bg-emerald-500/20 antialiased">

            {/* HUD ROUTING TRACKER HEADER */}
            <header className="space-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-4 text-xs flex justify-between items-center text-zinc-500">
                <span>CORTLET // ARCHIVE_01 // PRIVACY_DISCLOSURES</span>
                <Link href="/legal" className="text-emerald-500 hover:underline">➔ BACK_TO_HUB</Link>
            </header>

            {/* COMPLIANCE HTML OVERRIDES AND INJECTION NODE */}
            <article className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-mono break-words">
                <style dangerouslySetInnerHTML={{ __html: `
          [data-custom-class='body'], [data-custom-class='body'] * { background: transparent !important; font-family: ui-monospace, monospace !important; }
          [data-custom-class='title'], [data-custom-class='title'] * { font-size: 24px !important; font-weight: 700 !important; color: light-dark(#09090b, #fafafa) !important; }
          [data-custom-class='heading_1'], [data-custom-class='heading_1'] * { font-size: 18px !important; font-weight: 600 !important; color: light-dark(#18181b, #f4f4f5) !important; margin-top: 1.5rem !important; }
          [data-custom-class='body_text'], [data-custom-class='body_text'] * { font-size: 13px !important; color: light-dark(#52525b, #a1a1aa) !important; }
          [data-custom-class='link'], [data-custom-class='link'] * { color: #10b981 !important; text-decoration: underline !important; }
        `}} />
                <div dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY }} />
            </article>

            {/* PORTAL RETRACT PATH */}
            <footer className="pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs">
                <Link href="/legal" className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                    <span>➔</span> <span className="underline underline-offset-4">RETURN_TO_COMPLIANCE_HUB</span>
                </Link>
            </footer>
        </main>
    );
}
