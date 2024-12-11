"use client";
import { PATH } from "@/lib/_shared/paths";
import { youth } from "../(_dummy)/list-data";
import FundingList from "../(components)/funding-list";
import Select, { SelectItemType } from "@/app/(_components)/select";
import { notFound, useSearchParams } from "next/navigation";
import { ExpandedFundingCategoryType } from "@/types/funding";
import { isFundingCategoryType } from "@/utils/typeCheck";
import { useGetFundingList } from "@/hooks/api/useGetFundingList";

const categories: SelectItemType<ExpandedFundingCategoryType>[] = [
  { label: "전체", value: "ALL" },
  { label: "환경", value: "ENVIRONMENT" },
  { label: "동물", value: "ANIMAL" },
  { label: "아동・청소년", value: "CHILDREN" },
  { label: "장애", value: "DISABILITY" },
  { label: "노인", value: "ELDERLY" },
  { label: "사회", value: "SOCIAL" },
];
export default function FundRaisingsListPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "ALL";

  if (!isFundingCategoryType(category)) return notFound();

  const funding = useGetFundingList(10, ["title"]);
  // const funding = useGetFundingDetail("67403b24b22cea6ecde6c8da");
  // const funding = useGetOrganizations();
  // console.log(funding.data);

  return (
    <>
      <Select
        baseUrl={PATH.FUNDING_LIST}
        name="category"
        selected={category as string}
        items={categories}
        sticky
      />
      <FundingList listData={youth} />
    </>
  );
}
