import Select, { SelectItemType } from "@/app/(_components)/select";
import { PATH } from "@/lib/_shared/paths";
import { youth } from "../../(_dummy)/list-data";
import FundingList from "../../(components)/funding-list";

interface Props {
  params: Promise<{ category: string }>;
}

type CategoryType = "all" | "environment" | "animal" | "youth";

const categories: SelectItemType<CategoryType>[] = [
  { label: "전체", value: "all" },
  { label: "환경", value: "environment" },
  { label: "동물", value: "animal" },
  { label: "아동・청소년", value: "youth" },
];
export default async function FundRaisingsListPage({ params }: Props) {
  const { category } = await params;
  // TODO: data fetching by category
  return (
    <>
      <Select
        baseUrl={PATH.FUNDRAISINGS_LIST}
        items={categories}
        selectedItem={category}
        sticky
      />
      <FundingList category={category} listData={youth} />
    </>
  );
}
