import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_SPEC_TABLE } from "@/lib/technical";

const points = [
  { token: "Cu", title: "Copper conductors", body: "Stranded or solid, by product." },
  { token: "PVC", title: "PVC insulation", body: "Colour-coded cores and sheath." },
  { token: "SWA", title: "Steel wire armour", body: "On armoured power cable." },
];

export function Materials() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_1.25fr] lg:gap-24 lg:py-32">
        <div>
          <p className="eyebrow text-accent-yellow">Built to last</p>
          <h2 className="display mt-5 text-[2rem] text-white sm:text-6xl">
            Copper, PVC <span className="text-accent-yellow">&amp; steel.</span>
          </h2>
          <ul className="mt-12 space-y-7">
            {points.map((p) => (
              <li key={p.token} className="reveal flex items-center gap-6">
                <span className="display flex size-16 shrink-0 items-center justify-center  border border-accent-yellow/60 text-accent-yellow text-xl">
                  {p.token}
                </span>
                <div>
                  <h3 className="font-display text-xl text-white">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-white/65">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/quality" className="group mt-12 inline-flex items-center gap-2 text-sm font-semibold text-white">
            <span className="link-line pb-0.5">Technical guide</span>
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-[1fr_9rem]">
          <div className="divide-y divide-white/15 border-y border-white/15">
            {HOME_SPEC_TABLE.rows.map((r) => (
              <div key={r[0]} className="py-6">
                <h3 className="font-display text-xl text-white">{r[0]}</h3>
                <dl className="mt-3 grid grid-cols-3 gap-x-4 text-sm">
                  {HOME_SPEC_TABLE.columns.slice(1).map((col, i) => (
                    <div key={col}>
                      <dt className="text-[0.625rem] font-bold tracking-[0.14em] text-white/45 uppercase">{col}</dt>
                      <dd className="text-white/85">{r[i + 1]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div aria-hidden className="isolate relative hidden aspect-[3/5] self-start overflow-hidden bg-white sm:block">
            <Image src="/images/products/flexible-multicore-cable.jpg" alt="" fill sizes="144px" className="object-contain mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
