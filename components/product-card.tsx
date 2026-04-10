import Image from "next/image";
import Link from "next/link";

import { type Product } from "@/lib/site-data";

export function ProductCard({
  categorySlug,
  product,
}: {
  categorySlug: string;
  product: Product;
}) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-60 overflow-hidden bg-stone-100">
        <Image
          alt={product.name}
          className="h-full w-full object-cover"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={product.image}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            {product.code}
          </p>
          {product.subCategory ? (
            <span className="rounded-full border border-stone-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-700">
              {product.subCategory}
            </span>
          ) : null}
        </div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
          {product.name}
        </h2>
        <p className="mt-3 text-sm leading-7 text-stone-600">{product.summary}</p>
        <Link
          className="mt-6 inline-flex items-center justify-center rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
          href={`/products/${categorySlug}/${product.slug}`}
        >
          View Product
        </Link>
      </div>
    </article>
  );
}
