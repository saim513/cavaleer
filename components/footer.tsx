"use client";

import Image from "next/image";

import { useLocale } from "@/components/providers/locale-provider";

export function Footer() {
  const { dictionary } = useLocale();

  return (
    <footer className="section-shell pb-10 pt-6">
      <div className="grid gap-8 border-t border-brand-mist/80 py-8 text-sm text-brand-slate/80 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Image
            alt="Cavaleer logo"
            className="h-14 w-auto object-contain"
            height={64}
            src="/Untitled%20design.png"
            width={64}
          />
          <p className="mt-2 max-w-md">
            {dictionary.footer.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.22em] text-brand-ink">
              {dictionary.footer.contactTitle}
            </p>
            <p className="mt-3">{dictionary.footer.address1}</p>
            <p>{dictionary.footer.address2}</p>
            <p>{dictionary.footer.address3}</p>
            <a
              className="mt-3 block transition hover:text-brand-ink"
              href={`mailto:${dictionary.brand.email}`}
            >
              {dictionary.brand.email}
            </a>
            <a
              className="mt-1 block transition hover:text-brand-ink"
              href={dictionary.brand.phoneHref}
            >
              {dictionary.brand.phone}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-semibold uppercase tracking-[0.22em] text-brand-ink">
              {dictionary.footer.exploreTitle}
            </p>
            <a className="transition hover:text-brand-ink" href="#products">
              {dictionary.navigationLinks[0]?.label}
            </a>
            <a className="transition hover:text-brand-ink" href="#solution">
              {dictionary.navigationLinks[1]?.label}
            </a>
            <a className="transition hover:text-brand-ink" href="#inspiration">
              {dictionary.navigationLinks[3]?.label}
            </a>
            <a className="transition hover:text-brand-ink" href="#faq">
              {dictionary.navigationLinks[5]?.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
