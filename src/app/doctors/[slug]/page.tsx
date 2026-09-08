import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, GraduationCap, Languages, Check, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { DoctorCard } from "@/components/dental/doctor-card";
import { TestimonialCard } from "@/components/dental/testimonial-card";
import { CTASection } from "@/components/sections/cta-section";
import { getDoctorBySlug, doctors } from "@/data/doctors";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return { title: "Doctor Not Found" };
  return {
    title: doctor.name,
    description: `${doctor.name} - ${doctor.specialization} at ${siteConfig.name}. ${doctor.experienceYears}+ years of experience.`,
  };
}

export default async function DoctorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return notFound();

  const otherDoctors = doctors.filter((d) => d.slug !== slug).slice(0, 3);
  const relatedTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <section className="border-b border-border/60 bg-gradient-to-b from-accent/40 to-background">
        <div className="container-dental py-10 sm:py-14">
          <Breadcrumb items={[{ label: "Doctors", href: "/doctors" }, { label: doctor.name }]} />
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-5">
            <div className="relative lg:col-span-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <Badge className="mb-3 bg-primary/10 text-primary">{doctor.specialization}</Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{doctor.name}</h1>
              <p className="mt-1 text-lg text-muted-foreground">{doctor.title}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{doctor.bio}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
                  <Award className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{doctor.experienceYears}+ Years Experience</p>
                    <p className="text-xs text-muted-foreground">Specialized in {doctor.specialization.toLowerCase()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
                  <Clock className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Working Hours</p>
                    <p className="text-xs text-muted-foreground">{doctor.workingHours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border bg-card p-4 sm:col-span-2">
                  <Languages className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Languages Spoken</p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {doctor.languages.map((lang) => (
                        <Badge key={lang} variant="secondary">{lang}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={`/appointments?doctor=${doctor.slug}`}>
                    <Calendar className="size-5" />
                    Book with {doctor.name.split(" ")[0]} {doctor.name.split(" ")[1]}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={siteConfig.phoneHref}>Call the Clinic</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-dental space-y-16">
          <Reveal className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground">About {doctor.name}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                {doctor.longBio.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Qualifications & Education</h2>
              <div className="mt-4 space-y-3">
                {doctor.education.map((edu) => (
                  <div key={edu} className="flex items-start gap-3 rounded-xl border bg-card p-4">
                    <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{edu}</p>
                    </div>
                  </div>
                ))}
                {doctor.qualifications.map((q) => (
                  <div key={q} className="flex items-start gap-3 rounded-xl border bg-card p-4">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p className="font-medium text-foreground">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold text-foreground">Specialties</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {doctor.specialties.map((spec) => (
                <Badge key={spec} variant="outline" className="px-3 py-1.5 text-sm">{spec}</Badge>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold text-foreground">Certifications & Memberships</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {doctor.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 rounded-xl border bg-card p-4">
                  <Award className="size-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium text-foreground">{cert}</p>
                </div>
              ))}
              {doctor.memberships.map((mem) => (
                <div key={mem} className="flex items-center gap-3 rounded-xl border bg-card p-4">
                  <Check className="size-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium text-foreground">{mem}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold text-foreground">Working Hours</h2>
            <div className="mt-4 rounded-xl border bg-card p-4">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4 text-primary" />
                {doctor.workingHours}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-14">
        <div className="container-dental">
          <h2 className="text-2xl font-bold text-foreground">Patient Reviews</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="container-dental">
          <h2 className="text-2xl font-bold text-foreground">Meet Our Other Specialists</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
