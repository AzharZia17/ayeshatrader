import { HeroSection } from "@/components/home/HeroSection";
import { TrustHighlights } from "@/components/home/TrustHighlights";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { QualitySection } from "@/components/home/QualitySection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Highlights */}
      <TrustHighlights />

      {/* 3. Products Section */}
      <FeaturedProductsSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Quality Section */}
      <QualitySection />

      {/* 6. CTA Section */}
      <CTASection />
    </>
  );
}
