"use client";
import { PATH } from "@/lib/_shared/paths";
import PaymentsList from "./(components)/payments-list";
import clsx from "clsx";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { PaymentCategory, PaymentCategoryType } from "@/types/pay";
import Select, { SelectItemType } from "../(_components)/select";
import { isPaymentCategoryType, isPaymentSortingType } from "@/utils/typeCheck";

const categories: SelectItemType<PaymentCategoryType>[] = [
  { label: "전체", value: "all" },
  { label: "결제", value: "pay" },
  { label: "충전", value: "add" },
];

export default function PaymentsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "all";
  const sorting = searchParams.get("sorting") ?? "latest";

  if (!isPaymentCategoryType(category)) return notFound();
  if (!isPaymentSortingType(sorting)) return notFound();

  const isAll = category === "all";

  return (
    <>
      <Select
        baseUrl={PATH.PAYMENTS}
        name="category"
        selected={category}
        items={categories}
      />
      <div className="py-3 border-y border-white justify-end gap-2 flex divide-white select-none text-bd3 font-bold ">
        <button
          onClick={() =>
            router.replace(
              `${PATH.PAYMENTS}?category=${category}&sorting=${PaymentCategory[0]}`
            )
          }
          className={clsx(sorting !== "latest" && "opacity-80")}
        >
          최신순
        </button>
        {!isAll && (
          <>
            <span>|</span>
            <button
              onClick={() =>
                router.replace(
                  `${PATH.PAYMENTS}?category=${category}&sorting=${PaymentCategory[1]}`
                )
              }
              className={clsx(sorting !== "desc" && "opacity-70")}
            >
              고액순
            </button>
          </>
        )}
      </div>
      <PaymentsList />
    </>
  );
}
