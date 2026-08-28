import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-zinc-950 dark:bg-black dark:text-zinc-50 font-mono px-6 text-center">
      <p className="text-xs tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">
        cortlet://gateway — ROUTE_RESOLUTION_FAILURE
      </p>
      <h1 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight uppercase mb-6">
        404 // NETWORK_NODE_NOT_FOUND
      </h1>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-8 max-w-sm">
        The requested node vector does not exist in the routing table. Verify the path and retry.
      </p>
      <Link href="/" className="text-[#10b981] hover:underline font-mono text-sm">
        ← Return to home node
      </Link>
    </main>
  );
}
