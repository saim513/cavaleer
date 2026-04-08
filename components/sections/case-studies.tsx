"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudies() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20" id="case-studies">
      <SectionHeading
        align="center"
        description={dictionary.caseStudies.description}
        eyebrow={dictionary.caseStudies.eyebrow}
        title={dictionary.caseStudies.title}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {dictionary.caseStudies.items.map((item) => (
          <article
            className="surface-dark lift-on-hover rounded-[2rem] p-7 text-white"
            key={item.title}
          >
            <p className="text-xs uppercase tracking-[0.32em] text-brand-blush">
              {dictionary.caseStudies.label}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
              {item.title}
            </h3>
            <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-base leading-7 text-brand-blush">
              {item.result}
            </p>
            <p className="mt-5 text-base leading-8 text-white/78">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
