"use client";
import Loading from "@/app/loading";
import { PATH } from "@/lib/_shared/paths";
import { GetMyCardRes } from "@/types/api/card";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MyCardList from "../card-benefit/(components)/my-card-list";
import EventSliderBanner from "./(components)/event-slider-banner";
import GoCardBenefit from "./(components)/go-card-benefit";
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
            <MyCardList listData={listData} autoPlay={true} />
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

const listData: GetMyCardRes = [
  {
    card: {
      card_name: "현대",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "BC 바로 리워드 플러스",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2347/card_img/32524/2347card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "토스 신용카드",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/589/card_img/21346/589card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "카카오뱅크 개인사업자 삼성카드",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2420/card_img/28101/2420card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "모니모A",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2631/card_img/31783/2631card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "컬리카드",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2518/card_img/28798/2518card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "T우주 신한카드",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2302/card_img/23140/2302card.png",
      benefit_point: 10,
    },
  },
].map((data, idx) => {
  return { ...data, card_id: idx, myCard_id: idx };
});
