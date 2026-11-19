import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/contact-schema";
import { sendContactEmails } from "@/lib/contact-mail";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const ip = getClientIp(request);
    const limited = rateLimit(`contact:${ip}`, 3, 15 * 60 * 1000);

    if (!limited.success) {
      const retryAfter = Math.max(
        1,
        Math.ceil((limited.resetAt - Date.now()) / 1000)
      );
      return NextResponse.json(
        {
          ok: false,
          error: "Too many messages. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    const body: unknown = await request.json();
    const parsed = validateContactForm(body);

    if (!parsed.success) {
      const first = Object.values(parsed.errors)[0] ?? "Invalid input";
      return NextResponse.json(
        { ok: false, error: first, errors: parsed.errors },
        { status: 400 }
      );
    }

    // Honeypot filled → pretend success, skip sending
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    await sendContactEmails(parsed.data);

    return NextResponse.json(
      { ok: true },
      {
        headers: {
          "X-RateLimit-Remaining": String(limited.remaining),
        },
      }
    );
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Could not send your message. Please try again or email me directly.",
      },
      { status: 500 }
    );
  }
}
