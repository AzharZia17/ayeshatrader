import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { PRIMARY_CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-brand text-white">
      <div className="container-page flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Looking for Reliable Electrical Cables?</h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Tell us the product, size and quantity you need. We will reply with current prices and availability.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
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
    </section>
  );
}
