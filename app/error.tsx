"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="font-mono bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <p className="text-xs tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">
        cortlet://gateway — PIPELINE_FAULT_DETECTED
      </p>

      <h1 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight uppercase mb-4">
        500 Server Error
      </h1>

      {error.digest && (
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-2">
          digest: {error.digest}
        </p>
      )}

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-8 max-w-sm">
        An unrecoverable fault was detected in the rendering pipeline. Attempt a
        cold re-render or return to homepage.
      </p>

      <button
        type="button"
        onClick={reset}
        className="bg-[#10b981] text-black font-bold font-mono px-4 py-2 rounded-md hover:bg-[#34d399] transition-transform duration-150 active:scale-95"
      >
        ↺ Re-attempt Render
      </button>
    </main>
  );
}
