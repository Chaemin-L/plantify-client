"use client";
import Accordion from "@/app/(_components)/accordion";
import FundingStatus from "@/app/(_components)/funding-status";
import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";
import { useState } from "react";
import ReactDOM from "react-dom";

const dummy = Array(3)
  .fill({
    title: "우리 아이가 다시 일어설 수만 있다면",
    percent: 47,
    targetAmount: 3000000,
    organizationName: "천안시종합사회복지관",
  })
  .map((item, idx) => ({ ...item, id: idx }));

export default function FundingProgress() {
  return (
    <Accordion iconMode={false}>
      <Accordion.Summary>
        <div className="card cursor-pointer ">
          {/* <FundingStatus id="0" percent={58} targetAmount={100000000} /> */}
          <h2 className="card-title select-none">펀딩현황</h2>
        </div>
      </Accordion.Summary>
      <Accordion.Details>
        <div
          className=" bg-shadow-800 rounded-2xl text-center  text-white flex flex-col gap-2 p-4 -mt-3"
          onClick={(e) => e.stopPropagation()}
        >
          {/** TODO: 마이 펀딩 리스트 라우팅 경로로 변경 */}

          <ul className="w-full flex flex-col ">
            {dummy.map((item, idx) => (
              <li
                key={idx}
                className="h-fit w-full hover:bg-shadow-700 p-2 rounded-2xl"
              >
                <FundingItem {...item} />
              </li>
            ))}
          </ul>
          <Link
            href={PATH.FUNDING_MY}
            className=" mx-auto w-fit text-bd2 hover:underline"
          >
            전체보기 &gt;
          </Link>
        </div>
      </Accordion.Details>
    </Accordion>
  );
}

interface Props {
  id: string;
  title: string;
  percent: number;
  targetAmount: number;
  organizationName: string;
}
const FundingItem = (props: Props) => {
  const { id, title, percent, targetAmount, organizationName } = props;

  return (
    <Link href={PATH.FUNDING_MY} className="inline-block p-1 h-fit w-full">
      <FundingStatus
        size="reactive"
        showProgress
        id={id}
        title={title}
        percent={percent}
        targetAmount={targetAmount}
        organizationName={organizationName}
      />
    </Link>
  );
};
