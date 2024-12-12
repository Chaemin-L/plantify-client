import { BankNameType } from "@/types/bank";

export default function getBankId(bankName: BankNameType) {
  switch (bankName) {
    case "하나":
      return "hana";
    case "IBK기업":
      return "ibk";
    case "카카오뱅크":
      return "kakao";
    case "국민":
      return "kb";
    case "케이뱅크":
      return "kbank";
    case "농협":
      return "nonghyup";
    case "SC제일":
      return "sc";
    case "신한":
      return "shinhan";
    case "토스뱅크":
      return "toss";
    case "우리":
      return "woori";
    default:
      return null;
  }
}
