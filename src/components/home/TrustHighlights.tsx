import { ShieldCheck, Sparkles, ClockCheck, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TrustHighlights() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Quality Products",
      description:
        "Every cable coil and wire bundle is sourced to meet standard insulation thickness, voltage ratings, and spark test resistance.",
      badge: "Insulation Tested",
    },
    {
      icon: Sparkles,
      title: "High Copper Purity",
      description:
        "Drawn from electrolytic grade copper conductors ensuring maximum current carrying capacity, minimal voltage drop, and energy efficiency.",
      badge: "High Conductivity",
    },
    {
      icon: ClockCheck,
      title: "Reliable Service",
      description:
        "Prompt WhatsApp quotation, transparent gauge specifications, and dependable order fulfillment for contractors and electricians.",
      badge: "Fast Fulfillment",
    },
  ];

  return (
    <section className="bg-[#F5F6F4] py-16 md:py-20 border-y border-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#167346]/40 hover:shadow-md"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5EE] text-[#167346] transition-colors group-hover:bg-[#167346] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-[#F5F6F4] px-3 py-1 text-[11px] font-semibold text-[#167346]">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#202522]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

