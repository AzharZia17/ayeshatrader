import { PRODUCTS } from "@/lib/products";

export function Ticker() {
  const items = PRODUCTS.map((p) => p.name);
  return (
    <div className="marquee overflow-hidden border-b border-border bg-white py-5" aria-label="Product range">
      <div className="marquee-track flex w-max">
        {[0, 1].map((dup) => (
          <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
            {items.map((name) => (
              <li key={name} className="flex items-center text-sm font-semibold tracking-wide whitespace-nowrap text-charcoal uppercase">
                <span className="px-8">{name}</span>
                <span aria-hidden className="size-1.5 rotate-45 bg-brand" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
