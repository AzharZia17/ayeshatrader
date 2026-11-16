"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MenuIcon, MessageCircle, Phone } from "lucide-react";
import { CONTACT_NUMBERS, NAV_LINKS, getWhatsAppLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-white/95 backdrop-blur transition-[box-shadow,border-color] duration-300",
        scrolled ? "border-b border-transparent shadow-[0_8px_30px_-18px_rgba(12,13,8,0.35)]" : "border-b border-border",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative py-2 text-[0.8125rem] font-semibold tracking-[0.06em] uppercase transition-colors",
                      active ? "text-brand" : "text-charcoal hover:text-brand",
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Get a Quote
              <ArrowUpRight aria-hidden />
            </a>
          </Button>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu" />}>
              <MenuIcon aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(22rem,92vw)] gap-0 bg-white p-0">
              <SheetHeader className="p-6 pb-2">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
                <Logo />
              </SheetHeader>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => {
                    const active = isActive(pathname, link.href);
                    return (
                      <li key={link.href}>
                        <SheetClose
                          render={
                            <Link
                              href={link.href}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "block border-b border-border py-4 font-display text-3xl tracking-tight",
                                active ? "text-brand" : "text-charcoal",
                              )}
                            />
                          }
                        >
                          {link.label}
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="space-y-4 bg-surface-gray p-6">
                <Button asChild className="w-full" size="lg">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle aria-hidden />
                    WhatsApp Inquiry
                  </a>
                </Button>
                {CONTACT_NUMBERS.map((n) => (
                  <a key={n.tel} href={`tel:${n.tel}`} className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                    <Phone aria-hidden className="size-4 text-brand" />
                    {n.display}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
