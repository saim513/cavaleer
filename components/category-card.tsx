import Image from "next/image";
import Link from "next/link";

import { type ProductCategory } from "@/lib/site-data";

export function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden bg-stone-100">
        <Image
          alt={category.name}
          className="h-full w-full object-cover"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={category.image}
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
          Product Category
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
          {category.name}
        </h2>
        <p className="mt-3 text-sm leading-7 text-stone-600">{category.shortDescription}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-stone-500">{category.products.length} Products</span>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            href={`/products/${category.slug}`}
          >
            View Category
          </Link>
        </div>
      </div>
    </article>
  );
}
