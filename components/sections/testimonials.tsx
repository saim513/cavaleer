"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20" id="testimonials">
      <SectionHeading
        description={dictionary.testimonials.description}
        eyebrow={dictionary.testimonials.eyebrow}
        title={dictionary.testimonials.title}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {dictionary.testimonials.items.map((testimonial) => (
          <figure
            className="lift-on-hover rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_18px_48px_rgba(17,12,12,0.05)]"
            key={testimonial.name}
          >
            <blockquote className="text-lg leading-8 text-brand-slate/85">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-8 border-t border-brand-mist/70 pt-5">
              <p className="font-semibold text-brand-ink">{testimonial.name}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.22em] text-brand-stone">
                {testimonial.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
