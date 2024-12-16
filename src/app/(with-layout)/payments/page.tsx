"use client";
import Select, { SelectItemType } from "@/app/(_components)/select";
import { useGetPayments } from "@/hooks/api/useGetPayments";
import { PATH } from "@/lib/_shared/paths";
import { PaymentCategoryType, PaymentSorting } from "@/types/pay";
import { isPaymentCategoryType, isPaymentSortingType } from "@/utils/typeCheck";
import clsx from "clsx";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import FilteredPaymentsList from "./(components)/filtered-payments-list";
import PaymentsList from "./(components)/payments-list";

const categories: SelectItemType<PaymentCategoryType>[] = [
  { label: "전체", value: "ALL" },
  { label: "결제", value: "PAYMENT" },
  { label: "충전", value: "CHARGE" },
];

export default function PaymentsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("category") ?? "ALL";
  const sorting = searchParams.get("sorting") ?? "createdAt";

  if (!isPaymentCategoryType(filter)) return notFound();
  if (!isPaymentSortingType(sorting)) return notFound();

  const {
    data: allPayments,
    hasNextPage: allHasNextPage,
    fetchNextPage: allFetchNextPage,
  } = useGetPayments(20, [sorting]);

  const isAll = filter === "ALL";

  return (
    <>
      <Select
        baseUrl={PATH.PAYMENTS}
        name="category"
        selected={filter}
        items={categories}
      />
      <div className="py-3 border-y border-white justify-end gap-2 flex divide-white select-none text-bd3 font-bold ">
        <button
          onClick={() =>
            router.replace(
              `${PATH.PAYMENTS}?category=${filter}&sorting=${PaymentSorting[0]}`
            )
          }
          className={clsx(sorting !== "createdAt" && "opacity-80")}
        >
          최신순
        </button>
        {!isAll && (
          <>
            <span>|</span>
            <button
              onClick={() =>
                router.replace(
                  `${PATH.PAYMENTS}?category=${filter}&sorting=${PaymentSorting[1]}`
                )
              }
              className={clsx(sorting !== "amount" && "opacity-70")}
            >
              고액순
            </button>
          </>
        )}
      </div>
      {filter === "ALL" && (
        <PaymentsList
          listData={allPayments?.pages.map((p) => p.content).flat() ?? []}
          hasNextPage={allHasNextPage}
          fetchNextPage={allFetchNextPage}
        />
      )}
      {filter !== "ALL" && (
        <FilteredPaymentsList filter={filter} sorting={sorting} />
      )}
    </>
  );
}
