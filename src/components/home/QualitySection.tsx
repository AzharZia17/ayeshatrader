import Link from "next/link";
import {
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  Layers,
  ArrowRight,
  Flame,
  Zap,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

export function QualitySection() {
  const specs = [
    {
      label: "3/0.029 (1.0 mm²)",
      use: "Lighting circuits, ceiling fans, low amp points",
    },
    {
      label: "7/0.029 (1.5 mm²)",
      use: "General power points, computer plugs, TV consoles",
    },
    {
      label: "7/0.036 (2.5 mm²)",
      use: "Heavy kitchen appliances, refrigerators, microwaves",
    },
    {
      label: "7/0.044 (4.0 mm²)",
      use: "1.0 Ton & 1.5 Ton Inverter Air Conditioners, geysers",
    },
    {
      label: "7/0.052 (6.0 mm²)",
      use: "2.0 Ton AC units, instant electric water heaters",
    },
    {
      label: "7/0.064 (10.0 mm²)",
      use: "Main distribution board feeder, sub-panel feeds",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Text Column */}
          <div className="space-y-6 lg:col-span-6">
            <SectionHeader
              badge="Wire Quality &amp; Specifications"
              title="Built on Pure Copper Conductors &amp; Tough PVC"
              subtitle="Choosing the proper gauge and conductor quality is critical to prevent overheating, energy loss, and hazardous electrical fires."
              align="left"
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EE] text-[#167346]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#202522]">
                    High Electrical Conductivity
                  </h4>
                  <p className="text-sm text-[#4B5563] mt-0.5">
                    Utilizes electrolytic-grade copper to minimize circuit resistance, reducing monthly power wastage and wire heating.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EE] text-[#167346]">
                  <Flame className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#202522]">
                    Flame Retardant PVC Compound
                  </h4>
                  <p className="text-sm text-[#4B5563] mt-0.5">
                    Self-extinguishing PVC sheath resists ignition and withstands high operating temperatures under continuous electrical load.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EE] text-[#167346]">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#202522]">
                    Consistent Gauge &amp; Conductor Diameter
                  </h4>
                  <p className="text-sm text-[#4B5563] mt-0.5">
                    Precise strand count and full diameter tolerance without deceptive undersizing.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                asChild
                className="rounded-full bg-[#167346] px-6 font-semibold text-white hover:bg-[#125d38]"
              >
                <Link href="/quality" className="inline-flex items-center gap-2">
                  <span>Explore Cable Specifications Guide</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Specifications Table Card */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F5F6F4] shadow-md">
              <div className="border-b border-[#E5E7EB] bg-[#202522] p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Standard Gauge Guide</h3>
                    <p className="text-xs text-gray-300">
                      Common residential &amp; commercial wire sizes available
                    </p>
                  </div>
                  <span className="rounded-full bg-[#167346] px-3 py-1 text-xs font-semibold text-white">
                    450/750V
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[#E5E7EB] bg-white text-xs">
                {specs.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between gap-1 p-3.5 sm:flex-row sm:items-center hover:bg-[#F5F6F4] transition-colors"
                  >
                    <span className="font-bold text-[#167346] sm:min-w-[130px]">
                      {item.label}
                    </span>
                    <span className="text-[#4B5563]">{item.use}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#E8F5EE] p-4 text-xs text-[#167346] font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>
                  All cables supplied in standard 90-meter coils or custom industrial drum lengths.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

