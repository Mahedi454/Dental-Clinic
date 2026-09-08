import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/dental/service-card";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { getFeaturedServices, getPopularServices } from "@/data/services";

export function ServicesSection() {
  const services = getPopularServices().length >= 4 ? getPopularServices() : getFeaturedServices().slice(0, 6);
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-dental">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Our Services"
            title="Comprehensive Dental Care"
            description="From routine checkups to advanced procedures, we offer a full range of dental services to keep your smile healthy and beautiful at every stage of life."
            className="max-w-2xl"
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/services">
              View All Services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
