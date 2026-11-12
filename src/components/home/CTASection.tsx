import { MessageCircle, Phone, MapPin, Zap, ArrowRight } from "lucide-react";
import {
  PHONE_1,
  PHONE_2,
  LOCATION,
  getWhatsAppLink,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#167346] via-[#125d38] to-[#0e4b2e] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background isometric pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md mb-6 ring-1 ring-white/20">
          <Zap className="h-7 w-7 stroke-[2.4]" />
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
          Looking for Quality Cables?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-emerald-100 sm:text-lg">
          Get in touch with Ayesha Traders for current pricing, bulk coil quotations, or immediate stock availability via WhatsApp or phone.
        </p>

        {/* WhatsApp & Call Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-white px-8 text-base font-bold text-[#167346] shadow-xl transition-all duration-300 hover:bg-emerald-50 hover:shadow-2xl"
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5"
            >
              <MessageCircle className="h-5 w-5 fill-[#167346] text-white" />
              <span>WhatsApp Inquiry</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 rounded-full border-2 border-white/60 bg-transparent px-8 text-base font-bold text-white hover:bg-white/10 hover:border-white"
          >
            <a href={`tel:${PHONE_1}`} className="inline-flex items-center gap-2.5">
              <Phone className="h-5 w-5" />
              <span>Call: {PHONE_1}</span>
            </a>
          </Button>
        </div>

        {/* Location & Secondary Phone Details */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-100/90 border-t border-white/15 pt-8">
          <div className="flex items-center gap-1.5 font-medium">
            <Phone className="h-3.5 w-3.5 text-emerald-300" />
            <span>Alternate Helpline: {PHONE_2}</span>
          </div>
          <span className="hidden sm:inline opacity-40">&bull;</span>
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="h-3.5 w-3.5 text-emerald-300" />
            <span>{LOCATION}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
