import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 min-h-screen flex flex-col items-center justify-center p-6 font-mono text-center">
      <p className="text-xs tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">
        cortlet://docs — DOCUMENTATION_NODE
      </p>

      <h1 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight uppercase mb-6">
        DOCS // ARCHITECTURAL_SPECIFICATION_COMING_SOON
      </h1>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed mb-6 opacity-70">
        Docs will come soon!
      </p>

      <Link
        href="/"
        className="text-[#10b981] hover:underline text-xs mt-6 font-mono"
      >
        ➔ Return to homepage
      </Link>
    </main>
  );
}
