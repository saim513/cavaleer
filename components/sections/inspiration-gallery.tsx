"use client";

import Image from "next/image";

import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/ui/section-heading";

export function InspirationGallery() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20" id="inspiration">
      <SectionHeading
        align="center"
        description={dictionary.inspiration.description}
        eyebrow={dictionary.inspiration.eyebrow}
        title={dictionary.inspiration.title}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {dictionary.inspiration.items.map((tile) => (
          <article
            className="group lift-on-hover overflow-hidden rounded-[2rem] border border-white/70 bg-white/80"
            key={tile.title}
          >
            <div className="overflow-hidden">
              <Image
                alt={tile.title}
                className="h-[320px] w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                height={640}
                sizes="(min-width: 768px) 50vw, 100vw"
                src={tile.image}
                width={900}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                {tile.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
