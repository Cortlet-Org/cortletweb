import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

const sections = [
    {
        id: "license",
        number: "01",
        title: "License",
        content: [
            "Cortlet grants you a limited, non-exclusive, non-transferable, revocable license to use the software in accordance with this agreement.",
            "This license does not transfer ownership of Cortlet, its source code, trademarks, documentation, or other intellectual property.",
        ],
    },
    {
        id: "restrictions",
        number: "02",
        title: "Restrictions",
        content: [
            "You may not copy, modify, distribute, sell, sublicense, reverse engineer, decompile, or otherwise attempt to derive the source code of Cortlet except where applicable law expressly permits it.",
            "You may not use Cortlet to violate applicable law, interfere with the service, bypass security controls, or enable abusive or harmful activity.",
        ],
    },
    {
        id: "updates",
        number: "03",
        title: "Updates and changes",
        content: [
            "Cortlet may provide updates, improvements, patches, or replacement versions from time to time.",
            "Features, interfaces, availability, and technical behavior may change as the product evolves, particularly while Cortlet remains in development or early access.",
        ],
    },
    {
        id: "data",
        number: "04",
        title: "Data and privacy",
        content: [
            "Use of Cortlet may involve transmission of technical data required to provide the service.",
            "Information about how Cortlet handles personal information and website data is described in the Privacy Policy.",
        ],
    },
    {
        id: "availability",
        number: "05",
        title: "Availability",
        content: [
            "Cortlet may be modified, suspended, limited, or discontinued at any time.",
            "Access may also be restricted in certain jurisdictions where Cortlet is not offered.",
        ],
    },
    {
        id: "warranty",
        number: "06",
        title: "Disclaimer of warranties",
        content: [
            "Cortlet is provided on an “as is” and “as available” basis to the maximum extent permitted by applicable law.",
            "Cortlet does not guarantee uninterrupted availability, error-free operation, compatibility with every system, or that the software will meet every requirement.",
        ],
    },
    {
        id: "liability",
        number: "07",
        title: "Limitation of liability",
        content: [
            "To the maximum extent permitted by applicable law, Cortlet and its operators will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of or inability to use the software.",
            "Any liability that cannot legally be excluded will be limited to the extent permitted by applicable law.",
        ],
    },
    {
        id: "termination",
        number: "08",
        title: "Termination",
        content: [
            "This license may terminate if you materially violate this agreement.",
            "When the license terminates, you must stop using the affected Cortlet software unless continued use is otherwise permitted by law or a separate agreement.",
        ],
    },
    {
        id: "law",
        number: "09",
        title: "Governing terms",
        content: [
            "This EULA should be read together with Cortlet's Terms of Service, Privacy Policy, and any other policies applicable to the software or service you use.",
            "If there is a conflict between this EULA and a more specific written agreement governing your use of Cortlet, the more specific agreement will control to the extent of that conflict.",
        ],
    },
];

export default function EulaPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
            {/* HERO */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
                    <FadeIn>
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                            Legal
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.08}>
                        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            End User License Agreement
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.16}>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                            This agreement governs your use of Cortlet software and related
                            application components.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.24}>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-zinc-400">
                            <span>Effective: September 1, 2026</span>

                            <Link
                                href="/legal"
                                className="transition-colors hover:text-[var(--cortlet-green)]"
                            >
                                Legal hub →
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CONTENT */}
            <section>
                <div className="mx-auto grid max-w-5xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[220px_1fr] lg:px-8 lg:py-24">
                    {/* TABLE OF CONTENTS */}
                    <aside className="hidden lg:block">
                        <FadeIn>
                            <div className="sticky top-24">
                                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                                    Contents
                                </p>

                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="block text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </FadeIn>
                    </aside>

                    {/* LEGAL SECTIONS */}
                    <article className="min-w-0">
                        <FadeIn>
                            <div className="mb-12 rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm leading-6 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                                This EULA is intended to explain the terms that apply when you
                                use Cortlet software. It should be read together with the{" "}
                                <Link
                                    href="/legal/tos"
                                    className="text-zinc-950 underline underline-offset-4 dark:text-white"
                                >
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/legal/privacy"
                                    className="text-zinc-950 underline underline-offset-4 dark:text-white"
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </div>
                        </FadeIn>

                        <div className="space-y-0">
                            {sections.map((section, index) => (
                                <FadeIn key={section.id} delay={index * 0.03}>
                                    <section
                                        id={section.id}
                                        className="scroll-mt-24 border-t border-zinc-200 py-10 first:border-t-0 first:pt-0 dark:border-zinc-800"
                                    >
                                        <div className="flex gap-5">
                      <span className="mt-1 shrink-0 font-mono text-xs text-zinc-400">
                        {section.number}
                      </span>

                                            <div className="min-w-0">
                                                <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                                                    {section.title}
                                                </h2>

                                                <div className="mt-5 space-y-4">
                                                    {section.content.map((paragraph) => (
                                                        <p
                                                            key={paragraph}
                                                            className="text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400"
                                                        >
                                                            {paragraph}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn>
                            <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
                                <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    Questions about this agreement can be directed through
                                    Cortlet&apos;s official contact channels.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-4">
                                    <Link
                                        href="/legal"
                                        className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-white"
                                    >
                                        Back to legal
                                    </Link>

                                    <Link
                                        href="/"
                                        className="text-sm font-medium text-[var(--cortlet-green)]"
                                    >
                                        Return home →
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </article>
                </div>
            </section>
        </main>
    );
}