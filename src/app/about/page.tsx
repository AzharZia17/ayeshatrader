import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/products";
import { ADDRESS_FULL, BUSINESS_HOURS } from "@/lib/constants";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductImage } from "@/components/shared/ProductImage";
import { CtaBand } from "@/components/shared/CtaBand";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ayesha Traders is an electrical wires and cables supplier in Gujranwala, Pakistan. Learn about our business, product range and customer commitments.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Us | Ayesha Traders", url: "/about" },
};

const commitments = [
  { title: "Honest product information", body: "We describe products by what they are and how they are made, without unverified claims." },
  { title: "Clear, current pricing", body: "We quote at current rates for the exact product, size and quantity, so there are no outdated price lists." },
  { title: "Straight answers on sizes", body: "Tell us the application and we will help you find the right product and size, or tell you if we do not stock it." },
  { title: "Accessible during shop hours", body: `Call or message us on WhatsApp, ${BUSINESS_HOURS}.` },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Ayesha Traders"
        title="An electrical cable supplier in Gujranwala"
        description="We supply wires and cables to electricians, rewinding workshops, contractors and households."
      />

      {/* Overview */}
      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ProductImage
            src="/images/products/pvc-building-wire.jpg"
            alt="Coils of red, black, yellow and blue PVC building wire"
            sizes="(max-width: 1024px) 100vw, 560px"
            ratio="aspect-[4/5]"
            className="mx-auto w-full max-w-md rounded-lg border border-border"
          />
          <div>
            <p className="eyebrow">Company Overview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">One place for the cable your job needs</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-muted sm:text-lg">
              <p>
                Ayesha Traders is an electrical wires and cables supplier located at {ADDRESS_FULL}. Our shop serves
                people who buy cable regularly and want a supplier who understands the products.
              </p>
              <p>
                We keep our range focused: wire and cable with copper conductors, from household building wire to
                multi-core power cables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business focus */}
      <section className="section-y border-t border-border bg-surface-gray">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">Business Focus</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Supply, not complication</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-muted sm:text-lg">
              <p>
                Our focus is simple: stock the cables our customers ask for, quote fairly, and make ordering easy. You
                can browse the catalog online, then confirm price and availability by phone or WhatsApp.
              </p>
              <p>
                We serve electricians fitting out homes and shops, workshops rewinding motors, farmers installing pumps,
                and contractors buying feeder cable for larger projects.
              </p>
            </div>
          </div>
          <ProductImage
            src="/images/products/submersible-flat-cable.jpg"
            alt="Coil of blue flat submersible cable"
            sizes="(max-width: 1024px) 100vw, 560px"
            className="order-1 mx-auto w-full max-w-md rounded-lg border border-border lg:order-2"
          />
        </div>
      </section>

      {/* Product range */}
      <section className="section-y">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <ProductImage
            src="/images/products/unarmoured-power-cable.jpg"
            alt="Multi-core power cable with red, yellow, blue and black cores"
            sizes="(max-width: 1024px) 100vw, 560px"
            className="mx-auto w-full max-w-md rounded-lg border border-border"
          />
          <div>
            <p className="eyebrow">Product Range</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Four product groups</h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/products?category=${c.slug}`} className="group flex items-start justify-between gap-6 py-5">
                    <span>
                      <span className="block text-lg font-semibold group-hover:text-brand">{c.name}</span>
                      <span className="mt-1 block text-[0.9375rem] text-charcoal-muted">{c.description}</span>
                    </span>
                    <ArrowRight aria-hidden className="mt-1.5 size-4 shrink-0 text-charcoal-muted group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/products">View full catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-y border-t border-border bg-surface-gray">
        <div className="container-page">
          <p className="eyebrow">Customer Commitments</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">How we deal with customers</h2>
          <ol className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <li key={c.title} className="border-t-2 border-copper pt-5">
                <span className="text-sm font-semibold text-copper-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-charcoal-muted">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
