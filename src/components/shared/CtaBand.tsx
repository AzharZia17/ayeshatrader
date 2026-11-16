import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { PRIMARY_CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="container-page py-12 lg:py-24">
      <div className="relative grid items-center gap-10 overflow-hidden  bg-brand px-6 pt-12 sm:px-14 lg:grid-cols-[1.4fr_1fr] lg:pt-0 lg:pb-0">
        <div aria-hidden className="absolute -top-24 -left-24 size-72  bg-ink/20" />
        <div className="relative pb-14 lg:py-20">
          <h2 className="display text-[2rem] text-white sm:text-6xl">
            Need a quotation? <span className="block text-ink">Tell us the size.</span>
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="inverse">
              <Link href="/contact">
                Request a Quote
                <ArrowUpRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-inverse">
              <a href={`tel:${PRIMARY_CONTACT.tel}`}>
                <Phone aria-hidden />
                {PRIMARY_CONTACT.display}
              </a>
            </Button>
          </div>
        </div>
        <div aria-hidden className="relative mx-auto hidden w-64 self-end lg:block">
          <div className=" relative aspect-[4/5] overflow-hidden bg-white">
            <Image src="/images/products/unarmoured-power-cable.jpg" alt="" fill sizes="256px" className="object-contain mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
