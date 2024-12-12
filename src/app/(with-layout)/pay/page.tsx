import { PATH } from "@/lib/_shared/paths";
import Image from "next/image";
import Link from "next/link";
import EventSliderBanner from "../forest/(components)/event-slider-banner";
import FundingProgress from "./(components)/funding-progress";
import GoCardBenefit from "./(components)/go-card-benefit";
import PayPoint from "./(components)/pay-card";
import PayNotice from "./(components)/pay-notice";

export default async function HomePage() {
  // TODO: 실제 데이터 fetching
  return (
    <div className="flex flex-col gap-5 w-full">
      {/** 알림 */}
      <PayNotice />

      {/** 페이 및 포인트*/}
      {/* <Link
        href={PATH.PAY_ACCOUNTS}
        className="card aspect-[1.6/1] w-full min-h-36 flex p-0 justify-center items-center "
      >
        페이 등록하기 +
      </Link> */}
      <PayPoint />
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
