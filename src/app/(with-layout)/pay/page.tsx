"use client";
import ItemSlider from "@/app/(_components)/item-slider";
import PayCard from "@/app/(_components)/pay-card";
import { PointMoney } from "@/app/(_components)/point-money";
import Loading from "@/app/loading";
import { useGetFundingList } from "@/hooks/api/useGetFundingList";
import { useGetPay } from "@/hooks/api/useGetPay";
import { useGetPoints } from "@/hooks/api/useGetPoints";
import { PATH } from "@/lib/_shared/paths";
import Image from "next/image";
import Link from "next/link";
import EventSliderBanner from "../forest/(components)/event-slider-banner";
import GoCardBenefit from "./(components)/go-card-benefit";
import PayNotice from "./(components)/pay-notice";

export default async function HomePage() {
  const { data: pay, isLoading: payFetching } = useGetPay();
  const { data: points, isLoading: pointsFetching } = useGetPoints();
  const { data: latestFunding, isLoading: fundingFetching } = useGetFundingList(
    7,
    ["donationStartDate"]
  );

  if (payFetching || pointsFetching || fundingFetching) return <Loading />;

  return (
    <div className="flex flex-col gap-5 w-full">
      {/** 알림 */}
      <PayNotice />

      {/** 페이 및 포인트*/}
      <PayCard pay={pay!} points={points!} />
      <PointMoney
        hasPay={pay !== null}
        total={(pay?.balance ?? 0) + (points?.pointBalance ?? 0)}
      />

      {/** 이벤트 슬라이더 */}
      <EventSliderBanner />

      {/** 최신순 리스트 */}
      <ItemSlider title="최근 펀딩" items={latestFunding?.pages[0].content!} />

      {/** 더 큰 혜택 찾기 */}
      <GoCardBenefit />

      {/** 획득 배지 및 펀딩 */}
      {/* <BadgeStatus /> */}

      {/** 카드 추가하기 */}
      {/* <Wallet /> */}

      <Link
        href={PATH.CHAT}
        className="fixed bottom-4 right-4  bg-shadow-600 rounded-full p-3 z-30"
      >
        <Image width={32} height={32} src="/icons/chat.svg" alt="채팅" />
      </Link>
    </div>
  );
}
