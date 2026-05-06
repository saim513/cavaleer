"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { site } from "@/lib/site-data";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:gap-8 lg:px-8">
        <Link className="flex min-w-0 flex-1 items-center gap-3" href="/">
          <span className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <Image
              alt={`${site.name} logo`}
              className="h-auto w-auto"
              height={48}
              priority
              unoptimized
              width={48}
              src="/icon.png"
            />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-stone-500 sm:text-xs sm:tracking-[0.32em]">
              {site.name}
            </p>
            <p className="hidden text-sm text-stone-700 sm:block">Leather Goods & Equestrian Accessories</p>
            <p className="text-sm text-stone-700 sm:hidden">Leather Goods</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {site.navigation.map((item) => (
            <Link className="text-sm text-stone-700 transition hover:text-stone-950" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="relative lg:hidden">
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex cursor-pointer items-center justify-center rounded-full border border-stone-300 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white sm:px-4 sm:py-3 sm:text-sm"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              type="button"
            >
              Menu
            </button>
            <div
              className={`absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(18rem,calc(100vw-2rem))] rounded-[1.5rem] border border-stone-200 bg-white p-3 shadow-xl transition-all sm:w-[min(22rem,calc(100vw-2rem))] sm:p-4 ${
                isMobileMenuOpen
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible -translate-y-2 opacity-0"
              }`}
              id="mobile-navigation"
            >
              <div className="flex flex-col gap-2">
                {site.navigation.map((item) => (
                  <Link
                    className="rounded-2xl px-4 py-3 text-sm text-stone-700 transition hover:bg-stone-100 hover:text-stone-950"
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  className="inline-flex items-center justify-center rounded-2xl bg-stone-950 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-stone-800 sm:hidden"
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <a
            className="hidden text-sm text-stone-700 transition hover:text-stone-950 sm:inline-flex"
            href={`mailto:${site.contact.email}`}
          >
            {site.contact.email}
          </a>
          <Link
            className="hidden items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-stone-800 sm:inline-flex"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
