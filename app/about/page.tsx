import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Hover } from "@/components/animations/Hover";
import { GatewayDiagram } from "@/components/diagrams/GatewayDiagram";

const principles = [
    {
        number: "01",
        title: "Lightweight",
        description:
            "Cortlet should solve the realtime connection problem without becoming another application framework.",
    },
    {
        number: "02",
        title: "Secure-first",
        description:
            "Infrastructure defaults should be conservative, predictable, and designed with security in mind from the start.",
    },
    {
        number: "03",
        title: "No-bloat",
        description:
            "Every feature should justify its place in the core product. Cortlet stays focused on the connection layer.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
            {/* HERO */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
                    <div className="max-w-4xl">
                        <FadeIn>
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                About Cortlet
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.08}>
                            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                                Realtime infrastructure
                                <br />
                                should be boring.
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.16}>
                            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
                                Cortlet exists to bridge persistent WebSocket connections with
                                ordinary HTTP backends, so developers can add realtime
                                communication without rebuilding their serverless architecture.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* WHY */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
                    <FadeIn>
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                Why Cortlet exists
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                Serverless simplified HTTP.
                                <br />
                                WebSockets stayed stateful.
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                Serverless platforms are designed around short-lived requests.
                                WebSockets are different: connections stay open, state has to be
                                tracked, and messages need to be routed back to the right
                                client.
                            </p>

                            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                Cortlet handles that persistent layer and translates realtime
                                activity into normal HTTP your backend already understands.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.12} y={20}>
                        <GatewayDiagram />
                    </FadeIn>
                </div>
            </section>

            {/* PRINCIPLES */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    <FadeIn>
                        <div className="max-w-2xl">
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                Principles
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                Built around a small set of rules.
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-16 grid border-y border-zinc-200 dark:border-zinc-800 md:grid-cols-3">
                        {principles.map((principle, index) => (
                            <FadeIn key={principle.title} delay={index * 0.07}>
                                <div className="h-full py-8 md:border-r md:border-zinc-200 md:px-8 md:last:border-r-0 dark:md:border-zinc-800">
                  <span className="font-mono text-xs text-zinc-400">
                    {principle.number}
                  </span>

                                    <h3 className="mt-5 text-lg font-medium">
                                        {principle.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                        {principle.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT CORTLET IS / ISN'T */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    <div className="grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 lg:grid-cols-2">
                        <FadeIn>
                            <div className="h-full bg-white p-8 dark:bg-black">
                                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                    What Cortlet is
                                </p>

                                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                                    A connection layer.
                                </h2>

                                <div className="mt-6 space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                    <p>Persistent WebSocket infrastructure.</p>
                                    <p>WebSocket events translated into HTTP webhooks.</p>
                                    <p>HTTP APIs for routing messages back to clients.</p>
                                    <p>A thin layer around the backend you already have.</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="h-full bg-white p-8 dark:bg-black">
                                <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
                                    What Cortlet is not
                                </p>

                                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                                    Another backend platform.
                                </h2>

                                <div className="mt-6 space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                    <p>Not your application database.</p>
                                    <p>Not an authentication platform.</p>
                                    <p>Not a workflow engine.</p>
                                    <p>Not a replacement for your business logic.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CURRENT STAGE */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
                    <FadeIn>
                        <div className="max-w-3xl">
                            <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--cortlet-green)]" />
                                Current stage
                            </div>

                            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                Cortlet is currently in development.
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                The focus right now is the core gateway: reliable connections,
                                clean HTTP translation, a small API surface, and a developer
                                experience that stays simple.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA */}
            <section>
                <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="mx-auto mb-6 h-2 w-2 rounded-full bg-[var(--cortlet-green)]" />

                            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                                Follow the build.
                            </h2>

                            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                Read the documentation or join the waitlist for early access
                                and launch updates.
                            </p>

                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Hover>
                                    <Link
                                        href="/#waitlist"
                                        className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                                    >
                                        Join the waitlist
                                    </Link>
                                </Hover>

                                <Hover>
                                    <Link
                                        href="/docs"
                                        className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 px-5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                                    >
                                        Read the docs
                                        <span className="ml-2" aria-hidden="true">
                      →
                    </span>
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