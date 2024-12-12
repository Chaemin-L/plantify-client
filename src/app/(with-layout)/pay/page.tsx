import { PATH } from "@/lib/_shared/paths";
import Image from "next/image";
import Link from "next/link";
import BadgeStatus from "./(components)/badge-status";
import FundingProgress from "./(components)/funding-progress";
import GoCardBenefit from "./(components)/go-card-benefit";
import PayNotice from "./(components)/pay-notice";
import PointMoney from "./(components)/point-money";

export default async function HomePage() {
  // const { balance } = await getPay();
  const balance = 1000;

  // TODO: 실제 데이터 fetching
  return (
    <div className="flex flex-col gap-5 w-full">
      {/** 알림 */}
      <PayNotice />

      {/** 페이 */}
      <Link
        href={PATH.PAY_ACCOUNTS}
        className="card aspect-[1.6/1] w-full min-h-36 flex p-0 justify-center items-center "
      >
        페이 등록하기 +
      </Link>
      {/* <PayCard balance={balance} /> */}

      {/** 포인트, 머니 */}
      <PointMoney />

      {/** 펀딩 현황 */}
      <FundingProgress />

      {/** 획득 배지 및 펀딩 */}
      <BadgeStatus />

      {/** 더 큰 혜택 찾기 */}
      <GoCardBenefit />

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
