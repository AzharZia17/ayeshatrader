import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";

export function FeaturedProducts() {
  return (
    <section className="bg-surface-gray py-16 lg:py-24">
      <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-10">
        <div className="line-pattern relative flex flex-col justify-between overflow-hidden rounded-lg bg-brand-hover p-8 text-white lg:sticky lg:top-28 lg:self-start lg:min-h-[32rem] lg:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">Featured</p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight text-white lg:text-[2.75rem]">Selected products</h2>
            <p className="mt-4 max-w-xs text-base text-white/75">Request a price for any size.</p>
          </div>
          <Button asChild variant="inverse" size="lg" className="mt-10 w-full sm:w-fit">
            <Link href="/products">
              View all products
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
        <ProductGrid products={getFeaturedProducts(4)} variant="row" />
      </div>
    </section>
  );
}
