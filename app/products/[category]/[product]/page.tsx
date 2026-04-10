import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";
import { getProduct, productCategories } from "@/lib/site-data";

export async function generateStaticParams() {
  return productCategories.flatMap((category) =>
    category.products.map((product) => ({
      category: category.slug,
      product: product.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category, product } = await params;
  const productData = getProduct(category, product);

  if (!productData) {
    return {};
  }

  return {
    title: `${productData.product.name} | Cavaleer`,
    description: productData.product.summary,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category, product } = await params;
  const productData = getProduct(category, product);

  if (!productData) {
    notFound();
  }

  const { category: categoryInfo, product: productInfo } = productData;

  return (
    <PageShell>
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-stone-500">
          <Link className="transition hover:text-stone-950" href="/products">
            Products
          </Link>
          <span className="px-2">/</span>
          <Link className="transition hover:text-stone-950" href={`/products/${categoryInfo.slug}`}>
            {categoryInfo.name}
          </Link>
          <span className="px-2">/</span>
          <span className="text-stone-950">{productInfo.name}</span>
        </nav>

        <section className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100">
            <Image
              alt={productInfo.name}
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              src={productInfo.image}
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
              {productInfo.code}
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950">
              {productInfo.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-stone-600">{productInfo.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Material
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-700">{productInfo.specs.material}</p>
              </div>
              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Finish
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-700">{productInfo.specs.finish}</p>
              </div>
              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Customization
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-700">{productInfo.specs.customization}</p>
              </div>
              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Minimum Order
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-700">{productInfo.specs.minimumOrder}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-stone-800"
                href="/contact"
              >
                Inquire About This Product
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
                href={`/products/${categoryInfo.slug}`}
              >
                Back to Category
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Key Features</h2>
            <div className="mt-5 space-y-3">
              {productInfo.features.map((feature) => (
                <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700" key={feature}>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Applications</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {productInfo.applications.map((application) => (
                <span
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700"
                  key={application}
                >
                  {application}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-stone-600">
              Product detail pages are intentionally non-transactional. They are designed to
              help buyers review product fit, finish, and customization potential before making
              direct contact.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <ContactForm />
        </section>
      </main>
    </PageShell>
  );
}
