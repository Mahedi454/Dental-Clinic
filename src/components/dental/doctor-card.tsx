import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Doctor } from "@/types";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <Badge className="mb-2 bg-white/95 text-foreground">{doctor.specialization}</Badge>
          <h3 className="text-lg font-semibold">{doctor.name}</h3>
          <p className="text-sm text-white/85">{doctor.experienceYears}+ years experience</p>
        </div>
      </div>
      <CardContent className="p-5">
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">{doctor.bio}</p>

        <div className="mt-3">
          <p className="text-sm font-semibold text-foreground">Qualifications</p>
          <ul className="mt-1 space-y-1">
            {doctor.qualifications.slice(0, 2).map((q) => (
              <li key={q} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                {q}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-1">
          <Languages className="size-3.5 text-primary" />
          <span className="text-xs text-muted-foreground">{doctor.languages.join(", ")}</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button asChild variant="outline" size="sm" className="text-sm">
            <Link href={`/doctors/${doctor.slug}`}>
              View Profile
              <ChevronRight className="size-3.5" />
            </Link>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <Link href={`/appointments?doctor=${doctor.slug}`}>
              <Calendar className="size-3.5" />
              Book
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
