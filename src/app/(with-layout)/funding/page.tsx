import { PATH } from "@/lib/_shared/paths";
import { getFundingList } from "@/services/funding";
import Image from "next/image";
import Link from "next/link";
import AdSliderBanner from "./(components)/ad-slider-banner";
import BestFunding from "./(components)/best-funding";
import FundingSlider from "./(components)/funding-slider";

export default async function FundraisingsPage() {
  const { content: fundingByStartDate } = await getFundingList(0, 7, [
    "donationStartDate",
  ]);
  const { content: fundingByEndDate } = await getFundingList(0, 7, [
    "donationEndDate",
  ]);

  return (
    <div className="flex flex-col gap-5">
      {/** 슬라이더 */}
      <AdSliderBanner />

      {/** 베스트 펀딩 */}
      <BestFunding />

      {/** 최신순 리스트 */}
      <FundingSlider title="최신순" listData={fundingByStartDate} />

      {/** 마감 임박 리스트 */}
      <FundingSlider title="마감순" listData={fundingByEndDate} />

      <Link
        href={PATH.FUNDING_LIST}
        className="mt-5 text-b2 text-center select-none hover:opacity-80 hover:underline"
      >
        전체보기
      </Link>

      <Link
        href={PATH.CHAT}
        className="fixed bottom-4 right-4  bg-shadow-600 rounded-full p-3"
      >
        <Image width={32} height={32} src="/icons/chat.svg" alt="채팅" />
      </Link>
    </div>
  );
}
