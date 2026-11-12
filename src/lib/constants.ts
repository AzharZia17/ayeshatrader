export const BUSINESS_NAME = "Ayesha Traders";
export const BUSINESS_CATEGORY = "Electrical Wires & Cables Supplier";
export const BUSINESS_TAGLINE = "Reliable Cables. Trusted Quality.";

export const PHONE_1 = "0320-5451000";
export const PHONE_2 = "0313-5451000";
export const PHONE_1_CLEAN = "03205451000";
export const PHONE_2_CLEAN = "03135451000";

// International format for WhatsApp links (Pakistan +92)
export const WHATSAPP_NUMBER = "923205451000";
export const WHATSAPP_NUMBER_2 = "923135451000";

export const LOCATION = "Noshera Sansi, near Galla Ismail, Bat Tozi Wala";
export const LOCATION_CITY = "Gujranwala, Punjab, Pakistan";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Noshera+Sansi+Galla+Ismail+Bat+Tozi+Wala";

export const BRAND_COLORS = {
  primary: "#167346", // Deep green brand color
  primaryHover: "#125d38",
  primaryLight: "#e8f5ee",
  charcoal: "#202522", // Headings & dark accents
  surfaceGray: "#F5F6F4", // Alternate section background
  borderGray: "#E5E7EB",
  white: "#FFFFFF",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
] as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Ayesha Traders! I would like to inquire about your electrical wires and cables.";

/**
 * Builds a direct WhatsApp chat URL with prefilled text
 */
export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp price request link for a specific product
 */
export function getProductPriceWhatsAppLink(productName: string, size?: string): string {
  const sizeText = size ? ` (Size: ${size})` : "";
  const message = `Hello Ayesha Traders! I would like to request the current price and availability for: ${productName}${sizeText}. Please share quotation details.`;
  return getWhatsAppLink(message);
}

