import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site-data";

export function SiteHeader() {
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
          <details className="relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-stone-300 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white">
              Menu
            </summary>
            <div className="absolute right-0 top-16 w-[min(22rem,calc(100vw-2rem))] rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-xl">
              <div className="flex flex-col gap-2">
                {site.navigation.map((item) => (
                  <Link
                    className="rounded-2xl px-4 py-3 text-sm text-stone-700 transition hover:bg-stone-100 hover:text-stone-950"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
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
