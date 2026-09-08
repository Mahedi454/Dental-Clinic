import Image from "next/image";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-6">
        <Quote className="size-8 text-primary/40" />
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
          &ldquo;{testimonial.review}&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 border-t pt-4">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
          <div>
            <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
              {testimonial.name}
              {testimonial.verified && <BadgeCheck className="size-4 text-primary" aria-label="Verified patient" />}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.treatment} • {testimonial.date}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
