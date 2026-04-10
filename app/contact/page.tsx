import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description:
    "Contact Cavaleer about leather collections, equestrian accessories, customization, and wholesale product inquiries.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
              Contact
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-stone-950">
              Contact us about collections, wholesale, and equestrian product inquiries.
            </h1>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
              <div className="relative h-72 bg-stone-100">
                <Image
                  alt="Cavaleer contact and showroom presentation"
                  className="h-full w-full object-cover"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  src="/images/contact-showroom.svg"
                />
              </div>
              <div className="p-6 text-sm leading-7 text-stone-700">
                <p>{site.contact.addressLine1}</p>
                <p>{site.contact.addressLine2}</p>
                <p>{site.contact.country}</p>
                <a className="mt-4 block font-semibold text-stone-950" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
                <a className="block font-semibold text-stone-950" href={site.contact.phoneHref}>
                  {site.contact.phone}
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </section>
      </main>
    </PageShell>
  );
}
