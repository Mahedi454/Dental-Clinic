"use client";

import { Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/dental/testimonial-card";
import { getTestimonialAverage, getTestimonialCount, testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const display = testimonials.slice(0, 3);
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-dental">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            align="left"
            eyebrow="Patient Stories"
            title="What Our Patients Say"
            description="Real stories from real patients who trust us with their smiles."
            className="max-w-xl"
          />
          <div className="flex items-center gap-3 rounded-2xl border bg-card px-5 py-4">
            <span className="text-4xl font-bold text-foreground">{getTestimonialAverage()}</span>
            <div>
              <div className="flex gap-0.5" aria-label={`${getTestimonialAverage()} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Based on {getTestimonialCount()} reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {display.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
