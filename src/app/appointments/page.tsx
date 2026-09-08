import type { Metadata } from "next";
import { AppointmentFlow } from "./appointment-flow";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your dental appointment online. Choose your service, dentist, date, and time, then provide your patient information. Fast, easy, and secure.",
};

export default function AppointmentsPage() {
  return <AppointmentFlow />;
}
