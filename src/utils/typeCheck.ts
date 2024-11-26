import { BenefitType, Benefit } from "@/types/card";
import { ItemCategory, ItemCategoryType } from "@/types/forest";
import { FundingCategoryType, FundingCategory } from "@/types/funding";
import {
  PaymentCategoryType,
  PaymentCategory,
  PaymentSortingType,
  PaymentSorting,
} from "@/types/pay";

/** Payments */
export const isPaymentCategoryType = (x: any): x is PaymentCategoryType =>
  PaymentCategory.includes(x);

export const isPaymentSortingType = (x: any): x is PaymentSortingType =>
  PaymentSorting.includes(x);

/** Benefit */
export const isBenefitType = (x: any): x is BenefitType => Benefit.includes(x);

/** Funding */
export const isFundingCategoryType = (x: any): x is FundingCategoryType =>
  [...FundingCategory, "ALL"].includes(x);

/** Forest */
export const isItemCategoryType = (x: any): x is ItemCategoryType =>
  ItemCategory.includes(x);
