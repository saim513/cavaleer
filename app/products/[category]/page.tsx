import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/page-shell";
import { ProductCard } from "@/components/product-card";
import { getCategory, productCategories } from "@/lib/site-data";

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategory(category);

  if (!categoryData) {
    return {};
  }

  return {
    title: `${categoryData.name} | Cavaleer`,
    description: categoryData.shortDescription,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryData = getCategory(category);

  if (!categoryData) {
    notFound();
  }

  return (
    <PageShell>
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100">
            <Image
              alt={categoryData.name}
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              src={categoryData.image}
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
              Category
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-stone-950">
              {categoryData.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">{categoryData.intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-stone-800"
                href="/contact"
              >
                Request Information
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
                href="/products"
              >
                Back to Categories
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categoryData.products.map((product) => (
            <ProductCard categorySlug={categoryData.slug} key={product.slug} product={product} />
          ))}
        </section>
      </main>
    </PageShell>
  );
}
