import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  Zap,
  Layers,
  Scale,
} from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_CATEGORY,
  BUSINESS_TAGLINE,
  PHONE_1,
  PHONE_2,
  LOCATION,
  getWhatsAppLink,
} from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BUSINESS_NAME}, an electrical wires and cables supplier located at ${LOCATION}. Quality copper conductors, dependable service, and transparent specifications.`,
};

export default function AboutPage() {
  const values = [
    {
      icon: Scale,
      title: "Honest Gauge & Weight",
      description:
        "We believe trust is built on integrity. Our wires and cables adhere strictly to declared gauge specifications, strand counts, and standard weight guidelines.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Conductor Standards",
      description:
        "Every batch focuses on high-conductivity electrolytic copper conductors that maintain low electrical resistance and prevent overheating.",
    },
    {
      icon: Layers,
      title: "Diverse Application Coverage",
      description:
        "Supplying solutions for domestic housing electrification, shop and commercial plaza conduit systems, agricultural tube wells, and heavy power feeders.",
    },
    {
      icon: Phone,
      title: "Direct & Responsive Service",
      description:
        "No complex bureaucracy. Contact us directly via phone or WhatsApp for quick pricing, order preparation, and collection from our Noshera Sansi location.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="border-b border-[#E5E7EB] bg-[#F5F6F4] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="About Us"
            title={`About ${BUSINESS_NAME}`}
            subtitle="Your trusted partner for electrical wires, flexible cables, and pure copper electrical solutions."
            align="center"
          />
        </div>
      </section>

      {/* Introduction Story / Overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F5EE] px-3.5 py-1 text-xs font-semibold text-[#167346]">
                <Zap className="h-3.5 w-3.5" />
                <span>Electrical Cable Specialist</span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#202522] sm:text-4xl">
                Dedicated to Safety, Electrical Reliability &amp; Genuine Materials
              </h2>

              <p className="text-base leading-relaxed text-[#4B5563]">
                <strong className="text-[#202522]">{BUSINESS_NAME}</strong> operates as an electrical wires and cables supplier serving electricians, building contractors, agricultural pump operators, and private homeowners across Gujranwala and surrounding areas.
              </p>

              <p className="text-base leading-relaxed text-[#4B5563]">
                Electrical wiring represents the invisible backbone of any structure. Substandard conductors and thin insulation increase power consumption, cause appliance breakdowns, and create extreme fire hazards. At {BUSINESS_NAME}, our primary objective is to make genuine, high-conductivity copper wires and resilient PVC cables easily accessible with straightforward pricing and honest advice.
              </p>

              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F6F4] p-5 space-y-3">
                <h4 className="text-sm font-bold text-[#202522]">
                  Our Product Supply Focus:
                </h4>
                <div className="grid grid-cols-1 gap-2 text-xs text-[#202522] sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#167346]" />
                    <span>Single Core PVC Conduit Wires</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#167346]" />
                    <span>Multi-Core Flexible Appliance Cables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#167346]" />
                    <span>3-Core Flat Submersible Pump Cables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#167346]" />
                    <span>High-Purity Copper Earthing &amp; Winding Wire</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Image Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F5F6F4] p-4 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/hero-cables.svg"
                    alt="Ayesha Traders Electrical Cables"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 rounded-xl bg-white p-4 border border-[#E5E7EB]">
                  <div className="flex items-center gap-2 text-xs text-[#167346] font-bold uppercase tracking-wider">
                    <MapPin className="h-4 w-4" />
                    <span>Store Location</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#202522]">
                    {LOCATION}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Near Galla Ismail, Bat Tozi Wala, Noshera Sansi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="border-t border-[#E5E7EB] bg-[#F5F6F4] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Commitments"
            title="The Principles That Guide Our Supply"
            subtitle="Transparent specifications, dependable copper purity, and fair prices for every customer."
            className="mb-14"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Card
                  key={i}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
                >
                  <CardContent className="p-0 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5EE] text-[#167346]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#202522]">{v.title}</h3>
                    <p className="text-xs leading-relaxed text-[#4B5563]">
                      {v.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Location Strip */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#E5E7EB] bg-[#F5F6F4] p-8 shadow-sm md:p-12">
            <h3 className="text-2xl font-bold text-[#202522]">
              Visit or Contact Ayesha Traders
            </h3>
            <p className="mt-2 text-sm text-[#4B5563]">
              Have questions regarding our wire stock, coil availability, or wholesale pricing?
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="h-11 rounded-full bg-[#167346] px-6 font-semibold text-white hover:bg-[#125d38]"
              >
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Message on WhatsApp</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-2 border-[#167346] px-6 font-semibold text-[#167346] hover:bg-[#E8F5EE]"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  <span>Contact Page &amp; Location</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

