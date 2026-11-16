import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { EMPLOYEES, FOUNDED_YEAR } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Hero() {
  const stats = [
    { value: String(FOUNDED_YEAR), label: "Established" },
    { value: EMPLOYEES, label: "Team" },
    { value: String(PRODUCTS.length).padStart(2, "0"), label: "Cable types" },
  ];
  return (
    <section className="strand-pattern relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute -top-40 -right-40 size-[34rem] bg-brand/20" />
      <div aria-hidden className="palette-bar absolute inset-x-0 bottom-0" />
      <div className="container-page relative grid items-center gap-10 pt-10 pb-0 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        <div className="hero-in">
          <p className="eyebrow text-accent-yellow">Cable Manufacturer · Gujranwala</p>
          <h1 className="display mt-6 text-[2.6rem] text-white sm:text-7xl lg:text-[4.1rem] xl:text-[5.25rem]">
            Reliable cables.
            <span className="block text-accent-yellow">Trusted quality.</span>
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-white/75 sm:text-lg">
            We manufacture building wire, flexible cable, copper wire and power cable.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:gap-3">
            <Button asChild size="lg" variant="inverse">
              <Link href="/products">
                Products
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-inverse">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <dl className="mt-14 hidden max-w-md grid-cols-3 gap-6 border-t border-white/20 pt-8 lg:grid">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="display text-4xl text-accent-yellow tabular-nums">{s.value}</dd>
                <dt className="mt-1 text-[0.6875rem] font-semibold tracking-[0.14em] text-white/60 uppercase">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative -mx-5 sm:mx-0 lg:justify-self-end lg:w-full lg:max-w-[32rem]">
          <div aria-hidden className="absolute inset-0 hidden translate-x-5 translate-y-5 border border-white/35 sm:block" />
          <div className="arch-in relative aspect-[5/6] overflow-hidden bg-surface-gray sm:aspect-square lg:aspect-[4/4.4]">
            <Image
              src="/images/products/industrial-power-cable.jpg"
              alt="Armoured multi-core power cable cut away to show copper conductors and steel wire armour"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 512px"
              className="object-contain mix-blend-multiply"
            />
            <Link
              href="/products/armoured-multi-core-power-cable"
              className="group absolute bottom-4 left-4 flex items-center gap-3 bg-white py-2 pr-2 pl-4 shadow-[0_18px_36px_-14px_rgba(12,13,8,0.55)] transition-transform duration-300 hover:-translate-y-1 sm:bottom-6 sm:left-6"
            >
              <span className="text-left text-charcoal">
                <span className="block text-[0.5625rem] font-bold tracking-[0.16em] text-brand uppercase">Power Cables</span>
                <span className="block text-[0.8125rem] font-semibold">Armoured Multi-Core</span>
              </span>
              <span className="flex size-9 items-center justify-center bg-brand text-white transition-colors group-hover:bg-brand-hover">
                <ArrowUpRight aria-hidden className="size-4" />
              </span>
            </Link>
          </div>
          <div
            aria-hidden
            className="float-slow absolute -top-5 right-4 hidden size-28 border-[6px] border-white bg-surface-gray shadow-[0_20px_40px_-16px_rgba(0,0,0,0.55)] sm:block lg:-left-10 lg:right-auto lg:top-10 lg:size-36"
          >
            <Image src="/images/products/copper-winding-wire.jpg" alt="" fill sizes="144px" className="object-contain mix-blend-multiply" />
          </div>
          <dl className="grid grid-cols-3 bg-white text-charcoal lg:hidden">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-5 py-5 ${i > 0 ? "border-l border-border" : ""}`}>
                <dd className="display text-2xl text-brand tabular-nums">{s.value}</dd>
                <dt className="mt-1 text-[0.625rem] font-semibold tracking-[0.12em] text-charcoal-muted uppercase">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
