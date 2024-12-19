"use client";
import { dummyMyCardList } from "@/app/intro/(components)/planti-fit";
import Loading from "@/app/loading";
import { PATH } from "@/lib/_shared/paths";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MyCardList from "../card-benefit/(components)/my-card-list";
import EventSliderBanner from "./(components)/event-slider-banner";
import GoCardBenefit from "./(components)/go-card-benefit";
import PaymentNotification from "./(components)/notifications";
import PayNotice from "./(components)/pay-notice";

const PaySection = dynamic(
  () => import("@/app/(with-layout)/pay/pay-section"),
  { ssr: false }
);
const LatestFundingSection = dynamic(
  () => import("@/app/(with-layout)/pay/(components)/latest-funding-section"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col gap-5 w-full">
        <PaymentNotification />
        {/** 알림 */}
        <PayNotice />

        {/** 페이, 포인트 */}
        <PaySection />

        {/** 이벤트 슬라이더 */}
        <EventSliderBanner />

        {/** 최근 펀딩 */}
        <LatestFundingSection />

        {/** 더 큰 혜택 찾기 */}

        <div className="bg-transparent">
          <h2 className="card-title">카드 혜택</h2>
          <Link href={PATH.CARD_BENEFIT} className="space-y-5">
            <MyCardList listData={dummyMyCardList} autoPlay={true} />
            <GoCardBenefit />
          </Link>
        </div>

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
    </Suspense>
  );
}
