"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { CATEGORIES, PRODUCTS, isCategorySlug, type CategorySlug } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
        <Tabs value={category} onValueChange={(v) => setCategory(v as Filter)} className="min-w-0">
          <TabsList aria-label="Product categories">
            <TabsTrigger value="all">All</TabsTrigger>
            {CATEGORIES.map((c) => (
              <TabsTrigger key={c.slug} value={c.slug}>
                {c.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="relative w-full lg:max-w-xs">
          <Search aria-hidden className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-charcoal-muted" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, size or use"
            aria-label="Search products"
            className=" bg-surface-gray px-11 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-2.5 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center  text-charcoal-muted hover:bg-white hover:text-charcoal"
            >
              <X aria-hidden className="size-4" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 mb-10 flex min-h-9 items-center justify-between gap-4">
        <p role="status" aria-live="polite" className="text-sm text-charcoal-muted">
          <span className="font-semibold text-charcoal">{results.length}</span> of {PRODUCTS.length} products
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
        <div className=" bg-surface-gray px-6 py-20 text-center">
          <p className="display text-3xl">No matching products</p>
          <p className="mx-auto mt-3 max-w-md text-sm text-charcoal-muted">
            Try another keyword, or ask us directly for a size that is not listed.
          </p>
          <Button variant="outline" className="mt-8" onClick={clear}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
