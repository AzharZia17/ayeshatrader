import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";

export function FeaturedProductsSection() {
  // Select top featured products (one representing each core category)
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end mb-12">
          <SectionHeader
            badge="Product Catalog"
            title="Essential Cables &amp; Wires"
            subtitle="Explore our most requested electrical wires and heavy-duty cables. Select a size to request immediate pricing via WhatsApp."
            align="left"
            className="mb-0"
          />

          <Button
            asChild
            variant="outline"
            className="rounded-full border-2 border-[#167346] font-semibold text-[#167346] hover:bg-[#E8F5EE] shrink-0"
          >
            <Link href="/products" className="inline-flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span>View All Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

