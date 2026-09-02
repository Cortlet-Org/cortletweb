import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Hover } from "@/components/animations/Hover";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-6 py-20 text-zinc-950 dark:bg-black dark:text-zinc-50">
            <div className="w-full max-w-xl text-center">
                <FadeIn>
                    <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--cortlet-green)]" />
                        404
                    </div>
                </FadeIn>

                <FadeIn delay={0.08}>
                    <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                        This page doesn&apos;t exist.
                    </h1>
                </FadeIn>

                <FadeIn delay={0.16}>
                    <p className="mx-auto mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
                        The route you requested couldn&apos;t be found. It may have moved,
                        been removed, or never existed.
                    </p>
                </FadeIn>

                <FadeIn delay={0.24}>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Hover>
                            <Link
                                href="/"
                                className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                            >
                                Return home
                            </Link>
                        </Hover>

                        <Hover>
                            <Link
                                href="/docs"
                                className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 px-5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                            >
                                View docs
                            </Link>
                        </Hover>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}