import { SectionHeader } from "@/components/ui/section-header";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { getIcon } from "@/lib/icons";
import { whyChooseUs } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-dental">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Dental Care That Puts You First"
          description="We combine advanced technology with genuine, personal care to deliver the best possible dental experience."
        />
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
