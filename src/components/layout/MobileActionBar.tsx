import { MessageCircle, Phone } from "lucide-react";
import { PRIMARY_CONTACT, getWhatsAppLink } from "@/lib/constants";

/** Persistent call / WhatsApp shortcuts on phones. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={`tel:${PRIMARY_CONTACT.tel}`}
          className="flex h-12 flex-1 items-center justify-center gap-2  border border-brand/30 text-sm font-semibold text-brand active:bg-surface-gray"
        >
          <Phone aria-hidden className="size-4" />
          Call
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-[1.4] items-center justify-center gap-2  bg-brand text-sm font-semibold text-white active:bg-brand-hover"
        >
          <MessageCircle aria-hidden className="size-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
