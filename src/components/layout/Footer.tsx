import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ADDRESS_LINES,
  BUSINESS_HOURS,
  BUSINESS_NAME,
  CONTACT_NUMBERS,
  MAPS_URL,
  NAV_LINKS,
  getWhatsAppLink,
} from "@/lib/constants";
import { CATEGORIES } from "@/lib/products";
import { Logo } from "@/components/shared/Logo";

const heading = "text-[0.6875rem] font-bold tracking-[0.22em] text-white/50 uppercase";
const link = "text-[0.9375rem] text-white/80 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="palette-bar absolute inset-x-0 top-0" />
      <span
        aria-hidden
        className="display pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 text-[22vw] leading-none whitespace-nowrap text-white/[0.035] select-none"
      >
        Ayesha
      </span>

      <div className="container-page relative grid gap-14 pt-20 pb-16 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <Logo inverse />
          <p className="display mt-8 max-w-xs text-3xl text-white">
            Reliable cables.
            <span className="block text-accent-yellow">Trusted quality.</span>
          </p>
        </div>

        <nav aria-label="Product categories">
          <h2 className={heading}>Products</h2>
          <ul className="mt-6 space-y-3.5">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/products?category=${c.slug}`} className={link}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer">
          <h2 className={heading}>Company</h2>
          <ul className="mt-6 space-y-3.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>Contact</h2>
          <ul className="mt-6 space-y-3.5 text-[0.9375rem] text-white/80">
            {CONTACT_NUMBERS.map((n) => (
              <li key={n.tel}>
                <a href={`tel:${n.tel}`} className="font-display text-2xl text-white hover:text-white/80">
                  {n.display}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {ADDRESS_LINES.join(" ")}
              </a>
            </li>
            <li className="text-white/60">{BUSINESS_HOURS}</li>
            <li className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border-b border-white/40 pb-0.5 font-semibold text-white hover:border-white"
              >
                WhatsApp us
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <p className="container-page py-6 pb-24 text-xs text-white/50 lg:pb-6">© {BUSINESS_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
