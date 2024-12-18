"use client";
import FundingStatus from "@/app/(_components)/funding-status";
import { useGetMyFunding } from "@/hooks/api/useGetMyFunding";
import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";
import React from "react";

// const dummy: FundingType[] = [];
// Array(3)
//   .fill({
//     title: "우리 아이가 다시 일어설 수만 있다면",
//     percent: 47,
//     targetAmount: 3000000,
//     organizationName: "천안시종합사회복지관",
//   })
//   .map((item, idx) => ({ ...item, id: idx }));

export default function MyFunding() {
  const { data } = useGetMyFunding(3, ["myFundingId"]);

  const listData =
    data?.pages
      .map((p) => p.content)
      .flat()
      .map((content) => content.funding) ?? [];
  const isEmpty = listData.length === 0;

  return (
    <>
      <div className="flex justify-between px-2">
        <h2 className="card-title select-none">내 펀딩</h2>
        <Link
          href={PATH.FUNDING_MY}
          className=" ml-auto w-fit text-bd2 hover:opacity-80"
        >
          전체보기 &gt;
        </Link>
      </div>
      <div className="card  flex flex-col gap-8">
        <div
          className=" bg-shadow-800 rounded-2xl text-center  text-white flex flex-col gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {/** TODO: 마이 펀딩 리스트 라우팅 경로로 변경 */}
          {isEmpty ? (
            <p className="text-bd2 text-shadow-400">
              진행중인 펀딩이 존재하지 않습니다
            </p>
          ) : (
            <ul className="w-full flex flex-col gap-5 cursor-pointer">
              {listData.map((item, idx) => (
                <li
                  key={idx}
                  className="h-fit w-full hover:bg-shadow-700 rounded-2xl transition-colors "
                >
                  <MemorizedFundingItem {...item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

interface Props {
  fundingId: number;
  title: string;
  percent: number;
  targetAmount: number;
  curAmount: number;
}
const FundingItem = (props: Props) => {
  const { title, percent, targetAmount, curAmount } = props;

  return (
    <Link
      href={PATH.FUNDING_MY}
      className="inline-block p-2 h-fit w-full hover:scale-95 transition-all"
    >
      <FundingStatus
        size="reactive"
        showProgress
        leftTop={title}
        percent={percent}
        leftBottom={`목표 금액: ${targetAmount.toLocaleString()}원`}
        rightBottom={`${curAmount.toLocaleString()}원`}
      />
    </Link>
  );
};

const MemorizedFundingItem = React.memo(FundingItem);
