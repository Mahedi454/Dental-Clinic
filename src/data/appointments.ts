import type { AvailabilitySlot, Appointment, AppointmentDraft } from "@/types";
import { addDays, format } from "date-fns";
import { doctors } from "./doctors";
import { services } from "./services";

const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

function getNextDays(count: number): string[] {
  const days: string[] = [];
  for (let i = 1; i <= count; i++) {
    const date = addDays(new Date(), i);
    const day = format(date, "EEEE");
    if (day !== "Sunday") {
      days.push(format(date, "yyyy-MM-dd"));
    }
  }
  return days;
}

export const availableDays: string[] = getNextDays(14);

export function getAvailableSlots(serviceId: string, doctorId: string, date: string): string[] {
  if (!serviceId || !doctorId || !date) return [];
  const hash = `${serviceId}-${doctorId}-${date}`;
  const first = hash.charCodeAt(0) + hash.charCodeAt(hash.length - 1);
  if (first % 5 === 0) return [];
  const slice = times.filter((_, i) => (i + first) % 3 !== 0);
  return slice;
}

export function generateMockSlots(): AvailabilitySlot[] {
  const slots: AvailabilitySlot[] = [];
  availableDays.forEach((date) => {
    doctors.forEach((doctor) => {
      services.slice(0, 4).forEach((service) => {
        getAvailableSlots(service.id, doctor.id, date).forEach((time) => {
          slots.push({ date, time, doctorId: doctor.id, serviceId: service.id });
        });
      });
    });
  });
  return slots;
}

export const mockAppointments: Appointment[] = [
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
    id: "apt-1004",
    serviceName: "Teeth Cleaning",
    doctorName: "Dr. Emily Thompson",
    date: "2026-04-05",
    time: "3:00 PM",
    status: "cancelled",
    location: "BrightSmile Dental - Main Clinic",
  },
];

export function createNewAppointment(draft: AppointmentDraft): Appointment {
  const service = services.find((s) => s.id === draft.serviceId);
  const doctor = doctors.find((d) => d.id === draft.doctorId);
  return {
    id: `apt-${Math.floor(1000 + Math.random() * 9000)}`,
    serviceName: service?.name ?? "Dental Appointment",
    doctorName: doctor?.name ?? "Dentist",
    date: draft.date,
    time: draft.time,
    status: "scheduled",
    location: "BrightSmile Dental - Main Clinic",
  };
}
