import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { NAV_LINKS, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...NAV_LINKS.map((l) => ({ url: `${SITE_URL}${l.href === "/" ? "" : l.href}` })),
    ...PRODUCTS.map((p) => ({ url: `${SITE_URL}/products/${p.slug}` })),
  ];
}
