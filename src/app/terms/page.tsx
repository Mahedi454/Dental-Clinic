import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "BrightSmile Dental Clinic's terms and conditions for use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website or services."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />
      <div className="mx-auto max-w-3xl space-y-8 py-12 sm:py-16">
        <section>
          <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            By accessing or using the BrightSmile Dental Clinic website, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Use of the Website</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            This website is provided for informational purposes and does not constitute professional medical or dental advice. Information on this website should not be used as a substitute for professional dental consultation.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Appointments</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Booking an appointment through our website is a request and is subject to confirmation by our staff. We reserve the right to reschedule or cancel appointments. Please provide at least 24 hours notice for cancellations.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Intellectual Property</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            All content on this website, including text, graphics, logos, and images, is the property of BrightSmile Dental Clinic and is protected by applicable intellectual property laws.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            BrightSmile Dental Clinic shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on the information provided.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Changes to These Terms</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We may update these Terms &amp; Conditions from time to time. Any changes will be posted on this page with an updated date.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            For questions about these terms, please contact us at info@brightsmiledental.com or call (555) 123-4567.
          </p>
        </section>
        <p className="border-t pt-6 text-sm text-muted-foreground">Last updated: January 2026</p>
      </div>
    </>
  );
}
