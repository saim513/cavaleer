"use client";

import Image from "next/image";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { dictionary } = useLocale();

  return (
    <>
      <section className="section-shell pt-6" id="top">
        <div className="surface-panel flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/70 px-4 py-3 text-sm text-brand-slate/80">
          <p>{dictionary.brand.topBanner}</p>
          <a className="font-semibold text-brand-ink transition hover:text-brand-slate" href="#products">
            {dictionary.brand.discoverCollections}
          </a>
        </div>
      </section>

      <section className="section-shell grid gap-14 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-16">
        <div className="animate-float-up">
          <span className="eyebrow">{dictionary.hero.eyebrow}</span>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-[-0.06em] text-brand-ink sm:text-6xl lg:text-7xl">
            {dictionary.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-slate/80 sm:text-xl">
            {dictionary.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button ariaLabel={dictionary.brand.viewCollection} href="#products">
              {dictionary.brand.viewCollection}
            </Button>
            <Button
              ariaLabel={dictionary.navigationLinks[1]?.label ?? "About"}
              href="#solution"
              variant="secondary"
            >
              {dictionary.navigationLinks[1]?.label}
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 text-sm text-brand-slate/80 sm:grid-cols-3">
            {dictionary.hero.highlights.map((item) => (
              <div className="rounded-3xl border border-white/70 bg-white/70 p-4" key={item.title}>
                <p className="font-semibold text-brand-ink">{item.title}</p>
                <p className="mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-float-up lg:[animation-delay:120ms]">
          <div className="ambient-ring surface-panel hero-glow overflow-hidden rounded-[2rem] border border-white/60 p-3 shadow-card">
            <div className="relative overflow-hidden rounded-[1.65rem] bg-brand-ink">
              <Image
                alt="Luxury equestrian leather goods displayed with saddle and bridle details"
                className="h-full w-full object-cover"
                height={940}
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                src="/images/hero-equestrian.svg"
                width={860}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink via-brand-ink/45 to-transparent p-6 text-white sm:p-8">
                <p className="text-xs uppercase tracking-[0.34em] text-brand-blush">
                  {dictionary.hero.imageEyebrow}
                </p>
                <p className="mt-3 max-w-md text-lg leading-7 text-white/86">
                  {dictionary.hero.imageDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="animate-drift absolute -bottom-7 left-4 surface-panel rounded-3xl border border-white/70 px-5 py-4 shadow-card sm:left-auto sm:right-6">
            <p className="text-xs uppercase tracking-[0.34em] text-brand-stone">
              {dictionary.brand.trustedPositioning}
            </p>
            <p className="mt-2 text-sm font-semibold text-brand-ink">
              {dictionary.brand.builtToFeelEstablished}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
