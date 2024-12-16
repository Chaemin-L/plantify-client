"use client";
import { useScrollObserver } from "@/hooks/useScrollObserver";
import { Pageable } from "@/types/api/common";
import { PaymentsType } from "@/types/api/pay";
import { PaymentCategoryType } from "@/types/pay";
import {
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import PaymentsItem from "./payments-item";

export type OrderByType = "latest" | "amount";

interface Props {
  listData: PaymentsType[];
  hasNextPage: boolean;
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<Pageable<PaymentsType>, unknown>,
      Error
    >
  >;
}

export default function PaymentsList({
  listData,
  hasNextPage,
  fetchNextPage,
}: Props) {
  const [selectedItem] = useState<PaymentCategoryType>("ALL");
  const [, setOrderBy] = useState<OrderByType>("latest");

  const { observerRef } = useScrollObserver<PaymentsType>(
    hasNextPage,
    fetchNextPage
  );

  const isAll = selectedItem === "ALL";

  // TODO: data fetching (SWR)

  // const onClickCategory = (value: PaymentCategoryType) =>
  //   setSelectedItem(value);
  // const onClickOrderBy = (value: OrderByType) => setOrderBy(value);

  useEffect(() => {
    // 전체보기 클릭시, 이전 정렬 조건 초기화
    setOrderBy((orderBy) => (isAll ? "latest" : orderBy));
  }, [selectedItem]);

  return (
    <div className="space-y-5">
      <ul className="flex flex-col gap-5" ref={observerRef}>
        {listData.map((payment, idx) => (
          <PaymentsItem key={`${payment.createdAt}_${idx}`} {...payment} />
        ))}
      </ul>
    </div>
  );
}
