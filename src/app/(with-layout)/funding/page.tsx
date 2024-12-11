import { PATH } from "@/lib/_shared/paths";
import Image from "next/image";
import Link from "next/link";
import AdSliderBanner from "./(components)/ad-slider-banner";
import BestFunding from "./(components)/best-funding";
import LatestFunding from "./(components)/latest-funding";

export default function FundraisingsPage() {
  // TODO: data fetch
  return (
    <div className="flex flex-col gap-5">
      {/** 슬라이더 */}
      <AdSliderBanner />

      {/** 베스트 펀딩 */}
      <BestFunding />

      {/** 펀딩 리스트 */}
      <LatestFunding />

      <Link
        href={PATH.CHAT}
        className="fixed bottom-4 right-4  bg-shadow-600 rounded-full p-3"
      >
        <Image width={32} height={32} src="/icons/chat.svg" alt="채팅" />
      </Link>
    </div>
  );
}
