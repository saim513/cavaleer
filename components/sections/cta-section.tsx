"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20" id="contact">
      <div className="surface-dark overflow-hidden rounded-[2.25rem] px-6 py-12 text-white shadow-card sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="eyebrow border-white/10 bg-white/5 text-brand-blush">
              {dictionary.cta.eyebrow}
            </span>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {dictionary.cta.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              {dictionary.cta.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Button ariaLabel={dictionary.brand.viewCollection} href="#products">
              {dictionary.brand.viewCollection}
            </Button>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
