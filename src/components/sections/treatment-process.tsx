import { SectionHeader } from "@/components/ui/section-header";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { treatmentProcess } from "@/data/site";

export function TreatmentProcess() {
  return (
    <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="container-dental">
        <SectionHeader
          eyebrow="How It Works"
          title="Your Dental Treatment Journey"
          description="From your first consultation to your final follow-up, we guide you through a clear, comfortable treatment process."
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {treatmentProcess.map((step, i) => (
            <StaggerItem key={step.step}>
              <div className="relative h-full rounded-2xl border bg-card p-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {step.step}
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                {i < treatmentProcess.length - 1 && (
                  <span
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-muted-foreground/40 lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
