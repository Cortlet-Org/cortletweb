"use client";

import { useState } from "react";
import { Mail, XCircle } from "lucide-react";
import { track } from "@vercel/analytics";

type SubmitStatus = "idle" | "loading" | "success" | "invalid" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [referralToken, setReferralToken] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        setReferralToken(data.referralToken ?? null);
        setStatus("success");
        track("waitlist_signup_success");
      } else {
        setStatus(res.status === 400 ? "invalid" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="px-6 py-24 max-w-xl mx-auto">
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black overflow-hidden">
        {/* Terminal header bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
            REQUEST ACCESS
          </span>
        </div>

        <div className="px-6 py-8">
          <h2 className="font-mono font-bold tracking-tight text-sm text-zinc-950 dark:text-zinc-50 uppercase mb-1">
            Request Early Access
          </h2>
          <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mb-6">
            Submit your email address to join the waitlist.
          </p>

          {status === "success" ? (
            <div
              role="status"
              className="rounded-lg border border-emerald-500 bg-emerald-500/10 px-5 py-4 font-mono text-xs text-emerald-500 space-y-1"
            >
              <p className="text-emerald-400 uppercase tracking-widest text-[10px] mb-2">
                ✓ Registration Received
              </p>
              <p className="text-zinc-400 pt-1">
                Check your inbox to verify you joined the waitlist.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-3 py-2.5 focus-within:ring-2 focus-within:ring-emerald-500">
                <Mail size={14} className="text-zinc-400 shrink-0" aria-hidden="true" />
                <input
                  type="email"
                  aria-label="Email address"
                  aria-invalid={status === "invalid"}
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent font-mono text-xs text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none"
                />
              </div>

              {status === "loading" && (
                <p className="font-mono text-xs text-emerald-500 animate-pulse">
                  Transmitting client vector payload...
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-lg bg-[#10b981] hover:bg-[#34d399] text-black font-mono font-bold text-xs px-6 py-2.5 transition-colors transition-transform duration-150 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
              >
                {status === "loading" ? "Transmitting..." : "Join the Waitlist"}
              </button>

              {(status === "invalid" || status === "error") && (
                <div role="alert" className="flex items-center gap-1.5">
                  <XCircle className="text-red-500 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="text-red-500 dark:text-red-400 font-mono text-xs tracking-tight animate-in fade-in-0 slide-in-from-top-1 duration-150">
                    {status === "invalid"
                      ? "Please enter a valid developer email"
                      : "Network error. Please try again later."}
                  </span>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
