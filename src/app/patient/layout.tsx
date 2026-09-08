import type { Metadata } from "next";
import { PatientLayout } from "./patient-layout";

export const metadata: Metadata = {
  title: "Patient Portal",
  description:
    "Manage your appointments, view treatment history, update your profile, and access your dental records in the BrightSmile Patient Portal.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PatientLayout>{children}</PatientLayout>;
}
