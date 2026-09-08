export const insuranceProviders = [
  { id: "ins-1", name: "Delta Dental", description: "Accepted PPO plans", logoColor: "#005b9f" },
  { id: "ins-2", name: "Cigna", description: "Accepted PPO plans", logoColor: "#e30613" },
  { id: "ins-3", name: "Aetna", description: "Accepted PPO plans", logoColor: "#1c3e8f" },
  { id: "ins-4", name: "MetLife", description: "Accepted PPO plans", logoColor: "#007a3d" },
  { id: "ins-5", name: "Guardian", description: "Accepted PPO plans", logoColor: "#3f6db3" },
  { id: "ins-6", name: "UnitedHealthcare", description: "Accepted PPO plans", logoColor: "#009a44" },
  { id: "ins-7", name: "Humana", description: "Accepted plans", logoColor: "#e4002b" },
  { id: "ins-8", name: "Principal", description: "Accepted plans", logoColor: "#005c8f" },
];

export const paymentMethods = [
  { id: "pm-1", name: "Credit / Debit Cards", description: "Visa, Mastercard, American Express, Discover" },
  { id: "pm-2", name: "Cash", description: "Cash payments accepted at the clinic" },
  { id: "pm-3", name: "CareCredit", description: "Healthcare credit card with flexible financing" },
  { id: "pm-4", name: "Flexible Spending", description: "FSA / HSA eligible for most treatments" },
  { id: "pm-5", name: "Dental Discount Plan", description: "Membership plan with discounted fees for non-insured" },
];

export const financingOptions = [
  {
    id: "fo-1",
    plan: "CareCredit",
    description: "Healthcare credit card with promotional 0% APR options for qualifying applicants.",
    terms: "6 - 24 months",
    apr: "0% for 6-24 months*",
  },
  {
    id: "fo-2",
    plan: "In-House Payment Plan",
    description: "Spread your treatment cost over 3-6 months with no financing fees.",
    terms: "3 - 6 months",
    apr: "0%",
  },
  {
    id: "fo-3",
    plan: "Sunbit",
    description: "Flexible monthly payments with no hidden fees and instant approval.",
    terms: "12 - 36 months",
    apr: "Starting at 14.99%*",
  },
  {
    id: "fo-4",
    plan: "Dental Membership Plan",
    description: "Annual membership with 15-20% discounts on treatments and free cleanings.",
    terms: "1 year",
    apr: "N/A",
  },
];

export const insuranceFaqs = [
  {
    id: "if-1",
    question: "How do I verify my insurance coverage?",
    answer: "Simply call our office or provide your insurance details and we'll verify your benefits for you. Our team will estimate your coverage and out-of-pocket costs before treatment.",
  },
  {
    id: "if-2",
    question: "Do you accept all dental PPO plans?",
    answer: "We accept most major PPO dental insurance plans. While we work with many providers, we recommend contacting us to confirm whether your specific plan is in-network.",
  },
  {
    id: "if-3",
    question: "What if my insurance doesn't cover a treatment?",
    answer: "We'll provide a transparent cost estimate and discuss your options, which may include payment plans, financing, or prioritization of treatments to maximize your benefits.",
  },
  {
    id: "if-4",
    question: "Can I use my insurance and a payment plan together?",
    answer: "Yes. We can apply your insurance benefits toward treatment and finance the remaining balance through one of our flexible payment options.",
  },
  {
    id: "if-5",
    question: "Do you offer discounts for paying in full?",
    answer: "Yes, we offer a 5% discount for patients who pay for their full treatment plan upfront. Ask our front desk for details.",
  },
];
