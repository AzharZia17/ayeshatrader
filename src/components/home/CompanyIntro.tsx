import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ADDRESS_FULL } from "@/lib/constants";
import { ProductImage } from "@/components/shared/ProductImage";

export function CompanyIntro() {
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">About Ayesha Traders</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A cable supplier for homes, workshops and contractors
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-muted sm:text-lg">
            <p>
              Ayesha Traders is an electrical wires and cables supplier based in Gujranwala. We stock building wire,
              flexible cables, copper wire and power cables, so electricians, rewinding workshops and project buyers can
              find the cable they need in one place.
            </p>
            <p>
              Tell us the product, size and quantity and we will quote against your requirement. You can find us at{" "}
              {ADDRESS_FULL}.
            </p>
          </div>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand hover:underline">
            More about us
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>

        <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <ProductImage
            src="/images/products/flexible-multicore-cable.jpg"
            alt="Black flexible multi-core cable with stripped copper conductors"
            sizes="(max-width: 1024px) 45vw, 280px"
            className="rounded-lg"
          />
          <ProductImage
            src="/images/products/single-core-earth-wire.jpg"
            alt="Coils of green and yellow insulated earth wire and bare copper wire"
            sizes="(max-width: 1024px) 45vw, 280px"
            className="mt-10 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
