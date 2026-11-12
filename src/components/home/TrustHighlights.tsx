import { ShieldCheck, Sparkles, ClockCheck, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TrustHighlights() {
  const highlights = [
    {
      num: "01",
      icon: ShieldCheck,
      title: "Quality Products",
      description:
        "Standard insulation thickness, genuine copper cross-sections, and high spark resistance for domestic, commercial, and industrial installations.",
      badge: "Insulation Tested",
    },
    {
      num: "02",
      icon: Sparkles,
      title: "High Copper Purity",
      description:
        "Electrolytic grade annealed copper conductors providing maximum conductivity, reduced circuit resistance, and long-term electrical safety.",
      badge: "High Conductivity",
    },
    {
      num: "03",
      icon: ClockCheck,
      title: "Reliable Service",
      description:
        "Direct wholesale and project supply with fast WhatsApp price quotations, accurate gauge advice, and dependable order fulfillment.",
      badge: "Fast Dispatch",
    },
  ];

  return (
    <section className="bg-[#F5F6F4] py-16 md:py-20 border-b border-gray-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#167346]/40 hover:shadow-lg hover:shadow-gray-900/5"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5EE] text-[#167346] transition-colors duration-300 group-hover:bg-[#167346] group-hover:text-white">
                      <Icon className="h-6 w-6 stroke-[2.2]" />
                    </div>
                    <span className="text-2xl font-black text-gray-200 transition-colors group-hover:text-[#167346]/20">
                      {item.num}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-lg font-bold text-[#202522]">
                        {item.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-[#E8F5EE] text-[#167346] text-[10px] font-bold px-2 py-0.5"
                      >
                        {item.badge}
                      </Badge>
                    </div>
                    <p className="text-xs leading-relaxed text-[#4B5563]">
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
