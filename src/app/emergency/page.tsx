import type { Metadata } from "next";
import Link from "next/link";
import {
  PhoneCall,
  Siren,
  MapPin,
  Clock,
  Ambulance,
  Activity,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emergency Dental Care",
  description:
    "24/7 emergency dental care for severe toothache, knocked-out teeth, broken teeth, and dental trauma. Call our emergency line immediately.",
};

const emergencyServices = [
  { title: "Severe Toothache", description: "Immediate relief for acute, throbbing dental pain." },
  { title: "Knocked-Out Tooth", description: "Rapid treatment to save a knocked-out natural tooth." },
  { title: "Broken or Cracked Tooth", description: "Repair and protection for chipped or fractured teeth." },
  { title: "Facial Swelling", description: "Urgent care for swelling that may indicate infection." },
  { title: "Abscess or Infection", description: "Prompt drainage and treatment of dental abscesses." },
  { title: "Lost Crown or Filling", description: "Replacement and protection for exposed tooth structure." },
];

const steps = [
  { title: "Stay Calm", description: "Take a deep breath. Most dental emergencies can be resolved with prompt care." },
  { title: "Manage Pain", description: "Apply a cold compress and take over-the-counter pain relief as directed." },
  { title: "Call Us Immediately", description: "Call our emergency line for guidance and to schedule urgent care." },
  { title: "Follow Instructions", description: "We'll advise you on steps to take, like preserving a knocked-out tooth in milk." },
];

const emgFaqs = [
  { q: "Do you offer same-day emergency appointments?", a: "Yes, we reserve same-day slots for emergency patients. Call our emergency line and we'll get you scheduled as quickly as possible." },
  { q: "What counts as a dental emergency?", a: "Severe pain, knocked-out teeth, broken teeth, facial swelling, uncontrolled bleeding, or signs of infection all require prompt care. When in doubt, call us." },
  { q: "What should I do with a knocked-out tooth?", a: "Hold it by the crown, rinse gently with milk or water, and try to reinsert. If you can't, keep it in milk and get to us within 30-60 minutes." },
  { q: "Is an emergency visit more expensive?", a: "Emergency examinations carry a slightly higher fee due to the urgency, but standard treatment costs apply. We'll discuss all costs before treatment." },
];

export default function EmergencyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-red-600 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 80%, white 0, transparent 40%)" }} aria-hidden="true" />
        <div className="container-dental relative py-14 sm:py-20">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-100">
            <Siren className="size-5 animate-pulse" />
            Emergency Dental Care
          </div>
          <h1 className="mt-3 max-w-2xl text-balance-dental text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Dental Emergency? We&apos;re Here to Help.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-red-50">
            Severe pain, knocked-out teeth, or broken teeth? Don&apos;t wait. Our emergency team is ready to provide fast, compassionate care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.emergencyPhoneHref}
              className="inline-flex h-13 items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-lg font-bold text-red-600 shadow-lg transition-transform hover:scale-[1.02]"
            >
              <PhoneCall className="size-5" />
              Call {siteConfig.emergencyPhone}
            </a>
            <Button asChild variant="ghost" className="h-13 text-white hover:bg-white/10" size="lg">
              <Link href={siteConfig.phoneHref}>
                <Ambulance className="size-5" />
                Clinic: {siteConfig.phone}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-dental">
          <SectionHeader
            eyebrow="Emergency Services"
            title="We Handle These Emergencies"
            description="Our team is equipped to handle all types of dental emergencies with urgency and care."
          />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {emergencyServices.map((service) => (
              <StaggerItem key={service.title}>
                <div className="h-full rounded-2xl border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <Activity className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-red-50 py-14 sm:py-20">
        <div className="container-dental">
          <SectionHeader
            eyebrow="What to Do"
            title="In a Dental Emergency, Follow These Steps"
            description="Acting quickly and correctly can make a big difference in the outcome."
          />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="h-full rounded-2xl border border-red-100 bg-white p-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-dental grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <Clock className="size-5" />
                </span>
                <h2 className="text-xl font-bold text-foreground">Emergency Hours</h2>
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex justify-between rounded-lg bg-muted/40 p-3 text-sm">
                  <span className="text-muted-foreground">Mon - Fri</span>
                  <span className="font-semibold text-foreground">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between rounded-lg bg-muted/40 p-3 text-sm">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold text-foreground">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between rounded-lg bg-muted/40 p-3 text-sm">
                  <span className="text-muted-foreground">Sunday & Holidays</span>
                  <span className="font-semibold text-foreground">On-call service</span>
                </div>
              </div>
              <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <Bell className="mt-0.5 size-4 shrink-0 text-red-600" />
                Outside office hours, call our emergency line and follow the instructions to reach our on-call dentist.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <MapPin className="size-5" />
                </span>
                <h2 className="text-xl font-bold text-foreground">Visit Our Clinic</h2>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {siteConfig.address}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We&apos;re centrally located with easy parking and accessible entrance. For emergencies, call ahead so we can prepare for your arrival.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={siteConfig.emergencyPhoneHref} className="inline-flex h-11 items-center gap-2 rounded-xl bg-red-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-red-700">
                  <PhoneCall className="size-4" />
                  Call Now
                </a>
                <Button asChild variant="outline">
                  <Link href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address)}`} target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-14 sm:py-20">
        <div className="container-dental">
          <SectionHeader eyebrow="FAQ" title="Emergency Care Questions" />
          <div className="mx-auto mt-8 max-w-3xl">
            <Accordion type="single" collapsible>
              {emgFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border bg-card px-1.5">
                  <AccordionTrigger className="px-3 py-4 text-left font-semibold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="px-3 text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
