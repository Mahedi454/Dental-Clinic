"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { BeforeAfterSlider } from "@/components/dental/before-after-slider";
import { beforeAfterItems } from "@/data/beforeAfter";

export function BeforeAfterSection() {
  const display = beforeAfterItems.slice(0, 3);
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-dental">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Real Results"
            title="See the Transformation"
            description="Drag the slider to compare before and after photos from real patient treatments."
            className="max-w-2xl"
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/before-after">
              View All Results
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {display.map((item) => (
            <div key={item.id}>
              <BeforeAfterSlider item={item} />
              <div className="mt-3 text-center">
                <h3 className="text-base font-semibold text-foreground">{item.treatmentName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
