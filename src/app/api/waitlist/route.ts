import { NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/lib/waitlist-email";
import {
  clientKey,
  parseWaitlistBody,
  persistWaitlist,
  takeRateLimit,
} from "@/lib/waitlist";

export async function POST(request: Request) {
  const key = clientKey(request.headers);
  const limit = takeRateLimit(key);
  const rateHeaders = {
    "X-RateLimit-Limit": "5",
    "X-RateLimit-Remaining": String(limit.remaining),
    "X-RateLimit-Reset": String(Math.ceil(limit.resetAt / 1000)),
  };

  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429, headers: rateHeaders },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid" },
      { status: 400, headers: rateHeaders },
    );
  }

  const parsed = parseWaitlistBody(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { ok: false, error: "invalid" },
      { status: 400, headers: rateHeaders },
    );
  }

  // Honeypot filled: pretend success so bots do not retry.
  if (parsed.bot) {
    return NextResponse.json({ ok: true }, { headers: rateHeaders });
  }

  try {
    await persistWaitlist({
      email: parsed.data.email,
      country: parsed.data.country,
      parrilla: parsed.data.parrilla,
      ref: parsed.data.ref,
      locale: parsed.data.locale,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "unavailable" },
      { status: 503, headers: rateHeaders },
    );
  }

  // Welcome mail is courtesy. The person is already on the list.
  await sendWelcomeEmail({
    email: parsed.data.email,
    locale: parsed.data.locale,
  });

  return NextResponse.json({ ok: true }, { headers: rateHeaders });
}
