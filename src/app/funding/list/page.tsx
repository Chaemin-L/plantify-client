import Select, { SelectItemType } from "@/app/(_components)/select";
import { PATH } from "@/lib/_shared/paths";
import { SearchParams } from "@/types/utils";
import { FundingCategoryType } from "@/types/fundings";
import { youth } from "../(_dummy)/list-data";
import FundingList from "../(components)/funding-list";

interface Props {
  searchParams: SearchParams;
}

const categories: SelectItemType<FundingCategoryType>[] = [
  { label: "전체", value: "all" },
  { label: "환경", value: "environment" },
  { label: "동물", value: "animal" },
  { label: "아동・청소년", value: "youth" },
];
export default async function FundRaisingsListPage({ searchParams }: Props) {
  const { category } = await searchParams;
  // TODO: data fetching by category
  return (
    <>
      <Select
        baseUrl={PATH.FUNDING_LIST}
        name="category"
        items={categories}
        selectedItem={(category as string) ?? "all"}
        sticky
      />
      <FundingList category={category as string} listData={youth} />
    </>
  );
}
