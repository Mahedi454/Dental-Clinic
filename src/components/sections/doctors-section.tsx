import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { DoctorCard } from "@/components/dental/doctor-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { getFeaturedDoctors } from "@/data/doctors";

export function DoctorsSection() {
  const doctors = getFeaturedDoctors();
  return (
    <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="container-dental">
        <SectionHeader
          eyebrow="Meet Our Team"
          title="Expert Dentists You Can Trust"
          description="Our team of board-certified specialists brings decades of combined experience to every treatment, ensuring you receive the highest quality care."
        />

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/doctors">
              View All Doctors
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
