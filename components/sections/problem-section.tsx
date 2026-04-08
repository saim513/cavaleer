"use client";

import { useLocale } from "@/components/providers/locale-provider";

import { SectionHeading } from "@/components/ui/section-heading";

export function ProblemSection() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20" id="problem">
      <SectionHeading
        description={dictionary.problem.description}
        eyebrow={dictionary.problem.eyebrow}
        title={dictionary.problem.title}
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {dictionary.problem.items.map((item, index) => (
          <article
            className="lift-on-hover rounded-[1.75rem] border border-white/70 bg-white/75 p-7 shadow-[0_18px_48px_rgba(17,12,12,0.04)]"
            key={item.title}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-rose">
              0{index + 1}
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-brand-slate/80">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
