"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { TestimonialCard } from "@/components/dental/testimonial-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { testimonials, getTestimonialAverage, getRatingBreakdown } from "@/data/testimonials";

export default function TestimonialsPage() {
  const [visible, setVisible] = useState(6);
  const breakdown = getRatingBreakdown();
  const count = testimonials.length;

  return (
    <>
      <PageHeader
        eyebrow="Patient Reviews"
        title="What Our Patients Say"
        description="We're honored by the trust our patients place in us. Here are real reviews from patients who've transformed their smiles with BrightSmile."
        breadcrumbs={[{ label: "Testimonials" }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-8 rounded-2xl border bg-card p-6">
          <div className="text-center">
            <p className="text-5xl font-bold text-foreground">{getTestimonialAverage()}</p>
            <div className="mt-1 flex justify-center gap-0.5" aria-label={`${getTestimonialAverage()} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Based on {count} reviews</p>
          </div>
          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => {
              const num = breakdown[rating] || 0;
              const pct = count ? Math.round((num / count) * 100) : 0;
              return (
                <div key={rating} className="flex items-center gap-3 text-sm">
                  <span className="flex w-12 items-center gap-1 text-muted-foreground">{rating}<Star className="size-3.5 fill-amber-400 text-amber-400" /></span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-amber-400" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="w-8 text-right text-muted-foreground">{num}</span>
                </div>
              );
            })}
          </div>
        </div>
      </PageHeader>

      <section className="bg-background py-12 sm:py-16">
        <div className="container-dental">
          <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, visible).map((t) => (
              <StaggerItem key={t.id}>
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          {visible < testimonials.length && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + 6)}
                className="rounded-full border px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                Load More Reviews
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
