import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { PRIMARY_CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const photos = [
  { src: "/images/products/flexible-multicore-cable.jpg", offset: "mt-10" },
  { src: "/images/products/copper-winding-wire.jpg", offset: "" },
  { src: "/images/products/unarmoured-power-cable.jpg", offset: "mt-10" },
];

export function CtaBand() {
  return (
    <section className="line-pattern relative overflow-hidden bg-brand text-white">
      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-20">
        <div>
          <h2 className="text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">Need Electrical Cable Solutions?</h2>
          <p className="mt-4 max-w-md text-lg text-white/80">Send us the product, size and quantity for a current price.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="inverse">
              <Link href="/contact">
                <MessageCircle aria-hidden />
                Request a Quotation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-inverse">
              <a href={`tel:${PRIMARY_CONTACT.tel}`}>
                <Phone aria-hidden />
                Call Us
              </a>
            </Button>
          </div>
        </div>
        <div aria-hidden className="hidden grid-cols-3 gap-4 lg:grid">
          {photos.map((p) => (
            <div key={p.src} className={`relative aspect-[3/5] overflow-hidden rounded-lg bg-white ${p.offset}`}>
              <Image src={p.src} alt="" fill sizes="160px" className="object-cover mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
