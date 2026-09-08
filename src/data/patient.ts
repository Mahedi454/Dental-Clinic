import type { Appointment, Notification } from "@/types";

export const patientProfile = {
  fullName: "Jordan Smith",
  email: "jordan.smith@example.com",
  phone: "(555) 987-6543",
  dateOfBirth: "1988-06-15",
  address: "482 Maple Street, Apt 5B, Portland, OR 97201",
  emergencyContact: "Alex Smith — (555) 234-5678",
  allergies: "None known",
  medications: ["Vitamin D3"],
  preferences: {
    emailReminders: true,
    smsReminders: true,
    newsletter: false,
  },
  additionalNotes: "Prefers morning appointments when possible.",
  paymentMethod: "Visa •••• 4210",
};

export const patientAppointments: Appointment[] = [
  {
    id: "apt-1001",
    serviceName: "Teeth Cleaning",
    doctorName: "Dr. Emily Thompson",
    date: "2026-09-15",
    time: "10:00 AM",
    status: "scheduled",
    location: "BrightSmile Dental - Main Clinic",
  },
  {
    id: "apt-1002",
    serviceName: "Teeth Whitening",
    doctorName: "Dr. Sarah Mitchell",
    date: "2026-08-10",
    time: "2:00 PM",
    status: "completed",
    location: "BrightSmile Dental - Main Clinic",
  },
  {
    id: "apt-1003",
    serviceName: "General Dentistry",
    doctorName: "Dr. Emily Thompson",
    date: "2026-06-18",
    time: "11:00 AM",
    status: "completed",
    location: "BrightSmile Dental - Main Clinic",
  },
  {
    id: "apt-1005",
    serviceName: "Teeth Cleaning",
    doctorName: "Dr. Emily Thompson",
    date: "2026-03-02",
    time: "9:30 AM",
    status: "completed",
    location: "BrightSmile Dental - Main Clinic",
  },
];

export const treatmentHistory = [
  {
    id: "th-1",
    treatment: "Teeth Whitening",
    date: "August 2026",
    dentist: "Dr. Sarah Mitchell",
    notes: "Professional in-office whitening. Results maintained well with take-home touch-ups.",
    status: "completed",
  },
  {
    id: "th-2",
    treatment: "Composite Filling (Tooth 24)",
    date: "June 2026",
    dentist: "Dr. Emily Thompson",
    notes: "Tooth-colored filling placed on the occlusal surface. No complications.",
    status: "completed",
  },
  {
    id: "th-3",
    treatment: "Comprehensive Cleaning & Exam",
    date: "March 2026",
    dentist: "Dr. Emily Thompson",
    notes: "Routine cleaning and exam. Gums healthy, low caries risk identified.",
    status: "completed",
  },
  {
    id: "th-4",
    treatment: "Sealants (2 molars)",
    date: "December 2025",
    dentist: "Dr. Emily Thompson",
    notes: "Preventive sealants placed on posterior molars.",
    status: "completed",
  },
];

export const patientNotifications: Notification[] = [
  {
    id: "n-1",
    type: "reminder",
    title: "Appointment Reminder",
    message: "Your teeth cleaning appointment with Dr. Thompson is scheduled for September 15 at 10:00 AM.",
    date: "2026-09-10",
    read: false,
  },
  {
    id: "n-2",
    type: "general",
    title: "Welcome to Your Patient Portal",
    message: "You can now view your appointments, treatment history, and profile all in one place.",
    date: "2026-09-01",
    read: false,
  },
  {
    id: "n-3",
    type: "appointment",
    title: "Appointment Confirmed",
    message: "Your teeth cleaning appointment on September 15 was confirmed.",
    date: "2026-08-28",
    read: true,
  },
];

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}
