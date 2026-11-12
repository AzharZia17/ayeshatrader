"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { CATEGORIES, PRODUCTS, isCategorySlug, type CategorySlug } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductGrid } from "@/components/products/ProductGrid";

type Filter = CategorySlug | "all";

export function ProductCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const rawCategory = params.get("category");
  const category: Filter = isCategorySlug(rawCategory) ? rawCategory : "all";
  const [query, setQuery] = React.useState("");

  const setCategory = (next: Filter) => {
    const sp = new URLSearchParams(params.toString());
    if (next === "all") sp.delete("category");
    else sp.set("category", next);
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const q = query.trim().toLowerCase();
  const results = PRODUCTS.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (!q) return true;
    const haystack = [p.name, p.summary, ...p.sizes, ...p.applications, ...p.specs.map((s) => s.value)].join(" ").toLowerCase();
    return haystack.includes(q);
  });

  const filtersActive = category !== "all" || q.length > 0;
  const clear = () => {
    setQuery("");
    setCategory("all");
  };
  const categoryLabel = category === "all" ? "All Products" : CATEGORIES.find((c) => c.slug === category)?.name;

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search aria-hidden className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-charcoal-muted" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, sizes or applications"
            aria-label="Search products"
            className="px-10 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-2 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-charcoal-muted hover:bg-surface-gray hover:text-charcoal"
            >
              <X aria-hidden className="size-4" />
            </button>
          )}
        </div>

        {/* Mobile: Select. Desktop: Tabs */}
        <div className="lg:hidden">
          <Select value={category} onValueChange={(v) => v && setCategory(v as Filter)}>
            <SelectTrigger aria-label="Filter by category">
              <SelectValue>{categoryLabel}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              {CATEGORIES.map((c) => (
                <SelectItem key={c.slug} value={c.slug}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 hidden lg:block">
        <Tabs value={category} onValueChange={(v) => setCategory(v as Filter)}>
          <TabsList aria-label="Product categories">
            <TabsTrigger value="all">All Products</TabsTrigger>
            {CATEGORIES.map((c) => (
              <TabsTrigger key={c.slug} value={c.slug}>
                {c.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="mt-8 mb-6 flex items-center justify-between gap-4">
        <p role="status" aria-live="polite" className="text-sm text-charcoal-muted">
          Showing <span className="font-semibold text-charcoal">{results.length}</span> of {PRODUCTS.length} products
        </p>
        {filtersActive && (
          <Button variant="ghost" size="sm" onClick={clear}>
            <X aria-hidden />
            Clear filters
          </Button>
        )}
      </div>

      {results.length > 0 ? (
        <ProductGrid products={results} />
      ) : (
        <div className="border border-dashed border-border-strong px-6 py-16 text-center">
          <p className="text-lg font-semibold">No products match your search</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-charcoal-muted">
            Try a different keyword, or clear the filters to see the full range. You can also ask us directly for a size that is not listed.
          </p>
          <Button variant="outline" className="mt-6" onClick={clear}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
