import Image from "next/image";
import { Cable, Headset, ShieldCheck, Tag, type LucideIcon } from "lucide-react";

const points: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: ShieldCheck, title: "Quality-Focused Products", body: "Copper-conductor wire and cable." },
  { icon: Cable, title: "Reliable Cable Solutions", body: "From house wiring to main feeders." },
  { icon: Tag, title: "Competitive Trade Pricing", body: "Quoted on product, size and quantity." },
  { icon: Headset, title: "Responsive Customer Support", body: "By phone or WhatsApp, Mon–Sat." },
];

export function WhyUs() {
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden className="absolute -top-5 -left-5 h-2/3 w-2/3 rounded-lg bg-brand" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-white">
            <Image
              src="/images/products/flexible-multicore-cable.jpg"
              alt="Black flexible multi-core cable with stripped copper conductors"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover mix-blend-multiply"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">Why Ayesha Traders</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Cable you can rely on</h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {points.map((p) => (
              <li key={p.title} className="reveal group flex items-center gap-5 py-6">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <p.icon aria-hidden className="size-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-0.5 text-[0.9375rem] text-charcoal-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
