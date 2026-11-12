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
} from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_CATEGORY,
  PHONE_1,
  PHONE_2,
  LOCATION,
  NAV_LINKS,
  getWhatsAppLink,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-white/95 backdrop-blur-md transition-all">
      {/* Top micro-bar for quick phone and location */}
      <div className="hidden border-b border-border/60 bg-[#F5F6F4] text-xs text-[#4B5563] sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-[#202522]">
              <MapPin className="h-3.5 w-3.5 text-[#167346]" />
              {LOCATION}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Direct Inquiries:</span>
            <a
              href={`tel:${PHONE_1}`}
              className="flex items-center gap-1 font-semibold text-[#202522] transition-colors hover:text-[#167346]"
            >
              <Phone className="h-3 w-3 text-[#167346]" />
              {PHONE_1}
            </a>
            <span className="text-gray-300">|</span>
            <a
              href={`tel:${PHONE_2}`}
              className="flex items-center gap-1 font-semibold text-[#202522] transition-colors hover:text-[#167346]"
            >
              <Phone className="h-3 w-3 text-[#167346]" />
              {PHONE_2}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          aria-label={`${BUSINESS_NAME} Home`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#167346] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Zap className="h-6 w-6 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#202522]">
              {BUSINESS_NAME}
            </span>
            <span className="text-xs font-medium tracking-wide text-[#167346]">
              {BUSINESS_CATEGORY}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "font-semibold text-[#167346]"
                    : "text-[#202522]/80 hover:text-[#167346]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-4 -bottom-[21px] h-0.5 rounded-full bg-[#167346]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop WhatsApp Action Button */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            className="h-11 rounded-full bg-[#167346] px-5 font-semibold text-white shadow-sm transition-all hover:bg-[#125d38] hover:shadow-md"
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
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
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#202522] hover:bg-[#F5F6F4] transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[85vw] max-w-sm flex-col p-6">
              <SheetHeader className="text-left pb-4 border-b border-border">
                <SheetTitle className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#167346] text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[#202522]">{BUSINESS_NAME}</div>
                    <div className="text-[11px] text-[#167346] font-medium">
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
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-base transition-colors ${
                        isActive
                          ? "bg-[#E8F5EE] font-semibold text-[#167346]"
                          : "font-medium text-[#202522] hover:bg-[#F5F6F4]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </Link>
                  );
                })}
              </div>

              {/* Contact Box in Mobile Sheet */}
              <div className="mt-auto space-y-4 rounded-xl bg-[#F5F6F4] p-4 text-sm">
                <div className="font-semibold text-[#202522]">Contact Numbers</div>
                <div className="space-y-2">
                  <a
                    href={`tel:${PHONE_1}`}
                    className="flex items-center gap-2 text-sm text-[#202522] hover:text-[#167346]"
                  >
                    <Phone className="h-4 w-4 text-[#167346]" />
                    <span>{PHONE_1}</span>
                  </a>
                  <a
                    href={`tel:${PHONE_2}`}
                    className="flex items-center gap-2 text-sm text-[#202522] hover:text-[#167346]"
                  >
                    <Phone className="h-4 w-4 text-[#167346]" />
                    <span>{PHONE_2}</span>
                  </a>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-border/80 text-xs text-[#4B5563]">
                  <MapPin className="h-4 w-4 shrink-0 text-[#167346] mt-0.5" />
                  <span>{LOCATION}</span>
                </div>

                <Button
                  asChild
                  className="w-full bg-[#167346] font-semibold text-white hover:bg-[#125d38]"
                >
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
