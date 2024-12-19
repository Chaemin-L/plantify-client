"use client";
import Accordion from "@/app/(_components)/accordion";
import BottomFixedButton from "@/app/(_components)/bottom-fixed-button";
import { useGetAccounts } from "@/hooks/api/useGetAccounts";
import { bankList } from "@/lib/_shared/bankInfo";
import { PATH } from "@/lib/_shared/paths";
import { accountAtom } from "@/stores/atoms/accountAtom";
import { BankIdValue } from "@/types/bank";
import clsx from "clsx";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function Page() {
  const [selectedBank, setSelectedBank] = useState<BankIdValue>();
  const [accountNum, setAccountNum] = useState<string>("");
  const [arsCert, setArsCert] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean | null>(null);
  const error = useRef<boolean>(false);
  const [account, setAccount] = useAtom(accountAtom);

  const { data: accounts } = useGetAccounts();

  const router = useRouter();

  useEffect(() => {
    const { accountNum, bankName } = account;
    setAccount({
      ...account,
      isFirst: accounts?.length === 0,
      accounts: accounts ?? [],
    });

    if (accountNum) {
      setAccountNum(accountNum.toString());
      setSelectedBank(bankList.find((bank) => bank.name === bankName));
      setArsCert(true);
    }
  }, []);

  useEffect(() => {
    if (selectedBank && account.bankName !== selectedBank.name)
      setArsCert(false);
  }, [selectedBank]);

  const handleBankClick = (bank: BankIdValue) => {
    setSelectedBank(bank);
    setOpen(false);
  };

  const handleBankNumType = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountNum(e.target.value);
    handleDupCheck(e.target.value);
  };

  const handleDupCheck = (bankNum: string) => {
    const isDup = !!account.accounts.filter(
      (acc) => acc.accountNum == parseInt(bankNum)
    ).length;
    if (isDup) {
      error.current = true;
      setArsCert(false);
    } else error.current = false;
  };

  const nextStep = () => {
    if (!error.current && accountNum.length > 10) {
      setAccount({
        ...account,
        bankName: selectedBank!.name,
        accountNum: parseInt(accountNum),
      });
      router.push(PATH.PAY_TERMS);
    }
  };

  return (
    <div className="pt-5 flex flex-col gap-8">
      <h1 className="text-t2">계좌연결</h1>
      <div className="px-4 flex flex-col gap-5">
        <div>
          <div
            className={clsx(
              !error.current && "invisible",
              "h-4 text-xs text-accent-red mb-1"
            )}
          >
            이미 등록된 계좌입니다
          </div>

          <Accordion defaultValue={open && open !== null}>
            <div className="pr-1 border border-shadow-400 rounded-xl">
              <Accordion.Summary className="p-2 ">
                <h2
                  className="text-bd1 select-none"
                  onClick={() => setOpen(true)}
                >
                  {selectedBank ? selectedBank.name : "은행 선택"}
                </h2>
              </Accordion.Summary>
            </div>
            <Accordion.Details>
              <div className="grid grid-cols-4 gap-2 mt-3">
                {bankList.map((bank) => (
                  <button
                    key={bank.id}
                    className="hover:bg-shadow-800 p-2 aspect-square rounded-xl flex justify-center items-center select-none"
                    onClick={() => handleBankClick(bank)}
                  >
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <div className="bg-white rounded-xl p-2">
                        <Image
                          width={24}
                          height={24}
                          alt="로고"
                          src={`/icons/bank/${bank.id}.svg`}
                          className="w-8 h-8"
                        />
                      </div>
                      <div className="text-bd4 xs:text-bd3 sm:text-bd1 font-bold text-center">
                        {bank.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Accordion.Details>
          </Accordion>
        </div>
        <input
          type="number"
          placeholder="계좌번호 입력"
          className="w-full bg-transparent focus:outline-0"
          value={accountNum}
          onChange={handleBankNumType}
        />
        {!error.current && selectedBank && accountNum.length > 10 && (
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
      <BottomFixedButton
        onClick={nextStep}
        disabled={!selectedBank || !arsCert}
      >
        연결하기
      </BottomFixedButton>
    </div>
  );
}
