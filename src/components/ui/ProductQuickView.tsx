"use client";

import * as React from "react";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Check,
  Zap,
  ShieldCheck,
  Flame,
  Layers,
} from "lucide-react";
import { Product } from "@/lib/products";
import { PHONE_1, getProductPriceWhatsAppLink } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductQuickView({
  product,
  isOpen,
  onClose,
}: ProductQuickViewProps) {
  const [selectedSize, setSelectedSize] = React.useState<string>("");

  React.useEffect(() => {
    if (product && product.availableSizes.length > 0) {
      setSelectedSize(product.availableSizes[0]);
    }
  }, [product]);

  if (!product) return null;

  const whatsappUrl = getProductPriceWhatsAppLink(product.name, selectedSize);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl overflow-hidden rounded-3xl p-0 border-gray-200 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left: Image Preview */}
          <div className="relative aspect-square md:aspect-auto md:col-span-5 bg-gradient-to-b from-[#F5F6F4] to-gray-100 p-6 flex items-center justify-center">
            <div className="relative h-64 w-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain drop-shadow-md"
              />
            </div>
            <div className="absolute top-4 left-4">
              <Badge className="bg-[#202522] text-white text-[10px] uppercase font-bold tracking-wider">
                {product.category}
              </Badge>
            </div>
          </div>

          {/* Right: Technical Specs & Inquiry */}
          <div className="p-6 md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <DialogHeader className="text-left space-y-1">
                <DialogTitle className="text-xl font-bold text-[#202522]">
                  {product.name}
                </DialogTitle>
                <DialogDescription className="text-xs text-gray-500 leading-relaxed">
                  {product.shortDescription}
                </DialogDescription>
              </DialogHeader>

              {/* Technical Specifications Grid */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-gray-100 bg-[#F5F6F4] p-2.5">
                  <span className="block text-[10px] font-bold uppercase text-gray-400">
                    Conductor
                  </span>
                  <span className="font-semibold text-[#202522] block truncate" title={product.conductor}>
                    {product.conductor}
                  </span>
                </div>
                <div className="rounded-xl border border-gray-100 bg-[#F5F6F4] p-2.5">
                  <span className="block text-[10px] font-bold uppercase text-gray-400">
                    Voltage Rating
                  </span>
                  <span className="font-semibold text-[#202522] block truncate">
                    {product.voltageGrade}
                  </span>
                </div>
              </div>

              {/* Available Sizes Picker */}
              <div className="mt-4">
                <label className="block text-xs font-bold text-[#202522] mb-1.5">
                  Select Gauge / Size for Quotation:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {product.availableSizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-[#167346] text-white shadow-xs"
                            : "bg-[#F5F6F4] text-[#4B5563] hover:bg-emerald-50 hover:text-[#167346]"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Applications List */}
              <div className="mt-4">
                <span className="block text-xs font-bold text-[#202522] mb-1.5">
                  Recommended For:
                </span>
                <ul className="space-y-1 text-xs text-gray-600">
                  {product.applications.slice(0, 3).map((app, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="h-3.5 w-3.5 text-[#167346] shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <Button
                asChild
                className="w-full h-11 rounded-xl bg-[#167346] font-bold text-white hover:bg-[#125d38] shadow-sm"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Request Current Price via WhatsApp</span>
                </a>
              </Button>

              <div className="flex items-center justify-between text-[11px] text-gray-500 px-1">
                <span>Direct shop call:</span>
                <a
                  href={`tel:${PHONE_1}`}
                  className="font-bold text-[#202522] hover:text-[#167346]"
                >
                  {PHONE_1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
