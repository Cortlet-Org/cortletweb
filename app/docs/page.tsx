import Link from "next/link";
import { Book3D } from "@/components/3d/Book3D";
import { FadeIn } from "@/components/animations/FadeIn";
import { Hover } from "@/components/animations/Hover";

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
            {/* HERO */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:px-8 lg:py-36">
                    <div className="max-w-xl">
                        <FadeIn>
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                Documentation
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.08}>
                            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                                Build realtime apps
                                <br />
                                without rebuilding
                                <br />
                                your backend.
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.16}>
                            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
                                Learn how Cortlet keeps WebSocket connections alive, forwards
                                realtime events as HTTP webhooks, and routes messages back to
                                connected clients.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.24}>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Hover>
                                    <Link
                                        href="/docs/getting-started"
                                        className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                                    >
                                        Get started
                                        <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                                    </Link>
                                </Hover>

                                <Hover>
                                    <Link
                                        href="/docs/api"
                                        className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 px-5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                                    >
                                        API reference
                                    </Link>
                                </Hover>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.18} y={20}>
                        <Book3D />
                    </FadeIn>
                </div>
            </section>

            {/* QUICK START */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
                    <FadeIn>
                        <div className="max-w-2xl">
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                Quick start
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                Understand the Cortlet flow.
                            </h2>

                            <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                Cortlet sits between your client and your serverless backend.
                                Your client speaks WebSocket. Your backend keeps speaking HTTP.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="mt-14 grid border-y border-zinc-200 dark:border-zinc-800 md:grid-cols-3">
                        <FadeIn delay={0.05}>
                            <div className="h-full py-8 md:border-r md:border-zinc-200 md:px-8 md:first:pl-0 dark:md:border-zinc-800">
                                <span className="font-mono text-xs text-zinc-400">01</span>

                                <h3 className="mt-5 text-lg font-medium">
                                    Connect a client
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    Open a persistent WebSocket connection through the Cortlet
                                    gateway.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.12}>
                            <div className="h-full border-t border-zinc-200 py-8 md:border-r md:border-t-0 md:border-zinc-200 md:px-8 dark:border-zinc-800 dark:md:border-zinc-800">
                                <span className="font-mono text-xs text-zinc-400">02</span>

                                <h3 className="mt-5 text-lg font-medium">
                                    Receive HTTP events
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    Cortlet converts connection activity and incoming messages
                                    into ordinary HTTP webhooks.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.19}>
                            <div className="h-full border-t border-zinc-200 py-8 md:border-t-0 md:px-8 md:pr-0 dark:border-zinc-800">
                                <span className="font-mono text-xs text-zinc-400">03</span>

                                <h3 className="mt-5 text-lg font-medium">
                                    Send messages back
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    Call Cortlet&apos;s HTTP API and route a response to the
                                    correct active connection.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* DOCUMENTATION AREAS */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
                    <FadeIn>
                        <div className="max-w-2xl">
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                Explore
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                Everything you need to integrate Cortlet.
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 md:grid-cols-2">
                        {[
                            {
                                href: "/docs/getting-started",
                                label: "Getting started",
                                description:
                                    "Set up Cortlet, connect your first client, and configure your webhook endpoint.",
                            },
                            {
                                href: "/docs/connections",
                                label: "Connections",
                                description:
                                    "Understand connection IDs, lifecycle events, disconnects, and active socket state.",
                            },
                            {
                                href: "/docs/webhooks",
                                label: "Webhooks",
                                description:
                                    "Receive realtime WebSocket activity in your backend as ordinary HTTP requests.",
                            },
                            {
                                href: "/docs/api",
                                label: "API reference",
                                description:
                                    "Reference endpoints for sending messages, managing connections, and checking gateway health.",
                            },
                        ].map((item, index) => (
                            <FadeIn key={item.href} delay={index * 0.06}>
                                <Link
                                    href={item.href}
                                    className="group block h-full bg-white p-7 transition-colors hover:bg-zinc-50 dark:bg-black dark:hover:bg-zinc-950"
                                >
                                    <div className="flex items-center justify-between gap-6">
                                        <h3 className="text-lg font-medium">{item.label}</h3>

                                        <span className="font-mono text-sm text-zinc-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                                    </div>

                                    <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                        {item.description}
                                    </p>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* API PREVIEW */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
                    <FadeIn>
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                HTTP first
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                Your backend stays familiar.
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                Cortlet handles the persistent connection layer. Your backend
                                receives standard HTTP payloads and responds using standard HTTP
                                APIs.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.12} y={20}>
                        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
                            <div className="border-b border-zinc-200 px-4 py-3 font-mono text-xs text-zinc-500 dark:border-zinc-800">
                                POST /webhooks/cortlet
                            </div>

                            <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                <code>{`{
  "event": "message",
  "connectionId": "ctx_9acfdd43",
  "data": {
    "type": "message",
    "text": "hello"
  }
}`}</code>
              </pre>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* FOOT CTA */}
            <section>
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="mx-auto mb-6 h-2 w-2 rounded-full bg-[var(--cortlet-green)]" />

                            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                                Start with the basics.
                            </h2>

                            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                Learn the core connection flow, then move into webhooks and the
                                HTTP API.
                            </p>

                            <div className="mt-8 flex justify-center">
                                <Hover>
                                    <Link
                                        href="/docs/getting-started"
                                        className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                                    >
                                        Read getting started
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