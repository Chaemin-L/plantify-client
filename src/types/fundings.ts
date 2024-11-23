export const FundingCategory = [
  "all",
  "environment",
  "animal",
  "youth",
] as const;

export type FundingCategoryType = (typeof FundingCategory)[number];
