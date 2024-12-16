export const PaymentCategory = ["ALL", "PAYMENT", "CHARGE"] as const;
export const PaymentSorting = ["createdAt", "amount"] as const;

export type PaymentCategoryType = (typeof PaymentCategory)[number];
export type PaymentSortingType = (typeof PaymentSorting)[number];
