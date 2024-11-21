"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PATH } from "@/lib/_shared/paths";

export default function PointMoney() {
  const [payOn, setPayOn] = useState<boolean>(false);

  const onClick = () => setPayOn(!payOn);

  return (
    <div
      className="card bg-accent-green  flex justify-between cursor-pointer select-none w-full relative"
      onClick={onClick}
    >
      {payOn ? (
        <div className="text-black flex flex-col items-center w-full gap-4 p-1">
          <Link href={PATH.CARD_ACCOUNT_LIST}>
            <Image
              src="/icons/plus.svg"
              width={28}
              height={28}
              alt="설정"
              className="absolute right-4 top-4"
              onClick={(e) => e.stopPropagation()}
            />
          </Link>
          <Image
            src="/temp/qr.svg"
            width={250}
            height={250}
            alt="페이 QRcode"
            className="aspect-square  max-w-32"
          />
          <Image
            src="/temp/barcode.svg"
            width={250}
            height={250}
            className="min-w-full"
            alt="페이 Barcode"
          />
          <div className="flex justify-between w-[200px]">
            <span className="text-bd3">포인트</span>
            <span className="text-t4">8106원</span>
          </div>
          <div className="flex justify-between w-[200px]">
            <span className="text-bd3">머니</span>
            <span className="text-t4">330원</span>
          </div>
          <div className="text-bd4 text-left w-full">*최대 1.5% 적립</div>
        </div>
      ) : (
        <>
          <h1 className="card-title text-black">포인트 ・머니</h1>
          <span className="card-title text-black">8,436원</span>
        </>
      )}
    </div>
  );
}
