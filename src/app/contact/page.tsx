import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { ADDRESS_LINES, BUSINESS_HOURS, CONTACT_NUMBERS, MAPS_URL, getWhatsAppLink } from "@/lib/constants";
import { PageHeader } from "@/components/shared/PageHeader";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ayesha Traders in Gujranwala by phone or WhatsApp, or send a product inquiry with the size and quantity you need.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Ayesha Traders", url: "/contact" },
};

function Block({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Icon aria-hidden className="mt-1 size-5 shrink-0 text-brand" />
      <div>
        <h2 className="text-sm font-semibold tracking-[0.1em] text-charcoal-muted uppercase">{title}</h2>
        <div className="mt-2 space-y-1 text-base text-charcoal">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact Sales"
        title="Request a quotation"
        description="Call us, message us on WhatsApp, or send the inquiry form with your product, size and quantity."
      />
      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="space-y-8">
            <Block icon={Phone} title="Phone">
              {CONTACT_NUMBERS.map((n) => (
                <p key={n.tel}>
                  <a href={`tel:${n.tel}`} className="text-lg font-semibold hover:text-brand">
                    {n.display}
                  </a>
                </p>
              ))}
            </Block>
            <Separator />
            <Block icon={MessageCircle} title="WhatsApp">
              {CONTACT_NUMBERS.map((n) => (
                <p key={n.whatsapp}>
                  <a href={getWhatsAppLink(undefined, n.whatsapp)} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-brand">
                    {n.display}
                  </a>
                </p>
              ))}
            </Block>
            <Separator />
            <Block icon={MapPin} title="Address">
              {ADDRESS_LINES.map((l) => (
                <p key={l}>{l}</p>
              ))}
              <p className="pt-2">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand hover:underline">
                  Open in Google Maps
                </a>
              </p>
            </Block>
            <Separator />
            <Block icon={Clock} title="Business hours">
              <p>{BUSINESS_HOURS}</p>
              <p className="text-sm text-charcoal-muted">Sunday closed</p>
            </Block>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden />
                Start a WhatsApp chat
              </a>
            </Button>
          </div>

          <div className="border border-border bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Send an inquiry</h2>
            <p className="mt-2 mb-8 text-[0.9375rem] text-charcoal-muted">Fields are sent to us through WhatsApp so we can reply with a price.</p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
