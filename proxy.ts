import arcjet, { shield, fixedWindow, detectBot } from "@arcjet/next";
import { NextRequest, NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      // Define the array inline so TypeScript infers ArcjetBotCategory literals
      // instead of a generic 'string[]'
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        "CATEGORY:PREVIEW",
        "CATEGORY:MONITOR",
      ],
    }),
    fixedWindow({
      mode: "LIVE",
      window: "60s",
      max: 5,
      characteristics: ["ip.src"],
    }),
  ],
});

const RESTRICTED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "GB", "IS", "LI", "NO"
];

export async function proxy(req: NextRequest): Promise<NextResponse> {
  const country = req.headers.get("x-vercel-ip-country") || "";
  if (RESTRICTED_REGIONS.includes(country)) {
    return new NextResponse(
        "403_ACCESS_DENIED // GEOGRAPHIC_RESTRICTION_ACTIVE // CORTLET NETWORK OPERATIONS CLOSED IN THIS JURISDICTION.",
        { status: 403, headers: { "Content-Type": "text/plain" } }
    );
  }

  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json(
          { error: "Too many network registration attempts. Operational node throttled." },
          { status: 429 }
      );
    }

    if (decision.reason.isBot()) {
      return NextResponse.json(
          { error: "Automated scraper or unauthorized bot detected. Access denied." },
          { status: 403 }
      );
    }

    return NextResponse.json(
        { error: "Malicious network vector detected. Transaction terminated." },
        { status: 403 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/waitlist", "/api/waitlist/verify"],
};