import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Hover } from "@/components/animations/Hover";

const legalLinks = [
    {
        href: "/legal/privacy",
        number: "01",
        title: "Privacy Policy",
        description:
            "How Cortlet handles personal information, analytics, waitlist data, and service-related privacy.",
    },
    {
        href: "/legal/tos",
        number: "02",
        title: "Terms of Service",
        description:
            "The terms that govern access to and use of Cortlet and its related services.",
    },
    {
        href: "/legal/eula",
        number: "03",
        title: "End User License Agreement",
        description:
            "The license terms governing use of Cortlet software and related application components.",
    },
];

export default function LegalHubPage() {
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
                            Legal information,
                            <br />
                            without the legal maze.
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.16}>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                            Review Cortlet&apos;s privacy terms, usage conditions, and other
                            legal documentation.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.24}>
                        <div className="mt-6 inline-flex items-start gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cortlet-green)]" />
                            <span>
                Cortlet is currently unavailable to users in the European Union.
              </span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* LEGAL DOCUMENTS */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
                    <FadeIn>
                        <div className="mb-10">
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
                                Documents
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                                Policies and terms
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800">
                        {legalLinks.map((item, index) => (
                            <FadeIn key={item.href} delay={index * 0.08}>
                                <Hover scale={1.005} y={-1}>
                                    <Link
                                        href={item.href}
                                        className="group block bg-white p-6 transition-colors hover:bg-zinc-50 sm:p-7 dark:bg-black dark:hover:bg-zinc-950"
                                    >
                                        <div className="flex items-start justify-between gap-6">
                                            <div className="flex min-w-0 gap-5">
                        <span className="pt-1 font-mono text-xs text-zinc-400">
                          {item.number}
                        </span>

                                                <div className="min-w-0">
                                                    <h3 className="text-lg font-medium">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="shrink-0 font-mono text-sm text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--cortlet-green)]">
                        →
                      </span>
                                        </div>
                                    </Link>
                                </Hover>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section>
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                Looking for product documentation instead?
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Hover>
                                    <Link
                                        href="/docs"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 px-4 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                                    >
                                        View docs
                                    </Link>
                                </Hover>

                                <Hover>
                                    <Link
                                        href="/"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                                    >
                                        Return home
                                    </Link>
                                </Hover>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}