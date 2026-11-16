export const BUSINESS_NAME = "Ayesha Traders";
export const BUSINESS_CATEGORY = "Electrical Wires & Cables Manufacturer";
export const BUSINESS_TAGLINE = "Reliable Cables. Trusted Quality.";

export const CEO_NAME = "Muhammad Shaukat";
export const CEO_TITLE = "CEO";
export const FOUNDED_YEAR = 2010;
export const EMPLOYEES = "30+";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayeshatraders.pk";

export interface ContactNumber {
  /** Number as displayed, e.g. 0320-5451000 */
  display: string;
  /** Dial string for tel: links (national format, digits only) */
  tel: string;
  /** International digits for wa.me links */
  whatsapp: string;
}

export const CONTACT_NUMBERS: readonly ContactNumber[] = [
  { display: "0320-5451000", tel: "03205451000", whatsapp: "923205451000" },
  { display: "0313-5451000", tel: "03135451000", whatsapp: "923135451000" },
] as const;

export const PRIMARY_CONTACT = CONTACT_NUMBERS[0];

export const ADDRESS_LINES = [
  "Noshera Sansi, near Galla Ismail,",
  "Bat Tozi Wala, Gujranwala, Pakistan",
] as const;
export const ADDRESS_SHORT = "Noshera Sansi, near Galla Ismail, Bat Tozi Wala, Gujranwala";
export const ADDRESS_FULL =
  "Noshera Sansi, near Galla Ismail, Bat Tozi Wala, Gujranwala, Pakistan";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS_FULL,
)}`;

export const BUSINESS_HOURS = "Monday–Saturday, 8:30 AM–7:30 PM";
export const BUSINESS_HOURS_SHORT = "Mon–Sat, 8:30 AM–7:30 PM";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
] as const;

export const DEFAULT_WHATSAPP_MESSAGE = `Hello ${BUSINESS_NAME}, I would like to inquire about your electrical wires and cables.`;

/** Builds a wa.me link with a properly encoded message. */
export function getWhatsAppLink(
  message: string = DEFAULT_WHATSAPP_MESSAGE,
  number: string = PRIMARY_CONTACT.whatsapp,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** WhatsApp price request for a specific product and (optionally) size. */
export function getProductInquiryLink(productName: string, size?: string): string {
  const lines = [
    `Hello ${BUSINESS_NAME}, I would like to request a price quotation.`,
    "",
    `Product: ${productName}`,
    ...(size ? [`Size: ${size}`] : []),
    "",
    "Please share price and availability. Thank you.",
  ];
  return getWhatsAppLink(lines.join("\n"));
}
