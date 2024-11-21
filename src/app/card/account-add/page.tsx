"use client";
import Accordion from "@/app/(_components)/accordion";
import BottomFixedButton from "@/app/(_components)/bottom-fixed-button";
import { bankList } from "@/lib/_shared/bankInfo";
import { PATH } from "@/lib/_shared/paths";
import { BankIdValue } from "@/types/bank";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [selectedBank, setSelectedBank] = useState<BankIdValue>();
  const [bankNum, setBankNum] = useState<string>();
  const [arsCert, setArsCert] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean | null>(null);
  const router = useRouter();

  const handleBankClick = (bank: BankIdValue) => {
    setSelectedBank(bank);
    setOpen(false);
  };

  const handleBankNumType = (e: ChangeEvent<HTMLInputElement>) =>
    setBankNum(e.target.value);

  const validate = () => {
    if (selectedBank && bankNum!.length > 10 && arsCert)
      router.push(PATH.CARD_ACCOUNT_LIST);
  };

  return (
    <div className="pt-5 flex flex-col gap-10">
      <h1 className="text-t2">계좌연결</h1>
      <div className="px-4 flex flex-col gap-5">
        <Accordion defaultValue={open && open !== null}>
          <div className="pr-1 border border-shadow-400 rounded-xl">
            <Accordion.Summary className="p-2 ">
              <h2 className="text-bd1" onClick={() => setOpen(true)}>
                {selectedBank ? selectedBank.name : "은행 선택"}
              </h2>
            </Accordion.Summary>
          </div>
          <Accordion.Details>
            <div className="grid grid-cols-4 gap-5">
              {bankList.map((bank) => (
                <button
                  key={bank.id}
                  className="hover:bg-shadow-800 aspect-square rounded-xl place-content-center select-none"
                  onClick={() => handleBankClick(bank)}
                >
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <div className="bg-white rounded-xl p-2">
                      <Image
                        width={24}
                        height={24}
                        alt="로고"
                        src={`/icons/bank/${bank.id}.svg`}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="text-bd1 font-bold text-center">
                      {bank.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Accordion.Details>
        </Accordion>
        <input
          type="number"
          placeholder="계좌번호 입력"
          className="w-full bg-transparent focus:outline-0"
          value={bankNum}
          onChange={handleBankNumType}
        />
        {bankNum && bankNum.length > 10 && (
          <button
            className="bg-accent-red disabled:opacity-50 rounded-xl py-2 transition-all "
            onClick={() => {
              setArsCert(true);
            }}
            disabled={arsCert}
          >
            ARS 인증
          </button>
        )}
      </div>
      <BottomFixedButton onClick={validate}>연결하기</BottomFixedButton>
    </div>
  );
}
