"use client";
import { useState } from "react";

export default function PointMoney() {
  const [payOn, setPayOn] = useState<boolean>(false);

  const onClick = () => setPayOn(!payOn);

  return (
    <div
      className="card bg-accent-green  flex justify-between cursor-pointer w-full select-none"
      onClick={onClick}
    >
      {payOn ? (
        <div className="text-black flex flex-col items-center w-full gap-4 ">
          <img src="/temp/qr.svg" className="w-24 h-24" />
          <img src="/temp/barcode.svg" className="w-full" />
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
