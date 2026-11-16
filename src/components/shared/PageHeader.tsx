import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export function PageHeader({
  title,
  description,
  eyebrow,
  crumbs,
  image,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  crumbs: Crumb[];
  image?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-surface-gray">
      <div className="container-page relative grid items-end gap-10 pt-8 lg:grid-cols-[1.4fr_1fr] lg:pt-10">
        <div className="hero-in pb-12 lg:pb-24">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-charcoal-muted">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight aria-hidden className="size-3" />}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-brand">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-brand">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {eyebrow && <p className="eyebrow mt-10 sm:mt-14">{eyebrow}</p>}
          <h1 className="display mt-5 text-[2.5rem] sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal-muted">{description}</p>
        </div>

        {image && (
          <div className="relative mx-auto hidden w-full max-w-[22rem] self-end lg:block">
            <div aria-hidden className=" absolute inset-x-6 top-6 -bottom-0 bg-brand" />
            <div className=" arch-in relative aspect-[4/5] overflow-hidden bg-white">
              <Image src={image.src} alt={image.alt} fill priority sizes="352px" className="object-contain mix-blend-multiply" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
