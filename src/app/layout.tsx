import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  BUSINESS_NAME,
  BUSINESS_CATEGORY,
  BUSINESS_TAGLINE,
  LOCATION,
} from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_NAME} | ${BUSINESS_CATEGORY}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: `${BUSINESS_TAGLINE} Official electrical wires and cables supplier located at ${LOCATION}. Offering PVC electric wires, flexible multi-core cables, high-purity copper wires, and industrial power cables.`,
  keywords: [
    "Ayesha Traders",
    "electrical wires",
    "copper cables",
    "electrical supplier",
    "PVC electric wire",
    "flexible cable",
    "submersible cable",
    "copper wire Gujranwala",
    "power cables Pakistan",
    "Noshera Sansi",
  ],
  authors: [{ name: BUSINESS_NAME }],
  openGraph: {
    title: `${BUSINESS_NAME} | ${BUSINESS_CATEGORY}`,
    description: `${BUSINESS_TAGLINE} High-quality electrical wires and copper cable solutions for domestic, commercial, and industrial installations.`,
    siteName: BUSINESS_NAME,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#202522]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
