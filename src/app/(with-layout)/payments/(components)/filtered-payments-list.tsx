"use client";
import { useGetPaymentsByFilter } from "@/hooks/api/useGetPaymentsByFilter";
import { useScrollObserver } from "@/hooks/useScrollObserver";
import { PaymentsType } from "@/types/api/pay";
import PaymentsItem from "./payments-item";

export type SortingType = "createdAt" | "amount";

interface Props {
  filter: "CHARGE" | "PAYMENT";
  sorting: SortingType;
}

export default function FilteredPaymentsList({ filter, sorting }: Props) {
  const { data, hasNextPage, fetchNextPage } = useGetPaymentsByFilter(
    filter,
    20,
    [sorting]
  );

  const { observerRef } = useScrollObserver<PaymentsType>(
    hasNextPage,
    fetchNextPage
  );

  const listData = data?.pages.map((p) => p.content).flat() ?? [];

  return (
    <div className="space-y-5">
      <ul className="flex flex-col gap-5" ref={observerRef}>
        {listData.map((payment) => (
          <PaymentsItem key={payment.orderId} {...payment} />
        ))}
      </ul>
    </div>
  );
}
