"use client";

import * as React from "react";
import Link from "next/link";
import { getCategoryName, type Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/shared/ProductImage";
import { ProductSpecsDialog } from "@/components/products/ProductSpecsDialog";

/** Catalog entry: photograph, name, category, key specs and two actions. */
export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const keySpecs = product.specs.slice(0, 3);
  const shownSizes = product.sizes.slice(0, 3);
  const extra = product.sizes.length - shownSizes.length;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-white transition-[border-color,box-shadow] duration-200 hover:border-copper hover:shadow-[0_8px_24px_rgba(23,18,15,0.08)]">
      <Link href={`/products/${product.slug}`} className="block" aria-label={`${product.name} details`} tabIndex={-1}>
        <ProductImage
          src={product.image}
          alt={product.imageAlt}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="rounded-t-[7px]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-wide text-copper-deep uppercase">{getCategoryName(product.category)}</p>
        <h3 className="mt-2 text-lg leading-snug sm:min-h-[3.25rem] font-semibold tracking-tight">
          <Link href={`/products/${product.slug}`} className="hover:text-brand">
            {product.name}
          </Link>
        </h3>

        <dl className="mt-4 space-y-1.5 text-sm">
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

        <div className="mt-auto flex gap-2 pt-5">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={`/products/${product.slug}`}>View Details</Link>
          </Button>
          <Button size="sm" className="flex-1" onClick={() => setOpen(true)}>
            Request Price
          </Button>
        </div>
      </div>

      <ProductSpecsDialog product={product} open={open} onOpenChange={setOpen} />
    </article>
  );
}
