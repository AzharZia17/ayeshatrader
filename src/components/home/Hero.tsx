import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS_CATEGORY, BUSINESS_HOURS_SHORT, CONTACT_NUMBERS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const trust = [
  { label: "Location", value: "Gujranwala, Pakistan" },
  { label: "Open", value: BUSINESS_HOURS_SHORT },
  { label: "Pricing", value: "Quoted on inquiry" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[44%] bg-surface-gray lg:block" />
      <div className="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        <div className="hero-in">
          <div aria-hidden className="mb-5 h-1 w-14 bg-copper" />
          <p className="eyebrow">{BUSINESS_CATEGORY}</p>
          <h1 className="mt-4 text-[2.5rem] leading-[1.08] font-semibold tracking-tight sm:text-6xl">
            Reliable Cables.
            <br />
            Trusted Quality.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-muted">
            Ayesha Traders supplies PVC building wire, flexible cables, copper
            earthing and winding wire, and armoured and unarmoured power cables for homes, workshops and commercial
            projects.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/products">
                Explore Products
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>

          <dl className="mt-12 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
            {trust.map((t) => (
              <div key={t.label}>
                <dt className="text-xs font-semibold tracking-[0.12em] text-charcoal-muted uppercase">{t.label}</dt>
                <dd className="mt-1.5 text-sm font-medium text-charcoal">{t.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-charcoal-muted">
            Call{" "}
            {CONTACT_NUMBERS.map((n, i) => (
              <span key={n.tel}>
                {i > 0 && " / "}
                <a href={`tel:${n.tel}`} className="font-medium text-charcoal hover:text-brand">
                  {n.display}
                </a>
              </span>
            ))}
          </p>
        </div>

        <figure className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[28rem] overflow-hidden rounded-lg border border-border bg-surface-gray">
            <Image
              src="/images/products/industrial-power-cable.jpg"
              alt="Armoured multi-core power cable cut away to show copper conductors and steel wire armour"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 450px"
              className="object-cover mix-blend-multiply"
            />
          </div>
          <figcaption className="mx-auto mt-3 max-w-[28rem] text-sm text-charcoal-muted">
            Armoured multi-core power cable — cutaway view
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
