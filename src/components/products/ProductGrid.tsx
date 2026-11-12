import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductGrid({ products }: { products: readonly Product[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((p, i) => (
        <li key={p.slug}>
          <ProductCard product={p} priority={i < 4} />
        </li>
      ))}
    </ul>
  );
}
