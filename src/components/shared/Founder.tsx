import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CEO_NAME, CEO_TITLE, EMPLOYEES, FOUNDED_YEAR } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import { cn } from "@/lib/utils";

const facts = [
  { value: String(FOUNDED_YEAR), label: "Company since" },
  { value: EMPLOYEES, label: "Employees" },
  { value: String(PRODUCTS.length).padStart(2, "0"), label: "Cable types" },
];

export function Founder({ detailed = false, className }: { detailed?: boolean; className?: string }) {
  return (
    <section className={cn("section-y", className)}>
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:mx-0">
          <div aria-hidden className=" absolute inset-0 translate-x-3 translate-y-3 bg-brand sm:translate-x-5 sm:translate-y-5" />
          <div className=" relative aspect-[1215/1295] overflow-hidden bg-surface-gray">
            <Image
              src="/images/ceo-muhammad-shaukat.jpg"
              alt={`${CEO_NAME}, ${CEO_TITLE} of Ayesha Trader`}
              fill
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4  bg-white px-5 py-3.5 shadow-[0_20px_40px_-16px_rgba(12,13,8,0.45)] sm:-left-6">
            <p className="font-display text-lg leading-tight">{CEO_NAME}</p>
            <p className="mt-0.5 text-[0.625rem] font-bold tracking-[0.2em] text-brand uppercase">{CEO_TITLE}</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="display mt-5 text-[2rem] sm:text-5xl">
            Built on copper, <span className="text-brand">since {FOUNDED_YEAR}.</span>
          </h2>
          <div className="mt-7 max-w-lg space-y-4 text-[1.0625rem] leading-relaxed text-charcoal-muted">
            <p>
              Ayesha Trader began in {FOUNDED_YEAR} in Gujranwala with one aim: make dependable cable and deal honestly. Under {CEO_NAME}, it has grown into a team of {EMPLOYEES} that manufactures building wire, flexible cable, copper wire and power cable.
            </p>
            {detailed && (
              <p>
                Electricians, rewinding workshops, farms and contractors rely on us for the right cable at the right size. We still answer every inquiry directly, by phone or WhatsApp.
              </p>
            )}
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-8">
            {facts.map((f) => (
              <div key={f.label}>
                <dd className="display text-3xl text-brand tabular-nums sm:text-4xl">{f.value}</dd>
                <dt className="mt-1 text-[0.6875rem] font-semibold tracking-[0.1em] text-charcoal-muted uppercase">{f.label}</dt>
              </div>
            ))}
          </dl>

          {!detailed && (
            <Link href="/about" className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              <span className="link-line pb-0.5">About the company</span>
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
