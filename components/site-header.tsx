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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:gap-8 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="relative h-12 w-12 shrink-0">
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
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
              {site.name}
            </p>
            <p className="text-sm text-stone-700">Leather Goods & Equestrian Accessories</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {site.navigation.map((item) => (
            <Link className="text-sm text-stone-700 transition hover:text-stone-950" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative lg:hidden">
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex cursor-pointer items-center justify-center rounded-full border border-stone-300 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              type="button"
            >
              Menu
            </button>
            <div
              className={`absolute right-0 top-16 w-[min(22rem,calc(100vw-2rem))] rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-xl transition-all ${
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
            className="inline-flex items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-stone-800"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
