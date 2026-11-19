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

export async function sendContactEmails(
  input: ContactFormInput
): Promise<void> {
  const resend = getResend();
  const { from, adminTo } = SEO_CONFIG.mail;
  const phone = input.phone?.trim() ? input.phone.trim() : "Not provided";

  const adminHtml = `
    <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #1c1917;">
      <h2 style="margin: 0 0 12px;">New contact form message</h2>
      <p style="margin: 0 0 16px; color: #57534e;">Someone reached out via abhias.com/contact.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 6px 0; color: #78716c; width: 110px;">Name</td><td style="padding: 6px 0;">${escapeHtml(
          input.name
        )}</td></tr>
        <tr><td style="padding: 6px 0; color: #78716c;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(
          input.email
        )}">${escapeHtml(input.email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #78716c;">Phone</td><td style="padding: 6px 0;">${escapeHtml(
          phone
        )}</td></tr>
        <tr><td style="padding: 6px 0; color: #78716c;">Subject</td><td style="padding: 6px 0;">${escapeHtml(
          input.subject
        )}</td></tr>
      </table>
      <div style="margin-top: 20px; padding: 16px; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(
        input.message
      )}</div>
    </div>
  `;

  const userHtml = `
    <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #1c1917;">
      <h2 style="margin: 0 0 12px;">Thanks for reaching out, ${escapeHtml(
        input.name
      )}</h2>
      <p style="margin: 0 0 12px; color: #57534e;">
        I got your message about <strong>${escapeHtml(input.subject)}</strong>.
        I usually reply within 1-2 business days.
      </p>
      <p style="margin: 0 0 16px; color: #57534e;">Here is a copy of what you sent:</p>
      <div style="padding: 16px; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(
        input.message
      )}</div>
      <p style="margin: 20px 0 0; color: #78716c; font-size: 14px;">
        — Abhishek<br />
        <a href="https://abhias.com" style="color: #f97316;">abhias.com</a>
      </p>
    </div>
  `;

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
      subject: `Thanks for your message — Abhishek`,
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
