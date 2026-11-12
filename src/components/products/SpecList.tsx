import type { ProductSpec } from "@/lib/products";
import { cn } from "@/lib/utils";

/** Definition list of label/value pairs with hairline dividers. */
export function SpecList({ specs, className }: { specs: ProductSpec[]; className?: string }) {
  return (
    <dl className={cn("divide-y divide-border border-y border-border text-sm", className)}>
      {specs.map((s) => (
        <div key={s.label} className="grid grid-cols-[9rem_1fr] gap-4 py-3 sm:grid-cols-[11rem_1fr]">
          <dt className="text-charcoal-muted">{s.label}</dt>
          <dd className="font-medium text-charcoal">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
