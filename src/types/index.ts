export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialization: string;
  experienceYears: number;
  qualifications: string[];
  education: string[];
  languages: string[];
  bio: string;
  longBio: string;
  avatar: string;
  image: string;
  specialties: string[];
  services: string[];
  workingHours: string;
  featured?: boolean;
  certifications: string[];
  memberships: string[];
}

export type ServiceCategory =
  | "General Dentistry"
  | "Cosmetic Dentistry"
  | "Orthodontics"
  | "Restorative Dentistry"
  | "Specialized Care"
  | "Pediatric Dentistry";

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: string;
  image: string;
  shortDescription: string;
  description: string;
  startingPrice: number;
  duration: string;
  benefits: string[];
  process: { title: string; description: string }[];
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  treatment: string;
  date: string;
  review: string;
  verified?: boolean;
}

export interface AvailabilitySlot {
  date: string;
  time: string;
  doctorId: string;
  serviceId: string;
}

export interface AppointmentDraft {
  serviceId: string;
  doctorId: string;
  date: string;
  time: string;
  patient: PatientInfo;
}

export interface PatientInfo {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  additionalMessage?: string;
}

export interface Appointment {
  id: string;
  serviceName: string;
  doctorName: string;
  date: string;
  time: string;
  status: "scheduled" | "completed" | "cancelled";
  location: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export interface BeforeAfterItem {
  id: string;
  category: string;
  treatmentName: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: "appointment" | "reminder" | "general";
}
