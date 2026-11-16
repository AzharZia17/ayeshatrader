import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { PRODUCTS, getCategory, getProduct, getProductsByCategory } from "@/lib/products";
import { PRIMARY_CONTACT } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    description: `${product.summary} Request a price by size from Ayesha Trader, Gujranwala.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | Ayesha Trader`,
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
      <div className="container-page pt-8">
        <Link href="/products" className="group inline-flex items-center gap-2 text-sm font-semibold text-charcoal-muted hover:text-brand">
          <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-1" />
          All products
        </Link>
      </div>

      <section className="pt-8 pb-20 lg:pb-32">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative">
              <div aria-hidden className="absolute inset-0 hidden translate-x-4 sm:block translate-y-4  bg-brand/10" />
              <ProductImage
                src={product.image}
                alt={product.imageAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className=""
              />
            </div>
          </div>

          <div>
            <p className="eyebrow">{category.name}</p>
            <h1 className="display mt-5 text-[2.1rem] sm:text-6xl">{product.name}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-muted">{product.description}</p>

            <div className="mt-10  bg-ink p-6 text-white  sm:p-8">
              <h2 className="display text-3xl text-white">Request a quotation</h2>
              <div className="mt-6">
                <SizeInquiry product={product} idPrefix="detail" label="Quote on WhatsApp" inverse />
              </div>
              <a
                href={`tel:${PRIMARY_CONTACT.tel}`}
                className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
              >
                <Phone aria-hidden className="size-4" />
                or call {PRIMARY_CONTACT.display}
              </a>
            </div>

            <Tabs defaultValue="specs" className="mt-14">
              <TabsList aria-label="Product information">
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="sizes">Sizes</TabsTrigger>
                <TabsTrigger value="uses">Applications</TabsTrigger>
              </TabsList>
              <TabsContent value="specs">
                <SpecList specs={product.specs} />
              </TabsContent>
              <TabsContent value="sizes">
                <ul className="flex flex-wrap gap-2.5">
                  {product.sizes.map((s) => (
                    <li key={s} className=" border border-border-strong px-4 py-2 text-sm font-semibold">
                      {s}
                    </li>
                  ))}
                </ul>
                {product.sizeNote && <p className="mt-5 text-sm text-charcoal-muted">{product.sizeNote}</p>}
              </TabsContent>
              <TabsContent value="uses">
                <ul className="divide-y divide-border border-y border-border">
                  {product.applications.map((a) => (
                    <li key={a} className="flex gap-4 py-4 text-[0.9375rem]">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                      {a}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
            <p className="mt-8 text-xs leading-relaxed text-charcoal-muted">Specifications are general. Confirm ratings and stock before ordering.</p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-surface-gray py-20 lg:py-28">
          <div className="container-page">
            <h2 className="display mb-12 text-4xl">
              More in <span className="text-brand">{category.name}</span>
            </h2>
            <div className="max-w-sm">
              <ProductGrid products={related} columns="one" />
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
