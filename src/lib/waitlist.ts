import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const WaitlistSchema = z.object({
  email: z.string().trim().email(),
  country: z.enum(["AR", "ES", "OTHER"]).optional(),
  website: z.string().max(0).optional(),
});

export type WaitlistPayload = z.infer<typeof WaitlistSchema>;

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function clientKey(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return headers.get("x-real-ip") || "unknown";
}

export function takeRateLimit(key: string): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
} {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + WINDOW_MS;
    buckets.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: MAX_PER_WINDOW - 1, resetAt };
  }

  if (existing.count >= MAX_PER_WINDOW) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: MAX_PER_WINDOW - existing.count,
    resetAt: existing.resetAt,
  };
}

export function parseWaitlistBody(input: unknown):
  | { ok: true; data: WaitlistPayload; bot: boolean }
  | { ok: false; error: "invalid" } {
  if (
    typeof input === "object" &&
    input !== null &&
    "website" in input &&
    typeof (input as { website?: unknown }).website === "string" &&
    (input as { website: string }).website.length > 0
  ) {
    return { ok: true, data: { email: "bot@invalid.local" }, bot: true };
  }

  const parsed = WaitlistSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "invalid" };
  }

  return { ok: true, data: parsed.data, bot: false };
}

export async function persistWaitlist(entry: {
  email: string;
  country?: "AR" | "ES" | "OTHER";
}): Promise<void> {
  const resendConfigured = Boolean(
    process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID,
  );

  // On Vercel, writing to /tmp always succeeds but is not durable. When Resend
  // is configured it is the source of truth, so a Resend failure must fail the
  // request instead of reporting a false success.
  if (resendConfigured) {
    const resendOk = await persistToResend(entry);
    if (!resendOk) {
      throw new Error("waitlist persist failed");
    }
    await persistToFile(entry);
    return;
  }

  const fileOk = await persistToFile(entry);
  if (!fileOk) {
    throw new Error("waitlist persist failed");
  }
}

async function persistToFile(entry: {
  email: string;
  country?: "AR" | "ES" | "OTHER";
}): Promise<boolean> {
  const candidates = [
    process.env.WAITLIST_DIR,
    path.join(process.cwd(), "data"),
    "/tmp/lume-waitlist",
  ].filter((value): value is string => Boolean(value));

  const line = `${JSON.stringify({
    receivedAt: new Date().toISOString(),
    email: entry.email,
    country: entry.country ?? null,
  })}\n`;

  for (const dir of candidates) {
    try {
      await mkdir(dir, { recursive: true });
      await appendFile(path.join(dir, "waitlist.jsonl"), line, "utf8");
      return true;
    } catch {
      continue;
    }
  }

  return false;
}

async function persistToResend(entry: {
  email: string;
  country?: "AR" | "ES" | "OTHER";
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !segmentId) {
    return false;
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  try {
    // Resend contacts are global. Create first, then attach the waitlist
    // segment (RESEND_AUDIENCE_ID still holds that UUID).
    const created = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers,
      body: JSON.stringify({
        email: entry.email,
        unsubscribed: false,
      }),
    });

    if (!created.ok && created.status !== 409) {
      console.error("Resend waitlist contact create failed", {
        status: created.status,
        ...(await resendErrorSummary(created)),
      });
      return false;
    }

    return addContactToSegment(entry.email, segmentId, headers);
  } catch {
    return false;
  }
}

async function addContactToSegment(
  email: string,
  segmentId: string,
  headers: { Authorization: string; "Content-Type": string },
): Promise<boolean> {
  try {
    const attached = await fetch(
      `https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${segmentId}`,
      {
        method: "POST",
        headers,
      },
    );

    if (attached.ok || attached.status === 409) {
      return true;
    }

    console.error("Resend waitlist segment attach failed", {
      status: attached.status,
      ...(await resendErrorSummary(attached)),
    });
    return false;
  } catch {
    return false;
  }
}

/** Resend error fields only. Never include the request email. */
async function resendErrorSummary(
  response: Response,
): Promise<{ name?: string; message?: string }> {
  try {
    const payload = (await response.json()) as {
      name?: unknown;
      message?: unknown;
    };
    const name = typeof payload.name === "string" ? payload.name : undefined;
    const rawMessage =
      typeof payload.message === "string" ? payload.message : undefined;
    const message = rawMessage?.replace(/\S+@\S+/g, "[email]");
    return { name, message };
  } catch {
    return {};
  }
}
