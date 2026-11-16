import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, getProductsByCategory } from "@/lib/products";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function CategoryList() {
  return (
    <section className="section-y bg-surface-gray">
      <div className="container-page">
        <SectionHeading eyebrow="The Range" title={<>Four groups. <span className="text-brand">One manufacturer.</span></>} />
        <ul className="mt-10 border-t sm:mt-16 border-brand/20">
          {CATEGORIES.map((c, i) => (
            <li key={c.slug} className="reveal border-b border-brand/20">
              <Link
                href={`/products?category=${c.slug}`}
                className="group relative isolate flex items-center gap-5 px-0 py-7 transition-all duration-500 sm:gap-10 sm:py-9 lg:hover:px-8"
              >
                <span aria-hidden className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <span className="w-8 shrink-0 text-sm font-bold tracking-widest text-brand tabular-nums transition-colors group-hover:text-white/70 sm:w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="display block text-[1.5rem] leading-tight transition-colors duration-500 group-hover:text-white sm:text-5xl">{c.name}</span>
                  <span className="mt-2 hidden max-w-lg text-[0.9375rem] text-charcoal-muted transition-colors duration-500 group-hover:text-white/75 sm:block">
                    {c.description}
                  </span>
                </span>
                <span className="hidden text-xs font-semibold tracking-[0.12em] text-charcoal-muted uppercase transition-colors group-hover:text-white/70 md:block">
                  {getProductsByCategory(c.slug).length} products
                </span>
                <span className=" relative size-20 shrink-0 overflow-hidden bg-white transition-transform duration-500 group-hover:-translate-y-1 sm:size-28">
                  <Image src={c.image} alt={c.imageAlt} fill sizes="112px" className="object-contain mix-blend-multiply" />
                </span>
                <ArrowUpRight aria-hidden className="hidden size-6 shrink-0 text-brand transition-all duration-500 group-hover:rotate-45 group-hover:text-white sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
