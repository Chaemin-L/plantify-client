import { BankNameType } from "../bank";

export interface PayType {
  payNum: number;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentType {
  userId: string;
  sellerId: string;
  orderName: string;
}

export interface AccountType {
  accountId: number;
  accountNum: number;
  bankName: BankNameType;
  accountStatus: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  accountHolder: string; // 계좌 주
  createdAt: Date;
  updatedAt: Date;
}
