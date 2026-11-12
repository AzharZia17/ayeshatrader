"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, MessageCircle, Phone } from "lucide-react";
import { CONTACT_NUMBERS, NAV_LINKS, getWhatsAppLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { Separator } from "@/components/ui/separator";
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
    <header className={cn("sticky top-0 z-40 border-b border-border bg-white transition-shadow duration-200", scrolled && "shadow-[0_2px_12px_rgba(23,18,15,0.08)]")}>
      <div className="container-page flex h-[4.5rem] lg:h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-9">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href} className="h-full">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex h-full items-center border-b-2 pt-0.5 text-[0.9375rem] font-medium transition-colors",
                      active
                        ? "border-brand text-charcoal"
                        : "border-transparent text-charcoal-muted hover:text-charcoal",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden />
              WhatsApp Inquiry
            </a>
          </Button>

          <Button asChild size="icon" className="sm:hidden" aria-label="WhatsApp inquiry">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp inquiry">
              <MessageCircle aria-hidden />
            </a>
          </Button>

          <Sheet>
            <SheetTrigger
              render={<Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu" />}
            >
              <MenuIcon aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,90vw)] gap-0 p-0">
              <SheetHeader className="border-b border-border p-5">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto">
                <ul>
                  {NAV_LINKS.map((link) => {
                    const active = isActive(pathname, link.href);
                    return (
                      <li key={link.href} className="border-b border-border">
                        <SheetClose
                          render={
                            <Link
                              href={link.href}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "block border-l-2 px-5 py-4 text-base font-medium",
                                active ? "border-brand text-brand" : "border-transparent text-charcoal",
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
              <div className="space-y-3 p-5">
                <Button asChild className="w-full" size="lg">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle aria-hidden />
                    WhatsApp Inquiry
                  </a>
                </Button>
                <Separator />
                {CONTACT_NUMBERS.map((n) => (
                  <a key={n.tel} href={`tel:${n.tel}`} className="flex items-center gap-2 text-sm font-medium text-charcoal">
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
