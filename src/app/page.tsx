import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyUs } from "@/components/home/WhyUs";
import { TechnicalQuality } from "@/components/home/TechnicalQuality";
import { CtaBand } from "@/components/shared/CtaBand";
import { BUSINESS_CATEGORY, BUSINESS_NAME, BUSINESS_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: `${BUSINESS_NAME} | ${BUSINESS_CATEGORY} in Gujranwala` },
  description: `${BUSINESS_TAGLINE} PVC building wire, flexible cables, copper wire and power cables from Ayesha Traders, Gujranwala.`,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyUs />
      <TechnicalQuality />
      <CtaBand />
    </>
  );
}
