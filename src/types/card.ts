export const Benefit = [
  "all",
  "traffic",
  "communication",
  "abroad",
  "oiling",
  "mart",
  "shopping",
  "cafe",
] as const;

export type BenefitType = (typeof Benefit)[number];
