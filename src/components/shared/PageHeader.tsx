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
}: {
  title: string;
  description: string;
  eyebrow?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="border-b border-border bg-surface-gray">
      <div className="container-page py-12 lg:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-charcoal-muted">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight aria-hidden className="size-3.5" />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-charcoal">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow mt-8">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal-muted sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
