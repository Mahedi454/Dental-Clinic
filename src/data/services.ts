import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    slug: "general-dentistry",
    name: "General Dentistry",
    category: "General Dentistry",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
    shortDescription:
      "Comprehensive checkups, cleanings, and preventive care to keep your smile healthy and catch issues early.",
    description:
      "General dentistry is the foundation of good oral health. Our general dentistry services provide comprehensive checkups, professional cleanings, and preventive care designed to keep your teeth and gums healthy. Regular visits allow our dentists to detect potential issues early when they're easier to treat and more affordable.",
    startingPrice: 89,
    duration: "30-60 min",
    benefits: [
      "Early detection of dental problems",
      "Prevention of cavities and gum disease",
      "Comprehensive oral exams",
      "Professional plaque and tartar removal",
      "Personalized oral health advice",
      "Digital X-rays with minimal radiation",
    ],
    process: [
      { title: "Comprehensive Exam", description: "A thorough examination of your teeth, gums, and mouth, including digital X-rays." },
      { title: "Professional Cleaning", description: "Gentle scaling and polishing to remove plaque, tartar, and surface stains." },
      { title: "Personalized Plan", description: "A customized treatment plan based on your specific oral health needs." },
      { title: "Ongoing Prevention", description: "Regular reminders and guidance to help you maintain optimal oral health." },
    ],
    whatToExpect: [
      "A friendly welcome and comfortable setting",
      "A thorough digital X-ray exam if needed",
      "Professional cleaning and polish",
      "Personalized oral hygiene guidance",
      "A clear plan for any follow-up care",
    ],
    faqs: [
      { question: "How often should I visit the dentist?", answer: "We recommend every six months for most patients. However, those with gum disease or other conditions may need more frequent visits." },
      { question: "Does a dental cleaning hurt?", answer: "Most patients find cleanings comfortable. If you have sensitive teeth or gums, we can use numbing gel and gentle techniques." },
      { question: "What should I bring to my first appointment?", answer: "Bring your ID, insurance information (if any), and a list of any medications you're taking. Arrive 15 minutes early to complete new patient paperwork." },
    ],
    featured: true,
  },
  {
    id: "svc-2",
    slug: "teeth-cleaning",
    name: "Teeth Cleaning",
    category: "General Dentistry",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
    shortDescription:
      "Professional cleaning that removes plaque, tartar, and stains for a fresher, brighter smile.",
    description:
      "Professional teeth cleaning is the cornerstone of preventive dental care. Using specialized instruments, our hygienists gently remove plaque and tartar that regular brushing can't reach. This not only keeps your smile looking its best but also helps prevent cavities, gum disease, and bad breath.",
    startingPrice: 99,
    duration: "45-60 min",
    benefits: [
      "Removes hardened plaque and tartar",
      "Prevents gum disease and cavities",
      "Brightens and polishes teeth",
      "Freshens breath",
      "Improves overall oral health",
      "Screens for early signs of problems",
    ],
    process: [
      { title: "Assessment", description: "Your hygienist assesses your gum health and checks for any problem areas." },
      { title: "Scaling", description: "Ultrasonic and hand instruments gently remove plaque and tartar." },
      { title: "Polishing", description: "A high-gloss polish removes surface stains and leaves teeth smooth." },
      { title: "Fluoride (Optional)", description: "A fluoride treatment strengthens teeth and prevents decay." },
    ],
    whatToExpect: [
      "Comfortable, gentle cleaning experience",
      "Slight sensitivity is normal afterwards",
      "Your teeth will feel noticeably smoother and fresher",
      "Personalized brushing and flossing tips",
    ],
    faqs: [
      { question: "How long does a cleaning take?", answer: "A standard cleaning takes about 45 to 60 minutes, depending on the condition of your teeth and gums." },
      { question: "Should I clean my teeth before the appointment?", answer: "No, please don't over-brush. We want to see your normal home routine and thoroughly clean everything during the visit." },
      { question: "Is teeth cleaning covered by insurance?", answer: "Most dental insurance plans cover routine cleanings at 100%. Our team will help you verify your coverage." },
    ],
    featured: true,
    popular: true,
  },
  {
    id: "svc-3",
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    icon: "Sun",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop",
    shortDescription:
      "Professional whitening treatments that brighten your smile by several shades in a single visit.",
    description:
      "Our professional teeth whitening treatments deliver dramatic results safely and effectively. Using advanced whitening technology and enamel-safe formulations, we can brighten your smile by several shades in a single office visit or with convenient take-home kits. Say goodbye to coffee, tea, and wine stains.",
    startingPrice: 249,
    duration: "60-90 min",
    benefits: [
      "Brightens teeth up to 8 shades",
      "Safe, enamel-friendly formulations",
      "Results in a single visit",
      "Lasts 6-12 months with proper care",
      "Boosts confidence and self-esteem",
      "Custom take-home kits available",
    ],
    process: [
      { title: "Consultation", description: "A quick exam to ensure your teeth and gums are healthy enough for whitening." },
      { title: "Protection", description: "Your gums are protected with a barrier before any whitening agent is applied." },
      { title: "Whitening Application", description: "A professional-grade whitening gel is applied and activated." },
      { title: "Final Polish", description: "Your teeth are polished to reveal a brighter, more vibrant smile." },
    ],
    whatToExpect: [
      "Immediate, visible results",
      "Mild temporary sensitivity is common",
      "Avoid dark foods and drinks for 48 hours",
      "Results can be maintained with touch-ups",
    ],
    faqs: [
      { question: "Is teeth whitening safe?", answer: "Yes, when performed by a professional, whitening is very safe. We use enamel-safe formulas and protect your gums throughout treatment." },
      { question: "How long do results last?", answer: "Results typically last 6 to 12 months, but this depends on your diet and oral care habits. Touch-ups can help maintain your smile." },
      { question: "Will whitening work on crowns or veneers?", answer: "Whitening only works on natural teeth. If you have crowns or veneers, we can discuss alternatives to match their color." },
    ],
    featured: true,
  },
  {
    id: "svc-4",
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative Dentistry",
    icon: "Anchor",
    image: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&h=600&fit=crop",
    shortDescription:
      "Permanent, natural-looking tooth replacement that restores function and confidence.",
    description:
      "Dental implants are the gold standard for replacing missing teeth. A titanium post is surgically placed in the jaw to act as a replacement root, topped with a natural-looking crown. Implants look, feel, and function like natural teeth, providing a permanent solution that preserves jaw structure and restores chewing power.",
    startingPrice: 1899,
    duration: "2-6 months (multiple visits)",
    benefits: [
      "Looks and functions like natural teeth",
      "Permanent, long-lasting solution",
      "Preserves jawbone and facial structure",
      "No damage to adjacent teeth",
      "Restores chewing and speaking ability",
      "98%+ long-term success rate",
    ],
    process: [
      { title: "Consultation & Planning", description: "A comprehensive exam with 3D imaging to plan your implant placement." },
      { title: "Implant Placement", description: "The titanium implant is surgically placed in your jaw under local anesthesia." },
      { title: "Healing & Integration", description: "The implant integrates with your jawbone over several weeks to months." },
      { title: "Crown Placement", description: "A custom crown is attached, completing your new smile." },
    ],
    whatToExpect: [
      "Local anesthesia ensures a comfortable procedure",
      "Temporary restoration may be provided",
      "Healing typically takes 2-6 months",
      "Full aftercare and follow-up visits included",
    ],
    faqs: [
      { question: "Am I a candidate for dental implants?", answer: "Most people with healthy gums and adequate bone density are candidates. We'll evaluate your case with a 3D scan during a consultation." },
      { question: "Are implants painful?", answer: "Placement is done under local anesthesia, so you won't feel pain during the procedure. Most patients report only mild discomfort for a few days after." },
      { question: "How long do implants last?", answer: "With proper care and regular dental visits, implants can last 20+ years, often a lifetime. They're the most durable tooth replacement option available." },
    ],
    featured: true,
    popular: true,
  },
  {
    id: "svc-5",
    slug: "root-canal",
    name: "Root Canal",
    category: "General Dentistry",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
    shortDescription:
      "Pain-free root canal treatment that saves infected teeth and relieves discomfort.",
    description:
      "Root canal therapy is a modern, virtually painless procedure that saves teeth with infected or damaged pulp. By removing the infected tissue, cleaning the canals, and sealing the tooth, we eliminate pain, prevent spread of infection, and preserve your natural tooth.",
    startingPrice: 749,
    duration: "60-90 min",
    benefits: [
      "Saves your natural tooth",
      "Relieves severe tooth pain",
      "Prevents infection from spreading",
      "Modern, virtually painless technique",
      "Restores chewing function",
      "More affordable than extraction + implant",
    ],
    process: [
      { title: "Diagnosis", description: "Digital X-rays identify the extent of infection and tooth damage." },
      { title: "Anesthesia", description: "Local anesthesia ensures complete comfort throughout the procedure." },
      { title: "Cleaning the Canals", description: "The infected pulp is removed and canals are thoroughly cleaned." },
      { title: "Sealing & Restoration", description: "Canals are sealed and a crown is placed to protect the tooth." },
    ],
    whatToExpect: [
      "Completely comfortable with local anesthesia",
      "Slight soreness for a few days",
      "A crown is usually placed in a follow-up visit",
      "The tooth will look and function normally",
    ],
    faqs: [
      { question: "Is a root canal painful?", answer: "With modern anesthesia and techniques, root canals feel very similar to a deep filling. Most patients report little to no pain." },
      { question: "How long does a root canal take?", answer: "Most root canals can be completed in one to two appointments of about 60-90 minutes each." },
      { question: "Do I need a crown after a root canal?", answer: "In most cases, yes. A crown protects the restored tooth from fracture and restores its full function." },
    ],
    featured: true,
  },
  {
    id: "svc-6",
    slug: "braces",
    name: "Braces",
    category: "Orthodontics",
    icon: "AlignCenter",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=800&h=600&fit=crop",
    shortDescription:
      "Traditional braces that straighten teeth and correct bite issues for a healthier smile.",
    description:
      "Traditional braces are a proven, highly effective way to straighten teeth and correct bite issues. Modern braces are smaller, more comfortable, and more efficient than ever. They can correct crowded teeth, gaps, overbites, underbites, and other alignment problems in children, teens, and adults.",
    startingPrice: 1499,
    duration: "18-30 months",
    benefits: [
      "Corrects a wide range of alignment issues",
      "Improves bite and chewing function",
      "Enhances facial appearance",
      "Prevents tooth wear and damage",
      "Good for all ages",
      "Customized for each patient",
    ],
    process: [
      { title: "Consultation", description: "A full orthodontic exam including X-rays and digital scans." },
      { title: "Treatment Planning", description: "A personalized treatment plan with a timeline and cost estimate." },
      { title: "Bonding & Placement", description: "Brackets are bonded and archwires are placed." },
      { title: "Regular Adjustments", description: "Monthly visits to adjust wires and monitor progress." },
      { title: "Retention", description: "Once teeth are straight, a retainer maintains the results." },
    ],
    whatToExpect: [
      "Initial soreness for a few days after adjustments",
      "Some dietary restrictions (avoid sticky foods)",
      "Regular adjustment visits every 4-8 weeks",
      "Excellent long-term results with retainers",
    ],
    faqs: [
      { question: "How long will I need braces?", answer: "Most patients wear braces for 18-30 months, depending on the complexity of their alignment issues." },
      { question: "Can adults get braces?", answer: "Absolutely. Adult orthodontics has become very popular, and modern braces are discreet and comfortable." },
      { question: "Do braces hurt?", answer: "You may feel some pressure or soreness after placement and adjustments, but it's manageable and temporary." },
    ],
    featured: true,
  },
  {
    id: "svc-7",
    slug: "veneers",
    name: "Veneers",
    category: "Cosmetic Dentistry",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop",
    shortDescription:
      "Ultra-thin porcelain shells that transform the shape, color, and size of your teeth.",
    description:
      "Porcelain veneers are ultra-thin, custom-made shells bonded to the front of teeth to improve their appearance. They can correct discoloration, chips, gaps, minor misalignment, and oddly shaped teeth. Veneers are a popular choice for a dramatic yet natural-looking smile transformation.",
    startingPrice: 1099,
    duration: "2-3 visits",
    benefits: [
      "Transform the appearance of your smile",
      "Look remarkably natural",
      "Stain-resistant surface",
      "Solutions for chips, gaps, and discoloration",
      "Long-lasting (10-15 years with care)",
      "Minimal tooth preparation required",
    ],
    process: [
      { title: "Consultation", description: "Design your ideal smile and determine if veneers are right for you." },
      { title: "Tooth Preparation", description: "A thin layer of enamel is removed from the front of teeth." },
      { title: "Custom Fabrication", description: "Your veneers are hand-crafted to match your natural teeth perfectly." },
      { title: "Bonding", description: "The veneers are bonded to your teeth for a durable, beautiful result." },
    ],
    whatToExpect: [
      "Slight tooth sensitivity after preparation",
      "Results are immediately visible",
      "Temporary veneers may be worn",
      "Your smile will look dramatically improved",
    ],
    faqs: [
      { question: "How long do veneers last?", answer: "Porcelain veneers typically last 10-15 years or longer with proper care. Avoid biting hard objects to prevent damage." },
      { question: "Are veneers permanent?", answer: "Veneers are a permanent cosmetic treatment, as a thin layer of enamel is removed from your natural teeth during preparation." },
      { question: "How much do veneers cost?", answer: "The cost depends on the number of veneers and complexity of your case. We provide transparent pricing during your consultation." },
    ],
    featured: true,
  },
  {
    id: "svc-8",
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    category: "Pediatric Dentistry",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
    shortDescription:
      "Gentle, fun dental care designed specifically for children of all ages.",
    description:
      "Our pediatric dentistry focuses on the oral health of children from infancy through the teenage years. Dr. Rodriguez and her team have created a warm, child-friendly environment where little ones feel safe and even excited to visit the dentist. We provide everything from the first dental visit to preventive care and gentle treatment.",
    startingPrice: 79,
    duration: "30-45 min",
    benefits: [
      "Child-friendly, welcoming environment",
      "Gentle, caring pediatric specialists",
      "Preventive care and education",
      "Age-appropriate treatment approach",
      "Helps kids build positive dental habits",
      "Parents welcome in treatment rooms",
    ],
    process: [
      { title: "Meet & Greet", description: "A friendly introduction to help your child feel comfortable and safe." },
      { title: "Gentle Exam", description: "A thorough but gentle examination of teeth, gums, and bite development." },
      { title: "Preventive Care", description: "Cleanings, fluoride treatments, and sealants as needed." },
      { title: "Parent Guidance", description: "Practical tips for home care and dietary habits that protect children's teeth." },
    ],
    whatToExpect: [
      "A colorful, fun, and welcoming environment",
      "Gentle, patient care from our pediatric team",
      "Clear explanation of each step for kids and parents",
      "Age-appropriate preventive care",
    ],
    faqs: [
      { question: "When should my child first see the dentist?", answer: "We recommend scheduling your child's first visit by age 1 or within 6 months of their first tooth appearing." },
      { question: "How can I prepare my child for the dentist?", answer: "Talk positively about the visit, read dental-themed books, and avoid negative words like 'pain' or 'drill.' We'll make it fun!" },
      { question: "Are baby teeth important?", answer: "Absolutely. Baby teeth hold space for permanent teeth, guide their growth, and are essential for speech and chewing." },
    ],
    featured: true,
    popular: true,
  },
  {
    id: "svc-9",
    slug: "invisalign",
    name: "Invisalign & Clear Aligners",
    category: "Orthodontics",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    shortDescription:
      "Discreet, removable clear aligners that straighten teeth without traditional braces.",
    description:
      "Invisalign uses a series of custom-made, clear, removable aligners to gradually straighten your teeth. Nearly invisible, they let you straighten your smile discreetly without the look of traditional braces. Aligners are removed for eating, brushing, and flossing, making oral hygiene simple.",
    startingPrice: 1999,
    duration: "6-18 months",
    benefits: [
      "Nearly invisible while straightening",
      "Removable for eating and cleaning",
      "More comfortable than traditional braces",
      "Fewer dental visits required",
      "Ideal for mild to moderate misalignment",
      "Easier to maintain oral hygiene",
    ],
    process: [
      { title: "Consultation", description: "Meet with Dr. Chen to see if Invisalign is right for you." },
      { title: "3D Scanning", description: "Digital scans create a precise 3D model of your teeth." },
      { title: "Custom Aligners", description: "A series of clear aligners is custom-made for your treatment." },
      { title: "Wear & Progress", description: "Wear each aligner for 1-2 weeks, changing them as directed." },
    ],
    whatToExpect: [
      "Wear aligners 20-22 hours per day",
      "Remove for eating, brushing, and flossing",
      "Mild pressure is normal as teeth shift",
      "Progress checks every 6-8 weeks",
    ],
    faqs: [
      { question: "How long does Invisalign treatment take?", answer: "Most courses take 6 to 18 months, depending on the complexity of your alignment issues." },
      { question: "Is Invisalign painful?", answer: "You'll feel mild pressure when switching to a new aligner, but it's generally more comfortable than traditional braces." },
      { question: "Can Invisalign fix severe misalignment?", answer: "Invisalign handles mild to moderate cases well. For severe issues, traditional braces may be recommended." },
    ],
    featured: true,
  },
  {
    id: "svc-10",
    slug: "smile-makeover",
    name: "Smile Makeover",
    category: "Cosmetic Dentistry",
    icon: "Smile",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
    shortDescription:
      "A complete, personalized transformation combining multiple cosmetic treatments.",
    description:
      "A smile makeover is a comprehensive, personalized plan that combines multiple cosmetic treatments to transform your smile. Dr. Mitchell works with you to design the smile you've always wanted, combining treatments like veneers, whitening, and bonding for a complete, natural-looking transformation.",
    startingPrice: 2499,
    duration: "2-4 weeks (multiple visits)",
    benefits: [
      "Fully personalized treatment plan",
      "Combines multiple cosmetic procedures",
      "Dramatic, lasting results",
      "Digital smile preview before treatment",
      "Expertly designed for natural aesthetics",
      "Boosted confidence and self-esteem",
    ],
    process: [
      { title: "Smile Consultation", description: "A detailed consultation to understand your goals and assess your smile." },
      { title: "Digital Design", description: "Using digital imaging, we design your ideal smile." },
      { title: "Treatment Sequence", description: "A combination of whitening, veneers, bonding, or other treatments." },
      { title: "Reveal", description: "Your beautiful new smile is revealed — polished and perfected." },
    ],
    whatToExpect: [
      "Comprehensive consultation and planning",
      "Digital preview of your new smile",
      "Treatment is completed over several visits",
      "Follow-up care to maintain results",
    ],
    faqs: [
      { question: "What does a smile makeover include?", answer: "It varies by patient but often combines whitening, veneers, bonding, orthodontics, or implants for a complete smile transformation." },
      { question: "How much does a smile makeover cost?", answer: "Costs vary widely based on the treatments included. We provide a transparent, itemized plan during your consultation." },
      { question: "Will a smile makeover look natural?", answer: "Yes. Our focus is on creating a smile that enhances your natural features while looking completely natural." },
    ],
    featured: false,
  },
  {
    id: "svc-11",
    slug: "dental-crowns",
    name: "Dental Crowns & Bridges",
    category: "Restorative Dentistry",
    icon: "HardHat",
    image: "https://images.unsplash.com/photo-1588776811113-ef4db7a240e8?w=800&h=600&fit=crop",
    shortDescription:
      "Strong, natural-looking crowns and bridges that restore damaged or missing teeth.",
    description:
      "Dental crowns and bridges restore the function and appearance of damaged or missing teeth. Crowns are custom caps placed over damaged teeth to restore their shape, size, and strength. Bridges literally bridge the gap created by missing teeth, keeping adjacent teeth properly aligned.",
    startingPrice: 899,
    duration: "2 visits",
    benefits: [
      "Restores damaged or missing teeth",
      "Natural-looking porcelain options",
      "Strong and durable materials",
      "Prevents shifting of adjacent teeth",
      "Restores full chewing function",
      "Protects weakened teeth from further damage",
    ],
    process: [
      { title: "Examination", description: "Assessment of the tooth and digital imaging." },
      { title: "Preparation", description: "The tooth is prepared and impressions are taken." },
      { title: "Custom Restoration", description: "Your crown or bridge is custom-crafted in the lab." },
      { title: "Final Placement", description: "Your permanent crown or bridge is cemented in place." },
    ],
    whatToExpect: [
      "A temporary restoration while your permanent one is made",
      "Two visits about 1-2 weeks apart",
      "Natural-looking completion",
      "Immediate restoration of function",
    ],
    faqs: [
      { question: "How long do crowns last?", answer: "With proper care, crowns typically last 10-15 years or longer. Good oral hygiene extends their lifespan." },
      { question: "Is the procedure painful?", answer: "The tooth is numbed, so you won't feel discomfort. Some sensitivity is normal for a few days after placement." },
      { question: "What material is best for crowns?", answer: "Porcelain crowns offer the most natural appearance, while zirconia provides exceptional strength. We'll recommend the best option for your case." },
    ],
    featured: false,
  },
  {
    id: "svc-12",
    slug: "periodontal-treatment",
    name: "Periodontal (Gum) Treatment",
    category: "Specialized Care",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
    shortDescription:
      "Expert treatment for gum disease to protect your teeth and overall health.",
    description:
      "Periodontal disease affects the gums and supporting structures of the teeth. Left untreated, it can lead to tooth loss and has been linked to serious health conditions. Our periodontist provides comprehensive treatment for gum disease, from non-surgical scaling and root planing to advanced laser therapy.",
    startingPrice: 349,
    duration: "Varies by treatment",
    benefits: [
      "Stops the progression of gum disease",
      "Prevents tooth and bone loss",
      "Advanced LANAP laser therapy available",
      "Reduces gum inflammation and bleeding",
      "Improves overall health",
      "Fresher breath and healthier gums",
    ],
    process: [
      { title: "Comprehensive Exam", description: "Gum probing, X-rays, and assessment of periodontal health." },
      { title: "Deep Cleaning", description: "Scaling and root planning to remove tartar below the gumline." },
      { title: "Advanced Treatments", description: "Laser therapy or surgical treatments if needed." },
      { title: "Maintenance", description: "Regular maintenance visits to keep gum disease in check." },
    ],
    whatToExpect: [
      "Deep cleaning done under local anesthesia",
      "Some sensitivity for a few days",
      "Improved gum health over several weeks",
      "Personalized home care guidance",
    ],
    faqs: [
      { question: "What are the signs of gum disease?", answer: "Red, swollen, or bleeding gums, persistent bad breath, receding gums, and loose teeth can all be signs of gum disease." },
      { question: "Is gum disease treatment painful?", answer: "With local anesthesia and modern techniques, treatment is generally comfortable. Some soreness may follow deep cleaning." },
      { question: "Can gum disease be cured?", answer: "While there's no cure, gum disease can be effectively managed with proper treatment and maintenance to prevent progression." },
    ],
    featured: false,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getPopularServices(): Service[] {
  return services.filter((s) => s.popular);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category);
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return services
    .filter((s) => s.slug !== slug && s.category === service.category)
    .concat(services.filter((s) => s.slug !== slug && s.category !== service.category))
    .slice(0, limit);
}

export const serviceCategories = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Restorative Dentistry",
  "Specialized Care",
  "Pediatric Dentistry",
] as const;
