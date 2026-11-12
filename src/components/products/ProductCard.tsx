"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { getCategoryName, type Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ProductSpecsDialog } from "@/components/products/ProductSpecsDialog";

export type CardVariant = "catalog" | "row";

/** Catalog entry. "catalog" = full specs; "row" = horizontal showcase card. */
export function ProductCard({ product, priority, variant = "catalog" }: { product: Product; priority?: boolean; variant?: CardVariant }) {
  const [open, setOpen] = React.useState(false);
  const keySpecs = product.specs.slice(0, 3);
  const shownSizes = product.sizes.slice(0, 3);
  const extra = product.sizes.length - shownSizes.length;
  const href = `/products/${product.slug}`;
  const row = variant === "row";

  const image = (
    <div className={`relative overflow-hidden bg-surface-gray ${row ? "aspect-[4/5] w-36 shrink-0 sm:w-44" : "aspect-[4/5]"}`}>
      <Link href={href} tabIndex={-1} aria-hidden>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority={priority}
          sizes={row ? "180px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
          className="object-cover mix-blend-multiply transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.05]"
        />
      </Link>
      {!row && (
        <>
          <span className="absolute top-3 left-3 rounded-[4px] bg-white px-2 py-1 text-[0.625rem] font-semibold tracking-[0.1em] text-brand uppercase">
            {getCategoryName(product.category)}
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute right-3 bottom-3 flex cursor-pointer items-center gap-1.5 rounded-md bg-white px-3 py-2 text-xs font-semibold text-charcoal opacity-100 shadow-sm transition-all duration-200 hover:bg-brand hover:text-white lg:translate-y-2 lg:opacity-0 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          >
            <Eye aria-hidden className="size-3.5" />
            Quick specs
            <span className="sr-only"> for {product.name}</span>
          </button>
        </>
      )}
    </div>
  );

  return (
    <article
      className={`group flex h-full overflow-hidden rounded-lg border border-border bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_14px_32px_-12px_rgba(72,19,35,0.25)] ${row ? "flex-row" : "flex-col"}`}
    >
      {image}
      <div className="flex flex-1 flex-col p-5">
        {row && <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-brand uppercase">{getCategoryName(product.category)}</p>}
        <h3 className={`${row ? "mt-1.5" : "sm:min-h-[3.25rem]"} text-lg leading-snug font-semibold tracking-tight`}>
          <Link href={href} className="hover:text-brand">
            {product.name}
          </Link>
        </h3>

        {row ? (
          <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{product.summary}</p>
        ) : (
          <>
            <dl className="mt-3 space-y-1.5 text-sm">
              {keySpecs.map((s) => (
                <div key={s.label} className="flex justify-between gap-4">
                  <dt className="shrink-0 text-charcoal-muted">{s.label}</dt>
                  <dd className="text-right font-medium text-charcoal">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 border-t border-border pt-4 text-sm text-charcoal-muted">
              <span className="font-medium text-charcoal">Sizes: </span>
              {shownSizes.join(", ")}
              {extra > 0 && ` +${extra} more`}
            </p>
          </>
        )}

        <div className={`mt-auto flex gap-2 pt-5 ${row ? "flex-wrap items-center" : ""}`}>
          {row ? (
            <>
              <Button size="sm" onClick={() => setOpen(true)}>
                Request Price
              </Button>
              <Link href={href} className="inline-flex items-center gap-1 px-2 text-sm font-semibold text-brand hover:underline">
                View Details
                <ArrowRight aria-hidden className="size-3.5" />
              </Link>
            </>
          ) : (
            <>
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href={href}>View Details</Link>
              </Button>
              <Button size="sm" className="flex-1" onClick={() => setOpen(true)}>
                Request Price
              </Button>
            </>
          )}
        </div>
      </div>
      <ProductSpecsDialog product={product} open={open} onOpenChange={setOpen} />
    </article>
  );
}
