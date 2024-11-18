import { kdayjs } from "@/lib/kdayjs";
import Select, { SelectItemType } from "@/app/(_components)/select";
import { PATH } from "@/lib/_shared/paths";
import PaymentsList from "../(components)/payments-list";
import clsx from "clsx";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

export type CategoryValueType = "all" | "pay" | "add";

type Props = {
  params: { transType: string };
  searchParams: { [key: string]: string | undefined };
};

const categories: SelectItemType<CategoryValueType>[] = [
  { label: "전체", value: "all" },
  { label: "결제", value: "pay" },
  { label: "충전", value: "add" },
];

const SORT_TYPE = ["recent", "desc"];

export default async function PaymentsPage({ params, searchParams }: Props) {
  const { transType } = await params;
  const { sort } = await searchParams;

  const isAll = transType === "all";

  // search params validation (sorting type)
  if (!sort) redirect(`/payments/${transType}?sort=recent`);
  if (!SORT_TYPE.includes(sort)) throw notFound();

  return (
    <>
      <Select
        baseUrl={PATH.PAYMENTS}
        items={categories}
        selectedItem={transType}
      />
      <div className="py-3 border-y border-white justify-end gap-2 flex divide-white select-none text-bd3 font-bold ">
        <Link
          href={`${PATH.PAYMENTS}/${transType}?sort=recent`}
          className={clsx(sort !== "recent" && "opacity-80")}
        >
          최신순
        </Link>
        {!isAll && (
          <>
            <span>|</span>
            <Link
              href={`${PATH.PAYMENTS}/${transType}?sort=desc`}
              className={clsx(sort !== "desc" && "opacity-70")}
            >
              고액순
            </Link>
          </>
        )}
      </div>
      <PaymentsList />
    </>
  );
}
