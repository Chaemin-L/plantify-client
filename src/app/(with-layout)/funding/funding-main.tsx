import ItemSlider from "@/app/(_components)/item-slider";
import { getFundingList } from "@/hooks/api/useGetFundingList";
import { PATH } from "@/lib/_shared/paths";
import Image from "next/image";
import Link from "next/link";
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
    ["percent", "DESC"],
    token
  );

  return (
    <div className="flex flex-col gap-5 scrollbar-hide">
      {/** 슬라이더 */}
      {/* <AdSliderBanner /> */}
      <Link
        href={PATH.FUNDING_ORGANIZATION}
        className="card w-full h-fit py-full flex items-center justify-between"
      >
        <div className="space-y-1 max-w-[50%]">
          <h1 className=" text-t3">기부사 검색</h1>
          <p className="text-bd3 max-xs:whitespace-pre-wrap">
            기부사에 대해{"\n"}더 깊이 알아보아요
          </p>
        </div>
        <Image
          src="/icons/company.svg"
          width={200}
          height={200}
          className="max-h-40 max-w-[40%] -my-4"
          alt={`기부사 검색 페이지로 이동`}
        />
      </Link>

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
