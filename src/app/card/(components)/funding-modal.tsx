"use client";
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

export default function FundingModal() {
  const [show, setShow] = useState<boolean>(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <div className="card cursor-pointer " onClick={openModal}>
        <FundingStatus id={0} percent={58} targetAmount={100000000} />
      </div>
      {show &&
        ReactDOM.createPortal(
          <div
            className="absolute top-0 z-10 w-full h-full flex justify-center items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            onClick={closeModal}
          >
            <div
              className="max-w-[90%]  bg-shadow-800 rounded-2xl p-4 md:p-6 text-center md:w-[400px] text-white flex flex-col gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/** TODO: 마이 펀딩 리스트 라우팅 경로로 변경 */}
              <Link
                href={PATH.FUNDING_LIST}
                className="self-end text-bd2 hover:underline mb-2"
              >
                전체보기 &gt;
              </Link>
              <ul className="w-full flex flex-col ">
                {dummy.map((item, idx) => (
                  <li
                    key={idx}
                    className="h-fit hover:bg-shadow-700 p-2 rounded-2xl"
                  >
                    <FundingItem {...item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
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
    <Link href={PATH.FUNDING_LIST} className="inline-block p-2 h-fit ">
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
