import { BankNameType } from "../bank";

export interface PayType {
  payNum: number;
  balance: number;
  createdAt?: Date;
  updatedAt?: Date;
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

export interface PointType {
  userId?: number;
  pointBalance: number;
  accumulatedPoints?: number;
  redeemedPoints?: number;
}

export interface CreateAccountReq {
  accountNum: number;
  bankName: BankNameType;
}

export interface PostChargePayReq {
  accountId: number;
  balance: number;
}
