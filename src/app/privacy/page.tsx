import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BrightSmile Dental Clinic's privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your privacy matters to us. This policy explains how we collect, use, and protect your personal information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <div className="mx-auto max-w-3xl space-y-8 py-12 sm:py-16">
        <section>
          <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            BrightSmile Dental Clinic (&quot;we,&quot; &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">We may collect the following types of information:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Personal identification information (name, email, phone number, date of birth)</li>
            <li>Health information relevant to your dental care</li>
            <li>Appointment and treatment history</li>
            <li>Usage data about how you interact with our website</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We use your information to schedule appointments, provide dental care, process payments, send reminders, improve our services, and comply with legal obligations. We never sell your personal information to third parties.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            You have the right to access, update, or request deletion of your personal information. To exercise these rights, please contact us at the clinic.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at info@brightsmiledental.com or call (555) 123-4567.
          </p>
        </section>
        <p className="border-t pt-6 text-sm text-muted-foreground">Last updated: January 2026</p>
      </div>
    </>
  );
}
