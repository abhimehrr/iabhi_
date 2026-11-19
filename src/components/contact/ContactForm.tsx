"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import {
  validateContactForm,
  type ContactFormErrors,
} from "@/lib/contact-schema";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

function fieldClass(hasError: boolean): string {
  return [
    "mt-2 w-full rounded-xl border bg-surface px-4 py-3 text-[15px] text-primary outline-none transition placeholder:text-muted",
    hasError
      ? "border-red-500/70 focus:border-red-500"
      : "border-border focus:border-accent-orange",
  ].join(" ");
}

export function ContactForm(): React.JSX.Element {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ContactFormErrors];
        return next;
      });
    }
  };

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    if (submitting) return;

    const result = validateContactForm(form);
    if (!result.success) {
      setErrors(result.errors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }

      toast.success("Message sent. I'll get back to you soon.");
      setForm(INITIAL);
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Name"
          required
          error={errors.name}
          htmlFor="contact-name"
        >
          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={onChange}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            className={fieldClass(Boolean(errors.name))}
          />
        </Field>

        <Field
          label="Email"
          required
          error={errors.email}
          htmlFor="contact-email"
        >
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            className={fieldClass(Boolean(errors.email))}
          />
        </Field>
      </div>

      <Field
        label="Phone"
        optional
        error={errors.phone}
        htmlFor="contact-phone"
        hint="Include the country code if you are outside India (for example +1, +44)."
      >
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={onChange}
          autoComplete="tel"
          placeholder="+91 98765 43210"
          aria-invalid={Boolean(errors.phone)}
          className={fieldClass(Boolean(errors.phone))}
        />
      </Field>

      <Field
        label="Subject"
        required
        error={errors.subject}
        htmlFor="contact-subject"
      >
        <input
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={onChange}
          placeholder="Project idea, collaboration, or question"
          aria-invalid={Boolean(errors.subject)}
          className={fieldClass(Boolean(errors.subject))}
        />
      </Field>

      <Field
        label="Message"
        required
        error={errors.message}
        htmlFor="contact-message"
      >
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={onChange}
          rows={7}
          placeholder="What are you building, what’s stuck, and how can I help?"
          aria-invalid={Boolean(errors.message)}
          className={`${fieldClass(Boolean(errors.message))} min-h-40 resize-y`}
        />
      </Field>

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center gap-2 rounded-full border border-accent-orange/40 bg-accent-orange/10 px-6 py-3 text-[14px] font-medium text-accent-orange transition hover:border-accent-orange hover:bg-accent-orange/15 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send message"}
        {!submitting && (
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  optional,
  error,
  hint,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
  htmlFor: string;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="block">
      <label htmlFor={htmlFor} className="text-[13px] font-medium text-secondary">
        {label}
        {required ? <span className="text-accent-orange"> *</span> : null}
        {optional ? (
          <span className="font-normal text-muted"> (optional)</span>
        ) : null}
      </label>
      {children}
      {hint && !error ? (
        <p className="mt-2 text-[12px] leading-5 text-muted">{hint}</p>
      ) : null}
      {error ? (
        <p className="mt-2 text-[13px] text-red-500" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
