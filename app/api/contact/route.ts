import { contactEmail } from "@/lib/site";

/**
 * Contact form endpoint.
 *
 * One submission produces exactly one transactional email to the fixed
 * recipient below, sent through Postmark's REST API. No SDK: the API is a
 * single JSON POST, and a dependency would only add weight to the Worker.
 *
 * The recipient is hard-coded on the server. Nothing in the request body can
 * redirect where the message goes.
 */

const POSTMARK_ENDPOINT = "https://api.postmarkapp.com/email";

/** The approved topic choices, mirroring the select on the Contact page. */
const TOPICS = ["Academy", "Lab", "Stage", "Voice", "Other"] as const;

/** Generous enough for a real enquiry, small enough to bound the payload. */
const LIMITS = {
  name: 100,
  company: 120,
  email: 254,
  message: 4000,
} as const;

/** Deliberately permissive: one @, no whitespace, a dot in the domain. */
const EMAIL = /^[^\s@]{1,64}@[^\s@.]+(\.[^\s@.]+)+$/;

/**
 * Control characters would let a submitted value forge extra mail headers.
 * Compared by code point rather than written as a regex escape, so this file
 * stays plain ASCII and the rule is legible in review.
 */
function isControl(codePoint: number) {
  return codePoint < 0x20 || codePoint === 0x7f;
}

type Submission = {
  name: string;
  company: string;
  email: string;
  topic: string;
  message: string;
};

function bad(status: number) {
  return Response.json({ ok: false }, { status });
}

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return Array.from(value, (ch) => (isControl(ch.charCodeAt(0)) ? " " : ch))
    .join("")
    .trim();
}

function validate(body: Record<string, unknown>): Submission | null {
  const name = clean(body.name);
  const company = clean(body.company);
  const email = clean(body.email);
  const topic = clean(body.topic);
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > LIMITS.name) return null;
  if (company.length > LIMITS.company) return null;
  if (!email || email.length > LIMITS.email || !EMAIL.test(email)) return null;
  // The select carries no `required` attribute, so an empty topic is valid.
  if (topic && !TOPICS.includes(topic as (typeof TOPICS)[number])) return null;
  if (!message || message.length > LIMITS.message) return null;

  return { name, company, email, topic, message };
}

function composeEmail(submission: Submission) {
  const { name, company, email, topic, message } = submission;
  const subject = topic
    ? `Growing Clever website enquiry — ${topic}`
    : "Growing Clever website enquiry";

  const body = [
    `Name: ${name}`,
    `Company / Organisation: ${company || "—"}`,
    `Email: ${email}`,
    `What they would like to talk about: ${topic || "—"}`,
    "",
    "Message:",
    message,
    "",
    "—",
    "Sent from the Growing Clever website contact form.",
  ].join("\n");

  return { subject, body };
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return bad(415);
  }

  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return bad(400);
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return bad(400);
  }

  const body = parsed as Record<string, unknown>;

  // Honeypot: a field no human sees and no assistive technology reaches.
  // Answer as though the message were accepted so a bot learns nothing, but
  // send no email.
  if (clean(body.company_website)) {
    return Response.json({ ok: true });
  }

  const submission = validate(body);
  if (!submission) return bad(400);

  // Checked after validation so the endpoint's request contract holds — and can
  // be exercised — whether or not the secret happens to be configured.
  const token = process.env.POSTMARK_SERVER_TOKEN;
  if (!token) {
    // Never log the variable itself, only that it is absent.
    console.error("contact: POSTMARK_SERVER_TOKEN is not configured");
    return bad(500);
  }

  const { subject, body: text } = composeEmail(submission);

  let response: Response;
  try {
    response = await fetch(POSTMARK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Postmark-Server-Token": token,
      },
      body: JSON.stringify({
        From: contactEmail,
        To: contactEmail,
        // Bare address, never a display name built from submitted text.
        ReplyTo: submission.email,
        Subject: subject,
        TextBody: text,
        MessageStream: "outbound",
      }),
    });
  } catch (error) {
    console.error("contact: could not reach Postmark", error);
    return bad(502);
  }

  // Postmark answers 200 with ErrorCode 0 when it has accepted the message.
  let result: { ErrorCode?: number; Message?: string } = {};
  try {
    result = (await response.json()) as typeof result;
  } catch {
    // A 200 with an unreadable body still means accepted.
  }

  if (!response.ok || (result.ErrorCode !== undefined && result.ErrorCode !== 0)) {
    // Provider diagnostics only. The submission itself is never logged.
    console.error(
      `contact: Postmark rejected the message (HTTP ${response.status}, ErrorCode ${result.ErrorCode ?? "none"})`
    );
    return bad(502);
  }

  return Response.json({ ok: true });
}
