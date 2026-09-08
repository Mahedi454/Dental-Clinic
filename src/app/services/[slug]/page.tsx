import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Check, Clock, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceCard } from "@/components/dental/service-card";
import { CTASection } from "@/components/sections/cta-section";
import { getServiceBySlug, getRelatedServices } from "@/data/services";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.description.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  const related = getRelatedServices(slug);

  return (
    <>
      <section className="border-b border-border/60 bg-gradient-to-b from-accent/40 to-background">
        <div className="container-dental py-10 sm:py-14">
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.name }]} />
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">{service.category}</Badge>
              <h1 className="text-balance-dental text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {service.name}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{service.shortDescription}</p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <Tag className="size-5 text-primary" />
                  <span>
                    <strong className="text-foreground">From ৳{service.startingPrice.toLocaleString("en-US")}</strong>
                    <span className="text-muted-foreground"> starting</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="size-5 text-primary" />
                  <span className="text-muted-foreground">Duration: <strong className="text-foreground">{service.duration}</strong></span>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={`/appointments?service=${service.slug}`}>
                    <Calendar className="size-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={siteConfig.phoneHref}>Call for Consultation</a>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={service.image}
                alt={service.name}
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-dental grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-bold text-foreground">About This Treatment</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl font-bold text-foreground">Benefits</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-muted-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl font-bold text-foreground">Treatment Process</h2>
              <div className="mt-6 space-y-4">
                {service.process.map((step, i) => (
                  <div key={step.title} className="flex gap-4 rounded-xl border bg-card p-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl font-bold text-foreground">What to Expect</h2>
              <ul className="mt-4 space-y-2.5">
                {service.whatToExpect.map((expect) => (
                  <li key={expect} className="flex items-start gap-2.5 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {expect}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="mt-6">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`item-${i}`} className="rounded-xl border bg-card px-1.5">
                    <AccordionTrigger className="px-3 py-4 text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-3 text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Treatment Summary</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex justify-between border-b pb-3">
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="font-medium text-foreground">{service.category}</dd>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <dt className="text-muted-foreground">Starting Price</dt>
                  <dd className="font-medium text-foreground">From ৳{service.startingPrice.toLocaleString("en-US")}</dd>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="font-medium text-foreground">{service.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Insurance</dt>
                  <dd className="font-medium text-foreground">Accepted</dd>
                </div>
              </dl>
              <Button asChild className="mt-6 w-full">
                <Link href={`/appointments?service=${service.slug}`}>
                  <Calendar className="size-4" />
                  Book This Treatment
                </Link>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Prices may vary based on individual treatment requirements.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-muted/40 py-14 sm:py-20">
          <div className="container-dental">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-foreground">Related Services</h2>
              <Link href="/services" className="flex items-center gap-1 text-sm font-medium text-primary">
                View All
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
