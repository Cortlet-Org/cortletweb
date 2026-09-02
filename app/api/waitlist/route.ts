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

export async function POST(
    request: NextRequest
): Promise<NextResponse> {
  let email: string;

  try {
    const body = (await request.json()) as {
      email?: unknown;
    };

    if (
        typeof body.email !== "string" ||
        !EMAIL_RE.test(body.email)
    ) {
      return NextResponse.json(
          { error: "Invalid email address." },
          { status: 400 }
      );
    }

    email = body.email.toLowerCase().trim();
  } catch {
    return NextResponse.json(
        { error: "Malformed JSON body." },
        { status: 400 }
    );
  }

  const newReferralToken =
      crypto.randomBytes(16).toString("hex");

  try {
    const [dbRow] = await db
        .insert(waitlist)
        .values({
          email,
          referralToken: newReferralToken,
          status: "pending",
        })
        .onConflictDoUpdate({
          target: waitlist.email,
          set: {
            email,
          },
        })
        .returning({
          token: waitlist.referralToken,
        });

    const activeToken = dbRow.token;

    const host =
        request.headers.get("x-forwarded-host") ||
        request.headers.get("host") ||
        "";

    const isLocal =
        host.includes("localhost") ||
        host.includes("127.0.0.1");

    const resolvedBaseUrl = isLocal
        ? process.env.NEXT_PUBLIC_BASE_URL ||
        "http://localhost:3000"
        : `https://${host}`;

    const verifyUrl =
        `${resolvedBaseUrl.replace(/\/$/, "")}` +
        `/api/waitlist/verify?token=${encodeURIComponent(activeToken)}`;

    const { error: mailError } =
        await resend.emails.send({
          from: "Cortlet Labs <hello@cortlet.com>",
          to: email,
          subject: "Verify your Cortlet waitlist email",
          react: VerificationEmail({
            email,
            verifyUrl,
            referralToken: activeToken,
          }),
        });

    if (mailError) {
      console.error(
          "Resend API error:",
          mailError
      );

      return NextResponse.json(
          {
            error:
                "Failed to send verification email.",
          },
          { status: 502 }
      );
    }

    return NextResponse.json(
        {
          success: true,
          message:
              "Check your inbox to verify your email.",
        },
        { status: 200 }
    );
  } catch (error) {
    console.error(
        "Waitlist API error:",
        error
    );

    return NextResponse.json(
        {
          error: "Internal server error.",
        },
        { status: 500 }
    );
  }
}