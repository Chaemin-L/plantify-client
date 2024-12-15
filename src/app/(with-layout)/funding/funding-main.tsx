import ItemSlider from "@/app/(_components)/item-slider";
import { PATH } from "@/lib/_shared/paths";
import { getFundingList } from "@/services/funding";
import Image from "next/image";
import Link from "next/link";
import AdSliderBanner from "./(components)/ad-slider-banner";
import BestFunding from "./(components)/best-funding";
import MyFunding from "./(components)/my-funding";

interface Props {
  token: string;
}

export default async function FundingMain({ token }: Props) {
  const { content: fundingByEndDate } = await getFundingList(
    0,
    7,
    ["donationEndDate"],
    token
  );

  const { content: fundingByPercent } = await getFundingList(
    0,
    8,
    ["percent", "desc"],
    token
  );

  return (
    <div className="flex flex-col gap-5">
      {/** 슬라이더 */}
      <AdSliderBanner />

      {/** 베스트 펀딩 */}
      <BestFunding data={fundingByPercent[0]} />

      {/** 펀딩 현황 */}
      <MyFunding />

      {/** 마감순 펀딩 리스트 */}
      <ItemSlider title="마감순" items={fundingByEndDate} />

      {/** 인기순(percent) 펀딩 리스트 */}
      <ItemSlider title="인기순" items={fundingByPercent.slice(1)} />

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
