import BottomFixedButton from "@/app/(_components)/bottom-fixed-button";
import Link from "next/link";
import { PATH } from "@/lib/_shared/paths";
import Image from "next/image";

const accounts = [
  { id: "hana", name: "하나", accountNum: 1010102030210 },
  { id: "woori", name: "우리", accountNum: 1000023366635 },
];

export default function AccountListPage() {
  return (
    <div className="flex flex-col gap-10 pt-5">
      <h1 className="text-t2">연결 계좌</h1>
      <ul className="flex flex-col ">
        {accounts.map(({ id, name, accountNum }) => (
          <div
            key={accountNum}
            className="flex justify-between hover:bg-shadow-800 p-5 rounded-xl"
          >
            <div className="flex gap-8 items-center">
              <div className="rounded-xl bg-white p-1 w-fit h-fit">
                <Image
                  width={28}
                  height={28}
                  src={`/icons/bank/${id}.svg`}
                  alt={name}
                />
              </div>
              <div className="text-bd1">
                {name}&nbsp;
                {accountNum.toString().slice(-4)}
              </div>
            </div>
            <button className="border rounded-full border-shadow-500 bg-shadow-700 text-white text-bd2 px-4 py-1">
              송금
            </button>
          </div>
        ))}
      </ul>
      <BottomFixedButton>
        <Link href={PATH.CARD_ACCOUNT_ADD} className="w-full block h-full">
          계좌 추가하기
        </Link>
      </BottomFixedButton>
    </div>
  );
}
