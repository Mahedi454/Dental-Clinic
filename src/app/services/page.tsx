"use client";

import { useMemo, useState, useTransition } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { ServiceCard } from "@/components/dental/service-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { services, serviceCategories } from "@/data/services";
import { cn } from "@/lib/utils";
import { CTASection } from "@/components/sections/cta-section";

const filters = ["All", ...serviceCategories];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory = activeCategory === "All" || s.category === activeCategory;
      const q = search.trim().toLowerCase();
      const matchesSearch = !q || s.name.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Complete Dental Services"
        description="From routine preventive care to advanced cosmetic and restorative treatments, our experienced team provides comprehensive dental solutions for patients of all ages."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="container-dental">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => startTransition(() => setActiveCategory(cat))}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    activeCategory === cat
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative md:w-72">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
                aria-label="Search services"
              />
            </div>
          </div>

          {isPending && filtered.length === 0 ? (
            <SkeletonGrid />
          ) : filtered.length > 0 ? (
            <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" key={`${activeCategory}-${search}`}>
              {filtered.map((service) => (
                <StaggerItem key={service.id}>
                  <ServiceCard service={service} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          ) : (
            <div className="mt-16 text-center">
              <p className="text-lg font-semibold text-foreground">No services found</p>
              <p className="mt-2 text-muted-foreground">Try adjusting your search or category filter.</p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}

function SkeletonGrid() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-2xl border">
          <div className="aspect-[4/3] animate-pulse bg-muted" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
            <div className="h-3 w-full animate-pulse rounded bg-muted" />
            <div className="h-9 w-full animate-pulse rounded-lg bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}
