import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/products";
import { PageHeader } from "@/components/shared/PageHeader";
import { Founder } from "@/components/shared/Founder";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: "Ayesha Traders is an electrical wires and cables manufacturer in Gujranwala, Pakistan.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Us | Ayesha Traders", url: "/about" },
};

const commitments = [
  { title: "Honest information", body: "Products described as they are." },
  { title: "Current pricing", body: "Quoted for your size and quantity." },
  { title: "Clear guidance", body: "Help choosing the right cable." },
  { title: "Easy to reach", body: "Phone or WhatsApp, Monday to Saturday." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Us"
        title="Made in Gujranwala."
        image={{ src: "/images/products/pvc-building-wire.jpg", alt: "Coils of PVC building wire" }}
        description="Wires and cables manufactured since 2010 for electricians, workshops and contractors."
      />

      <Founder detailed />

      <section className="section-y bg-surface-gray">
        <div className="container-page">
          <SectionHeading eyebrow="Product Range" title="Four product groups" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/products?category=${c.slug}`} className="group block">
                  <span className=" relative block aspect-[4/5] overflow-hidden bg-white transition-shadow duration-500 group-hover:shadow-[0_28px_50px_-24px_rgba(12,13,8,0.5)]">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width: 640px) 90vw, 25vw"
                      className="object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-5 flex items-center justify-between gap-3">
                    <span className="display text-2xl">{c.name}</span>
                    <ArrowRight aria-hidden className="size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Commitments" title="How we work" />
          <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <li key={c.title} className="reveal">
                <span className="display text-6xl text-brand/25 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-2xl">{c.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-charcoal-muted">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
