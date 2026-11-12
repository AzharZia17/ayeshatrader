import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONDUCTOR_INFO, HOME_SPEC_TABLE } from "@/lib/technical";
import { DataTable } from "@/components/shared/DataTable";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TechnicalQuality() {
  return (
    <section className="section-y border-t border-border bg-surface-gray">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technical Information"
          title="Understand what you are buying"
          description="Copper conductors, PVC insulation and the application each cable is made for."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="min-w-0 space-y-8">
            {CONDUCTOR_INFO.slice(0, 2).map((b) => (
              <div key={b.title}>
                <h3 className="text-lg font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-charcoal-muted">{b.body}</p>
              </div>
            ))}
            <div>
              <h3 className="text-lg font-semibold tracking-tight">PVC insulation and sheath</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-charcoal-muted">
                PVC is the common insulation and outer sheath on building wire, flexible cable and power cable. Armoured
                power cable adds a layer of steel wire for mechanical protection.
              </p>
            </div>
            <Link href="/quality" className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand hover:underline">
              Full technical guide
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <DataTable table={HOME_SPEC_TABLE} />
        </div>
      </div>
    </section>
  );
}
