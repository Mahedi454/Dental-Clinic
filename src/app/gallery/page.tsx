"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { galleryImages, galleryCategories } from "@/data/gallery";
import type { GalleryImage } from "@/types";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () => (active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active)),
    [active]
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside Our Clinic"
        description="Take a look inside BrightSmile Dental — our modern facility, advanced equipment, dedicated team, and the smiling patients we're proud to serve."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="container-dental">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
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

          <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3" key={active}>
            {filtered.map((img) => (
              <motion.button
                key={img.id}
                type="button"
                onClick={() => setLightbox(img)}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                className="group relative mb-5 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl"
                aria-label={`Open ${img.title} image`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{img.title}</p>
                  <p className="text-xs text-white/80">{img.category}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
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
              initial={reduceMotion ? false : { scale: 0.92 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1000}
                height={750}
                className="mx-auto max-h-[75vh] w-auto rounded-xl object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white">{lightbox.title}</h3>
                <p className="mt-1 text-sm text-white/75">{lightbox.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
