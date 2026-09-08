import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Baby, Smile, Brush, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/dental/service-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/sections/cta-section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Pediatric Dentistry",
  description:
    "Gentle, fun, and caring dental care for children. From the first visit to preventive care, our pediatric specialists help kids build healthy smiles for life.",
};

const pediatricServices = [
  { title: "First Dental Visit", description: "A gentle, positive introduction to the dentist for your little one.", icon: Baby },
  { title: "Pediatric Cleanings", description: "Thorough, child-friendly cleanings that keep tiny teeth healthy.", icon: Smile },
  { title: "Fluoride Treatments", description: "Strengthen enamel and prevent cavities with safe fluoride applications.", icon: ShieldCheck },
  { title: "Dental Sealants", description: "Protective coatings on molars that keep cavities at bay.", icon: ShieldCheck },
  { title: "Preventive Care", description: "Education and habits that set the foundation for lifelong oral health.", icon: Brush },
  { title: "Cavity Treatment", description: "Gentle, anxiety-free fillings for when cavities do occur.", icon: Heart },
];

const parentFaqs = [
  { q: "When should my child first visit the dentist?", a: "We recommend by age 1 or within 6 months of the first tooth appearing. Early visits build positive associations and prevent problems." },
  { q: "How can I make my child comfortable at the dentist?", a: "Talk positively about the visit, read dental-themed books, and avoid negative words. Our team is highly experienced at making kids feel safe and even excited." },
  { q: "Are baby X-rays safe for children?", a: "Yes. We use digital X-rays with minimal radiation and only recommend them when necessary to protect your child's dental health." },
  { q: "Why are baby teeth important if they fall out?", a: "Baby teeth hold space for permanent teeth, guide their eruption, and are essential for speech and chewing. Decay in baby teeth can affect permanent teeth." },
  { q: "What if my child is scared of the dentist?", a: "Many children feel anxious at first. Our child-friendly environment, gentle approach, and patient staff help even nervous kids relax and enjoy their visits." },
];

const tips = [
  "Start brushing as soon as the first tooth appears using a soft, age-appropriate brush.",
  "Use a pea-sized amount of fluoride toothpaste for children 3 and older.",
  "Supervise brushing until your child can do it well on their own (around age 7-8).",
  "Limit sugary drinks and snacks, especially between meals.",
  "Make oral care fun with songs, timers, and positive reinforcement.",
  "Visit the dentist every 6 months starting at age 1.",
];

export default function PediatricPage() {
  const pediatricServicesList = services.filter((s) => s.category === "Pediatric Dentistry");
  return (
    <>
      <PageHeader
        eyebrow="Pediatric Dentistry"
        title="Dental Care Made Fun for Kids"
        description="We've created a warm, welcoming, and fun environment where children build positive relationships with dental care that last a lifetime."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Pediatric Dentistry" }]}
      />

      <section className="bg-background py-14 sm:py-20">
        <div className="container-dental grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Child-Friendly Clinic"
              title="A Place Little Smiles Love"
              description="Our pediatric suite is designed with children in mind — bright colors, fun decorations, and a caring team that makes every visit an adventure, not a chore."
            />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Rodriguez and our pediatric team use gentle techniques, age-appropriate language, and positive reinforcement to help children feel safe and comfortable. We believe that a good first experience sets the tone for a lifetime of healthy dental habits.
              </p>
              <p>
                Parents are always welcome in the treatment room, and we take the time to answer your questions and provide practical guidance for caring for your child&apos;s teeth at home.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/appointments?service=pediatric-dentistry">
                  <Calendar className="size-5" />
                  Book a Pediatric Visit
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=700&fit=crop"
                alt="Child-friendly pediatric dental care"
                width={900}
                height={700}
                className="aspect-[6/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-14 sm:py-20">
        <div className="container-dental">
          <SectionHeader
            eyebrow="Pediatric Treatments"
            title="Comprehensive Care for Growing Smiles"
            description="Everything your child needs for healthy teeth, from the very first visit to preventive and corrective care."
          />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pediatricServices.map((service) => (
              <StaggerItem key={service.title}>
                <div className="h-full rounded-2xl border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {pediatricServicesList.length > 0 && (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pediatricServicesList.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-dental grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border bg-card p-8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
                <Brush className="size-5 text-primary" />
                Tips for Children&apos;s Oral Health
              </h2>
              <ul className="mt-5 space-y-3">
                {tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2.5 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              align="left"
              eyebrow="Parent FAQ"
              title="Questions Parents Ask"
              description="Answers to the most common questions about children's dental care."
            />
            <Accordion type="single" collapsible className="mt-6">
              {parentFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border bg-card px-1.5">
                  <AccordionTrigger className="px-3 py-4 text-left font-semibold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="px-3 text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
