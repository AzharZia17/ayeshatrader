import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FeaturedProducts() {
  return (
    <section className="section-y border-t border-border bg-surface-gray">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured"
          title="Selected products"
          action={
            <Button asChild variant="outline">
              <Link href="/products">
                All products
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          }
        />
        <div className="mt-10">
          <ProductGrid products={getFeaturedProducts(4)} compact />
        </div>
      </div>
    </section>
  );
}
