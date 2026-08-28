import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { waitlist } from "@/db/schema";

export async function GET(req: NextRequest): Promise<NextResponse> {
  // 1. Extract the token query parameter from the incoming URL.
  const token = req.nextUrl.searchParams.get("token");

  // 2. Guard: if token is missing or empty, bounce home with an explicit error flag.
  if (!token || token.trim() === "") {
    return NextResponse.redirect(new URL("/?error=missing_token", req.url));
  }

  try {
    // 3. SECURE MUTATION CHECK — Atomically modify status and demand row feedback
    const updatedRows = await db
        .update(waitlist)
        .set({ status: "verified" })
        .where(eq(waitlist.referralToken, token))
        .returning({ id: waitlist.id });

    // CRITICAL CODERABBIT GUARD: Reject random or un-registered handshake hashes
    if (updatedRows.length === 0) {
      return NextResponse.redirect(new URL("/?error=invalid_token", req.url));
    }

    // 4. On success, redirect home with verified flag and referral token appended.
    return NextResponse.redirect(
        new URL(`/?verified=true&ref=${encodeURIComponent(token)}`, req.url)
    );
  } catch (error) {
    console.error("Verification Pipeline Exception:", error);
    // 5. On any database or network failure, redirect home with an error flag.
    return NextResponse.redirect(
        new URL("/?error=verification_failed", req.url)
    );
  }
}
