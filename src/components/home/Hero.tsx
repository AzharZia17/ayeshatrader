import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = ["Copper conductors", "PVC insulation", "Armoured & unarmoured"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-hover text-white">
      <div aria-hidden className="line-pattern absolute inset-0" />
      <div className="container-page relative grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pt-24 lg:pb-32">
        <div className="hero-in">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
            <span aria-hidden className="h-px w-10 bg-white/50" />
            Electrical Wires &amp; Cables
          </p>
          <h1 className="mt-6 text-[2.9rem] leading-[1.02] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[4.75rem]">
            Reliable Cables.
            <span className="block text-[#E9C4CF]">Trusted Quality.</span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-white/75">
            Building wire, flexible cable, copper wire and power cable from Gujranwala.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="inverse" className="h-13 px-7">
              <Link href="/products">
                Explore Products
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-inverse" className="h-13 px-7">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/80">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check aria-hidden className="size-4 text-[#E9C4CF]" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem] lg:justify-self-end">
          <div aria-hidden className="absolute inset-0 translate-x-5 translate-y-5 rounded-lg border border-white/30" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/products/industrial-power-cable.jpg"
              alt="Armoured multi-core power cable cut away to show copper conductors and steel wire armour"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover mix-blend-multiply"
            />
            <Link
              href="/products/armoured-multi-core-power-cable"
              className="group absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-white/95 px-5 py-4 text-charcoal"
            >
              <span>
                <span className="block text-[0.6875rem] font-semibold tracking-[0.14em] text-brand uppercase">Power Cables</span>
                <span className="block text-sm font-semibold">Armoured Multi-Core Power Cable</span>
              </span>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-brand text-white transition-colors group-hover:bg-brand-hover">
                <ArrowUpRight aria-hidden className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
