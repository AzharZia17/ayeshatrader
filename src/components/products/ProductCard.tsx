"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye } from "lucide-react";
import { getCategoryName, type Product } from "@/lib/products";
import { ProductSpecsDialog } from "@/components/products/ProductSpecsDialog";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const href = `/products/${product.slug}`;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden  bg-surface-gray  transition-shadow duration-500 group-hover:shadow-[0_28px_50px_-24px_rgba(12,13,8,0.45)]">
        <Link href={href} tabIndex={-1} aria-hidden className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain mix-blend-multiply transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.06]"
          />
        </Link>
        <span className="absolute top-3 left-3 hidden  sm:top-4 sm:left-4 sm:block bg-white/90 px-3 py-1 text-[0.625rem] font-bold tracking-[0.14em] text-brand uppercase backdrop-blur">
          {getCategoryName(product.category)}
        </span>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute inset-x-4 bottom-4 hidden cursor-pointer lg:flex items-center justify-center gap-2  bg-brand py-3 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:bg-brand-hover lg:translate-y-3 lg:opacity-0 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
        >
          <Eye aria-hidden className="size-3.5" />
          Quick specs
          <span className="sr-only"> for {product.name}</span>
        </button>
      </div>

      <div className="mt-4 flex flex-1 flex-col sm:mt-5">
        <h3 className="display text-[1.0625rem] leading-[1.15] sm:text-[1.65rem] sm:leading-[1.1]">
          <Link href={href} className="hover:text-brand">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-xs text-charcoal-muted sm:mt-2 sm:text-sm">{product.sizes.length} sizes available</p>
        <div className="mt-auto flex flex-col items-start gap-2 pt-4 text-[0.8125rem] font-semibold sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-5 sm:text-sm">
          <Link href={href} className="group/link inline-flex items-center gap-1.5 text-brand">
            <span className="link-line pb-0.5">View Details</span>
            <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
          <button type="button" onClick={() => setOpen(true)} className="cursor-pointer text-charcoal-muted transition-colors hover:text-brand">
            Request Price
          </button>
        </div>
      </div>
      <ProductSpecsDialog product={product} open={open} onOpenChange={setOpen} />
    </article>
  );
}
