import { kdayjs } from "@/lib/kdayjs";
import Select, { SelectItemType } from "@/components/select";
import { PATH } from "@/lib/paths";
import PaymentsList from "../(components)/payments-list";
import clsx from "clsx";
import Link from "next/link";
import { redirect } from "next/navigation";

// TODO: data fetching
const totalPayment = 365000;

export type CategoryValueType = "all" | "pay" | "add";

const categories: SelectItemType<CategoryValueType>[] = [
  { label: "전체", value: "all" },
  { label: "결제", value: "pay" },
  { label: "충전", value: "add" },
];

type Props = {
  params: { type: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function PaymentsPage({ params, searchParams }: Props) {
  const { type } = params;
  const { sort } = searchParams;

  const isAll = type === "all";

  if (!sort) redirect(`/payments/${type}?sort=recent`);

  const startDate = kdayjs().subtract(1, "month").format("MM월 DD일");
  const endDate = kdayjs().format("MM월 DD일");

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-1 text-white">
        <span className="text-t4">
          {startDate} ~ {endDate}
        </span>
        <h1 className="text-t2">{totalPayment.toLocaleString()}원</h1>
      </div>
      <Select baseUrl={PATH.PAYMENTS} items={categories} selectedItem={type} />
      <div className="py-3 border-y border-white justify-end gap-2 flex divide-white select-none text-bd3 font-bold ">
        <Link
          href={`${PATH.PAYMENTS}/${type}?sort=recent`}
          className={clsx(sort !== "recent" && "opacity-80")}
        >
          최신순
        </Link>
        {!isAll && (
          <>
            <span>|</span>
            <Link
              href={`${PATH.PAYMENTS}/${type}?sort=desc`}
              className={clsx(sort !== "desc" && "opacity-70")}
            >
              고액순
            </Link>
          </>
        )}
      </div>
      <PaymentsList />
    </div>
  );
}
