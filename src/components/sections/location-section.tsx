import { MapPin, Phone, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export function LocationSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-dental">
        <SectionHeader
          eyebrow="Visit Us"
          title="Find Our Clinic"
          description="Conveniently located in the heart of the city with easy parking and access."
        />
        <Reveal className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border lg:col-span-3">
            <div
              className="relative h-full min-h-[320px] w-full"
              role="img"
              aria-label={`Map showing location of ${siteConfig.name} at ${siteConfig.address}`}
            >
              <div
                className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#e5e7eb_0,#e5e7eb_2px,#f3f4f6_2px,#f3f4f6_8px)]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="absolute -inset-4 animate-ping rounded-full bg-primary/20" aria-hidden="true" />
                  <span className="relative flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <MapPin className="size-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border bg-card p-8 lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground">BrightSmile Dental Clinic</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={siteConfig.phoneHref} className="hover:text-primary">{siteConfig.phone}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="space-y-1">
                  <span className="block">Mon - Fri: {siteConfig.openingHours.monday}</span>
                  <span className="block">Saturday: {siteConfig.openingHours.saturday}</span>
                  <span className="block">Sunday: {siteConfig.openingHours.sunday}</span>
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
