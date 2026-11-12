import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { CtaBand } from "@/components/shared/CtaBand";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse PVC electric wires, flexible cables, copper wires and power cables from Ayesha Traders. Request prices on WhatsApp by product and size.",
  alternates: { canonical: "/products" },
  openGraph: { title: "Products | Ayesha Traders", url: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        eyebrow="Product Catalog"
        title="Products"
        image={{ src: "/images/products/flexible-multicore-cable.jpg", alt: "Black flexible multi-core cable" }}
        description="Search by name, size or application. Request a price for the size you need."
      />
      <section className="py-10 lg:py-14">
        <div className="container-page">
          <Suspense fallback={<div className="h-96" aria-hidden />}>
            <ProductCatalog />
          </Suspense>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
