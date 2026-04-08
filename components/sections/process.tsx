"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20" id="process">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          description={dictionary.process.description}
          eyebrow={dictionary.process.eyebrow}
          title={dictionary.process.title}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {dictionary.process.items.map((step, index) => (
            <article
              className="rounded-[1.75rem] border border-brand-mist/70 bg-white/80 p-6"
              key={step.title}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-rose">
                {dictionary.process.stepLabel} {index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-brand-slate/80">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
