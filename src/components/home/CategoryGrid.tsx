import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/products";
import { ProductImage } from "@/components/shared/ProductImage";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function CategoryGrid() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow="Categories" title="Product range" />
        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link href={`/products?category=${c.slug}`} className="group block">
                <ProductImage
                  src={c.image}
                  alt={c.imageAlt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="rounded-lg border border-border transition-colors group-hover:border-brand/60"
                />
                <div className="mt-5 flex items-center justify-between gap-3 border-b border-border pb-4">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-brand">{c.name}</h3>
                  <ArrowRight aria-hidden className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                </div>
                <span className="mt-3 inline-block text-sm font-medium text-brand group-hover:underline">View Products</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
