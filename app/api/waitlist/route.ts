
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";
import VerificationEmail from "../../../emails/verification";
import { db } from "@/db";
import { waitlist } from "@/db/schema";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is missing.");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest): Promise<NextResponse> {
  let email: string;
  try {
    const body = await request.json() as { email?: unknown };
    if (typeof body.email !== "string" || !EMAIL_RE.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    email = body.email.toLowerCase().trim();
  } catch {
    return NextResponse.json({ error: "Malformed JSON body." }, { status: 400 });
  }

  // Force secure configuration matching OWASP constraints
  const salt = process.env.CRYPTO_SECRET;
  if (!salt) {
    throw new Error("CRITICAL_SECURITY_FAULT: CRYPTO_SECRET is required to prevent token derivation.");
  }

  const newReferralToken = crypto
      .createHash("sha256")
      .update(`${email}:${salt}`)
      .digest("hex")
      .slice(0, 12);

  try {
    const [dbRow] = await db
        .insert(waitlist)
        .values({ email, referralToken: newReferralToken, status: "pending" })
        .onConflictDoUpdate({
          target: waitlist.email,
          set: { email },
        })
        .returning({ token: waitlist.referralToken });

    const activeToken = dbRow.token;

    // CRITICAL FIX: Resolve URL dynamically to natively support Vercel preview environments
    const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
    const isLocal = host.includes("localhost") || host.includes("127.0.0.1");

    const resolvedBaseUrl = isLocal
        ? (process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000")
        : `https://${host}`; // Dynamically binds deployment specific URL string domains

    const verifyUrl = `${resolvedBaseUrl.replace(/\/$/, "")}/api/waitlist/verify?token=${activeToken}`;

    // CRITICAL FIX: Explicitly evaluate Resend error responses to prevent silent dispatch dropouts
    const { error: mailError } = await resend.emails.send({
      from: "Cortlet Labs <hello@cortlet.com>",
      to: email,
      subject: "Action Required: Verify your Cortlet Beta access",
      react: VerificationEmail({ email, verifyUrl, referralToken: activeToken }),
    });

    if (mailError) {
      console.error("Resend API Provider Rejection Exception:", mailError);
      return NextResponse.json({ error: "Failed to dispatch verification email." }, { status: 502 });
    }

    // CRITICAL SECURITY FIX: Never return the credential token string back to unauthenticated clients
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Waitlist API Pipeline Exception:", error);
    return NextResponse.json({ error: "Internal System Gateway Error" }, { status: 500 });
  }
}
