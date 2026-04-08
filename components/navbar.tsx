"use client";

import Image from "next/image";

import { useLocale } from "@/components/providers/locale-provider";

import { Button } from "@/components/ui/button";

export function Navbar() {
  const { locale, setLocale, dictionary } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[#f8f4f1]/80 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a
          aria-label="Cavaleer home"
          className="flex items-center gap-3"
          href="#top"
        >
          <Image
            alt="Cavaleer logo"
            className="h-12 w-auto object-contain"
            height={56}
            priority
            src="/Untitled%20design.png"
            width={56}
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-stone">
              Cavaleer
            </p>
            <p className="text-sm text-brand-slate">{dictionary.brand.descriptor}</p>
          </div>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {dictionary.navigationLinks.map((link) => (
            <a
              className="text-sm text-brand-slate transition hover:text-brand-ink"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            aria-label="Language selector"
            className="hidden items-center gap-1 rounded-full border border-brand-mist bg-white/75 p-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate sm:inline-flex"
            role="group"
          >
            <button
              aria-pressed={locale === "en"}
              className={`rounded-full px-3 py-1 transition ${
                locale === "en" ? "bg-brand-ink text-white" : "text-brand-slate"
              }`}
              onClick={() => setLocale("en")}
              type="button"
            >
              {dictionary.brand.english}
            </button>
            <button
              aria-pressed={locale === "nl"}
              className={`rounded-full px-3 py-1 transition ${
                locale === "nl" ? "bg-brand-ink text-white" : "text-brand-slate"
              }`}
              onClick={() => setLocale("nl")}
              type="button"
            >
              {dictionary.brand.dutch}
            </button>
          </div>
          <a
            className="hidden text-sm text-brand-slate transition hover:text-brand-ink sm:inline-flex"
            href="#contact"
          >
            {dictionary.brand.contact}
          </a>
          <Button ariaLabel={dictionary.brand.viewCollection} href="#products">
            {dictionary.brand.viewCollection}
          </Button>
        </div>
      </div>
    </header>
  );
}
