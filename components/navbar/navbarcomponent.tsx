"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/docs", label: "Docs" },
  { href: "/legal", label: "Legal" },
  { href: "/about", label: "About" }
];

export function NavbarComponent() {
  const [open, setOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-black/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
              href="/"
              className="group flex items-center gap-2.5"
              aria-label="Cortlet home"
          >
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute h-2.5 w-2.5 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-125" />
            <span className="absolute h-5 w-5 rounded-full border border-emerald-500/30" />
          </span>

            <span className="text-sm font-semibold tracking-[-0.01em] text-zinc-950 dark:text-white">
            Cortlet
          </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                  <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
              ))}

              <a
                  href="https://github.com/cortlet-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
              <span className="relative h-4 w-4">
                <img
                    src="/GitHub_Invertocat_Black.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-4 w-4 dark:hidden"
                />

                <img
                    src="/GitHub_Invertocat_White.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 hidden h-4 w-4 dark:block"
                />
              </span>

                GitHub
              </a>
            </nav>

            <div className="mx-2 h-5 w-px bg-zinc-200 dark:bg-zinc-800" />

            <ThemeToggle />

            <Link
                href="/#waitlist"
                className="ml-2 inline-flex h-9 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Join waitlist
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={open}
            >
              {open ? (
                  <X size={18} aria-hidden="true" />
              ) : (
                  <Menu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open && (
            <div className="border-t border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-black md:hidden">
              <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-3 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                    >
                      {item.label}
                    </Link>
                ))}

                <a
                    href="https://github.com/cortlet-org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-md px-3 py-3 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                >
              <span className="relative h-4 w-4">
                <img
                    src="/GitHub_Invertocat_Black.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-4 w-4 dark:hidden"
                />

                <img
                    src="/GitHub_Invertocat_White.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 hidden h-4 w-4 dark:block"
                />
              </span>

                  GitHub
                </a>

                <div className="my-3 h-px bg-zinc-200 dark:bg-zinc-800" />

                <Link
                    href="/#waitlist"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-950 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  Join waitlist
                </Link>
              </nav>
            </div>
        )}
      </header>
  );
}