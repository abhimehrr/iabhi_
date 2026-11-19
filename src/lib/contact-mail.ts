import { Resend } from "resend";
import { SEO_CONFIG } from "@/lib/seo-config";
import type { ContactFormInput } from "@/lib/contact-schema";

function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const { personal, site } = SEO_CONFIG;

const signature = `
  <p style="margin:32px 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#18181b;">
    Abhishek<br />
    <a href="tel:${
      personal.phone
    }" style="color:#71717a;text-decoration:none;">${escapeHtml(
  personal.phoneDisplay
)}</a>
    <span style="color:#d4d4d8;">&nbsp;|&nbsp;</span>
    <a href="mailto:${
      personal.email
    }" style="color:#71717a;text-decoration:none;">${escapeHtml(
  personal.email
)}</a><br />
    <a href="${
      site.url
    }" style="color:#f97316;text-decoration:none;">${escapeHtml(
  site.url.replace("https://", "")
)}</a>
  </p>
`;

function wrap(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#fafafa;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:12px;padding:36px 32px;">
          <tr>
            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#3f3f46;">
              ${content}
              ${signature}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendContactEmails(
  input: ContactFormInput
): Promise<void> {
  const resend = getResend();
  const { from, adminTo } = SEO_CONFIG.mail;
  const phone = input.phone?.trim() ? input.phone.trim() : "—";
  const firstName = input.name.trim().split(/\s+/)[0] || input.name;

  const adminHtml = wrap(`
    <p style="margin:0 0 4px;font-size:13px;color:#a1a1aa;">New message</p>
    <h1 style="margin:0 0 24px;font-size:22px;font-weight:600;line-height:1.3;color:#18181b;">${escapeHtml(
      input.subject
    )}</h1>
    <p style="margin:0 0 6px;"><span style="color:#a1a1aa;">From</span>&nbsp;&nbsp;${escapeHtml(
      input.name
    )}</p>
    <p style="margin:0 0 6px;"><span style="color:#a1a1aa;">Email</span>&nbsp;&nbsp;<a href="mailto:${escapeHtml(
      input.email
    )}" style="color:#18181b;text-decoration:none;">${escapeHtml(
    input.email
  )}</a></p>
    <p style="margin:0 0 24px;"><span style="color:#a1a1aa;">Phone</span>&nbsp;&nbsp;${escapeHtml(
      phone
    )}</p>
    <div style="padding-top:20px;border-top:1px solid #f4f4f5;white-space:pre-wrap;color:#18181b;">${escapeHtml(
      input.message
    )}</div>
  `);

  const userHtml = wrap(`
    <h1 style="margin:0 0 16px;font-size:22px;font-weight:600;line-height:1.3;color:#18181b;">Thanks, ${escapeHtml(
      firstName
    )}.</h1>
    <p style="margin:0 0 16px;">
      I got your message about <strong style="color:#18181b;font-weight:600;">${escapeHtml(
        input.subject
      )}</strong>.
      I’ll reply within 1–2 business days.
    </p>
    <p style="margin:0 0 8px;font-size:13px;color:#a1a1aa;">Your message</p>
    <div style="padding:16px;background:#fafafa;border-radius:8px;white-space:pre-wrap;color:#18181b;">${escapeHtml(
      input.message
    )}</div>
  `);

  const [adminResult, userResult] = await Promise.all([
    resend.emails.send({
      from,
      to: adminTo,
      replyTo: input.email,
      subject: `[Contact] ${input.subject}`,
      html: adminHtml,
    }),
    resend.emails.send({
      from,
      to: input.email,
      replyTo: adminTo,
      subject: "Thanks for your message — Abhishek",
      html: userHtml,
    }),
  ]);

  if (adminResult.error) {
    throw new Error(adminResult.error.message || "Failed to notify admin");
  }
  if (userResult.error) {
    throw new Error(
      userResult.error.message || "Failed to send confirmation email"
    );
  }
}
