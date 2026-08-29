import Link from "next/link";
import { TERMS_OF_SERVICE } from "./policyData";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 font-mono p-6 md:p-12 max-w-3xl mx-auto space-y-8 selection:bg-emerald-500/20 antialiased">
            <style>{`
  .legal-content {
    --text: #3f3f46;
    --muted: #71717a;
    --heading: #09090b;
    --subheading: #18181b;
    --surface: #f4f4f5;
    --border: #e4e4e7;
    --accent: #059669;

    width: 100%;
    color: var(--text);
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  html.dark .legal-content {
    --text: #a1a1aa;
    --muted: #71717a;
    --heading: #fafafa;
    --subheading: #e4e4e7;
    --surface: #09090b;
    --border: #27272a;
    --accent: #34d399;
  }

  .legal-content h1,
  .legal-content h2,
  .legal-content h3,
  .legal-content h4,
  .legal-content h5,
  .legal-content h6 {
    display: block;
    margin-left: 0;
    margin-right: 0;
    color: var(--heading);
    font-family: inherit;
    font-style: normal;
    text-transform: none;
  }

  .legal-content h1 {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 3.5rem;
    line-height: 1.05;
    font-weight: 800;
    letter-spacing: -0.045em;
  }

  .legal-content h2 {
    margin-top: 64px;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
    font-size: 1.8rem;
    line-height: 1.25;
    font-weight: 750;
    letter-spacing: -0.025em;
  }

  .legal-content h3 {
    margin-top: 36px;
    margin-bottom: 14px;
    font-size: 1.25rem;
    line-height: 1.35;
    font-weight: 700;
    color: var(--subheading);
  }

  .legal-content h4 {
    margin-top: 28px;
    margin-bottom: 12px;
    font-size: 1.05rem;
    line-height: 1.4;
    font-weight: 700;
    color: var(--subheading);
  }

  .legal-content p {
    display: block;
    margin: 0 0 20px;
    color: var(--text);
    font-size: 1rem;
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
    font-size: 1rem;
    line-height: 1.75;
  }

  .legal-content li::marker {
    color: var(--accent);
    font-weight: 600;
  }

  .legal-content a {
    color: var(--accent);
    text-decoration: none;
    text-underline-offset: 3px;
  }

  .legal-content a:hover {
    text-decoration: underline;
  }

  .legal-content hr {
    display: block;
    height: 1px;
    margin: 64px 0 32px;
    border: 0;
    background: var(--border);
  }

  .legal-content .legal-meta {
    margin-bottom: 48px;
  }

  .legal-content .legal-meta p {
    margin-bottom: 6px;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .legal-content .legal-toc {
    margin: 44px 0 64px;
    padding: 28px 30px;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: var(--surface);
  }

  .legal-content .legal-toc h2 {
    margin: 0 0 18px;
    padding: 0;
    border: 0;
    font-size: 1.4rem;
    font-weight: 750;
  }

  .legal-content .legal-toc ol {
    margin: 0;
  }

  .legal-content .legal-toc li {
    margin: 8px 0;
  }

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

  @media (max-width: 640px) {
    .legal-content h1 {
      font-size: 2.6rem;
    }

    .legal-content h2 {
      margin-top: 52px;
      font-size: 1.5rem;
    }

    .legal-content h3 {
      font-size: 1.15rem;
    }

    .legal-content .legal-toc {
      padding: 22px;
    }
  }
`}</style>
            <header className="space-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-4 text-xs flex justify-between items-center text-zinc-500">
                <span>Cortlet - Terms of Service</span>

                <Link
                    href="/legal"
                    className="text-emerald-500 hover:underline"
                >
                    ➔ BACK_TO_HUB
                </Link>
            </header>

            <article
                className="legal-content"
                dangerouslySetInnerHTML={{ __html: TERMS_OF_SERVICE }}
            />

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