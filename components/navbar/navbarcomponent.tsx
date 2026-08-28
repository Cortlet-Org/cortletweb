import { Terminal } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function NavbarComponent() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-950 dark:text-zinc-50">
          <Terminal size={16} aria-hidden="true" />
          <span className="font-mono font-bold text-sm tracking-wider">CORTLET</span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <a href="#waitlist" className="text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 text-xs transition-colors">
              Waitlist
            </a>
            <a href="/docs" className="text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 text-xs transition-colors">
              Docs
            </a>
            <a
              href="https://github.com/cortlet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 text-xs transition-colors"
            >
              GitHub
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
