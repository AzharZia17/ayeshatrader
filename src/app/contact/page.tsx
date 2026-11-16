import type { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { ADDRESS_LINES, BUSINESS_HOURS, CONTACT_NUMBERS, MAPS_URL, getWhatsAppLink } from "@/lib/constants";
import { PageHeader } from "@/components/shared/PageHeader";
import { InquiryForm } from "@/components/contact/InquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ayesha Trader in Gujranwala by phone or WhatsApp, or send a product inquiry with the size and quantity you need.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Ayesha Trader", url: "/contact" },
};

function Block({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 border-t border-white/15 pt-6 first:border-0 first:pt-0">
      <Icon aria-hidden className="mt-1 size-5 shrink-0 text-white/60" strokeWidth={1.5} />
      <div>
        <h2 className="text-[0.6875rem] font-bold tracking-[0.2em] text-white/50 uppercase">{title}</h2>
        <div className="mt-3 space-y-1.5 text-white/85">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Request a quotation"
        image={{ src: "/images/products/submersible-flat-cable.jpg", alt: "Blue flat submersible cable" }}
        description="Call, message on WhatsApp, or send the form."
      />
      <section className="py-14 lg:py-24">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:gap-8">
          <div className="space-y-8  bg-ink p-6 text-white sm:p-12">
            <Block icon={Phone} title="Phone">
              {CONTACT_NUMBERS.map((n) => (
                <p key={n.tel}>
                  <a href={`tel:${n.tel}`} className="font-display text-2xl text-white sm:text-3xl hover:text-white/80">
                    {n.display}
                  </a>
                </p>
              ))}
            </Block>
            <Block icon={MessageCircle} title="WhatsApp">
              {CONTACT_NUMBERS.map((n) => (
                <p key={n.whatsapp}>
                  <a
                    href={getWhatsAppLink(undefined, n.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-lg font-semibold text-white"
                  >
                    <span className="link-line pb-0.5">{n.display}</span>
                    <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </p>
              ))}
            </Block>
            <Block icon={MapPin} title="Address">
              {ADDRESS_LINES.map((l) => (
                <p key={l}>{l}</p>
              ))}
              <p className="pt-2">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80">
                  Open in Google Maps
                </a>
              </p>
            </Block>
            <Block icon={Clock} title="Business hours">
              <p>{BUSINESS_HOURS}</p>
              <p className="text-sm text-white/55">Sunday closed</p>
            </Block>
          </div>

          <div className=" border border-border bg-white p-6 sm:p-12">
            <h2 className="display text-4xl">Send an inquiry</h2>
            <p className="mt-3 mb-10 text-[0.9375rem] text-charcoal-muted">It opens in WhatsApp, ready to send.</p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
