"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function PayCard() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div
      className={clsx(
        `card aspect-[1.6/1] relative overflow-hidden`,
        show ? "bg-white" : "bg-accent-green"
      )}
      onClick={toggleShow}
    >
      {show ? (
        <div
          className="text-black flex flex-col items-center justify-around w-full gap-2 h-full"
          onClick={toggleShow}
        >
          <div className="flex gap-4">
            <Image
              src="/temp/qr.svg"
              width={250}
              height={250}
              alt="페이 QRcode"
              className="w-fit max-h-24 aspect-square"
            />
            <Image
              src="/temp/barcode.png"
              width={250}
              height={250}
              className="flex-1 max-h-24 aspect-[4/1] rounded-md"
              alt="페이 Barcode"
            />
          </div>
          <div className="flex justify-between w-[200px]">
            <span className="text-bd3 sm:text-bd1">포인트</span>
            <span className="text-t4 sm:text-t3">8106원</span>
          </div>
          <div className="flex items-center justify-between w-[200px]">
            <span className="text-bd3 sm:text-bd1">머니</span>
            <span className="text-t4 sm:text-t3">330원</span>
          </div>
        </div>
      ) : (
        <>
          <Image
            src="/icons/ic.svg"
            width={50}
            height={50}
            alt="카드 IC칩"
            className="h-[15%] w-auto absolute top-1/2 -translate-y-1/2 ml-5 rounded-lg"
          />
          <div className="w-full h-full">
            <Image
              src="/icons/card-logo.svg"
              className="absolute w-[60%] top-16 max-xs:top-10 right-0 "
              width={300}
              height={300}
              alt="카드 로고"
            />
          </div>
        </>
      )}
    </div>
  );
}
