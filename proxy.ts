import arcjet, { shield, fixedWindow } from "@arcjet/next";
import { NextRequest, NextResponse } from "next/server";

// Initialize the Arcjet client with our environment key and two layered rules:
// 1. Shield: blocks common web exploits (SQLi, XSS, protocol anomalies).
// 2. fixedWindow: rate-limits /api/waitlist to 5 requests per 60s per client IP.
const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    fixedWindow({
      mode: "LIVE",
      window: "60s",
      max: 5,
      characteristics: ["ip.src"],
    }),
  ],
});

export async function proxy(req: NextRequest): Promise<NextResponse> {
  // Run the request through all configured Arcjet security rules.
  const decision = await aj.protect(req);

  // If any rule is tripped, block the request immediately with a 429 response.
  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Too many network registration attempts. Operational node throttled." },
      { status: 429 },
    );
  }

  // Request is verified safe — pass execution downstream to the serverless endpoint.
  return NextResponse.next();
}

// Scope this proxy exclusively to the waitlist registration endpoint.
export const config = {
  matcher: ["/api/waitlist"],
};
