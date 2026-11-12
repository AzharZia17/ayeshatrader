import { Metadata } from "next";
import { MessageCircle, Zap, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { BUSINESS_NAME, getWhatsAppLink } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductGrid } from "@/components/ui/ProductGrid";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Products & Wire Catalog",
  description:
    "Explore our complete range of PVC electric wires, multi-core flexible cables, high-conductivity copper wires, and industrial power cables. Request instant pricing via WhatsApp.",
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="border-b border-[#E5E7EB] bg-[#F5F6F4] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Product Catalog"
            title="Electrical Wires &amp; Cables Range"
            subtitle="Browse our comprehensive inventory of pure copper wires and heavy-duty industrial cables. All items available in standard coils or custom drum lengths. Select your required size to request real-time pricing via WhatsApp."
            align="center"
          />

          {/* Quick Notice Banner */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#4B5563]">
            <div className="flex items-center gap-1.5 font-medium text-[#202522]">
              <Zap className="h-4 w-4 text-[#167346]" />
              <span>Full Wire Gauge Tolerances</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5 font-medium text-[#202522]">
              <ShieldCheck className="h-4 w-4 text-[#167346]" />
              <span>Grade-A Flame Retardant PVC</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5 font-medium text-[#202522]">
              <MessageCircle className="h-4 w-4 text-[#167346]" />
              <span>Wholesale &amp; Retail Quotes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid products={PRODUCTS} />
        </div>
      </section>

      {/* Custom Orders & Bulk Procurement Banner */}
      <section className="border-t border-[#E5E7EB] bg-[#F5F6F4] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm md:p-12">
            <h3 className="text-2xl font-bold text-[#202522] sm:text-3xl">
              Need a Custom Cable Specification or Bulk Quotation?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
              If your commercial plaza, agricultural tube well, or industrial project requires specific drum lengths, armored specs, or high-volume coil supply, our team is ready to prepare a detailed quotation.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-[#167346] px-8 font-semibold text-white hover:bg-[#125d38]"
              >
                <a
                  href={getWhatsAppLink(
                    "Hello Ayesha Traders! I have a bulk/custom cable requirement and would like to discuss specifications and quotation."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Project Specs on WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

