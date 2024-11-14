import Progressbar from "@/components/progressbar";
import Link from "next/link";
import Point from "./(components)/point";
import FundingStatus from "@/components/funding-status";

export default function HomePage() {
  // TODO: 실제 데이터 fetching
  return (
    <div className="flex flex-col gap-5">
      {/** 알림 */}
      <div className="card space-y-7">
        <div className="flex justify-between">
          <h1 className="card-title">알림</h1>
          <p className="text-xs">2024.11.04</p>{" "}
        </div>
        <div>
          <div className="flex justify-between items-end">
            <p className="text-sm">
              올리브영에서 <br /> 20,000원 결제하셨어요.
            </p>
            <button className="text-btn1 px-3 py-2 bg-accent-red rounded-full">
              이용내역
            </button>
          </div>
        </div>
      </div>

      {/** 포인트, 머니 */}
      <Point />

      {/** 펀딩 현황 */}
      <div className="card">
        <FundingStatus />
      </div>

      {/** 획득 배지 및 펀딩 */}
      <div className="card flex justify-between gap-[10%]">
        <img src="/illusts/3d-forest.svg" className="w-[50%]" />
        <div className="flex-grow flex flex-col text-left justify-center gap-5">
          <div className="flex flex-col">
            <span className="text-bd3">획득한 배지</span>
            <span className="card-title">3개</span>
          </div>
          <div className="flex flex-col">
            <span className="text-bd3">성공한 펀딩</span>
            <span className="card-title">5개</span>
          </div>
        </div>
      </div>

      {/** 더 큰 혜택 찾기 */}
      <Link
        href="/home"
        className="relative rounded-full bg-[#AB92FA] flex justify-between items-center p-6"
      >
        <h1 className="card-title text-black">더 큰 혜택 찾기</h1>
        <div className="absolute right-2 w-[50px] h-[50px] bg-[#937ED4] rounded-full flex justify-center items-center">
          <img src="/icons/link.svg" />
        </div>
      </Link>

      {/** 카드 추가하기 */}
    </div>
  );
}
