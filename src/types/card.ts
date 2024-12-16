export const Benefit = [
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

export type BenefitCategory =
  | "traffic"
  | "communication"
  | "travel"
  | "oiling"
  | "mart"
  | "shopping"
  | "cafe"
  | "culture"
  | "hospital"
  | "finance"
  | "etc";

export type BenefitType = (typeof Benefit)[number];
