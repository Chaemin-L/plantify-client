"use client";
import { PATH } from "@/lib/_shared/paths";
import { youth } from "../(_dummy)/list-data";
import FundingList from "../(components)/funding-list";
import Select, { SelectItemType } from "@/app/(_components)/select";
import { notFound, useSearchParams } from "next/navigation";
import { FundingCategory, FundingCategoryType } from "@/types/fundings";
import { isFundingCategoryType } from "@/utils/typeCheck";

const categories: SelectItemType<FundingCategoryType>[] = [
  { label: "전체", value: "all" },
  { label: "환경", value: "environment" },
  { label: "동물", value: "animal" },
  { label: "아동・청소년", value: "youth" },
];
export default function FundRaisingsListPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "all";

  if (!isFundingCategoryType(category)) return notFound();

  // TODO: data fetching by category
  return (
    <>
      <Select
        baseUrl={PATH.FUNDING_LIST}
        name="category"
        selected={category as string}
        items={categories}
        sticky
      />
      <FundingList category={category as string} listData={youth} />
    </>
  );
}
