"use client";

import * as React from "react";
import Image from "next/image";
import {
  MessageCircle,
  Zap,
  Eye,
  Check,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { Product } from "@/lib/products";
import { getProductPriceWhatsAppLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProductQuickView } from "@/components/ui/ProductQuickView";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = React.useState<string>(
    product.availableSizes[0] || ""
  );
  const [isQuickViewOpen, setIsQuickViewOpen] = React.useState(false);

  const whatsappUrl = getProductPriceWhatsAppLink(product.name, selectedSize);

  return (
    <>
      <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#167346]/40 hover:shadow-xl hover:shadow-gray-900/5">
        {/* Top Product Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-[#F5F6F4] to-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-108"
          />

          {/* Top Badges */}
          <div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5">
            <Badge
              variant="secondary"
              className="rounded-lg bg-[#202522]/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-bold text-white shadow-2xs uppercase tracking-wider"
            >
              {product.category}
            </Badge>
            {product.tag && (
              <Badge className="rounded-lg bg-[#167346] px-2 py-0.5 text-[10px] font-bold text-white shadow-2xs">
                {product.tag}
              </Badge>
            )}
          </div>

          {/* Quick View Hover Pill on Image */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => setIsQuickViewOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#202522] shadow-md backdrop-blur-xs hover:bg-white hover:text-[#167346] transition-all transform translate-y-2 group-hover:translate-y-0 duration-300"
            >
              <Eye className="h-3.5 w-3.5 text-[#167346]" />
              <span>Quick Specs</span>
            </button>
          </div>
        </div>

        {/* Card Header */}
        <CardHeader className="p-5 pb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-[#202522] transition-colors group-hover:text-[#167346] line-clamp-1">
              {product.name}
            </h3>
          </div>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#4B5563]">
            {product.shortDescription}
          </p>
        </CardHeader>

        {/* Card Content: Specs & Sizes */}
        <CardContent className="flex-1 p-5 pt-1 space-y-3">
          {/* Key Electrical Specs Grid */}
          <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#F5F6F4] p-2.5 text-xs">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Conductor
              </span>
              <span
                className="font-semibold text-[#202522] block truncate"
                title={product.conductor}
              >
                {product.conductor}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Voltage
              </span>
              <span className="font-semibold text-[#202522] block truncate">
                {product.voltageGrade}
              </span>
            </div>
          </div>

          {/* Size Pills */}
          <div>
            <div className="mb-1.5 flex items-center justify-between text-[11px]">
              <span className="font-bold text-[#202522]">Available Sizes:</span>
              <span className="text-[10px] text-gray-400">Select gauge</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.availableSizes.slice(0, 3).map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg px-2 py-0.5 text-[11px] font-semibold transition-all ${
                      isSelected
                        ? "bg-[#167346] text-white shadow-2xs ring-1 ring-[#167346]"
                        : "bg-[#F5F6F4] text-[#4B5563] hover:bg-emerald-50 hover:text-[#167346]"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
              {product.availableSizes.length > 3 && (
                <button
                  type="button"
                  onClick={() => setIsQuickViewOpen(true)}
                  className="rounded-lg bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-[#167346] hover:bg-emerald-50"
                >
                  +{product.availableSizes.length - 3} more
                </button>
              )}
            </div>
          </div>
        </CardContent>

        {/* Card Footer: Action Buttons */}
        <CardFooter className="p-5 pt-0 flex gap-2">
          <Button
            asChild
            className="flex-1 h-10 rounded-xl bg-[#167346] text-xs font-bold text-white shadow-xs transition-all hover:bg-[#125d38] hover:shadow-md hover:shadow-[#167346]/20"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Request Price</span>
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setIsQuickViewOpen(true)}
            className="h-10 w-10 shrink-0 rounded-xl border-gray-200 text-[#4B5563] hover:border-[#167346] hover:text-[#167346] hover:bg-emerald-50"
            aria-label="View Product Details"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      {/* Quick View Dialog */}
      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}
