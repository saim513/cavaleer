"use client";

import Image from "next/image";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProductGrid() {
  const { dictionary } = useLocale();

  return (
    <section className="section-shell py-20" id="products">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          description={dictionary.products.description}
          eyebrow={dictionary.products.eyebrow}
          title={dictionary.products.title}
        />
        <Button ariaLabel={dictionary.brand.requestCatalog} href="#contact" variant="secondary">
          {dictionary.brand.requestCatalog}
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {dictionary.products.items.map((product) => (
          <article
            className="group lift-on-hover overflow-hidden rounded-[2rem] border border-white/70 bg-white/80"
            key={product.title}
          >
            <div className="relative overflow-hidden bg-brand-sand">
              <Image
                alt={product.title}
                className="h-[320px] w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                height={720}
                sizes="(min-width: 768px) 50vw, 100vw"
                src={product.image}
                width={900}
              />
            </div>
            <div className="p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-stone">
                {product.tag}
              </span>
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                  {product.title}
                </h3>
                <span className="rounded-full border border-brand-mist px-3 py-1 text-xs uppercase tracking-[0.24em] text-brand-slate">
                  {dictionary.products.preview}
                </span>
              </div>
              <p className="mt-4 text-base leading-8 text-brand-slate/80">
                {product.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
