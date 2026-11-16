import type { ProductSpec } from "@/lib/products";
import { cn } from "@/lib/utils";

/** Definition list of label/value pairs with hairline dividers. */
export function SpecList({ specs, className }: { specs: ProductSpec[]; className?: string }) {
  return (
    <dl className={cn("divide-y divide-border border-y border-border text-[0.9375rem]", className)}>
      {specs.map((s) => (
        <div key={s.label} className="grid grid-cols-[8.5rem_1fr] gap-4 py-4 sm:grid-cols-[12rem_1fr]">
          <dt className="text-[0.6875rem] font-bold tracking-[0.12em] text-charcoal-muted uppercase">{s.label}</dt>
          <dd className="font-medium text-charcoal">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
