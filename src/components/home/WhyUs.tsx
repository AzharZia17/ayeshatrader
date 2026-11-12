import { SectionHeading } from "@/components/shared/SectionHeading";

const reasons = [
  {
    title: "Quality-focused products",
    body: "We stock copper-conductor wire and cable and tell you plainly what each product is, so you can match it to the job.",
  },
  {
    title: "Reliable cable solutions",
    body: "From house wiring to submersible pumps and main feeders, one supplier for the full cable range of a project.",
  },
  {
    title: "Competitive trade pricing",
    body: "Prices follow the market, so we quote on your exact product, size and quantity, including trade and bulk requirements.",
  },
  {
    title: "Responsive customer service",
    body: "Reach us by phone or WhatsApp during shop hours, Monday to Saturday, and we will answer product and size questions.",
  },
];

export function WhyUs() {
  return (
    <section className="section-y border-t border-border">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeading
          eyebrow="Why Ayesha Traders"
          title="What you can expect when you buy from us"
          className="md:items-start"
        />
        <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <li key={r.title} className="border-t-2 border-copper pt-5">
              <span className="text-sm font-semibold text-copper-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-charcoal-muted">{r.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
