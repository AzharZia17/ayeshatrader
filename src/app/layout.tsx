import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import {
  ADDRESS_FULL,
  BUSINESS_CATEGORY,
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  CONTACT_NUMBERS,
  SITE_URL,
} from "@/lib/constants";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const description = `${BUSINESS_TAGLINE} ${BUSINESS_NAME} manufactures PVC electric wires, flexible cables, copper wires and power cables in Gujranwala, Pakistan.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | ${BUSINESS_CATEGORY}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description,
  applicationName: BUSINESS_NAME,
  keywords: [
    "Ayesha Trader",
    "electrical wires and cables Gujranwala",
    "PVC building wire",
    "flexible cable",
    "submersible cable",
    "copper winding wire",
    "armoured power cable",
  ],
  openGraph: {
    type: "website",
    siteName: BUSINESS_NAME,
    locale: "en_PK",
    title: `${BUSINESS_NAME} | ${BUSINESS_CATEGORY}`,
    description,
    url: "/",
    images: [
      {
        url: "/images/products/industrial-power-cable.jpg",
        width: 383,
        height: 503,
        alt: "Armoured multi-core power cable cutaway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | ${BUSINESS_CATEGORY}`,
    description,
    images: ["/images/products/industrial-power-cable.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0D08",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "Organization",
  foundingDate: "2010",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 30 },
  founder: { "@type": "Person", name: "Muhammad Shaukat", jobTitle: "CEO" },
  name: BUSINESS_NAME,
  description: BUSINESS_CATEGORY,
  url: SITE_URL,
  telephone: CONTACT_NUMBERS.map((n) => n.display),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Noshera Sansi, near Galla Ismail, Bat Tozi Wala",
    addressLocality: "Gujranwala",
    addressCountry: "PK",
    description: ADDRESS_FULL,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "19:30",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col bg-white text-charcoal">
        <a
          href="#main"
          className="sr-only z-50 bg-brand px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
