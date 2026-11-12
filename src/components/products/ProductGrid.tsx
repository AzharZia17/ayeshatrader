import type { Product } from "@/lib/products";
import { ProductCard, type CardVariant } from "@/components/products/ProductCard";

export function ProductGrid({ products, variant = "catalog" }: { products: readonly Product[]; variant?: CardVariant }) {
  const cols = variant === "row" ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <ul className={`grid gap-6 ${cols}`}>
      {products.map((p, i) => (
        <li key={p.slug} className="reveal">
          <ProductCard product={p} priority={i < 4} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
