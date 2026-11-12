import Link from "next/link";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  ADDRESS_LINES,
  BUSINESS_HOURS,
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  CONTACT_NUMBERS,
  MAPS_URL,
  NAV_LINKS,
  getWhatsAppLink,
} from "@/lib/constants";
import { CATEGORIES } from "@/lib/products";
import { Logo } from "@/components/shared/Logo";

const heading = "text-xs font-semibold tracking-[0.12em] text-white uppercase";
const link = "text-sm text-white/70 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="border-t-4 border-copper bg-charcoal text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="max-w-xs">
          <Logo inverse />
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            {BUSINESS_TAGLINE} Supplier of electrical wires and cables in Gujranwala, Pakistan.
          </p>
        </div>

        <nav aria-label="Product categories">
          <h2 className={heading}>Products</h2>
          <ul className="mt-5 space-y-3">
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
          <ul className="mt-5 space-y-3">
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
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-white/50" />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {ADDRESS_LINES.join(" ")}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-white/50" />
              <span className="flex flex-col gap-1">
                {CONTACT_NUMBERS.map((n) => (
                  <a key={n.tel} href={`tel:${n.tel}`} className="hover:text-white">
                    {n.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <MessageCircle aria-hidden className="mt-0.5 size-4 shrink-0 text-white/50" />
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Message us on WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-white/50" />
              <span>{BUSINESS_HOURS}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>
            © {BUSINESS_NAME}. All rights reserved.
          </p>
          <p>Prices are provided on inquiry.</p>
        </div>
      </div>
    </footer>
  );
}
