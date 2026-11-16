import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CategoryList } from "@/components/home/CategoryList";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Materials } from "@/components/home/Materials";
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
      <CategoryList />
      <FeaturedProducts />
      <Materials />
      <CtaBand />
    </>
  );
}
