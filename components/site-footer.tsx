import Link from "next/link";

import { productCategories, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-400">
            {site.name}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-stone-300">
            Leather goods and equestrian accessories developed for wholesale buyers,
            retailers, and private label collections.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Product Categories
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {productCategories.map((category) => (
              <Link
                className="transition hover:text-white"
                href={`/products/${category.slug}`}
                key={category.slug}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Contact
          </h2>
          <div className="mt-4 space-y-2 text-sm leading-7 text-stone-300">
            <p>{site.contact.addressLine1}</p>
            <p>{site.contact.addressLine2}</p>
            <p>{site.contact.country}</p>
            <a className="block transition hover:text-white" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            <a className="block transition hover:text-white" href={site.contact.phoneHref}>
              {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
