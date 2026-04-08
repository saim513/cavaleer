"use client";

import { useLocale } from "@/components/providers/locale-provider";

export function SocialProof() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20">
      <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-card sm:p-10">
        <div className="grid gap-8 border-b border-brand-mist/80 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow">{dictionary.socialProof.eyebrow}</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-4xl">
              {dictionary.socialProof.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-brand-slate/80">
            {dictionary.socialProof.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.socialProof.stats.map((stat) => (
            <div
              className="rounded-[1.5rem] border border-brand-mist/60 bg-brand-sand/55 p-6"
              key={stat.label}
            >
              <p className="text-4xl font-semibold tracking-[-0.05em] text-brand-ink">
                {stat.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-brand-slate/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dictionary.socialProof.partners.map((partner) => (
            <div
              className="flex min-h-20 items-center justify-center rounded-2xl border border-dashed border-brand-mist bg-white/70 px-5 text-center text-sm font-semibold uppercase tracking-[0.24em] text-brand-slate"
              key={partner}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
