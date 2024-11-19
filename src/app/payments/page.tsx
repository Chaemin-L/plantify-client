import Select, { SelectItemType } from "@/app/(_components)/select";
import { PATH } from "@/lib/_shared/paths";
import PaymentsList from "./(components)/payments-list";
import clsx from "clsx";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

export type CategoryValueType = "all" | "pay" | "add";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

const categories: SelectItemType<CategoryValueType>[] = [
  { label: "전체", value: "all" },
  { label: "결제", value: "pay" },
  { label: "충전", value: "add" },
];

const types = ["all", "pay", "add"];
const sortingOptions = ["recent", "desc"];

export default async function PaymentsPage({ searchParams }: Props) {
  const { type, sort } = await searchParams;

  const isAll = type === "all";

  if (type && !types.includes(type)) redirect(notFound());
  if (sort && !sortingOptions.includes(sort)) redirect(notFound());

  return (
    <>
      <Select
        baseUrl={PATH.PAYMENTS}
        name="type"
        items={categories}
        selectedItem={type ?? "all"}
      />
      <div className="py-3 border-y border-white justify-end gap-2 flex divide-white select-none text-bd3 font-bold ">
        <Link
          href={`${PATH.PAYMENTS}?type=${type ?? "all"}&sort=recent`}
          className={clsx(sort && sort !== "recent" && "opacity-80")}
        >
          최신순
        </Link>
        {!isAll && (
          <>
            <span>|</span>
            <Link
              href={`${PATH.PAYMENTS}?type=${type ?? "all"}&sort=desc`}
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
