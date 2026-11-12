import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  Flame,
  AlertTriangle,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import {
  BUSINESS_NAME,
  getWhatsAppLink,
} from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quality Standards & Cable Specifications",
  description:
    "Learn about electrical wire quality, copper conductor purity, insulation standards, and wire gauge recommendations for residential and commercial installations.",
};

export default function QualityPage() {
  const wireGaugeGuide = [
    {
      gauge: "3/0.029 (1.0 mm²)",
      currentRating: "Up to 10 Amperes",
      recommendedUse:
        "Ceiling lights, LED spotlights, exhaust fans, and decorative chandelier circuits.",
      caution: "Not suitable for heavy heating loads or plug outlets.",
    },
    {
      gauge: "7/0.029 (1.5 mm²)",
      currentRating: "Up to 15 Amperes",
      recommendedUse:
        "General wall power socket points, TV displays, computer workstations, ceiling fans, and room lighting sub-circuits.",
      caution: "Standard domestic bedroom and living area outlet wire.",
    },
    {
      gauge: "7/0.036 (2.5 mm²)",
      currentRating: "Up to 20 Amperes",
      recommendedUse:
        "Heavy kitchen sockets, microwave ovens, refrigerators, washing machines, and water pumps up to 1 HP.",
      caution: "Recommended minimum for all dedicated kitchen lines.",
    },
    {
      gauge: "7/0.044 (4.0 mm²)",
      currentRating: "Up to 28 Amperes",
      recommendedUse:
        "1.0 Ton and 1.5 Ton Inverter Air Conditioners, electric geysers, room heaters, and iron outlets.",
      caution: "Run unbroken direct runs from distribution board to AC unit.",
    },
    {
      gauge: "7/0.052 (6.0 mm²)",
      currentRating: "Up to 36 Amperes",
      recommendedUse:
        "2.0 Ton AC units, instant multi-point electric water heaters, and floor sub-distribution panels.",
      caution: "Ideal for high-demand residential circuits.",
    },
    {
      gauge: "7/0.064 (10.0 mm²)",
      currentRating: "Up to 50 Amperes",
      recommendedUse:
        "Main supply line from electricity meter to Main Distribution Board (MDB) in single-phase houses.",
      caution: "Essential for safeguarding the entire domestic installation.",
    },
  ];

  const qualityPillars = [
    {
      icon: Sparkles,
      title: "Electrolytic High-Conductivity Copper",
      description:
        "Quality starts with conductor purity. High-grade annealed copper offers minimal electrical resistance, preventing unwanted voltage drops and ensuring maximum energy efficiency.",
    },
    {
      icon: Flame,
      title: "Flame Retardant PVC Compound",
      description:
        "Grade-A PVC insulation designed with self-extinguishing flame-retardant properties. It restricts spark propagation and resists insulation cracking under temperature extremes.",
    },
    {
      icon: Zap,
      title: "Dielectric Voltage Endurance",
      description:
        "Tested to withstand required operating voltage classes (300/500V, 450/750V, and 600/1000V) without breakdown, preventing leakage currents and human shock hazards.",
    },
    {
      icon: ShieldCheck,
      title: "Full Conductor Dimension Tolerance",
      description:
        "Unlike substandard market cables with reduced copper strand thickness, our suppliers uphold genuine strand diameters for dependable ampacity.",
    },
  ];

  const faqs = [
    {
      q: "Why is high copper purity essential in building wire?",
      a: "Pure copper has extremely low electrical resistance. Substandard copper mixed with impurities or recycled scrap generates excessive heat when current flows through it. This heat wastes electricity, increases your monthly bills, and degrades the insulation over time, creating a severe fire hazard.",
    },
    {
      q: "What does gauge naming like 3/0.029 or 7/0.036 mean?",
      a: "In standard Pakistani wire specifications, the first number represents the number of copper strands, and the second number represents the diameter of each individual strand in inches. For instance, '7/0.029' means 7 strands of copper, each measuring 0.029 inches in diameter, totaling approximately 1.5 mm² cross-sectional area.",
    },
    {
      q: "Which cable is recommended for deep well submersible pumps?",
      a: "Submersible pumps require 3-core flat submersible cables manufactured with water-impervious PVC or rubber compounds. Regular flexible cables will allow water to permeate the insulation under continuous hydrostatic pressure, leading to motor burnout.",
    },
    {
      q: "Can I use flexible wire for underground conduit wiring?",
      a: "For underground conduits or direct burial, multi-core armoured cables (with steel wire armour) or rigid heavy-duty PVC conduit wires should be used. Flexible multi-core cables are primarily intended for indoor portable appliances and equipment hookups.",
    },
    {
      q: "How can I check the price for my required wire coil quantity?",
      a: "Because copper prices fluctuate with daily commodity market rates, we provide real-time quotations via WhatsApp or direct phone call. Simply contact us with your required gauge and coil count for an instant, competitive quote.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-[#E5E7EB] bg-[#F5F6F4] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technical &amp; Quality Standards"
            title="Cable Quality &amp; Gauge Specifications"
            subtitle="Understand the essential engineering factors behind dependable electrical cables — from conductor metallurgy and insulation compounds to proper wire gauge selection."
            align="center"
          />
        </div>
      </section>

      {/* 4 Quality Pillars */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Quality Benchmark"
            title="What Makes a Quality Electrical Cable?"
            subtitle="Inspecting the four core attributes that distinguish premium electrical cables from dangerous substandard wires."
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Card
                  key={i}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#167346]/40 hover:shadow-md"
                >
                  <CardContent className="p-0 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5EE] text-[#167346]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#202522]">{p.title}</h3>
                    <p className="text-xs leading-relaxed text-[#4B5563]">
                      {p.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wire Gauge Specifications Table */}
      <section className="border-t border-[#E5E7EB] bg-[#F5F6F4] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Application Guide"
            title="Standard Wire Gauges &amp; Recommended Usage"
            subtitle="Refer to this handy guide to match wire gauge specifications to common residential and commercial electrical loads."
            className="mb-12"
          />

          <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-[#E5E7EB] bg-[#202522] text-white">
                  <tr>
                    <th className="px-5 py-4 font-bold">Standard Gauge</th>
                    <th className="px-5 py-4 font-bold">Current Capacity</th>
                    <th className="px-5 py-4 font-bold">Recommended Usage</th>
                    <th className="px-5 py-4 font-bold">Practical Advice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] text-[#202522]">
                  {wireGaugeGuide.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-[#F9FAF8]"}
                    >
                      <td className="whitespace-nowrap px-5 py-4 font-bold text-[#167346]">
                        {row.gauge}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 font-semibold text-[#4B5563]">
                        {row.currentRating}
                      </td>
                      <td className="px-5 py-4 text-[#202522]">
                        {row.recommendedUse}
                      </td>
                      <td className="px-5 py-4 text-xs text-[#6B7280]">
                        {row.caution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-[#E5E7EB] bg-[#E8F5EE] p-4 text-xs font-medium text-[#167346] flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>
                Always consult a licensed electrician or electrical engineer to verify exact voltage drop calculations over long distances.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quality FAQs using shadcn Accordion */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Cable Quality &amp; Selection Insights"
            subtitle="Answers to common questions regarding electrical cables, purity, and conduit installation."
            className="mb-10"
          />

          <Accordion className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-[#E5E7EB] px-5 py-2 data-[state=open]:border-[#167346]/40 data-[state=open]:bg-[#F9FAF8]"
              >
                <AccordionTrigger className="text-left text-sm font-bold text-[#202522] hover:text-[#167346]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-xs leading-relaxed text-[#4B5563]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Direct WhatsApp Callout */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#4B5563] mb-4">
              Have technical questions about load requirements or bulk coil specs?
            </p>
            <Button
              asChild
              className="rounded-full bg-[#167346] px-8 font-semibold text-white hover:bg-[#125d38]"
            >
              <a
                href={getWhatsAppLink(
                  "Hello Ayesha Traders! I have a question regarding cable specifications and wire gauges."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Ask via WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
