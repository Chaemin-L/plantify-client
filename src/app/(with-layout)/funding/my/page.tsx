"use client";
import { useGetMyFunding } from "@/hooks/api/useGetMyFunding";
import { Pageable } from "@/types/api/common";
import { FundingType } from "@/types/api/funding";
import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import FundingList from "../(components)/funding-list";

export default function MyFundingPage() {
  const { data } = useGetMyFunding(15, ["myFundingId"]);

  const listData =
    data?.pages
      .map((p) => p.content)
      .flat()
      .map((content) => content.funding) ?? [];
  const isEmpty = listData.length === 0;

  return (
    <div className="flex flex-col gap-5 pt-2">
      <h1 className="text-t2 ">내 펀딩</h1>
      {isEmpty && (
        <div className="text-center p-2 fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <p className="text-bd2 text-shadow-400">
            진행중인 펀딩이 존재하지 않습니다
          </p>
        </div>
      )}
      <FundingList
        listData={listData}
        selectedCategory={"CHILDREN"}
        fetchNextPage={function (): Promise<
          InfiniteQueryObserverResult<
            InfiniteData<Pageable<FundingType>, unknown>,
            Error
          >
        > {
          throw new Error("Function not implemented.");
        }}
        hasNextPage={false}
      />
    </div>
  );
}
