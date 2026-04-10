import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { aboutPoints, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description:
    "Learn how Cavaleer presents leather goods and equestrian accessories for wholesale, private label, and retail buyers.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100">
            <Image
              alt="Leather development and product workshop"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              src="/images/about-workshop.svg"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
              About
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-stone-950">
              Built around leather product development, not ecommerce complexity.
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Cavaleer is positioned as a leather goods and equestrian accessories company
              for wholesale buyers, private label partners, and retailers who want a clear
              product-driven presentation.
            </p>
            <div className="mt-8 space-y-3">
              {aboutPoints.map((point) => (
                <div className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700" key={point}>
                  {point}
                </div>
              ))}
            </div>
            <Link
              className="mt-8 inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-stone-800"
              href="/contact"
            >
              Start an Inquiry
            </Link>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Collections</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Bags, belts, wallets, and equestrian accessories are organized as clear catalog
              families to simplify navigation for buyers and teams.
            </p>
          </article>
          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Customization</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              The lineup supports logo embossing, hardware changes, seasonal finishes, packaging
              requests, and private label adaptation across many products.
            </p>
          </article>
          <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Wholesale Focus</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Product pages are intentionally informative and inquiry-led, without login, cart,
              or account layers that are unnecessary at this stage.
            </p>
          </article>
        </section>
      </main>
    </PageShell>
  );
}
