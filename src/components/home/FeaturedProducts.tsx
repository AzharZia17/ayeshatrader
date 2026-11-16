import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FeaturedProducts() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured"
          title="Selected products"
          action={
            <Link href="/products" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand">
              <span className="link-line pb-0.5">View all products</span>
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />
        <div className="mt-10 sm:mt-14">
          <ProductGrid products={getFeaturedProducts(4)} columns="four" />
        </div>
      </div>
    </section>
  );
}
