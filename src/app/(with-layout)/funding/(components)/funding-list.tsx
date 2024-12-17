"use client";
import FundingStatus from "@/app/(_components)/funding-status";
import { useScrollObserver } from "@/hooks/useScrollObserver";
import { PATH } from "@/lib/_shared/paths";
import { Pageable } from "@/types/api/common";
import { CategoryType, FundingType } from "@/types/api/funding";
import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  selectedCategory: CategoryType;
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
  selectedCategory,
  listData,
  fetchNextPage,
  hasNextPage,
}: Props) {
  const { observerRef } = useScrollObserver<FundingType>(
    hasNextPage,
    fetchNextPage
  );

  return (
    <ul className="flex flex-col max-md:gap-3 gap-5 scrollbar-hide">
      {listData.map((data) => (
        <MemorizedFundingItem
          key={data.fundingId}
          selectedCategory={selectedCategory}
          data={data}
        />
      ))}
      {hasNextPage && (
        <li ref={observerRef} className="text-center">
          로딩중...
        </li>
      )}
    </ul>
  );
}

interface ItemProps {
  selectedCategory: CategoryType;
  data: FundingType;
}

const FundingItem = ({ selectedCategory, data }: ItemProps) => {
  const { fundingId, image, title, percent, targetAmount, organizationName } =
    data;
  return (
    <li key={fundingId}>
      <Link
        href={`${PATH.FUNDING_LIST}/${fundingId}`}
        className="flex rounded-xl  bg-shadow-800 h-[106px] md:h-[128px]"
      >
        <Image
          src={image}
          width={100}
          height={100}
          alt="펀딩 이미지"
          loading="lazy"
          className="w-[40%]  rounded-l-xl object-cover"
        />
        <div className="px-5 py-4 w-full h-fit flex justify-between flex-col ">
          <div className=" max-md:mb-1 mb-2 max-md:text-bd4 text-bd2">
            {selectedCategory}
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
  );
};

const MemorizedFundingItem = React.memo(FundingItem);
