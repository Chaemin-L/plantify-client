import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

export default function GoCardBenefit() {
  return (
    <Link
      href={PATH.CARD_BENEFIT}
      className="relative rounded-full bg-[#AB92FA] flex justify-between items-center p-6"
    >
      <h1 className="card-title text-black">어디서 결제하실 예정인가요?</h1>
      <div className="absolute right-2 w-[50px] h-[50px] bg-[#937ED4] rounded-full flex justify-center items-center">
        <img src="/icons/link.svg" />
      </div>
    </Link>
  );
}
