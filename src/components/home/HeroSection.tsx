import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Zap,
} from "lucide-react";
import {
  BUSINESS_NAME,
  PHONE_1,
  PHONE_2,
  LOCATION,
  getWhatsAppLink,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-24">
      {/* Subtle background decorative shapes */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#167346]/5 blur-3xl" />
      <div className="absolute -left-20 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#F5F6F4] blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline & Action */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#167346]/20 bg-[#E8F5EE] px-4 py-1.5 text-xs font-semibold text-[#167346]">
              <span className="flex h-2 w-2 rounded-full bg-[#167346]" />
              Electrical Wires &amp; Cables Supplier
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#202522] sm:text-5xl lg:text-6xl">
              Reliable Cables. <br />
              <span className="text-[#167346]">Trusted Quality.</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-[#4B5563] sm:text-lg">
              {BUSINESS_NAME} supplies high-grade copper wires, flexible multi-core cables, and industrial power solutions engineered for safety, superior electrical conductivity, and long-lasting durability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-[#167346] px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-[#125d38] hover:shadow-lg"
              >
                <Link href="/products" className="inline-flex items-center gap-2">
                  <span>Explore Products</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-2 border-[#167346] px-6 text-base font-semibold text-[#167346] hover:bg-[#E8F5EE]"
              >
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </Button>
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-1 gap-3 pt-6 border-t border-[#E5E7EB] sm:grid-cols-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#202522]">
                <CheckCircle2 className="h-4 w-4 text-[#167346]" />
                <span>Electrolytic Copper</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#202522]">
                <CheckCircle2 className="h-4 w-4 text-[#167346]" />
                <span>Certified Gauges</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#202522]">
                <CheckCircle2 className="h-4 w-4 text-[#167346]" />
                <span>Direct Wholesale Supply</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F5F6F4] p-3 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/hero-cables.svg"
                    alt="Ayesha Traders Electrical Cables and Copper Wire"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>

                {/* Micro info strip below image */}
                <div className="mt-3 flex items-center justify-between rounded-xl bg-white p-3 shadow-sm text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8F5EE] text-[#167346]">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#202522]">Complete Range</p>
                      <p className="text-[11px] text-gray-500">PVC, Flexible &amp; Power</p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="font-semibold text-[#167346] hover:underline"
                  >
                    Locate Shop &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

