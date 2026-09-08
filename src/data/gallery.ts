import type { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  { id: "g-1", src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop", alt: "Modern dental treatment room with chair", category: "Clinic", title: "Treatment Room", description: "Our state-of-the-art treatment rooms feature ergonomic chairs and advanced equipment." },
  { id: "g-2", src: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&h=600&fit=crop", alt: "Dental tools and instruments", category: "Equipment", title: "Precision Instruments", description: "Surgical-grade instruments sterilized to the highest standards." },
  { id: "g-3", src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=600&fit=crop", alt: "Smiling dental patient", category: "Treatment", title: "Happy Patients", description: "Real smiles from patients who trusted us with their care." },
  { id: "g-4", src: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&h=600&fit=crop", alt: "Dental team in clinic", category: "Team", title: "Our Care Team", description: "Dedicated professionals committed to your comfort and care." },
  { id: "g-5", src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop", alt: "Dental hygienist cleaning patient teeth", category: "Treatment", title: "Gentle Cleanings", description: "Comfortable, thorough professional cleanings for every patient." },
  { id: "g-6", src: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&h=600&fit=crop", alt: "Dental implant model", category: "Equipment", title: "Implant Technology", description: "Advanced implant solutions using 3D guided placement." },
  { id: "g-7", src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop", alt: "Pediatric dental office", category: "Clinic", title: "Kids' Corner", description: "A fun, welcoming space designed just for our younger patients." },
  { id: "g-8", src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop", alt: "Female dentist portrait", category: "Team", title: "Meet the Dentists", description: "Experienced specialists in every field of dentistry." },
  { id: "g-9", src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop", alt: "Bright modern dental office reception", category: "Clinic", title: "Welcome Area", description: "Warm and inviting reception designed for your comfort." },
  { id: "g-10", src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop", alt: "Dental x-ray machine", category: "Equipment", title: "Digital Radiography", description: "Low-radiation digital X-rays for precise diagnosis." },
  { id: "g-11", src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=600&fit=crop", alt: "Female doctor smiling", category: "Team", title: "Doctor Rodriguez", description: "Our child-friendly pediatric dentist." },
  { id: "g-12", src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop", alt: "Bright white teeth smile closeup", category: "Treatment", title: "Brighter Smiles", description: "Results from our cosmetic whitening treatments." },
];

export const galleryCategories = [
  "All",
  "Clinic",
  "Treatment",
  "Team",
  "Equipment",
] as const;
