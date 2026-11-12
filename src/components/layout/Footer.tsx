import Link from "next/link";
import {
  Zap,
  Phone,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
  ExternalLink,
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
  MAPS_URL,
} from "@/lib/constants";
import { CATEGORIES } from "@/lib/products";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#2C3430] bg-[#202522] text-[#E5E7EB]">
      {/* Top Banner Bar */}
      <div className="border-b border-[#2C3430] bg-[#1A1F1C]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#167346]/20 text-[#22C55E]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-white text-sm sm:text-base">
                Quality Copper Wires &amp; Reliable Cable Solutions
              </p>
              <p className="text-xs text-gray-400">
                Direct wholesale supply in Gujranwala &amp; across Pakistan &bull; Certified Conductor Purity
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#167346] px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#125d38] hover:shadow-md hover:shadow-[#167346]/20"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167346] text-white">
                <Zap className="h-5 w-5 stroke-[2.4]" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block">
                  {BUSINESS_NAME}
                </span>
                <span className="block text-[11px] font-semibold text-[#4ADE80] uppercase tracking-wider">
                  {BUSINESS_CATEGORY}
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              {BUSINESS_TAGLINE} Supplying domestic conduit cables, multi-core flexible cords, submersible cables, and heavy-duty industrial power cables.
            </p>
            <div className="pt-2">
              <span className="inline-block rounded-lg bg-[#2A312D] px-3 py-1 text-[11px] font-medium text-gray-300">
                100% Pure Copper &bull; Accurate Gauges
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Cable Range
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#4ADE80]" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${PHONE_1}`}
                    className="font-bold text-white hover:text-[#4ADE80] transition-colors"
                  >
                    {PHONE_1}
                  </a>
                  <a
                    href={`tel:${PHONE_2}`}
                    className="font-bold text-white hover:text-[#4ADE80] transition-colors"
                  >
                    {PHONE_2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#4ADE80] mt-1" />
                <div>
                  <span className="leading-snug text-gray-300 block">{LOCATION}</span>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#4ADE80] hover:underline mt-1"
                  >
                    <span>Google Maps Directions</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#4ADE80]" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#4ADE80] hover:underline"
                >
                  Quick WhatsApp Quotation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#2A312D] pt-8 text-[11px] text-gray-500 sm:flex-row">
          <p>
            &copy; {currentYear} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-gray-400">
            Electrical Wires &amp; Cables Supplier &bull; Noshera Sansi, Gujranwala
          </p>
        </div>
      </div>
    </footer>
  );
}
