import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Hover } from "@/components/animations/Hover";
import { GatewayDiagram } from "@/components/diagrams/GatewayDiagram";
import { CodeMark3D } from "@/components/3d/CodeMark3D";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
            {/* HERO */}
            <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl text-center">
                        <FadeIn>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 font-mono text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--cortlet-green)]" />
                                EARLY ACCESS
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.08}>
                            <h1 className="text-balance text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                                WebSockets are stateful.
                                <br />

                                <span className="text-zinc-500 dark:text-zinc-400">
                  Your serverless cloud is not.
                </span>
                            </h1>
                        </FadeIn>

                        <div className="mx-auto mt-12 max-w-xl">
                            <CodeMark3D />
                        </div>

                        <FadeIn delay={0.16}>
                            <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
                                Cortlet keeps persistent WebSocket connections alive and
                                translates realtime events into ordinary HTTP webhooks your
                                backend already understands.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.24}>
                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <Hover>
                                    <Link
                                        href="#waitlist"
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
                                        View docs
                                        <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                                    </Link>
                                </Hover>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Gateway diagram */}
                    <FadeIn delay={0.32} y={24}>
                        <div className="mx-auto mt-20 max-w-5xl">
                            <GatewayDiagram />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CORE FLOW */}
            <section className="border-b border-zinc-200 dark:border-zinc-800" id="features">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    <FadeIn>
                        <div className="max-w-2xl">
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                How it works
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                Realtime in.
                                <br />
                                Ordinary HTTP out.
                            </h2>

                            <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                Your application connects to Cortlet over WebSockets. Cortlet
                                keeps the persistent connection alive and forwards events to
                                your backend using HTTP.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="mt-16 grid border-y border-zinc-200 dark:border-zinc-800 md:grid-cols-3">
                        <FadeIn delay={0.05}>
                            <div className="h-full py-8 md:border-r md:border-zinc-200 md:px-8 md:first:pl-0 dark:md:border-zinc-800">
                                <span className="font-mono text-xs text-zinc-400">01</span>

                                <h3 className="mt-5 text-lg font-medium">Connect</h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    Clients establish persistent WebSocket connections through
                                    the Cortlet gateway.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.12}>
                            <div className="h-full border-t border-zinc-200 py-8 md:border-r md:border-t-0 md:border-zinc-200 md:px-8 dark:border-zinc-800 dark:md:border-zinc-800">
                                <span className="font-mono text-xs text-zinc-400">02</span>

                                <h3 className="mt-5 text-lg font-medium">Forward</h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    WebSocket events become ordinary HTTP webhook requests sent
                                    to your existing backend.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.19}>
                            <div className="h-full border-t border-zinc-200 py-8 md:border-t-0 md:px-8 md:pr-0 dark:border-zinc-800">
                                <span className="font-mono text-xs text-zinc-400">03</span>

                                <h3 className="mt-5 text-lg font-medium">Respond</h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    Send through Cortlet&apos;s HTTP API and the message is routed
                                    back to the correct socket.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* PROTOCOL TRANSFORMATION */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <FadeIn>
                            <div>
                                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                    Translation layer
                                </p>

                                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                    Your backend stays boring.
                                </h2>

                                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                    No persistent socket server. No connection registry in your
                                    application. No rewrite around a realtime framework.
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
                </div>
            </section>

            {/* LIVE PROXY */}
            <section className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    <FadeIn>
                        <div className="mb-12">
                            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--cortlet-green)]">
                                Gateway activity
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                                Connections moving in realtime.
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.12} y={20}>
                        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                            <div className="grid grid-cols-[1fr_auto_auto] gap-6 border-b border-zinc-200 bg-zinc-50 px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-zinc-400 dark:border-zinc-800 dark:bg-zinc-950">
                                <span>Connection</span>
                                <span>Event</span>
                                <span>Status</span>
                            </div>

                            {[
                                ["ctx_9acfdd43", "MESSAGE", "200 OK"],
                                ["ctx_615ec865", "CONNECT", "200 OK"],
                                ["ctx_39c9153", "MESSAGE", "504"],
                                ["ctx_04add9cc", "DISCONNECT", "200 OK"],
                            ].map(([connection, event, status]) => (
                                <div
                                    key={connection}
                                    className="grid grid-cols-[1fr_auto_auto] gap-6 border-b border-zinc-200 px-5 py-4 font-mono text-xs last:border-0 dark:border-zinc-800"
                                >
                  <span className="truncate text-zinc-600 dark:text-zinc-300">
                    {connection}
                  </span>

                                    <span className="text-zinc-400">{event}</span>

                                    <span
                                        className={
                                            status === "200 OK"
                                                ? "text-[var(--cortlet-green)]"
                                                : "text-zinc-500"
                                        }
                                    >
                    {status}
                  </span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* WAITLIST */}
            <section id="waitlist">
                <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl text-center">
                        <FadeIn>
                            <div className="mx-auto mb-6 h-2 w-2 rounded-full bg-[var(--cortlet-green)]" />

                            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                                Realtime without the realtime infrastructure.
                            </h2>

                            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                Cortlet is currently in development. Join the waitlist for early
                                access and launch updates.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.12}>
                            <WaitlistForm />
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}