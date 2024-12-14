"use client";
import PayCard from "@/app/(_components)/pay-card";
import Loading from "@/app/loading";
import { useGetPay } from "@/hooks/api/useGetPay";
import { PATH } from "@/lib/_shared/paths";
import Image from "next/image";
import Link from "next/link";
import EventSliderBanner from "../forest/(components)/event-slider-banner";
import FundingProgress from "./(components)/funding-progress";
import GoCardBenefit from "./(components)/go-card-benefit";
import PayNotice from "./(components)/pay-notice";

export default async function HomePage() {
  const { data: pay, isLoading } = useGetPay();

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-5 w-full">
      {/** 알림 */}
      <PayNotice />

      {/** 페이 및 포인트*/}
      <PayCard pay={pay!} />
      <EventSliderBanner />

      {/** 펀딩 현황 */}
      <FundingProgress />

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
