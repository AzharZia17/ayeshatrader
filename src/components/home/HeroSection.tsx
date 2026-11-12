import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Zap,
  Sparkles,
  Layers,
  Award,
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
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-28 border-b border-gray-100">
      {/* Subtle modern background grids and lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#167346_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.035]" />
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#167346]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -left-24 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#F5F6F4] blur-2xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headline, Descriptions & Value Counter */}
          <div className="space-y-6 lg:col-span-7">
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#167346]/20 bg-[#E8F5EE] px-4 py-1.5 text-xs font-bold text-[#167346] shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#167346] animate-pulse" />
              <span>Direct Manufacturer &amp; Wholesale Supplier</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[#202522] sm:text-5xl lg:text-6xl leading-[1.12]">
              Reliable Cables. <br />
              <span className="bg-gradient-to-r from-[#167346] to-[#0f5233] bg-clip-text text-transparent">
                Trusted Quality.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base leading-relaxed text-[#4B5563] sm:text-lg">
              {BUSINESS_NAME} is your specialized electrical supplier for pure copper conduit wires, multi-core flexible cords, submersible cables, and heavy-duty industrial feeders across Gujranwala and nationwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full bg-[#167346] px-8 text-sm font-bold text-white shadow-md shadow-[#167346]/20 transition-all duration-300 hover:bg-[#125d38] hover:shadow-lg hover:shadow-[#167346]/30"
              >
                <Link href="/products" className="inline-flex items-center gap-2.5">
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 rounded-full border-2 border-gray-200 bg-white px-7 text-sm font-bold text-[#202522] transition-all hover:border-[#167346] hover:bg-emerald-50/50 hover:text-[#167346]"
              >
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 text-[#167346]" />
                  <span>WhatsApp Quotation</span>
                </a>
              </Button>
            </div>

            {/* Corporate Value Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <span className="block text-2xl font-black text-[#167346] sm:text-3xl">
                  100%
                </span>
                <span className="text-xs font-semibold text-[#4B5563]">
                  Electrolytic Copper
                </span>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <span className="block text-2xl font-black text-[#202522] sm:text-3xl">
                  1000V
                </span>
                <span className="text-xs font-semibold text-[#4B5563]">
                  Voltage Ratings
                </span>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <span className="block text-2xl font-black text-[#167346] sm:text-3xl">
                  Full
                </span>
                <span className="text-xs font-semibold text-[#4B5563]">
                  Gauge Tolerances
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Card with Floating Glass Overlays */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200/90 bg-gradient-to-b from-[#F5F6F4] to-gray-100 p-4 shadow-2xl shadow-gray-900/10">
                {/* Main Product Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-inner">
                  <Image
                    src="/images/hero-cable-power.jpg"
                    alt="Ayesha Traders Armoured Electrical Cables and Heavy Duty Copper Conductor"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Top Left Floating Tag */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-[#202522]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      Armoured Industrial Grade
                    </Badge>
                  </div>
                </div>

                {/* Floating Bottom Glass Detail Strip */}
                <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/80 bg-white/90 p-3.5 shadow-sm backdrop-blur-md text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F5EE] text-[#167346]">
                      <Zap className="h-5 w-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <p className="font-extrabold text-[#202522]">
                        Complete Cable Range
                      </p>
                      <p className="text-[11px] text-gray-500">
                        PVC Conduit &bull; Flexible &bull; Submersible
                      </p>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#167346] hover:underline"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Floating Accent Badge (Bottom Left) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2.5 rounded-2xl border border-gray-200/80 bg-white px-4 py-3 shadow-lg shadow-gray-900/5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#167346] text-white">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#202522]">Verified Specifications</p>
                  <p className="text-[10px] text-gray-500">Zero Undersizing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
