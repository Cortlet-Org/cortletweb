"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

interface StatusVariant { code: number; label: string; color: string; }
interface TickerEntry   { id: string; connectionId: string; clientId: string; label: string; color: string; }

const STATUS_POOL: StatusVariant[] = [
  { code: 200, label: "HTTP 200 OK",              color: "text-emerald-500" },
  { code: 400, label: "HTTP 400 Bad Request",     color: "text-amber-400"  },
  { code: 401, label: "HTTP 401 Unauthorized",    color: "text-red-500"    },
  { code: 404, label: "HTTP 404 Not Found",       color: "text-zinc-400"   },
  { code: 504, label: "HTTP 504 Gateway Timeout", color: "text-orange-400" },
];

const SEED: TickerEntry[] = [
  { id: "1", connectionId: "ctx_98f21a3b", clientId: "user_4a2c", label: "HTTP 200 OK",           color: "text-emerald-500" },
  { id: "2", connectionId: "ctx_3c7d44e1", clientId: "user_9f1d", label: "HTTP 400 Bad Request",  color: "text-amber-400"  },
  { id: "3", connectionId: "ctx_a12f09cc", clientId: "user_b3e7", label: "HTTP 200 OK",           color: "text-emerald-500" },
  { id: "4", connectionId: "ctx_77b2e5f0", clientId: "user_c5a0", label: "HTTP 401 Unauthorized", color: "text-red-500"    },
];

let _counter = 5;
function nextEntry(): TickerEntry {
  const connHex = Math.random().toString(16).slice(2, 10);
  const userHex = Math.random().toString(16).slice(2, 6);
  const variant = STATUS_POOL[Math.floor(Math.random() * STATUS_POOL.length)];
  return { id: String(_counter++), connectionId: `ctx_${connHex}`, clientId: `user_${userHex}`, label: variant.label, color: variant.color };
}

export function HeroSection() {
  const [entries, setEntries] = useState<TickerEntry[]>(SEED);

  useEffect(() => {
    const timer = setInterval(() => {
      setEntries((prev) => [nextEntry(), ...prev].slice(0, 6));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-white dark:bg-black">
      {/* Dot-matrix radial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,#d4d4d8_1px,transparent_1px)] dark:[background-image:radial-gradient(circle,#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-60"
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
        <p className="font-mono text-xs tracking-widest uppercase text-emerald-500">
          Cortlet — WebSocket Gateway
        </p>

        <h1 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-zinc-950 dark:text-zinc-50">
          WebSockets are stateful.{" "}
          <span className="text-zinc-400 dark:text-zinc-500">
            Your serverless cloud is not.
          </span>
        </h1>

        <p className="font-mono text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
          Cortlet bridges the gap — translating persistent client connections into
          plain HTTP webhooks your serverless functions already understand.
        </p>

        {/* Live Proxy Ticker */}
        <div className="w-full max-w-lg rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-200 dark:border-zinc-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">Live Proxy Ticker</span>
          </div>
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {entries.map((entry) => (
              <li key={entry.id} className="flex items-center justify-between px-4 py-2 transition-all duration-300 ease-out motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2">
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 truncate">
                  wss://connect?connectionId={entry.connectionId}&clientId={entry.clientId}
                </span>
                <span className={`font-mono text-xs ml-3 shrink-0 ${entry.color}`}>
                  ➔ {entry.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#waitlist"
          className="inline-flex items-center gap-2 rounded-full bg-[#10b981] hover:bg-[#059669] dark:hover:bg-[#34d399] text-white dark:text-black font-sans font-medium text-sm px-6 py-3 transition-colors transition-transform duration-150 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
        >
          <ArrowDown size={16} aria-hidden="true" />
          Join the waitlist
        </a>
      </div>
    </section>
  );
}
