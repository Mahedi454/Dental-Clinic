import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/ui/reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, breadcrumbs, children }: PageHeaderProps) {
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-accent/40 to-background">
      <div className="container-dental py-12 sm:py-16 lg:py-20">
        <Reveal>
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
          )}
          <h1 className="max-w-3xl text-balance-dental text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
