"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function Benefits() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20">
      <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-card sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            description={dictionary.benefits.description}
            eyebrow={dictionary.benefits.eyebrow}
            title={dictionary.benefits.title}
          />

          <div className="grid gap-4">
            {dictionary.benefits.items.map((benefit) => (
              <div
                className="rounded-3xl border border-brand-mist/70 bg-brand-sand/55 px-5 py-4"
                key={benefit}
              >
                <p className="text-base leading-8 text-brand-slate/85">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-brand-mist/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-8 text-brand-slate/80">
            {dictionary.benefits.footer}
          </p>
          <Button ariaLabel={dictionary.brand.talkToTeam} href="#contact">
            {dictionary.brand.talkToTeam}
          </Button>
        </div>
      </div>
    </section>
  );
}
