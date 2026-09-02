"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Hover } from "@/components/animations/Hover";

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-6 py-20 text-zinc-950 dark:bg-black dark:text-zinc-50">
            <div className="w-full max-w-xl text-center">
                <FadeIn>
                    <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--cortlet-green)]" />
                        Server error
                    </div>
                </FadeIn>

                <FadeIn delay={0.08}>
                    <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                        Something went wrong.
                    </h1>
                </FadeIn>

                <FadeIn delay={0.16}>
                    <p className="mx-auto mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
                        Cortlet couldn&apos;t complete this request. You can try again or
                        return to the homepage.
                    </p>
                </FadeIn>

                {error.digest && (
                    <FadeIn delay={0.2}>
                        <div className="mx-auto mt-6 w-fit rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 font-mono text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                            digest: {error.digest}
                        </div>
                    </FadeIn>
                )}

                <FadeIn delay={0.24}>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Hover>
                            <button
                                type="button"
                                onClick={reset}
                                className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                            >
                                Try again
                            </button>
                        </Hover>

                        <Hover>
                            <Link
                                href="/"
                                className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 px-5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                            >
                                Return home
                            </Link>
                        </Hover>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}