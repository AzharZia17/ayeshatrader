import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductGrid({ products, columns = "three" }: { products: readonly Product[]; columns?: "one" | "three" | "four" }) {
  const cols = columns === "one" ? "grid-cols-1" : columns === "four" ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid gap-x-3 gap-y-9 sm:gap-x-6 sm:gap-y-12 ${cols}`}>
      {products.map((p, i) => (
        <li key={p.slug} className="reveal">
          <ProductCard product={p} priority={i < 4} />
        </li>
      ))}
    </ul>
  );
}
