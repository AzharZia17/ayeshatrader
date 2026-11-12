"use client";

import * as React from "react";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";
import { Product, ProductCategory, CATEGORIES } from "@/lib/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProductGridProps {
  products: Product[];
  initialCategory?: string;
  showFilters?: boolean;
}

export function ProductGrid({
  products,
  initialCategory = "All",
  showFilters = true,
}: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = React.useState("");

  const allCategories = ["All", ...CATEGORIES];

  const filteredProducts = React.useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.conductor.toLowerCase().includes(query) ||
        p.availableSizes.some((s) => s.toLowerCase().includes(query)) ||
        p.applications.some((a) => a.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Toolbar */}
      {showFilters && (
        <div className="flex flex-col gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between md:p-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-[#167346] text-white shadow-sm ring-1 ring-[#167346]"
                      : "bg-[#F5F6F4] text-[#4B5563] hover:bg-[#E8F5EE] hover:text-[#167346]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search wire, size, conduit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 rounded-full border-[#E5E7EB] bg-[#F5F6F4] pl-10 pr-4 text-xs focus-visible:ring-[#167346]"
            />
          </div>
        </div>
      )}

      {/* Product Results Count */}
      <div className="flex items-center justify-between text-xs text-[#6B7280]">
        <span>
          Showing{" "}
          <strong className="text-[#202522]">{filteredProducts.length}</strong>{" "}
          cables and wires
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </span>
        {(selectedCategory !== "All" || searchQuery) && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 font-semibold text-[#167346] hover:underline"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={idx < 4}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#E5E7EB] bg-[#F5F6F4] py-16 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
            <SlidersHorizontal className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-base font-bold text-[#202522]">
            No matching products found
          </h3>
          <p className="mt-1 text-xs text-gray-500 max-w-sm">
            We couldn&apos;t find any products matching your search criteria. Try
            adjusting your search keyword or selected category.
          </p>
          <Button
            onClick={handleReset}
            variant="outline"
            className="mt-4 rounded-full border-[#167346] text-[#167346] hover:bg-[#E8F5EE]"
          >
            View All Products
          </Button>
        </div>
      )}
    </div>
  );
}

