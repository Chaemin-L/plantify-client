export type BankType =
  | "hana"
  | "ibk"
  | "kakao"
  | "kb"
  | "kbank"
  | "nonghyup"
  | "sc"
  | "shinhan"
  | "toss"
  | "woori";

export type BankNameType =
  | "하나"
  | "IBK기업"
  | "카카오뱅크"
  | "국민"
  | "케이뱅크"
  | "농협"
  | "SC제일"
  | "신한"
  | "토스뱅크"
  | "우리";

export type BankIdValue = {
  id: BankType;
  name: BankNameType;
};
