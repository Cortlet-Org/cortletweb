"use client";

import { FormEvent, useState } from "react";
import { Hover } from "@/components/animations/Hover";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const normalizedEmail = email.trim().toLowerCase();

        if (!normalizedEmail) {
            setStatus("error");
            setMessage("Enter your email address.");
            return;
        }

        try {
            setStatus("loading");
            setMessage("");

            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: normalizedEmail,
                }),
            });

            const data = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(
                    data?.message ??
                    data?.error ??
                    "Something went wrong. Please try again."
                );
            }

            setStatus("success");
            setMessage(
                data?.message ?? "Check your inbox to verify your email."
            );

            setEmail("");
        } catch (error) {
            setStatus("error");

            setMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        }
    }

    return (
        <div className="mx-auto mt-8 w-full max-w-md">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
            >
                <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                </label>

                <input
                    id="waitlist-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    disabled={status === "loading"}
                    className="h-11 min-w-0 flex-1 rounded-md border border-zinc-300 bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-[var(--cortlet-green)] disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-700"
                />

                <Hover>
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="h-11 whitespace-nowrap rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                        {status === "loading" ? "Joining..." : "Join waitlist"}
                    </button>
                </Hover>
            </form>

            <div
                aria-live="polite"
                className="mt-4 min-h-5 text-center text-sm"
            >
                {status === "success" && (
                    <p className="text-[var(--cortlet-green)]">
                        {message}
                    </p>
                )}

                {status === "error" && (
                    <p className="text-red-500">
                        {message}
                    </p>
                )}

                {status === "idle" && (
                    <p className="font-mono text-[11px] text-zinc-400">
                        Product updates only. No spam.
                    </p>
                )}
            </div>
        </div>
    );
}