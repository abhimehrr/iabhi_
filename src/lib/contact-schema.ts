import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z
    .email("Enter a valid email address")
    .trim()
    .max(120, "Email is too long")
    .lowercase(),
  phone: z
    .string()
    .trim()
    .max(16, "Phone is too long")
    .default("")
    .refine((value) => value === "" || /^\+?[0-9]+$/.test(value), {
      message: "Phone can only include digits and an optional +",
    })
    .refine((value) => value === "" || value.replace(/\D/g, "").length >= 7, {
      message: "Enter a valid phone number",
    }),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
  /** Honeypot — must stay empty */
  website: z
    .string()
    .default("")
    .refine((value) => value.length === 0, {
      message: "Invalid submission",
    }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>;

export function validateContactForm(data: unknown):
  | {
      success: true;
      data: ContactFormInput;
    }
  | {
      success: false;
      errors: ContactFormErrors;
    } {
  const parsed = contactFormSchema.safeParse(data);
  if (parsed.success) {
    return { success: true, data: parsed.data };
  }

  const errors: ContactFormErrors = {};
  for (const issue of parsed.error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !errors[key as keyof ContactFormInput]) {
      errors[key as keyof ContactFormInput] = issue.message;
    }
  }
  return { success: false, errors };
}
