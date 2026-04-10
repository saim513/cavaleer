import type { Metadata } from "next";

import { CategoryCard } from "@/components/category-card";
import { PageShell } from "@/components/page-shell";
import { productCategories, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Products | ${site.name}`,
  description:
    "Browse Cavaleer product categories including bags, wallets, belts, and equestrian accessories.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
            Products
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-stone-950">
            Browse all product categories.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            This catalog structure mirrors a traditional leather goods website with category and
            product detail pages, while replacing outerwear lines with equestrian accessories.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category) => (
            <CategoryCard category={category} key={category.slug} />
          ))}
        </section>
      </main>
    </PageShell>
  );
}
