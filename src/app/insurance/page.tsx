import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Wallet, PiggyBank, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { insuranceProviders, paymentMethods, financingOptions, insuranceFaqs } from "@/data/insurance";
import { CTASection } from "@/components/sections/cta-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance & Payment Options",
  description:
    "We accept most major dental insurance providers and offer flexible payment methods including payment plans, CareCredit, and our dental membership plan. Learn more here.",
};

export default function InsurancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Insurance & Payment"
        title="Making Dental Care Affordable"
        description="We accept a wide range of insurance providers and offer flexible payment options so you can receive quality care without financial stress."
        breadcrumbs={[{ label: "Insurance" }]}
      />

      <section className="bg-background py-14 sm:py-20">
        <div className="container-dental">
          <SectionHeader
            eyebrow="Insurance Providers"
            title="We Work With These Providers"
            description="Most major dental insurance plans are accepted. Our team will verify your coverage and handle the claims process for you."
          />
          <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {insuranceProviders.map((provider) => (
              <StaggerItem key={provider.id}>
                <div className="group flex h-full flex-col items-center justify-center rounded-2xl border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex size-12 items-center justify-center rounded-xl font-bold text-white" style={{ backgroundColor: provider.logoColor }}>
                    {provider.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                  <p className="mt-3 font-semibold text-foreground">{provider.name}</p>
                  <p className="text-xs text-muted-foreground">{provider.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don&apos;t see your provider? Call us — we likely still accept your insurance.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-14 sm:py-20">
        <div className="container-dental">
          <SectionHeader
            eyebrow="Payment Methods"
            title="Flexible Ways to Pay"
            description="Choose the payment method that works best for you."
          />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paymentMethods.map((method) => (
              <StaggerItem key={method.id}>
                <div className="h-full rounded-2xl border bg-card p-6">
                  <CreditCard className="size-6 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{method.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{method.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="container-dental">
          <SectionHeader
            eyebrow="Financing Options"
            title="Affordable Payment Plans"
            description="Quality dental care has never been more accessible with our flexible financing options."
          />
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
            {financingOptions.map((option) => (
              <StaggerItem key={option.id}>
                <div className="flex h-full flex-col rounded-2xl border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{option.plan}</h3>
                    <PiggyBank className="size-5 text-primary" />
                  </div>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{option.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm">
                    <span className="text-muted-foreground">Terms: <strong className="text-foreground">{option.terms}</strong></span>
                    <span className="font-semibold text-primary">{option.apr}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-10 rounded-2xl border bg-primary p-8 text-center text-primary-foreground">
            <Wallet className="mx-auto size-8" />
            <h3 className="mt-3 text-xl font-bold">Looking for a payment plan?</h3>
            <p className="mx-auto mt-2 max-w-xl text-primary-foreground/85">
              Ask our front desk team about in-house payment plans and financing options during your visit. We&apos;re here to help make care affordable.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/appointments">Book an Appointment</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href={siteConfig.phoneHref}>
                  <PhoneCall className="size-4" />
                  Call {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 sm:py-20">
        <div className="container-dental max-w-3xl">
          <SectionHeader eyebrow="Insurance FAQ" title="Common Insurance Questions" />
          <Accordion type="single" collapsible className="mt-8">
            {insuranceFaqs.map((faq, i) => (
              <AccordionItem key={faq.id} value={`item-${i}`} className="rounded-xl border bg-card px-1.5">
                <AccordionTrigger className="px-3 py-4 text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-3 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </>
  );
}
