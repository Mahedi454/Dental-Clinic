"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { DoctorCard } from "@/components/dental/doctor-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { CTASection } from "@/components/sections/cta-section";
import { doctors } from "@/data/doctors";
import { cn } from "@/lib/utils";

const specializations = ["All", ...Array.from(new Set(doctors.map((d) => d.specialization)))];

export default function DoctorsPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? doctors : doctors.filter((d) => d.specialization === active)),
    [active]
  );

  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Meet Our Expert Dentists"
        description="Our team of highly trained, board-certified dental professionals is dedicated to providing you with exceptional care in a comfortable, welcoming environment."
        breadcrumbs={[{ label: "Doctors" }]}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="container-dental">
          <div className="flex flex-wrap gap-2">
            {specializations.map((spec) => (
              <button
                key={spec}
                type="button"
                onClick={() => setActive(spec)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === spec
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {spec}
              </button>
            ))}
          </div>

          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" key={active}>
            {filtered.map((doctor) => (
              <StaggerItem key={doctor.id}>
                <DoctorCard doctor={doctor} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
