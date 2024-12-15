"use client";
import FundingStatus from "@/app/(_components)/funding-status";
import { PATH } from "@/lib/_shared/paths";
import { Pageable } from "@/types/api/common";
import { CategoryType, FundingType } from "@/types/api/funding";
import getCategoryName from "@/utils/getCategoryName";
import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Props {
  category: CategoryType;
  listData: FundingType[];
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<Pageable<FundingType>, unknown>,
      Error
    >
  >;
  hasNextPage: boolean;
}

// TODO: 스크롤/페이지네이션 -> client component로 변경 예정
export default function FundingList({
  category,
  listData,
  fetchNextPage,
  hasNextPage,
}: Props) {
  const observerRef = useRef(null);
  useEffect(() => {
    console.log(hasNextPage);
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <ul className="flex flex-col max-md:gap-3 gap-5">
      {listData.map(
        ({
          fundingId,
          image,
          title,
          percent,
          targetAmount,
          organizationName,
        }) => (
          <li key={fundingId}>
            <Link
              href={`${PATH.FUNDING_LIST}/${fundingId}`}
              className="flex rounded-xl  bg-shadow-800 h-[106px] md:h-[128px]"
            >
              <img src={image} className="w-[40%]  rounded-l-xl object-cover" />
              <div className="px-5 py-4 w-full h-fit flex justify-between flex-col ">
                <div className=" max-md:mb-1 mb-2 max-md:text-bd4 text-bd2">
                  {getCategoryName(category)}
                </div>

                <div className="flex flex-col max-md:gap-3 md:gap-4 flex-1">
                  <div className="flex gap-2 items-center">
                    <h2 className="max-md:text-bd3 font-bold line-clamp-1 text-bd2 ">
                      {title}
                    </h2>
                  </div>
                  <FundingStatus
                    size="sm"
                    percent={percent}
                    targetAmount={targetAmount}
                    rightBottom={<span>{organizationName}</span>}
                  />
                </div>
              </div>
            </Link>
          </li>
        )
      )}
      {hasNextPage && <li ref={observerRef}>Loading...</li>}
    </ul>
  );
}
