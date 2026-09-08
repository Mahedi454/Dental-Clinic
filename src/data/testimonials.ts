import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Jennifer Alvarez",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "Teeth Whitening",
    date: "August 2026",
    review:
      "I've been wanting to whiten my teeth for years but was always nervous. Dr. Mitchell and her team made the entire process so comfortable. The results were incredible — my teeth are several shades brighter and look completely natural. I can't stop smiling!",
    verified: true,
  },
  {
    id: "t-2",
    name: "Robert Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "Dental Implants",
    date: "July 2026",
    review:
      "After losing a tooth in an accident, I was worried about how implants would feel. Dr. Okafor explained everything thoroughly and the procedure was virtually painless. My implant looks and feels like my natural tooth. I'm so grateful for their care.",
    verified: true,
  },
  {
    id: "t-3",
    name: "Maria Santos",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "Braces",
    date: "June 2026",
    review:
      "My daughter was terrified of getting braces, but Dr. Chen made her feel so at ease. He explained everything in a way she could understand and made the whole experience fun. Her smile is now perfect and she actually looks forward to her appointments!",
    verified: true,
  },
  {
    id: "t-4",
    name: "Thomas Wright",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "Root Canal",
    date: "June 2026",
    review:
      "I was dreading a root canal, but I had nothing to worry about. Dr. Thompson was incredibly gentle and I felt absolutely no pain during the procedure. The whole thing was over before I knew it. I'm so relieved and grateful.",
    verified: true,
  },
  {
    id: "t-5",
    name: "Sophia Nguyen",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "Veneers",
    date: "May 2026",
    review:
      "Getting veneers with Dr. Mitchell was the best decision I've ever made for my smile. She listened to exactly what I wanted and the results are stunning yet completely natural. The office is beautiful and everyone is so kind. Highly recommend!",
    verified: true,
  },
  {
    id: "t-6",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces",
    rating: 4,
    treatment: "Teeth Cleaning",
    date: "May 2026",
    review:
      "I've been coming to BrightSmile for regular cleanings for three years now. The hygienists are thorough and gentle, and the scheduling is always easy. My gums have never been healthier. The whole team really cares about their patients.",
    verified: false,
  },
  {
    id: "t-7",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "Pediatric Dentistry",
    date: "April 2026",
    review:
      "Dr. Rodriguez is a miracle worker with kids! My 4-year-old used to cry at the thought of the dentist, but now she asks when we can go back. The office is so kid-friendly and the staff are incredibly patient. Couldn't ask for better care.",
    verified: true,
  },
  {
    id: "t-8",
    name: "Michael Johnson",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "Invisalign",
    date: "April 2026",
    review:
      "I straightened my teeth with Invisalign in my 40s and I'm so glad I did. Dr. Chen made the whole process easy, and my new smile has given me so much more confidence at work. The clear aligners were barely noticeable. Best investment in myself!",
    verified: true,
  },
  {
    id: "t-9",
    name: "Linda Park",
    avatar: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "Smile Makeover",
    date: "March 2026",
    review:
      "My smile makeover completely changed my life. Dr. Mitchell designed a beautiful smile that looks so natural — people can't tell it's not what I was born with. She exceeded all my expectations. The digital preview before treatment really helped me visualize it.",
    verified: true,
  },
  {
    id: "t-10",
    name: "James Anderson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
    rating: 4,
    treatment: "Wisdom Teeth Removal",
    date: "March 2026",
    review:
      "I had all four wisdom teeth removed by Dr. Okafor and the recovery was much easier than I expected. He was clear about what to expect and the team checked in on me after the surgery. Great experience overall.",
    verified: false,
  },
  {
    id: "t-11",
    name: "Olivia Martina",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "General Dentistry",
    date: "February 2026",
    review:
      "I finally found a dental office I actually like going to! The front desk is friendly, the appointments run on time, and the dentists take time to explain everything. They never push unnecessary treatments. I've recommended them to all my friends.",
    verified: true,
  },
  {
    id: "t-12",
    name: "Carlos Mejia",
    avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    treatment: "Periodontal Treatment",
    date: "February 2026",
    review:
      "After years of struggling with gum disease, Dr. Patel's laser treatment made a huge difference. My gums no longer bleed and my breath is fresher. He saved my teeth when other dentists said I might lose them. Forever grateful.",
    verified: true,
  },
];

export function getTestimonialAverage(): number {
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return Math.round((total / testimonials.length) * 10) / 10;
}

export function getTestimonialCount(): number {
  return testimonials.length;
}

export function getRatingBreakdown(): Record<number, number> {
  const breakdown: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  testimonials.forEach((t) => {
    breakdown[t.rating] = (breakdown[t.rating] || 0) + 1;
  });
  return breakdown;
}
