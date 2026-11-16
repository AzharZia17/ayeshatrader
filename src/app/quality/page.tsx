import type { Metadata } from "next";
import { CONDUCTOR_INFO, FAQS, GAUGE_GUIDE, INSULATION_TABLE, VOLTAGE_TABLE } from "@/lib/technical";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Quality & Technical Information",
  description:
    "Technical information on copper conductors, PVC insulation, voltage classes and wire size selection, plus answers to common questions about electrical cables.",
  alternates: { canonical: "/quality" },
  openGraph: { title: "Quality & Technical Information | Ayesha Trader", url: "/quality" },
};

const tables = [
  { value: "insulation", label: "Insulation", table: INSULATION_TABLE },
  { value: "voltage", label: "Voltage classes", table: VOLTAGE_TABLE },
  { value: "size", label: "Size guide", table: GAUGE_GUIDE },
];

export default function QualityPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
        eyebrow="Quality & Technical"
        title="Know your cable."
        image={{ src: "/images/products/unarmoured-power-cable.jpg", alt: "Multi-core power cable" }}
        description="Conductors, insulation, voltage classes and sizing. A buying guide, not a certification."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Materials" title="Conductors" />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {CONDUCTOR_INFO.map((b, i) => (
              <div key={b.title} className="reveal border-t border-brand pt-6">
                <span className="text-sm font-bold tracking-widest text-brand tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-3xl">{b.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-charcoal-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-gray">
        <div className="container-page">
          <SectionHeading eyebrow="Reference" title="Quick reference" />
          <Tabs defaultValue="insulation" className="mt-12">
            <TabsList aria-label="Reference tables">
              {tables.map((t) => (
                <TabsTrigger key={t.value} value={t.value}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tables.map((t) => (
              <TabsContent key={t.value} value={t.value} className="mt-4">
                <DataTable table={t.table} />
              </TabsContent>
            ))}
          </Tabs>
          <p className="mt-10 max-w-2xl border-l-2 border-brand pl-5 text-sm leading-relaxed text-charcoal-muted">
            No certification claims are made on this website, and no product is stated to comply with any standard. If your project needs a specific standard or test report, ask us before ordering.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-24">
          <SectionHeading eyebrow="FAQ" title="Common questions" className="lg:self-start" />
          <Accordion>
            {FAQS.map((f) => (
              <AccordionItem key={f.question} value={f.question}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
