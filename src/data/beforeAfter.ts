import type { BeforeAfterItem } from "@/types";

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "ba-1",
    category: "Whitening",
    treatmentName: "Professional Teeth Whitening",
    description: "In-office whitening brightened this patient's smile by 6 shades in a single visit.",
    beforeImage: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&h=700&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&h=700&fit=crop&sat=100",
  },
  {
    id: "ba-2",
    category: "Veneers",
    treatmentName: "Porcelain Veneers (Front 6)",
    description: "Six porcelain veneers corrected chips, spaces, and discoloration for a flawless smile.",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=700&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=700&fit=crop&sat=100",
  },
  {
    id: "ba-3",
    category: "Braces",
    treatmentName: "Orthodontic Straightening",
    description: "18 months of braces corrected crowding and achieved excellent alignment and bite.",
    beforeImage: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=900&h=700&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=900&h=700&fit=crop&sat=100",
  },
  {
    id: "ba-4",
    category: "Implants",
    treatmentName: "Single Dental Implant",
    description: "A dental implant restored this patient's missing molar with a natural-looking crown.",
    beforeImage: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=900&h=700&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=900&h=700&fit=crop&sat=100",
  },
  {
    id: "ba-5",
    category: "Smile Makeover",
    treatmentName: "Complete Smile Transformation",
    description: "A full smile makeover combining whitening and bonding transformed this patient's smile.",
    beforeImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=700&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=700&fit=crop&sat=100",
  },
  {
    id: "ba-6",
    category: "Veneers",
    treatmentName: "Cosmetic Veneers Enhancement",
    description: "Veneers changed the shape and color of these teeth for a refined, natural look.",
    beforeImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&h=700&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&h=700&fit=crop&sat=100",
  },
  {
    id: "ba-7",
    category: "Whitening",
    treatmentName: "Stain Removal & Whitening",
    description: "Professional whitening removed years of coffee and tea stains for a brighter smile.",
    beforeImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&h=700&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&h=700&fit=crop&sat=100",
  },
  {
    id: "ba-8",
    category: "Braces",
    treatmentName: "Invisalign Clear Alignment",
    description: "Discreet Invisalign treatment closed gaps and aligned this patient's smile in 14 months.",
    beforeImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&h=700&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&h=700&fit=crop&sat=100",
  },
];

export const beforeAfterCategories = [
  "All",
  "Whitening",
  "Veneers",
  "Braces",
  "Implants",
  "Smile Makeover",
] as const;

export function getBeforeAfterByCategory(category: string): BeforeAfterItem[] {
  if (category === "All") return beforeAfterItems;
  return beforeAfterItems.filter((item) => item.category === category);
}
