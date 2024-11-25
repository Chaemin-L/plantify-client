import { CategoryType } from "./api/funding";

export const FundingCategory: CategoryType[] = [
  "CHILDREN",
  "ANIMAL",
  "ENVIRONMENT",
  "DISABILITY",
  "GLOBAL",
  "ELDERLY",
] as const;

export type FundingCategoryType = (typeof FundingCategory)[number];

export type ExpandedFundingCategoryType = "ALL" | CategoryType;
