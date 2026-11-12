import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  Banknote,
  Users,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Quality-Focused Products",
      description:
        "High-conductivity electrolytic annealed copper conductors paired with Grade-A flame retardant PVC insulation compound for reliable lifespan.",
    },
    {
      icon: CheckCircle,
      title: "Reliable Cable Solutions",
      description:
        "Engineered for heavy continuous loads: residential conduit lines, high-draw agricultural tube well pumps, and multi-core commercial distribution.",
    },
    {
      icon: Banknote,
      title: "Competitive Trade Pricing",
      description:
        "Direct wholesale rates for electrical contractors, builders, and retailers without speculative markups. Honest quotations based on actual copper weights.",
    },
    {
      icon: Users,
      title: "Customer-Focused Service",
      description:
        "Immediate support via WhatsApp and phone. We assist with selecting suitable strand counts, wire gauges, and continuous coil or drum lengths.",
    },
  ];

  return (
    <section className="bg-[#F5F6F4] py-16 md:py-24 border-t border-gray-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Ayesha Traders"
          title="Engineered for Trust &amp; Safety"
          subtitle="We focus on authentic conductor specifications, transparent gauge measurements, and responsive service for every order."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group rounded-3xl border border-gray-200/80 bg-white p-7 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#167346]/40 hover:shadow-lg hover:shadow-gray-900/5"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5EE] text-[#167346] transition-colors duration-300 group-hover:bg-[#167346] group-hover:text-white">
                    <Icon className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-base font-bold text-[#202522]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#4B5563]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Guidance Banner */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="inline-block rounded-md bg-[#E8F5EE] px-2.5 py-0.5 text-[11px] font-bold text-[#167346]">
                Contractors &amp; Electricians
              </span>
              <h4 className="text-lg font-bold text-[#202522]">
                Need assistance selecting wire gauges for your construction project?
              </h4>
              <p className="text-xs text-[#4B5563] max-w-2xl">
                Share your total electrical load or bill of quantities on WhatsApp to receive quick gauge recommendations and direct wholesale pricing.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                asChild
                className="h-11 rounded-full bg-[#167346] px-6 text-xs font-bold text-white hover:bg-[#125d38]"
              >
                <a
                  href={getWhatsAppLink(
                    "Hello Ayesha Traders! I have a construction wiring project and would like to consult on cable specifications and wholesale quotes."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Consult via WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
