"use client";

import Link from "next/link";
import { Menu, Terminal, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function NavbarComponent() {
  const [open, setOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link
              href="/"
              className="flex items-center gap-2 text-zinc-950 dark:text-zinc-50"
          >
            <Terminal size={16} aria-hidden="true" />
            <span className="font-mono text-sm font-bold tracking-wider">
            CORTLET
          </span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-5 md:flex">
            <nav className="flex items-center gap-6">
              <Link
                  href="/#waitlist"
                  className="text-xs text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
              >
                Waitlist
              </Link>

              <Link
                  href="/docs"
                  className="text-xs text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
              >
                Docs
              </Link>

              <Link
                  href="/legal"
                  className="text-xs text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
              >
                Legal
              </Link>

              <a
                  href="https://github.com/cortlet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
              >
                GitHub
              </a>
            </nav>

            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
            <div className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black md:hidden">
              <nav className="mx-auto flex max-w-5xl flex-col px-4 py-3 sm:px-6">
                <Link
                    href="/#waitlist"
                    onClick={() => setOpen(false)}
                    className="border-b border-zinc-100 py-3 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Waitlist
                </Link>

                <Link
                    href="/docs"
                    onClick={() => setOpen(false)}
                    className="border-b border-zinc-100 py-3 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Docs
                </Link>

                <Link
                    href="/legal"
                    onClick={() => setOpen(false)}
                    className="border-b border-zinc-100 py-3 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:border-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Legal
                </Link>

                <a
                    href="https://github.com/cortlet"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="py-3 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  GitHub
                </a>
              </nav>
            </div>
        )}
      </header>
  );
}