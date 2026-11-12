import {
  ShieldCheck,
  CheckCircle,
  Banknote,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Quality-Focused Products",
      description:
        "We source and distribute wires manufactured with high-conductivity electrolytic copper conductors and grade-A flame retardant PVC insulation.",
    },
    {
      icon: CheckCircle,
      title: "Reliable Cable Solutions",
      description:
        "From small residential conduit wiring to high-draw agricultural submersible pumps and industrial feeders, our cables deliver consistent performance.",
    },
    {
      icon: Banknote,
      title: "Competitive Pricing",
      description:
        "Direct wholesale and trade pricing without unnecessary middleman markups. Receive clear, fair quotations for project orders and bulk coils.",
    },
    {
      icon: Users,
      title: "Customer-Focused Service",
      description:
        "Fast inquiry turnaround via WhatsApp or direct phone. We help contractors, electricians, and homeowners select the right wire gauge for their needs.",
    },
  ];

  return (
    <section className="bg-[#F5F6F4] py-16 md:py-24 border-t border-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Ayesha Traders"
          title="Engineered for Trust &amp; Reliability"
          subtitle="We focus on authentic conductor specifications, transparent gauge measurements, and responsive customer service for every inquiry."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#167346]/40 hover:shadow-md"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5EE] text-[#167346] transition-colors group-hover:bg-[#167346] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#202522]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Small guidance box */}
        <div className="mt-12 rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#202522]">
              Need assistance selecting wire gauges for your construction project?
            </h4>
            <p className="text-sm text-[#4B5563]">
              Speak directly with our team to verify load requirements for lights, AC circuits, and power boards.
            </p>
          </div>
          <Button
            asChild
            className="rounded-full bg-[#167346] px-6 font-semibold text-white hover:bg-[#125d38] shrink-0"
          >
            <Link href="/quality" className="inline-flex items-center gap-2">
              <span>View Quality Standards</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

