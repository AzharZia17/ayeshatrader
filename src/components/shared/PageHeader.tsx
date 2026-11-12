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
      {image && (
        <div className="absolute inset-y-0 right-0 hidden w-[40%] overflow-hidden bg-white lg:block">
          <Image src={image.src} alt={image.alt} fill priority sizes="40vw" className="object-cover object-[center_40%] mix-blend-multiply" />
          <div aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-white/25" />
        </div>
      )}
      <div className="container-page relative py-14 lg:py-24">
        <div className="hero-in lg:max-w-[52%]">
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
      </div>
    </section>
  );
}
