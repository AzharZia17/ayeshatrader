import { MessageCircle, Phone, MapPin, Zap } from "lucide-react";
import {
  PHONE_1,
  PHONE_2,
  LOCATION,
  getWhatsAppLink,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#167346] py-16 md:py-20 text-white">
      {/* Decorative background grid and light patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm mb-6">
          <Zap className="h-6 w-6 stroke-[2.5]" />
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Looking for Quality Cables?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-emerald-100 sm:text-lg">
          Get in touch with Ayesha Traders for current pricing, bulk coil quotations, or immediate stock inquiries via WhatsApp or phone.
        </p>

        {/* WhatsApp & Call Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-white px-8 text-base font-bold text-[#167346] shadow-lg transition-all hover:bg-emerald-50 hover:shadow-xl"
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
            className="h-14 rounded-full border-2 border-white/80 bg-transparent px-8 text-base font-bold text-white hover:bg-white/15"
          >
            <a href={`tel:${PHONE_1}`} className="inline-flex items-center gap-2.5">
              <Phone className="h-5 w-5" />
              <span>Call: {PHONE_1}</span>
            </a>
          </Button>
        </div>

        {/* Location & Secondary Phone Details */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-100 border-t border-white/20 pt-6">
          <div className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            <span>Alternate Phone: {PHONE_2}</span>
          </div>
          <span className="hidden sm:inline">&bull;</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span>Location: {LOCATION}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

