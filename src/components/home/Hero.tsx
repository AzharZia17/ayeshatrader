import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[46%] bg-surface-gray lg:block" />
      <div className="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div className="hero-in">
          <div aria-hidden className="mb-5 h-1 w-14 bg-brand" />
          <p className="eyebrow">Electrical Wires &amp; Cables</p>
          <h1 className="mt-4 text-[2.5rem] leading-[1.06] font-semibold tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Reliable Cables.
            <br />
            Trusted Quality.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal-muted">
            Building wire, flexible cable, copper wire and power cable from Gujranwala.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/products">
                Explore Products
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
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
        </div>
      </div>
    </section>
  );
}
