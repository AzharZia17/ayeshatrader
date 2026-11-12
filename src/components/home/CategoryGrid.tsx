import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/lib/products";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function CategoryGrid() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow="Categories" title="Four product groups, one supplier" />
        <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <li key={c.slug} className={`reveal ${i % 2 === 1 ? "lg:mt-14" : ""}`}>
              <Link href={`/products?category=${c.slug}`} className="group relative block overflow-hidden rounded-lg border border-border bg-surface-gray">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover mix-blend-multiply transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.06]"
                  />
                  <span className="absolute top-4 left-4 rounded-[4px] bg-brand px-2.5 py-1 text-sm font-semibold tracking-wide text-white tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 bg-white px-5 py-4 transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{c.name}</h3>
                    <p className="mt-0.5 text-sm text-charcoal-muted transition-colors group-hover:text-white/80">View Products</p>
                  </div>
                  <ArrowUpRight aria-hidden className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
