import Image from "next/image";
import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import { PageShell } from "@/components/page-shell";
import { productCategories, aboutPoints, highlights, testimonials } from "@/lib/site-data";

export default function Home() {
  const equestrianCategory = productCategories.find(
    (category) => category.slug === "equestrian-accessories",
  );

  return (
    <PageShell>
      <main>
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
                Wholesale leather specialist
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
                Leather goods and equestrian accessories presented like a true product catalog.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                Inspired by a category-first leather goods website structure, Cavaleer
                showcases wholesale-ready collections for bags, belts, wallets, and
                equestrian accessories without adding ecommerce or login complexity.
              </p>
              {equestrianCategory ? (
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                    Equestrian Accessories
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {equestrianCategory.products.map((product) => (
                      <span
                        className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700"
                        key={product.slug}
                      >
                        {product.name}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-stone-800"
                  href="/products"
                >
                  View Products
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {productCategories.slice(0, 4).map((category) => (
                <Link
                  className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50"
                  href={`/products/${category.slug}`}
                  key={category.slug}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      alt={category.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 22vw, 100vw"
                      src={category.image}
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-semibold tracking-tight text-stone-950">
                      {category.name}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      {category.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"
                key={item.title}
              >
                <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100">
              <Image
                alt="Cavaleer workshop and leather development"
                className="h-full w-full object-cover"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                src="/images/about-workshop.svg"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
                About Cavaleer
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-stone-950">
                A leather goods company built for wholesale clarity and product depth.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-600">
                We rebuilt the catalog structure around what leather buyers actually need:
                clear categories, detailed product pages, straightforward contact points,
                and a focused equestrian extension that feels native to the rest of the range.
              </p>
              <div className="mt-6 space-y-3">
                {aboutPoints.map((point) => (
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700" key={point}>
                    {point}
                  </div>
                ))}
              </div>
              <Link
                className="mt-8 inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
                href="/about"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
                Product Categories
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">
                Explore the leather range.
              </h2>
            </div>
            <Link className="text-sm font-semibold text-stone-700 transition hover:text-stone-950" href="/products">
              View all categories
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <CategoryCard category={category} key={category.slug} />
            ))}
          </div>
        </section>

        <section className="border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6"
                  key={item.company}
                >
                  <blockquote className="text-base leading-8 text-stone-700">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-stone-200 pt-4">
                    <p className="font-semibold text-stone-950">{item.name}</p>
                    <p className="text-sm text-stone-500">{item.company}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
