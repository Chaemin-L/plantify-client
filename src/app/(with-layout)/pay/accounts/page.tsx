"use client";
import BottomFixedButton, {
  Button,
} from "@/app/(_components)/bottom-fixed-button";
import BottomSheet from "@/app/(_components)/bottom-sheet";
import Loading from "@/app/loading";
import { useGetAccounts } from "@/hooks/api/useGetAccounts";
import { PATH } from "@/lib/_shared/paths";
import getBankId from "@/utils/getBankName";
import Image from "next/image";
import Link from "next/link";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";

// const accounts: AccountType[] = [
//   {
//     accountId: 123,
//     bankName: "하나",
//     accountNum: 1010102030210,
//     accountStatus: "ACTIVE",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     accountHolder: "이채민",
//   },
//   {
//     accountId: 2322,
//     bankName: "우리",
//     accountNum: 1000023366635,
//     accountStatus: "ACTIVE",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     accountHolder: "이채민",
//   },
// ];

const pay = 12230;

const chargeUnits: number[] = [1, 2, 5];
const firstZero = /(^0+)/;

export default function AccountListPage() {
  const [charge, setCharge] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setCharge("");
  }, [isOpen]);

  const { data: accounts, isLoading } = useGetAccounts();

  if (isLoading) return <Loading />;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setCharge(e.target.value.replace(firstZero, ""));

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  return (
    <div className="flex flex-col gap-10 pt-5">
      <h1 className="text-t2">연결 계좌</h1>
      <ul className="flex flex-col ">
        {accounts?.length === 0 && (
          <div className="text-center text-shadow-500">
            등록된 계좌가 없습니다
          </div>
        )}
        {accounts?.map(({ bankName, accountNum }) => (
          <div
            key={accountNum}
            className="flex justify-between hover:bg-shadow-800 p-5 rounded-xl"
          >
            <div className="flex gap-8 items-center">
              <div className="rounded-xl bg-white p-1 w-fit h-fit">
                <Image
                  width={28}
                  height={28}
                  src={`/icons/bank/${getBankId(bankName)}.svg`}
                  alt={bankName}
                />
              </div>
              <div className="text-bd1">
                {bankName}&nbsp;
                {accountNum.toString().slice(-4)}
              </div>
            </div>
            <button
              className="border rounded-full border-shadow-500 bg-shadow-700 text-white text-bd2 px-4 py-1"
              onClick={() => setOpen(true)}
            >
              충전
            </button>
          </div>
        ))}
      </ul>
      <BottomFixedButton>
        <Link href={PATH.PAY_ACCOUNTS_ADD} className="w-full block h-full">
          계좌 추가하기
        </Link>
      </BottomFixedButton>
      <BottomSheet isOpen={isOpen} setOpen={setOpen} snapPoints={[300, 500]}>
        <form className="h-full flex flex-col justify-between">
          <label htmlFor="charge_amount" className="text-t3">
            충전 금액
          </label>
          <div className="flex gap-2 items-center ">
            <input
              id="charge_amount"
              type="number"
              className="flex-1 outline-0 text-bd1 bg-transparent border-b border-shadow-600 focus:border-accent-green text-center tracking-wide"
              value={charge}
              onChange={handleChange}
              inputMode="numeric"
              onKeyDown={handleKeyDown}
            />
            <span>만원</span>
          </div>
          <div className="text-right text-shadow-600 text-bd3 md:text-bd2">
            거래 후 잔액: {(pay + Number(charge) * 10000).toLocaleString()}원
          </div>
          <ul className="flex gap-2 justify-end">
            {chargeUnits.map((unit) => (
              <li key={unit} className="flex gap-2 items-center">
                <button
                  type="button"
                  className="border rounded-full border-shadow-500 bg-shadow-700 text-white text-bd2 px-2 py-0.5 active:bg-shadow-800"
                  onClick={() =>
                    setCharge((prev: string) =>
                      (Number(prev) + unit).toString()
                    )
                  }
                >
                  +{unit}만
                </button>
              </li>
            ))}
          </ul>
          <Button>확인</Button>
        </form>
      </BottomSheet>
    </div>
  );
}
