import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";

export function FeaturedProductsSection() {
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-12">
          <SectionHeader
            badge="Product Inventory"
            title="Essential Cables &amp; Wires"
            subtitle="Browse top-requested electrical cables with high-purity copper and certified insulation. Select any gauge to request a direct WhatsApp quote."
            align="left"
            className="mb-0"
          />

          <Button
            asChild
            variant="outline"
            className="rounded-full border-2 border-gray-200 px-6 font-bold text-[#202522] hover:border-[#167346] hover:bg-emerald-50 hover:text-[#167346] shrink-0 h-11"
          >
            <Link href="/products" className="inline-flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#167346]" />
              <span>Full Product Catalog ({PRODUCTS.length})</span>
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
