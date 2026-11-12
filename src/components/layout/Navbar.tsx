"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Phone,
  MessageCircle,
  MapPin,
  Zap,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_CATEGORY,
  PHONE_1,
  PHONE_2,
  LOCATION,
  NAV_LINKS,
  getWhatsAppLink,
  MAPS_URL,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* Top Corporate Micro-Bar */}
      <div className="hidden border-b border-gray-200/80 bg-[#F5F6F4] text-xs text-[#4B5563] lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-[#202522]">
              <MapPin className="h-3.5 w-3.5 text-[#167346]" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#167346] hover:underline transition-colors"
              >
                {LOCATION}
              </a>
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-gray-500">
              <Clock className="h-3.5 w-3.5 text-[#167346]" />
              Mon &ndash; Sat: 8:30 AM &ndash; 7:30 PM
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#167346]" />
              </span>
              <span className="text-[11px] font-medium text-[#167346]">
                Wholesale &amp; Retail Inquiries Open
              </span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">Direct Call:</span>
              <a
                href={`tel:${PHONE_1}`}
                className="font-semibold text-[#202522] hover:text-[#167346] transition-colors"
              >
                {PHONE_1}
              </a>
              <span className="text-gray-300">/</span>
              <a
                href={`tel:${PHONE_2}`}
                className="font-semibold text-[#202522] hover:text-[#167346] transition-colors"
              >
                {PHONE_2}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "border-gray-200/90 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-gray-200/60 bg-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 transition-transform duration-200 hover:scale-[1.01]"
            aria-label={`${BUSINESS_NAME} Home`}
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#167346] to-[#0e4b2e] text-white shadow-md shadow-[#167346]/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#167346]/30">
              <Zap className="h-6 w-6 stroke-[2.4]" />
              <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 ring-2 ring-white">
                <Sparkles className="h-2.5 w-2.5 text-amber-950" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#202522] sm:text-2xl">
                {BUSINESS_NAME}
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#167346]">
                {BUSINESS_CATEGORY}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-1 rounded-full border border-gray-200/80 bg-[#F5F6F4]/80 p-1.5 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#167346] shadow-sm font-bold"
                      : "text-[#4B5563] hover:text-[#202522] hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Quick Action */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              className="h-11 rounded-full bg-[#167346] px-5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#125d38] hover:shadow-md hover:shadow-[#167346]/20"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Quotes</span>
              </a>
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Inquiry"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F5EE] text-[#167346] transition-colors hover:bg-[#167346] hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#202522] shadow-sm hover:bg-[#F5F6F4] transition-colors"
                aria-label="Open Mobile Menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="flex w-[88vw] max-w-sm flex-col p-6">
                <SheetHeader className="text-left pb-4 border-b border-border">
                  <SheetTitle className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167346] text-white">
                      <Zap className="h-5 w-5 stroke-[2.4]" />
                    </div>
                    <div>
                      <div className="font-extrabold text-[#202522] text-lg">
                        {BUSINESS_NAME}
                      </div>
                      <div className="text-[11px] text-[#167346] font-semibold uppercase tracking-wider">
                        {BUSINESS_CATEGORY}
                      </div>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Links */}
                <div className="flex flex-col gap-2 py-6">
                  {NAV_LINKS.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all ${
                          isActive
                            ? "bg-[#E8F5EE] font-bold text-[#167346]"
                            : "font-medium text-[#202522] hover:bg-[#F5F6F4]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="h-4 w-4 opacity-40" />
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile Contact Quick Card */}
                <div className="mt-auto space-y-4 rounded-2xl border border-gray-200 bg-[#F5F6F4] p-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold uppercase tracking-wider text-[#202522]">
                      Direct Helplines
                    </span>
                    <Badge variant="outline" className="text-[10px] bg-white text-[#167346] border-[#167346]/30">
                      Instant Quotes
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={`tel:${PHONE_1}`}
                      className="flex items-center gap-2 rounded-lg bg-white p-2.5 font-semibold text-[#202522] hover:text-[#167346] transition-colors shadow-2xs"
                    >
                      <Phone className="h-4 w-4 text-[#167346]" />
                      <span>{PHONE_1}</span>
                    </a>
                    <a
                      href={`tel:${PHONE_2}`}
                      className="flex items-center gap-2 rounded-lg bg-white p-2.5 font-semibold text-[#202522] hover:text-[#167346] transition-colors shadow-2xs"
                    >
                      <Phone className="h-4 w-4 text-[#167346]" />
                      <span>{PHONE_2}</span>
                    </a>
                  </div>

                  <div className="flex items-start gap-2 pt-2 border-t border-gray-200 text-[#4B5563]">
                    <MapPin className="h-4 w-4 shrink-0 text-[#167346] mt-0.5" />
                    <span>{LOCATION}</span>
                  </div>

                  <Button
                    asChild
                    className="w-full h-11 rounded-xl bg-[#167346] font-bold text-white hover:bg-[#125d38]"
                  >
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
