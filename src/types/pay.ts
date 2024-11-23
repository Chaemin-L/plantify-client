export const PaymentCategory = ["all", "pay", "add"] as const;
export const PaymentSorting = ["latest", "desc"] as const;

export type PaymentCategoryType = (typeof PaymentCategory)[number];
export type PaymentSortingType = (typeof PaymentSorting)[number];
