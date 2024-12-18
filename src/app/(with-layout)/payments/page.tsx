"use client";
import Select, { SelectItemType } from "@/app/(_components)/select";
import { useGetAmount } from "@/hooks/api/useGetAmount";
import { useGetPayments } from "@/hooks/api/useGetPayments";
import { PATH } from "@/lib/_shared/paths";
import { kdayjs } from "@/lib/kdayjs";
import { PaymentCategoryType } from "@/types/pay";
import { isPaymentCategoryType } from "@/utils/typeCheck";
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

  const startDate = kdayjs().subtract(1, "month").format("MM월 DD일");
  const endDate = kdayjs().format("MM월 DD일");

  // const isAll = filter === "ALL";

  const { data: totalPayments } = useGetAmount();

  const {
    data: allPayments,
    hasNextPage: allHasNextPage,
    fetchNextPage: allFetchNextPage,
  } = useGetPayments(20);

  if (!isPaymentCategoryType(filter)) return notFound();
  // if (!isPaymentSortingType(sorting)) return notFound();

  return (
    <>
      <div className="space-y-1 text-white">
        <span className="text-t4">
          {startDate} ~ {endDate}
        </span>
        <h1 className="text-t2">{totalPayments?.toLocaleString()}원</h1>
      </div>
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
              // `${PATH.PAYMENTS}?category=${filter}&sorting=${PaymentSorting[0]}`
              `${PATH.PAYMENTS}?category=${filter}`
            )
          }
          className={clsx(sorting !== "createdAt" && "opacity-80")}
        >
          최신순
        </button>
        {/* {!isAll && (
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
        )} */}
      </div>
      {filter === "ALL" && (
        <PaymentsList
          listData={allPayments?.pages.map((p) => p.content).flat() ?? []}
          hasNextPage={allHasNextPage}
          fetchNextPage={allFetchNextPage}
        />
      )}
      {filter !== "ALL" && (
        // <FilteredPaymentsList filter={filter} sorting={sorting} />
        <FilteredPaymentsList filter={filter} />
      )}
    </>
  );
}
