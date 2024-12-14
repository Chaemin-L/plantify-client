import { AccountType } from "@/types/api/pay";
import { BankNameType } from "@/types/bank";
import { atomWithReset } from "jotai/utils";

interface AccountAtomType {
  isFirst: boolean; // 최초 계좌를 등록하는 유저인지
  accounts: AccountType[]; // 계좌번호 중복방지를 위한 계좌목록 정보
  bankName: BankNameType;
  accountNum: number;
}

export const accountAtom = atomWithReset<AccountAtomType>({
  isFirst: false,
  accounts: [],
  accountNum: 0,
  bankName: "토스뱅크",
});
