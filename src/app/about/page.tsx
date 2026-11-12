import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/products";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductImage } from "@/components/shared/ProductImage";
import { CtaBand } from "@/components/shared/CtaBand";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Ayesha Traders is an electrical wires and cables supplier in Gujranwala, Pakistan.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Us | Ayesha Traders", url: "/about" },
};

const commitments = [
  { title: "Honest information", body: "Products described as they are, without unverified claims." },
  { title: "Current pricing", body: "Quoted at today's rates for your size and quantity." },
  { title: "Clear guidance", body: "Help choosing the right product and size." },
  { title: "Easy to reach", body: "Phone or WhatsApp, Monday to Saturday." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Us"
        title="Electrical cable supplier, Gujranwala"
        description="We supply wires and cables to electricians, workshops and contractors."
      />

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ProductImage
            src="/images/products/pvc-building-wire.jpg"
            alt="Coils of red, black, yellow and blue PVC building wire"
            sizes="(max-width: 1024px) 100vw, 480px"
            className="mx-auto w-full max-w-md rounded-lg border border-border"
          />
          <div>
            <p className="eyebrow">Company</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">One supplier for your cable needs</h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-muted">
              Ayesha Traders stocks copper-conductor wire and cable, from household building wire to multi-core power cable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border bg-surface-gray">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">Business Focus</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Supply made simple</h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-muted">
              Browse the catalog online, then confirm price and availability by phone or WhatsApp. We serve electricians, rewinding workshops, farms and contractors.
            </p>
          </div>
          <ProductImage
            src="/images/products/submersible-flat-cable.jpg"
            alt="Coil of blue flat submersible cable"
            sizes="(max-width: 1024px) 100vw, 480px"
            className="order-1 mx-auto w-full max-w-md rounded-lg border border-border lg:order-2"
          />
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <ProductImage
            src="/images/products/unarmoured-power-cable.jpg"
            alt="Multi-core power cable with red, yellow, blue and black cores"
            sizes="(max-width: 1024px) 100vw, 480px"
            className="mx-auto w-full max-w-md rounded-lg border border-border"
          />
          <div>
            <p className="eyebrow">Product Range</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Four product groups</h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/products?category=${c.slug}`} className="group flex items-center justify-between gap-6 py-4">
                    <span className="text-lg font-semibold group-hover:text-brand">{c.name}</span>
                    <ArrowRight aria-hidden className="size-4 shrink-0 text-charcoal-muted group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/products">View catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border bg-surface-gray">
        <div className="container-page">
          <p className="eyebrow">Commitments</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">How we work</h2>
          <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <li key={c.title} className="border-t-2 border-brand pt-4">
                <span className="text-sm font-semibold text-brand tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal-muted">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
