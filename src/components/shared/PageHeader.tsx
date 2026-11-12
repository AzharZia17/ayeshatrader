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
    <section className="line-pattern relative overflow-hidden bg-brand-hover text-white">
      <div className="container-page relative grid items-center gap-10 py-14 lg:grid-cols-[1.4fr_1fr] lg:py-20">
        <div className="hero-in">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/65">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight aria-hidden className="size-3.5" />}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {eyebrow && (
            <p className="mt-8 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
              <span aria-hidden className="h-px w-10 bg-white/50" />
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{description}</p>
        </div>
        {image && (
          <div className="relative hidden justify-self-end lg:block">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border border-white/30" />
            <div className="relative h-72 w-[22rem] overflow-hidden rounded-lg bg-white">
              <Image src={image.src} alt={image.alt} fill sizes="352px" className="object-cover mix-blend-multiply" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
