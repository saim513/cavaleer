"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20" id="faq">
      <SectionHeading
        align="center"
        description={dictionary.faq.description}
        eyebrow={dictionary.faq.eyebrow}
        title={dictionary.faq.title}
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-4">
        {dictionary.faq.items.map((item) => (
          <details
            className="group rounded-[1.5rem] border border-white/70 bg-white/80 p-6 open:shadow-card"
            key={item.question}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <h3 className="text-left text-lg font-semibold text-brand-ink">
                {item.question}
              </h3>
              <span className="text-2xl text-brand-stone transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-3xl text-base leading-8 text-brand-slate/80">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
