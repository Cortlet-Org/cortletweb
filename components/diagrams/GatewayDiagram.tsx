"use client";

import { motion } from "framer-motion";

export function GatewayDiagram() {
    return (
        <div className="relative min-h-[360px] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
            {/* Header */}
            <div className="absolute left-4 top-4 z-20 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--cortlet-green)]" />
                Live gateway
            </div>

            <div className="relative flex min-h-[360px] items-center justify-center px-6 py-16">
                <div className="relative grid w-full max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-3 md:gap-6">
                    {/* Browser */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-black">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-sm font-medium">Browser</span>

                                <span className="font-mono text-[10px] text-zinc-400">
                  CLIENT
                </span>
                            </div>

                            <div className="space-y-2 font-mono text-xs">
                                <div className="text-zinc-500 dark:text-zinc-400">
                                    wss://gateway.cortlet.com
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--cortlet-green)]" />
                                    <span className="text-zinc-700 dark:text-zinc-300">
                    connected
                  </span>
                                </div>

                                <div className="text-zinc-400">ctx_9acfdd43</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cortlet */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-10"
                    >
                        <div className="relative rounded-lg border border-[var(--cortlet-green)]/40 bg-white p-5 dark:bg-black">
                            <motion.div
                                animate={{
                                    scale: [1, 1.08, 1],
                                    opacity: [0.25, 0.45, 0.25],
                                }}
                                transition={{
                                    duration: 2.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="pointer-events-none absolute inset-0 rounded-lg border border-[var(--cortlet-green)]"
                            />

                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-sm font-semibold">Cortlet</span>

                                <span className="font-mono text-[10px] text-[var(--cortlet-green)]">
                  GATEWAY
                </span>
                            </div>

                            <div className="space-y-2 font-mono text-xs">
                                <div className="text-zinc-500 dark:text-zinc-400">
                                    connection active
                                </div>

                                <div className="text-zinc-500 dark:text-zinc-400">
                                    translating event
                                </div>

                                <div className="text-[var(--cortlet-green)]">
                                    websocket → http
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Serverless */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-black">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-sm font-medium">Serverless</span>

                                <span className="font-mono text-[10px] text-zinc-400">
                  HTTP
                </span>
                            </div>

                            <div className="space-y-2 font-mono text-xs">
                                <div className="text-zinc-500 dark:text-zinc-400">
                                    POST /webhooks/cortlet
                                </div>

                                <div className="flex items-center gap-2">
                  <span className="text-[var(--cortlet-green)]">
                    200
                  </span>

                                    <span className="text-zinc-500 dark:text-zinc-400">
                    OK
                  </span>
                                </div>

                                <div className="text-zinc-400">42ms</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop connection lines */}
                    <div className="pointer-events-none absolute inset-0 hidden md:block">
                        <svg
                            viewBox="0 0 1000 300"
                            className="h-full w-full"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            {/* Browser -> Cortlet */}
                            <line
                                x1="255"
                                y1="150"
                                x2="410"
                                y2="150"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-zinc-300 dark:text-zinc-700"
                            />

                            {/* Cortlet -> Serverless */}
                            <line
                                x1="590"
                                y1="150"
                                x2="745"
                                y2="150"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-zinc-300 dark:text-zinc-700"
                            />

                            {/* Packet 1 */}
                            <motion.circle
                                r="5"
                                cy="150"
                                fill="var(--cortlet-green)"
                                animate={{
                                    cx: [255, 410],
                                    opacity: [0, 1, 1, 0],
                                }}
                                transition={{
                                    duration: 1.35,
                                    repeat: Infinity,
                                    repeatDelay: 0.55,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Packet 2 */}
                            <motion.circle
                                r="5"
                                cy="150"
                                fill="var(--cortlet-green)"
                                animate={{
                                    cx: [590, 745],
                                    opacity: [0, 1, 1, 0],
                                }}
                                transition={{
                                    duration: 1.35,
                                    delay: 0.6,
                                    repeat: Infinity,
                                    repeatDelay: 0.55,
                                    ease: "easeInOut",
                                }}
                            />
                        </svg>
                    </div>

                    {/* Mobile connection hints */}
                    <div className="pointer-events-none absolute inset-0 md:hidden">
                        <motion.div
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-1/2 top-[29%] h-10 w-px -translate-x-1/2 bg-[var(--cortlet-green)]"
                        />

                        <motion.div
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: 1.8,
                                delay: 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-1/2 top-[61%] h-10 w-px -translate-x-1/2 bg-[var(--cortlet-green)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}