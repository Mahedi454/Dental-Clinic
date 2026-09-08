import Link from "next/link";
import { ShieldCheck, CreditCard, Wallet, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { insurancesAccepted } from "@/data/site";

export function InsuranceSection() {
  return (
    <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="container-dental grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionHeader
            align="left"
            eyebrow="Insurance & Payment"
            title="We Make Dental Care Affordable"
            description="We work with a wide range of insurance providers and offer flexible payment options so you can receive the care you need without financial stress."
            className="max-w-xl"
          />
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Most major insurance accepted.</strong> We handle claims and verify your coverage before treatment.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Flexible payment methods.</strong> Cards, cash, FSA/HSA, and CareCredit accepted.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Wallet className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Payment plans available.</strong> Spread treatment costs over manageable monthly payments.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <PiggyBank className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">No insurance?</strong> Enjoy our Dental Membership Plan with discounted fees.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/insurance">Learn About Insurance</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border bg-card p-8">
            <h3 className="text-lg font-semibold text-foreground">Insurance Providers We Accept</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {insurancesAccepted.map((provider) => (
                <div key={provider} className="flex items-center justify-center rounded-xl border bg-background px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  {provider}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Don&apos;t see your provider? Call us at the clinic — we likely still accept your insurance.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
