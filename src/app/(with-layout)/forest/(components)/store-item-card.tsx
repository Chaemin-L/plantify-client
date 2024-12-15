"use client";
import { ItemType } from "@/types/api/item";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props extends ItemType {
  onClick: MouseEventHandler;
}
export default function StoreItemCard({ price, imageUri, onClick }: Props) {
  return (
    <button
      className="card space-y-2 md:space-y-4 p-2 hover:opacity-80"
      onClick={onClick}
    >
      <div className="pt-2 px-2">
        <img src={imageUri} className="w-full" />
      </div>
      <div className="rounded-2xl py-2 w-full bg-shadow-700 flex gap-1 md:gap-2 justify-center text-bd2 items-center">
        <Image
          width={16}
          height={16}
          src="/icons/tree-coin.svg"
          alt="트리코인"
          className="w-4 h-4"
        />
        {price}
      </div>
    </button>
  );
}
