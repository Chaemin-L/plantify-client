"use client";
import Loading from "@/app/(_components)/loading";
import Select, { SelectItemType } from "@/app/(_components)/select";
import { useGetFundingListByCategory } from "@/hooks/api/useGetFundingListByCategory";
import { PATH } from "@/lib/_shared/paths";
import { CategoryType } from "@/types/api/funding";
import { ExpandedFundingCategoryType } from "@/types/funding";
import { isFundingCategoryType } from "@/utils/typeCheck";
import { notFound, useSearchParams } from "next/navigation";
import FundingList from "../(components)/funding-list";

const categories: SelectItemType<ExpandedFundingCategoryType>[] = [
  { label: "환경", value: "ENVIRONMENT" },
  { label: "동물", value: "ANIMAL" },
  { label: "아동・청소년", value: "CHILDREN" },
  { label: "장애", value: "DISABILITY" },
  { label: "노인", value: "ELDERLY" },
  { label: "사회", value: "SOCIAL" },
];
export default function FundRaisingsListPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "ENVIRONMENT";

  if (!isFundingCategoryType(category)) return notFound();

  const {
    data: listData,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetFundingListByCategory(category, 15);

  // const funding = useGetFundingDetail("67403b24b22cea6ecde6c8da");
  // const funding = useGetOrganizations();

  if (isLoading) return <Loading />;
  console.log(listData);

  return (
    <>
      <Select
        baseUrl={PATH.FUNDING_LIST}
        name="category"
        selected={category as string}
        items={categories}
        sticky
      />
      <FundingList
        category={
          categories.find((c) => c.value === category)?.label! as CategoryType
        }
        listData={listData?.pages.map((p) => p.content).flat() ?? []}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
}
