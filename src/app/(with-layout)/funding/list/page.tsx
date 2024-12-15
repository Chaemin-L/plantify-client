"use client";
import Select, { SelectItemType } from "@/app/(_components)/select";
import Loading from "@/app/loading";
import { useGetFundingListByCategory } from "@/hooks/api/useGetFundingListByCategory";
import { PATH } from "@/lib/_shared/paths";
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
  const category = searchParams.get("category") || "ENVIRONMENT";

  const isInvalidCategory = !isFundingCategoryType(category);

  const {
    data: listData,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetFundingListByCategory(
    isInvalidCategory ? "ENVIRONMENT" : category,
    15
  );

  // const funding = useGetFundingDetail("67403b24b22cea6ecde6c8da");
  // const funding = useGetOrganizations();

  // 유효하지 않은 category에 대한 대응
  if (isInvalidCategory) notFound();

  if (isLoading) return <Loading />;

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
        category={category}
        listData={listData?.pages.map((p) => p.content).flat() ?? []}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
}
