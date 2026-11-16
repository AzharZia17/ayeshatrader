"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/products";
import { getProductInquiryLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

/** Size picker + WhatsApp button. The message always carries product name and the selected size. */
export function SizeInquiry({ product, idPrefix, label = "Request Price on WhatsApp", inverse = false }: { product: Product; idPrefix: string; label?: string; inverse?: boolean }) {
  const [size, setSize] = React.useState<string>(product.sizes[0] ?? "");
  const labelId = `${idPrefix}-size-label`;

  return (
    <div className="space-y-4">
      <div>
        <label id={labelId} className={`mb-2 block text-xs font-bold tracking-[0.14em] uppercase ${inverse ? "text-white/70" : "text-charcoal-muted"}`}>
          Select size
        </label>
        <Select value={size} onValueChange={(v) => v && setSize(v)}>
          <SelectTrigger aria-labelledby={labelId}>
            <SelectValue>{size}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {product.sizes.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {product.sizeNote && <p className={`mt-2 text-xs leading-relaxed ${inverse ? "text-white/60" : "text-charcoal-muted"}`}>{product.sizeNote}</p>}
      </div>
      <Button asChild size="lg" variant={inverse ? "inverse" : "default"} className="w-full">
        <a href={getProductInquiryLink(product.name, size)} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden />
          {label}
        </a>
      </Button>
    </div>
  );
}
