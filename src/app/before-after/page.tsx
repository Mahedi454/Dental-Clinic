"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { BeforeAfterSlider } from "@/components/dental/before-after-slider";
import { CTASection } from "@/components/sections/cta-section";
import { beforeAfterItems, beforeAfterCategories } from "@/data/beforeAfter";
import type { BeforeAfterItem } from "@/types";
import { cn } from "@/lib/utils";

export default function BeforeAfterPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<BeforeAfterItem | null>(null);
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () => (active === "All" ? beforeAfterItems : beforeAfterItems.filter((i) => i.category === active)),
    [active]
  );

  return (
    <>
      <PageHeader
        eyebrow="Real Results"
        title="Before & After Gallery"
        description="Real transformations from real patients. Use the slider on each image to compare before and after results. Click the expand icon to view in a larger lightbox."
        breadcrumbs={[{ label: "Before & After" }]}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="container-dental">
          <div className="flex flex-wrap gap-2">
            {beforeAfterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === cat ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-8 sm:grid-cols-2" key={active}>
              {filtered.map((item) => (
                <div key={item.id} className="space-y-3">
                  <div className="relative">
                    <BeforeAfterSlider item={item} onOpenLightbox={setLightbox} />
                  </div>
                  <div className="px-1">
                    <h3 className="text-lg font-semibold text-foreground">{item.treatmentName}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-16 text-center text-muted-foreground">No results in this category yet.</div>
          )}
        </div>
      </section>

      <CTASection />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.treatmentName} lightbox`}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={reduceMotion ? false : { scale: 0.9 }}
              animate={{ scale: 1 }}
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <BeforeAfterSlider item={lightbox} />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-semibold">{lightbox.treatmentName}</h3>
                <p className="mt-1 text-sm text-white/75">{lightbox.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
