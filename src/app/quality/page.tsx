import type { Metadata } from "next";
import { CONDUCTOR_INFO, FAQS, GAUGE_GUIDE, INSULATION_TABLE, VOLTAGE_TABLE } from "@/lib/technical";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { CtaBand } from "@/components/shared/CtaBand";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Quality & Technical Information",
  description:
    "Technical information on copper conductors, PVC insulation, voltage classes and wire size selection, plus answers to common questions about electrical cables.",
  alternates: { canonical: "/quality" },
  openGraph: { title: "Quality & Technical Information | Ayesha Traders", url: "/quality" },
};

function TableSection({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <section className="section-y border-t border-border first:border-t-0">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-muted">{intro}</p>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

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
        title="Technical information"
        description="Conductors, insulation, voltage classes and size selection. A buying guide, not a certification."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <div>
            <p className="eyebrow">Materials</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Conductors</h2>
          </div>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {CONDUCTOR_INFO.map((b, i) => (
              <div key={b.title} className={i === 0 ? "sm:col-span-2" : undefined}>
                <h3 className="text-lg font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-charcoal-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-surface-gray">
        <TableSection
          eyebrow="Insulation Materials"
          title="Insulation"
          intro="Materials used across our range."
        >
          <DataTable table={INSULATION_TABLE} />
        </TableSection>
      </div>

      <TableSection
        eyebrow="Voltage Ratings"
        title="Voltage classes"
        intro="General classes by cable type."
      >
        <DataTable table={VOLTAGE_TABLE} />
      </TableSection>

      <div className="bg-surface-gray">
        <TableSection
          eyebrow="Wire Size Guide"
          title="Size guide"
          intro="A starting point for common uses."
        >
          <DataTable table={GAUGE_GUIDE} />
        </TableSection>
      </div>

      <section className="section-y border-t border-border">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <div>
            <p className="eyebrow">Notice</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">About certifications</h2>
          </div>
          <p className="text-base leading-relaxed text-charcoal-muted">
            No certification claims are made on this website, and no product is stated to comply with any standard. If your
            project needs a specific standard or test report, ask us before ordering.
          </p>
        </div>
      </section>

      <section className="section-y border-t border-border bg-surface-gray">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
          </div>
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
