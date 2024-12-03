export const Benefit = [
  "all",
  "traffic",
  "communication",
  "travel",
  "oiling",
  "mart",
  "shopping",
  "cafe",
  "culture",
  "hospital",
  "finance",
  "etc",
] as const;

export type BenefitType = (typeof Benefit)[number];
