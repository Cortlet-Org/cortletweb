import Link from "next/link";
import { PRIVACY_POLICY } from "./policyData";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 font-mono p-6 md:p-12 max-w-3xl mx-auto space-y-8 selection:bg-emerald-500/20 antialiased">

            {/* HUD ROUTING TRACKER HEADER */}
            <header className="space-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-4 text-xs flex justify-between items-center text-zinc-500">
                <span>CORTLET // ARCHIVE_01 // PRIVACY_DISCLOSURES</span>

                <Link
                    href="/legal"
                    className="text-emerald-500 hover:underline"
                >
                    ➔ BACK_TO_HUB
                </Link>
            </header>

            <style>{`
        .legal-content {
          --text: #3f3f46;
          --muted: #71717a;
          --heading: #09090b;
          --subheading: #18181b;
          --surface: #f4f4f5;
          --surface-soft: #fafafa;
          --border: #e4e4e7;
          --accent: #059669;
          --accent-hover: #047857;

          width: 100%;
          color: var(--text);
          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            "Liberation Mono",
            monospace;
        }

        html.dark .legal-content {
          --text: #a1a1aa;
          --muted: #71717a;
          --heading: #fafafa;
          --subheading: #e4e4e7;
          --surface: #09090b;
          --surface-soft: #0a0a0a;
          --border: #27272a;
          --accent: #34d399;
          --accent-hover: #6ee7b7;
        }

        .legal-content h1,
        .legal-content h2,
        .legal-content h3,
        .legal-content h4,
        .legal-content h5,
        .legal-content h6 {
          display: block;
          color: var(--heading);
          font-family: inherit;
          text-transform: none;
        }

        .legal-content h1 {
          margin: 0 0 20px;
          font-size: 3rem;
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .legal-content h2 {
          margin: 64px 0 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
          color: var(--heading);
          font-size: 1.75rem;
          line-height: 1.25;
          font-weight: 750;
          letter-spacing: -0.025em;
          scroll-margin-top: 80px;
        }

        .legal-content h3 {
          margin: 36px 0 14px;
          color: var(--subheading);
          font-size: 1.2rem;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .legal-content h4 {
          margin: 28px 0 12px;
          color: var(--subheading);
          font-size: 1rem;
          line-height: 1.4;
          font-weight: 700;
        }

        .legal-content p {
          display: block;
          margin: 0 0 20px;
          color: var(--text);
          font-size: 0.875rem;
          line-height: 1.85;
          font-weight: 400;
        }

        .legal-content strong,
        .legal-content b {
          color: var(--subheading);
          font-weight: 700;
        }

        .legal-content em,
        .legal-content i {
          font-style: italic;
        }

        .legal-content ul,
        .legal-content ol {
          display: block;
          margin: 18px 0 26px;
          padding-left: 30px;
        }

        .legal-content ul {
          list-style-type: disc;
        }

        .legal-content ol {
          list-style-type: decimal;
        }

        .legal-content li {
          display: list-item;
          margin: 10px 0;
          padding-left: 4px;
          color: var(--text);
          font-size: 0.875rem;
          line-height: 1.75;
        }

        .legal-content li::marker {
          color: var(--accent);
          font-weight: 700;
        }

        .legal-content a {
          color: var(--accent);
          text-decoration: none;
          text-underline-offset: 3px;
          transition: color 150ms ease;
        }

        .legal-content a:hover {
          color: var(--accent-hover);
          text-decoration: underline;
        }

        .legal-content hr {
          display: block;
          height: 1px;
          margin: 64px 0 32px;
          border: 0;
          background: var(--border);
        }

        /* Effective date / last updated */
        .legal-content .legal-meta {
          margin: 0 0 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
        }

        .legal-content .legal-meta p {
          margin: 4px 0;
          color: var(--muted);
          font-size: 0.75rem;
          line-height: 1.6;
        }

        /* Table of contents */
        .legal-content .legal-toc {
          margin: 44px 0 64px;
          padding: 28px 30px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--surface);
        }

        .legal-content .legal-toc h2 {
          margin: 0 0 18px;
          padding: 0;
          border: 0;
          color: var(--heading);
          font-size: 1.25rem;
          line-height: 1.3;
          font-weight: 750;
        }

        .legal-content .legal-toc ol {
          margin: 0;
          padding-left: 24px;
        }

        .legal-content .legal-toc li {
          margin: 8px 0;
          font-size: 0.825rem;
          line-height: 1.6;
        }

        .legal-content .legal-toc a {
          color: var(--subheading);
        }

        .legal-content .legal-toc a:hover {
          color: var(--accent);
        }

        /* Notice/callout boxes */
        .legal-content .legal-notice {
          margin: 28px 0;
          padding: 20px 22px;
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 10px;
          background: var(--surface);
        }

        .legal-content .legal-notice p:last-child {
          margin-bottom: 0;
        }

        .legal-content code {
          padding: 0.15em 0.4em;
          border: 1px solid var(--border);
          border-radius: 5px;
          background: var(--surface);
          color: var(--subheading);
          font-family: inherit;
          font-size: 0.9em;
        }

        .legal-content blockquote {
          margin: 28px 0;
          padding: 4px 0 4px 18px;
          border-left: 3px solid var(--border);
          color: var(--muted);
        }

        .legal-content blockquote p {
          color: var(--muted);
        }

        @media (max-width: 640px) {
          .legal-content h1 {
            font-size: 2.25rem;
          }

          .legal-content h2 {
            margin-top: 52px;
            font-size: 1.4rem;
          }

          .legal-content h3 {
            margin-top: 30px;
            font-size: 1.05rem;
          }

          .legal-content p,
          .legal-content li {
            font-size: 0.825rem;
          }

          .legal-content .legal-toc {
            margin: 36px 0 52px;
            padding: 20px;
            border-radius: 10px;
          }

          .legal-content .legal-toc h2 {
            font-size: 1.1rem;
          }

          .legal-content ul,
          .legal-content ol {
            padding-left: 24px;
          }
        }
      `}</style>

            {/* PRIVACY POLICY */}
            <article
                className="legal-content break-words"
                dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY }}
            />

            {/* PORTAL RETRACT PATH */}
            <footer className="pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs">
                <Link
                    href="/legal"
                    className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                    <span>➔</span>
                    <span className="underline underline-offset-4">
            RETURN_TO_COMPLIANCE_HUB
          </span>
                </Link>
            </footer>
        </main>
    );
}