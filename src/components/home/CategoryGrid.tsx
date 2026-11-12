import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, getProductsByCategory } from "@/lib/products";
import { ProductImage } from "@/components/shared/ProductImage";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function CategoryGrid() {
  return (
    <section className="section-y border-t border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="Product Categories"
          title="Cables for every installation"
          description="Four product groups covering house wiring, appliances and pumps, earthing and winding, and heavy power distribution."
        />
        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <li key={c.slug} className="h-full">
              <Link href={`/products?category=${c.slug}`} className="group flex h-full flex-col">
                <ProductImage
                  src={c.image}
                  alt={c.imageAlt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="rounded-lg border border-border transition-colors group-hover:border-copper"
                />
                <h3 className="mt-5 text-lg font-semibold tracking-tight group-hover:text-brand">{c.name}</h3>
                <p className="mt-1 text-xs font-medium text-charcoal-muted">
                  {getProductsByCategory(c.slug).length} products
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-muted">{c.description}</p>
                <span className="mt-auto inline-flex pt-4 items-center gap-1.5 text-sm font-semibold text-brand group-hover:underline">
                  View Products
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
