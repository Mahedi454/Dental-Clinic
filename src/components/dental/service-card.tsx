import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/types";
import { getIcon } from "@/lib/icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-white/95 text-primary shadow">
            {React.createElement(getIcon(service.icon), { className: "size-5" })}
          </span>
          <Badge variant="secondary" className="bg-white/95 text-foreground">
            From ${service.startingPrice}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
          {service.popular && <Badge className="shrink-0 bg-primary">Popular</Badge>}
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">
            {service.duration}
          </span>
          <Link
            href={`/services/${service.slug}`}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Learn More
            <ChevronRight className="size-4" />
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button asChild variant="outline" size="sm" className="text-sm">
            <Link href={`/services/${service.slug}`}>
              Details
            </Link>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <Link href={`/appointments?service=${service.slug}`}>
              <Calendar className="size-3.5" />
              Book
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
