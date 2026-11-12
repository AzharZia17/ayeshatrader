import Link from "next/link";
import {
  Zap,
  Phone,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_CATEGORY,
  BUSINESS_TAGLINE,
  PHONE_1,
  PHONE_2,
  LOCATION,
  NAV_LINKS,
  getWhatsAppLink,
} from "@/lib/constants";
import { CATEGORIES } from "@/lib/products";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#2A302D] bg-[#202522] text-[#E5E7EB]">
      {/* Top CTA Bar */}
      <div className="border-b border-[#2C3430] bg-[#1B201D]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#167346]/20 text-[#22C55E]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-white">
                Quality Copper Wires &amp; Reliable Cables
              </p>
              <p className="text-xs text-gray-400">
                Direct wholesale and commercial supply in Gujranwala &amp; across Pakistan
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#167346] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#125d38]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167346] text-white">
                <Zap className="h-5 w-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  {BUSINESS_NAME}
                </span>
                <span className="block text-xs font-medium text-[#4ADE80]">
                  {BUSINESS_CATEGORY}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {BUSINESS_TAGLINE} Providing dependable electrical cables and copper wire solutions for homes, commercial complexes, and agricultural systems.
            </p>
            <div className="pt-2 text-xs text-gray-400">
              <span className="inline-block rounded-md bg-[#2A312D] px-2.5 py-1 text-gray-300">
                Pure Copper Conductors &bull; Certified Gauges
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Products Range
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/products?category=${encodeURIComponent(cat)}`}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#4ADE80]" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${PHONE_1}`}
                    className="font-medium text-white hover:text-[#4ADE80]"
                  >
                    {PHONE_1}
                  </a>
                  <a
                    href={`tel:${PHONE_2}`}
                    className="font-medium text-white hover:text-[#4ADE80]"
                  >
                    {PHONE_2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#4ADE80] mt-1" />
                <span className="leading-snug text-gray-300">{LOCATION}</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#4ADE80]" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#4ADE80] hover:underline"
                >
                  Quick WhatsApp Quotation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#2A312D] pt-8 text-xs text-gray-500 sm:flex-row">
          <p>
            &copy; {currentYear} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-gray-400">
            Electrical Wires &amp; Cables Supplier &bull; Noshera Sansi
          </p>
        </div>
      </div>
    </footer>
  );
}
