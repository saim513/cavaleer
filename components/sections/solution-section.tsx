"use client";

import Image from "next/image";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function SolutionSection() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20" id="solution">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-card">
          <div className="overflow-hidden rounded-[1.5rem]">
            <Image
              alt="Leather artisan tools and premium equestrian materials"
              className="h-full w-full object-cover"
              height={760}
              sizes="(min-width: 1024px) 40vw, 100vw"
              src="/images/solution-craft.svg"
              width={760}
            />
          </div>
        </div>

        <div>
          <SectionHeading
            description={dictionary.solution.description}
            eyebrow={dictionary.solution.eyebrow}
            title={dictionary.solution.title}
          />

          <div className="mt-8 space-y-4">
            {dictionary.solution.items.map((item) => (
              <div
                className="rounded-3xl border border-brand-mist/70 bg-white/75 px-5 py-4"
                key={item}
              >
                <p className="text-base leading-8 text-brand-slate/85">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-brand-mist/70 bg-brand-sand/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-stone">
                {dictionary.solution.certificationEyebrow}
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-ink">
                {dictionary.solution.certificationTitle}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-brand-mist/70 bg-brand-sand/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-stone">
                {dictionary.solution.productionEyebrow}
              </p>
              <p className="mt-3 text-lg font-semibold text-brand-ink">
                {dictionary.solution.productionTitle}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button ariaLabel={dictionary.brand.orderSample} href="#contact">
              {dictionary.brand.orderSample}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
