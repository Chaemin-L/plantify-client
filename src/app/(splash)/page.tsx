"use client";
import { PATH } from "@/lib/_shared/paths";
import { MONEYGRAPHY } from "@/styles/fonts/fonts";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  setTimeout(() => {
    router.replace(PATH.INTRO);
  }, 1500);

  return (
    <div
      className={`flex justify-center items-center h-full ${MONEYGRAPHY.variable} ${MONEYGRAPHY.className}`}
    >
      <div className="text-[36px] font-bold animate-[fadeIn_1s] select-none flex justify-center items-center">
        <span>PLANT</span>
        <img src="/icons/logo.svg" className="inline w-8 h-8 -mx-0.5" />
        <span> FY</span>
      </div>
    </div>
  );
}
