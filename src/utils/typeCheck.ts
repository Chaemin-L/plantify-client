import { Benefit, BenefitType } from "@/types/card";
import { ItemCategory, ItemCategoryType } from "@/types/forest";
import { FundingCategory, FundingCategoryType } from "@/types/funding";
import {
  PaymentCategory,
  PaymentCategoryType,
  PaymentSorting,
  PaymentSortingType,
} from "@/types/pay";

/** Payments */
export const isPaymentCategoryType = (x: unknown): x is PaymentCategoryType =>
  typeof x === "string" && PaymentCategory.includes(x as PaymentCategoryType);

export const isPaymentSortingType = (x: unknown): x is PaymentSortingType =>
  typeof x === "string" && PaymentSorting.includes(x as PaymentSortingType);

/** Benefit */
export const isBenefitType = (x: unknown): x is BenefitType =>
  typeof x === "string" && Benefit.includes(x as BenefitType);

/** Funding */
export const isFundingCategoryType = (x: unknown): x is FundingCategoryType =>
  typeof x === "string" &&
  [...FundingCategory, "ALL"].includes(x as FundingCategoryType);

/** Forest */
export const isItemCategoryType = (x: unknown): x is ItemCategoryType =>
  typeof x === "string" && ItemCategory.includes(x as ItemCategoryType);
