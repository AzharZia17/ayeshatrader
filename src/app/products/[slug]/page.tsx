import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { PRODUCTS, getCategory, getProduct, getProductsByCategory } from "@/lib/products";
import { PRIMARY_CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductImage } from "@/components/shared/ProductImage";
import { SizeInquiry } from "@/components/products/SizeInquiry";
import { SpecList } from "@/components/products/SpecList";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CtaBand } from "@/components/shared/CtaBand";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.summary} Request a price by size from Ayesha Traders, Gujranwala.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | Ayesha Traders`,
      description: product.summary,
      url: `/products/${product.slug}`,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category)!;
  const related = getProductsByCategory(product.category).filter((p) => p.slug !== product.slug);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-5">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-muted hover:text-brand">
            <ArrowLeft aria-hidden className="size-4" />
            All products
          </Link>
        </div>
      </section>

      <section className="section-y pt-10 lg:pt-14">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <ProductImage
              src={product.image}
              alt={product.imageAlt}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="rounded-lg border border-border lg:sticky lg:top-28"
            />
          </div>

          <div>
            <Badge className="bg-brand-subtle text-brand">{category.name}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal-muted sm:text-lg">{product.description}</p>

            <div className="mt-8 border border-border bg-surface-gray p-5 sm:p-6">
              <h2 className="text-base font-semibold">Request Quotation</h2>
              <p className="mt-1 mb-5 text-sm text-charcoal-muted">
                Choose a size to get the current price.
              </p>
              <SizeInquiry product={product} idPrefix="detail" label="Request Quotation on WhatsApp" />
              <Separator className="my-5" />
              <Button asChild variant="outline" className="w-full">
                <a href={`tel:${PRIMARY_CONTACT.tel}`}>
                  <Phone aria-hidden />
                  Call {PRIMARY_CONTACT.display}
                </a>
              </Button>
            </div>

            <h2 className="mt-12 text-xl font-semibold tracking-tight">Technical specifications</h2>
            <SpecList specs={product.specs} className="mt-4" />

            <h2 className="mt-12 text-xl font-semibold tracking-tight">Available sizes</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <li key={s} className="rounded-md border border-border-strong px-3 py-1.5 text-sm font-medium">
                  {s}
                </li>
              ))}
            </ul>
            {product.sizeNote && <p className="mt-3 text-sm text-charcoal-muted">{product.sizeNote}</p>}

            <h2 className="mt-12 text-xl font-semibold tracking-tight">Applications</h2>
            <ul className="mt-4 space-y-3">
              {product.applications.map((a) => (
                <li key={a} className="flex gap-3 text-[0.9375rem] text-charcoal-muted">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-charcoal-muted">
              Specifications are general. Confirm ratings and stock before ordering.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y border-t border-border bg-surface-gray">
          <div className="container-page">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">More in {category.name}</h2>
            <div className="max-w-xl sm:max-w-none lg:max-w-[calc(50%-0.75rem)]">
              <ProductGrid products={related} />
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
