import type { Metadata } from "next";
import Image from "next/image";
import { Check, ShieldCheck, Award, HeartHandshake, Target, Eye } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { StatsSection } from "@/components/sections/stats-section";
import { CTASection } from "@/components/sections/cta-section";
import { whyChooseUs } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BrightSmile Dental Clinic - our mission, vision, story, advanced technology, facilities, and the team dedicated to your smile.",
};

const trustPoints = [
  "Board-certified specialists",
  "Hospital-grade sterilization",
  "Advanced digital technology",
  "Transparent, honest care",
  "Patient-first philosophy",
  "Comfortable, calming environment",
];

const facilities = [
  { title: "Modern Treatment Rooms", description: "State-of-the-art ergonomic chairs and equipment in every room." },
  { title: "Digital X-Ray Suite", description: "Low-radiation digital imaging for precise, fast diagnosis." },
  { title: "3D Imaging & Scans", description: "Advanced CBCT imaging for implants and complex cases." },
  { title: "Sterilization Center", description: "Hospital-grade autoclave sterilization for every instrument." },
  { title: "Pediatric Suite", description: "A fun, colorful, kid-friendly space for our youngest patients." },
  { title: "Comfort Amenities", description: "TV, headphones, and blankets to help you relax during treatment." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Caring for Smiles, Building Trust"
        description="For over 15 years, BrightSmile Dental Clinic has provided exceptional, compassionate dental care to families across the community."
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="container-dental grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&h=1100&fit=crop"
                  alt="BrightSmile Dental Clinic treatment room"
                  width={900}
                  height={1100}
                  className="aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border bg-card p-5 shadow-lg sm:block">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Welcome to BrightSmile</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                BrightSmile Dental Clinic was founded on a simple belief: everyone deserves access to high-quality, compassionate dental care. What started as a two-chair practice has grown into a modern, full-service clinic with six specialist dentists and a dedicated team of hygienists and support staff.
              </p>
              <p>
                Our philosophy is patient-first. We take the time to listen, explain every option in plain language, and never recommend treatments you don&apos;t need. Whether you&apos;re here for a routine cleaning or a full smile makeover, you&apos;ll receive the same exceptional standard of care.
              </p>
              <p>
                We combine the latest dental technology with a warm, welcoming atmosphere to make every visit as comfortable and stress-free as possible. Your trust means everything to us, and we work hard every day to earn it.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container-dental grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="size-6" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To provide exceptional, compassionate dental care through advanced technology and personalized treatment, helping every patient achieve a healthy, confident smile in a comfortable and welcoming environment.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="size-6" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be the most trusted dental clinic in our community — a place where patients feel genuinely cared for, where technology enhances comfort and outcomes, and where every smile we create reflects our commitment to excellence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsSection />

      <section className="bg-background py-16 sm:py-20">
        <div className="container-dental">
          <SectionHeader
            eyebrow="Why Patients Trust Us"
            title="The BrightSmile Difference"
            description="These are the values and standards that set us apart and keep patients coming back."
          />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border bg-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container-dental">
          <SectionHeader
            eyebrow="Our Facility"
            title="Modern Clinic & Advanced Technology"
            description="Our clinic is designed for both comfort and precision, equipped with the latest dental technology."
          />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <StaggerItem key={f.title}>
                <div className="h-full rounded-2xl border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="size-5" />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container-dental grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Safety & Hygiene"
              title="Your Safety Is Our Priority"
              description="We follow rigorous safety and sterilization protocols to protect every patient and staff member."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Hospital-grade autoclave sterilization of all instruments",
                "Single-use disposable items wherever possible",
                "Strict hand hygiene and PPE protocols",
                "Air purification systems in every treatment room",
                "Regular safety audits and staff training",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border bg-card p-6">
                <Award className="size-8 text-primary" />
                <h3 className="mt-3 text-lg font-semibold text-foreground">Certifications</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fully licensed and accredited. All dentists are board-certified in their specialties.
                </p>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <HeartHandshake className="size-8 text-primary" />
                <h3 className="mt-3 text-lg font-semibold text-foreground">Community Awards</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Recognized as a Top Dental Clinic in the region for 5 consecutive years by patient choice awards.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <DoctorsSection />
      <CTASection />
    </>
  );
}
