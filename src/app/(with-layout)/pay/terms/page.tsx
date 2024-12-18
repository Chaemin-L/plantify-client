"use client";
import BottomFixedButton from "@/app/(_components)/bottom-fixed-button";
import { SelectItemType } from "@/app/(_components)/select";
import { usePostAccount } from "@/hooks/api/usePostAccount";
import { usePostPay } from "@/hooks/api/usePostPay";
import { PATH } from "@/lib/_shared/paths";
import { accountAtom } from "@/stores/atoms/accountAtom";
import { useAtomValue } from "jotai";
import { useResetAtom } from "jotai/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const terms: SelectItemType<string>[] = [
  {
    label: "오픈뱅킹 출금 이체 동의",
    value:
      "https://www.notion.so/0123suh/Plantify-dd4ed7aaca484705bc615fd61ab90128",
  },
  {
    label: "개인정보 수집 및 이용 동의",
    value:
      "https://www.notion.so/0123suh/Plantify-dd4ed7aaca484705bc615fd61ab90128",
  },
  {
    label: "개인정보 제3자 제공 동의",
    value:
      "https://www.notion.so/0123suh/Plantify-dd4ed7aaca484705bc615fd61ab90128",
  },
];

export default function Page() {
  const account = useAtomValue(accountAtom);
  const resetAccount = useResetAtom(accountAtom);
  const { mutate: createPay } = usePostPay();
  const { mutate: addAccount } = usePostAccount();

  const handleOnClick = () => {
    const { isFirst, ...rest } = account;
    if (isFirst) createPay(rest);
    else addAccount(rest);

    resetAccount();
    redirect(PATH.HOME);
  };

  useEffect(() => {
    if (!account.isFirst && account.accounts.length === 0) {
      redirect(PATH.PAY_ACCOUNTS);
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-5 ">
      <h1 className="text-t2 whitespace-pre py-2">
        계좌 연결을 위해{"\n"}약관에 동의해주세요
      </h1>
      <ul className="flex flex-col gap-3 text-bd1 text-shadow-400">
        {terms.map(({ label, value }) => (
          <li key={label} className="py-2">
            <Link href={value} className="flex justify-between">
              <span>{label}</span>
              <span>&gt;</span>
            </Link>
          </li>
        ))}
      </ul>
      <BottomFixedButton onClick={handleOnClick}>
        동의하고 계속하기
      </BottomFixedButton>
    </div>
  );
}
