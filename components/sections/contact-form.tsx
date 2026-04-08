"use client";

import { useId, useRef, useState } from "react";

import { useLocale } from "@/components/providers/locale-provider";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  _honey: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  _honey: "",
};

export function ContactForm() {
  const { dictionary } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const formHeadingId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("company", formData.company);
    payload.append("message", formData.message);
    payload.append("_subject", `New Cavaleer inquiry from ${formData.name}`);
    payload.append("_template", "table");
    payload.append("_honey", formData._honey);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@cavaleer.nl", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  function toggleForm() {
    setIsOpen((current) => {
      const next = !current;

      if (!current) {
        setTimeout(() => {
          firstFieldRef.current?.focus();
        }, 50);
      }

      return next;
    });

    if (isOpen) {
      setStatus("idle");
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setFormData((current) => ({
      ...current,
      [key]: value,
    }));
  }

  return (
    <div className="w-full max-w-2xl">
      <button
        aria-controls="contact-form-panel"
        aria-expanded={isOpen}
        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blush focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
        onClick={toggleForm}
        type="button"
      >
        {isOpen ? dictionary.cta.closeForm : dictionary.cta.openForm}
      </button>

      {isOpen ? (
        <div
          aria-labelledby={formHeadingId}
          className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur sm:p-7"
          id="contact-form-panel"
        >
          <h3
            className="text-2xl font-semibold tracking-[-0.03em] text-white"
            id={formHeadingId}
          >
            {dictionary.cta.formTitle}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
            {dictionary.cta.formDescription}
          </p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm text-white/82">
              <span>{dictionary.cta.fields.name}</span>
              <input
                className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/38 focus:border-brand-blush"
                onChange={(event) => updateField("name", event.target.value)}
                placeholder={dictionary.cta.placeholders.name}
                ref={firstFieldRef}
                required
                type="text"
                value={formData.name}
              />
            </label>

            <label className="grid gap-2 text-sm text-white/82">
              <span>{dictionary.cta.fields.email}</span>
              <input
                className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/38 focus:border-brand-blush"
                onChange={(event) => updateField("email", event.target.value)}
                placeholder={dictionary.cta.placeholders.email}
                required
                type="email"
                value={formData.email}
              />
            </label>

            <label className="grid gap-2 text-sm text-white/82">
              <span>{dictionary.cta.fields.phone}</span>
              <input
                className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/38 focus:border-brand-blush"
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder={dictionary.cta.placeholders.phone}
                type="tel"
                value={formData.phone}
              />
            </label>

            <label className="grid gap-2 text-sm text-white/82">
              <span>{dictionary.cta.fields.company}</span>
              <input
                className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/38 focus:border-brand-blush"
                onChange={(event) => updateField("company", event.target.value)}
                placeholder={dictionary.cta.placeholders.company}
                type="text"
                value={formData.company}
              />
            </label>

            <label className="grid gap-2 text-sm text-white/82 sm:col-span-2">
              <span>{dictionary.cta.fields.message}</span>
              <textarea
                className="min-h-36 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/38 focus:border-brand-blush"
                onChange={(event) => updateField("message", event.target.value)}
                placeholder={dictionary.cta.placeholders.message}
                required
                value={formData.message}
              />
            </label>

            <input
              aria-hidden="true"
              autoComplete="off"
              className="hidden"
              name="_honey"
              onChange={(event) => updateField("_honey", event.target.value)}
              tabIndex={-1}
              type="text"
              value={formData._honey}
            />

            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink transition hover:-translate-y-0.5 hover:bg-brand-blush disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? dictionary.cta.sending : dictionary.cta.submit}
              </button>

              <p
                aria-live="polite"
                className={`text-sm ${
                  status === "success"
                    ? "text-brand-blush"
                    : status === "error"
                      ? "text-[#f7c7c7]"
                      : "text-white/60"
                }`}
              >
                {status === "success"
                  ? dictionary.cta.success
                  : status === "error"
                    ? dictionary.cta.error
                    : ""}
              </p>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
