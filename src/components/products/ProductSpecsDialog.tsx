"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategoryName, type Product } from "@/lib/products";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SizeInquiry } from "@/components/products/SizeInquiry";
import { SpecList } from "@/components/products/SpecList";
import { ProductImage } from "@/components/shared/ProductImage";

interface Props {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductSpecsDialog({ product, open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <div className="grid gap-6 sm:grid-cols-[14rem_1fr]">
          <ProductImage
            src={product.image}
            alt={product.imageAlt}
            sizes="(max-width: 640px) 60vw, 224px"
            className="mx-auto w-full max-w-56 self-start rounded-md sm:max-w-none"
          />
          <div className="min-w-0">
            <DialogHeader className="pr-8">
              <p className="eyebrow text-brand">{getCategoryName(product.category)}</p>
              <DialogTitle className="text-xl">{product.name}</DialogTitle>
              <DialogDescription>Quick specs</DialogDescription>
            </DialogHeader>
            <SpecList specs={product.specs} className="mt-4" />
            <div className="mt-6">
              <SizeInquiry product={product} idPrefix={`dialog-${product.slug}`} />
            </div>
            <Link href={`/products/${product.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
              View full details
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
