import arcjet, { shield, fixedWindow } from "@arcjet/next";
import { NextRequest, NextResponse } from "next/server";

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

const RESTRUCTED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "GB", "IS", "LI", "NO"
];

export async function proxy(req: NextRequest): Promise<NextResponse> {
  // 1. FIRST DEFENSIVE LAYER — Immediate Edge Geoblock
  const country = req.headers.get("x-vercel-ip-country") || "";
  if (RESTRUCTED_REGIONS.includes(country)) {
    return new NextResponse(
        "403_ACCESS_DENIED // GEOGRAPHIC_RESTRICTION_ACTIVE // CORTLET NETWORK OPERATIONS CLOSED IN THIS JURISDICTION.",
        { status: 403, headers: { "Content-Type": "text/plain" } }
    );
  }

  // 2. SECOND DEFENSIVE LAYER — Run Arcjet Security Analytics Rules
  const decision = await aj.protect(req);

  // 3. CODERABBIT FIX — Dynamic Denial HTTP Status Resolution
  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json(
          { error: "Too many network registration attempts. Operational node throttled." },
          { status: 429 }
      );
    }

    // Fallback status for Shield bot or injection rule blocks
    return NextResponse.json(
        { error: "Malicious network vector detected. Transaction terminated." },
        { status: 403 }
    );
  }

  // 4. REQUEST VERIFIED SAFE — Pass execution downstream to serverless endpoints
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/waitlist"],
};
