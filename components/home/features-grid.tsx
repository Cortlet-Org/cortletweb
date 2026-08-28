"use client";

import { useState, useEffect } from "react";
import { Lock, ArrowLeftRight } from "lucide-react";

// ── Injection Loop micro-visual: cycles orange → emerald on 1.2 s interval
function InjectionVisual() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setActive((v) => !v), 1200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center gap-2 font-mono text-xs tracking-tight mt-2">
      <span className={active ? "text-orange-400" : "text-emerald-500"}>HTTP POST</span>
      <ArrowLeftRight size={12} className={active ? "text-orange-400" : "text-emerald-500"} aria-hidden="true" />
      <span className={active ? "text-orange-400" : "text-emerald-500"}>HTTP 200 OK</span>
    </div>
  );
}

interface FeatureItem {
  title: string;
  description: string;
  visual: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "Connection Locking",
    description: "Holds stable wss:// connections and authenticates clients via a short-lived opaque handshake token passed as ?ticket= — burned immediately on successful connection.",
    visual: (
      <div className="flex items-center gap-2 font-mono text-xs tracking-tight mt-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        <Lock size={12} className="text-emerald-500 shrink-0" aria-hidden="true" />
        <span className="text-emerald-500">ctx_98f21a3b — LOCKED</span>
      </div>
    ),
  },
  {
    title: "Stateless Translation",
    description: "Wraps client JSON frames into a CortletPacket and fires a synchronous HTTP POST to your backend.",
    visual: (
      <div className="flex flex-col gap-1 font-mono text-xs tracking-tight mt-2">
        <span className="text-amber-400">WSS ← {`{"action":"broadcast"}`}</span>
        <span className="text-zinc-400">↓ translate</span>
        <span className="text-emerald-500">POST /webhook — CortletPacket</span>
      </div>
    ),
  },
  {
    title: "Injection Loop",
    description: "Receives the backend HTTP 200 response and injects it back down the open WebSocket pipe.",
    visual: <InjectionVisual />,
  },
];

export function FeaturesGrid() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="font-mono font-bold tracking-tight text-sm text-zinc-950 dark:text-zinc-50 text-center mb-12 uppercase">
        How Cortlet Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(({ title, description, visual }) => (
          <div
            key={title}
            className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800"
          >
            <h3 className="font-mono font-bold tracking-tight text-xs text-zinc-950 dark:text-zinc-50 uppercase">
              {title}
            </h3>
            <p className="font-mono tracking-tight text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {description}
            </p>
            {visual}
          </div>
        ))}
      </div>
    </section>
  );
}
