import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_SPEC_TABLE } from "@/lib/technical";
import { DataTable } from "@/components/shared/DataTable";

export function TechnicalQuality() {
  return (
    <section className="section-y bg-surface-gray">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
        <div>
          <p className="eyebrow">Technical Overview</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Construction at a glance</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-muted">Copper conductors with PVC insulation across the range.</p>
          <Link href="/quality" className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand hover:underline">
            Technical guide
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
        <DataTable table={HOME_SPEC_TABLE} />
      </div>
    </section>
  );
}
