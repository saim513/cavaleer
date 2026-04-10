"use client";

import { useState } from "react";

import { site } from "@/lib/site-data";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  _honey: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  _honey: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setFormState((current) => ({
      ...current,
      [key]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("name", formState.name);
    payload.append("email", formState.email);
    payload.append("company", formState.company);
    payload.append("phone", formState.phone);
    payload.append("message", formState.message);
    payload.append("_subject", `New Cavaleer inquiry from ${formState.name}`);
    payload.append("_template", "table");
    payload.append("_honey", formState._honey);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.contact.email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Form submit failed");
      }

      setStatus("success");
      setFormState(initialForm);
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-4 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8" onSubmit={handleSubmit}>
      <div className="sm:col-span-2">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Send an Inquiry</h2>
        <p className="mt-2 text-sm leading-7 text-stone-600">
          Share your product interest, expected quantities, or customization needs. We will receive your message directly at {site.contact.email}.
        </p>
      </div>

      <label className="grid gap-2 text-sm text-stone-700">
        <span>Name</span>
        <input
          autoComplete="name"
          className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-950"
          name="name"
          onChange={(event) => updateField("name", event.target.value)}
          required
          type="text"
          value={formState.name}
        />
      </label>

      <label className="grid gap-2 text-sm text-stone-700">
        <span>Email</span>
        <input
          autoComplete="email"
          className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-950"
          name="email"
          onChange={(event) => updateField("email", event.target.value)}
          required
          type="email"
          value={formState.email}
        />
      </label>

      <label className="grid gap-2 text-sm text-stone-700">
        <span>Company</span>
        <input
          autoComplete="organization"
          className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-950"
          name="company"
          onChange={(event) => updateField("company", event.target.value)}
          type="text"
          value={formState.company}
        />
      </label>

      <label className="grid gap-2 text-sm text-stone-700">
        <span>Phone</span>
        <input
          autoComplete="tel"
          className="rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-950"
          name="phone"
          onChange={(event) => updateField("phone", event.target.value)}
          type="tel"
          value={formState.phone}
        />
      </label>

      <label className="grid gap-2 text-sm text-stone-700 sm:col-span-2">
        <span>Message</span>
        <textarea
          className="min-h-40 rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-950"
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          required
          value={formState.message}
        />
      </label>

      <input
        aria-hidden="true"
        className="hidden"
        name="_honey"
        onChange={(event) => updateField("_honey", event.target.value)}
        tabIndex={-1}
        type="text"
        value={formState._honey}
      />

      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-stone-800 disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
        <p
          aria-live="polite"
          className={`text-sm ${
            status === "success"
              ? "text-green-700"
              : status === "error"
                ? "text-red-700"
                : "text-stone-500"
          }`}
        >
          {status === "success"
            ? "Your inquiry has been submitted successfully."
            : status === "error"
              ? "We could not send your inquiry. Please try again."
              : ""}
        </p>
      </div>
    </form>
  );
}
