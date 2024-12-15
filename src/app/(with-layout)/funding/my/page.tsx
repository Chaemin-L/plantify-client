"use client";
import { Pageable } from "@/types/api/common";
import { FundingType } from "@/types/api/funding";
import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { youth } from "../(_dummy)/list-data";
import FundingList from "../(components)/funding-list";

export default function MyFundingPage() {
  // TODO: my funding list data fetching
  return (
    <div className="flex flex-col gap-5 pt-2">
      <h1 className="text-t2 ">내 펀딩</h1>
      <FundingList
        listData={youth}
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
