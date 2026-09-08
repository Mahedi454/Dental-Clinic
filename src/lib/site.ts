export const siteConfig = {
  name: "BrightSmile Dental Clinic",
  shortName: "BrightSmile",
  tagline: "Your Smile Deserves Expert Care",
  description:
    "Modern, compassionate dental care for healthy smiles and confident lives. Expert dentists, advanced technology, and patient-centered care in a comfortable environment.",
  url: "https://brightsmile-dental.example.com",
  logo: "/logo.svg",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  emergencyPhone: "(555) 911-8901",
  emergencyPhoneHref: "tel:+15519118901",
  email: "hello@brightsmiledental.com",
  address: "245 Wellness Avenue, Suite 300, Portland, OR 97201",
  socials: {
    facebook: "https://facebook.com/brightsmiledental",
    instagram: "https://instagram.com/brightsmiledental",
    twitter: "https://twitter.com/brightsmiledental",
    linkedin: "https://linkedin.com/company/brightsmiledental",
    youtube: "https://youtube.com/@brightsmiledental",
  },
  openingHours: {
    monday: "8:00 AM - 7:00 PM",
    tuesday: "8:00 AM - 7:00 PM",
    wednesday: "8:00 AM - 7:00 PM",
    thursday: "8:00 AM - 7:00 PM",
    friday: "8:00 AM - 5:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Closed",
  },
} as const;

export type SiteConfig = typeof siteConfig;
