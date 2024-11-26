export type CategoryType = "BACKGROUND" | "FLOWER" | "ETC";

export interface CashType {
  cashBalance: number;
  accumulatedCash: number;
  redeemedCash: number;
  createdAt: Date;
  updatedAt: Date;
}
