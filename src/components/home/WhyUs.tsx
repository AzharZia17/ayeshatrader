import { Cable, Headset, ShieldCheck, Tag, type LucideIcon } from "lucide-react";

const points: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: ShieldCheck, title: "Quality-Focused Products", body: "Copper-conductor wire and cable." },
  { icon: Cable, title: "Reliable Cable Solutions", body: "From house wiring to main feeders." },
  { icon: Tag, title: "Competitive Trade Pricing", body: "Quoted on product, size and quantity." },
  { icon: Headset, title: "Responsive Customer Support", body: "By phone or WhatsApp, Mon–Sat." },
];

export function WhyUs() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container-page py-14 lg:py-16">
        <h2 className="eyebrow">Why Ayesha Traders</h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border">
          {points.map((p) => (
            <li key={p.title} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <p.icon aria-hidden className="size-7 text-brand" strokeWidth={1.5} />
              <h3 className="mt-4 text-base font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
