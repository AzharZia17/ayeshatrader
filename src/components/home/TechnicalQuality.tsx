import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_SPEC_TABLE } from "@/lib/technical";
import { DataTable } from "@/components/shared/DataTable";

const materials = [
  { token: "Cu", title: "Copper conductor", body: "Stranded or solid." },
  { token: "PVC", title: "Insulation & sheath", body: "Colour-coded cores." },
  { token: "SWA", title: "Steel wire armour", body: "On armoured power cable." },
];

export function TechnicalQuality() {
  return (
    <section className="section-y bg-surface-gray">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Technical Overview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Built from copper and PVC</h2>
          </div>
          <Link href="/quality" className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand hover:underline">
            Technical guide
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {materials.map((m) => (
            <li key={m.token} className="reveal flex items-center gap-5 rounded-lg border border-border bg-white p-5 transition-colors hover:border-brand/50">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-md bg-brand text-lg font-bold tracking-tight text-white">{m.token}</span>
              <div>
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-0.5 text-sm text-charcoal-muted">{m.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <DataTable table={HOME_SPEC_TABLE} />
        </div>
      </div>
    </section>
  );
}
