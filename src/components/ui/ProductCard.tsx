"use client";

import * as React from "react";
import Image from "next/image";
import { MessageCircle, Zap, Shield, ChevronDown, ChevronUp, Check } from "lucide-react";
import { Product } from "@/lib/products";
import { getProductPriceWhatsAppLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [selectedSize, setSelectedSize] = React.useState<string>(
    product.availableSizes[0] || ""
  );

  const whatsappUrl = getProductPriceWhatsAppLink(product.name, selectedSize);

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#167346]/40 hover:shadow-lg">
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F6F4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge on Image */}
        <div className="absolute left-3.5 top-3.5 flex flex-wrap gap-1.5">
          <Badge className="rounded-md bg-[#202522] px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
            {product.category}
          </Badge>
          {product.tag && (
            <Badge className="rounded-md bg-[#167346] px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
              {product.tag}
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="p-5 pb-2">
        <h3 className="text-lg font-bold text-[#202522] group-hover:text-[#167346] transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#4B5563]">
          {product.shortDescription}
        </p>
      </CardHeader>

      <CardContent className="flex-1 p-5 pt-2 space-y-3">
        {/* Core Quick Specs */}
        <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#F5F6F4] p-2.5 text-xs">
          <div>
            <span className="block text-[10px] uppercase font-semibold text-gray-500">
              Conductor
            </span>
            <span className="font-medium text-[#202522] truncate block" title={product.conductor}>
              {product.conductor}
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase font-semibold text-gray-500">
              Voltage
            </span>
            <span className="font-medium text-[#202522] truncate block">
              {product.voltageGrade}
            </span>
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="font-semibold text-[#202522]">Available Sizes:</span>
            <span className="text-[11px] text-gray-500">Select for quotation</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.availableSizes.slice(0, 4).map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-md px-2 py-1 text-[11px] font-medium transition-all ${
                    isSelected
                      ? "bg-[#167346] text-white shadow-sm ring-1 ring-[#167346]"
                      : "bg-[#F5F6F4] text-[#4B5563] hover:bg-[#E8F5EE] hover:text-[#167346]"
                  }`}
                >
                  {size}
                </button>
              );
            })}
            {product.availableSizes.length > 4 && (
              <span className="self-center text-[10px] font-semibold text-[#167346]">
                +{product.availableSizes.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Collapsible Details Section */}
        {isExpanded && (
          <div className="border-t border-[#E5E7EB] pt-3 text-xs space-y-2.5 text-[#4B5563]">
            <div>
              <span className="font-semibold text-[#202522] block mb-1">Key Applications:</span>
              <ul className="space-y-1">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#167346] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-[#202522] block mb-1">Specifications:</span>
              <p className="leading-relaxed text-gray-600">{product.fullDescription}</p>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs font-semibold text-[#167346] hover:underline pt-1"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              <span>View Specifications</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          asChild
          className="w-full rounded-xl bg-[#167346] font-semibold text-white transition-all hover:bg-[#125d38] hover:shadow-md"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Request Price</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

