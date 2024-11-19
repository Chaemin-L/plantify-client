import { Metadata } from "next";
import FundingList from "../(components)/funding-list";
import { animalData, youth } from "../(_dummy)/list-data";
import Select, { SelectItemType } from "@/app/(_components)/select";
import { PATH } from "@/lib/_shared/paths";

export const metaData: Metadata = {
  title: "Plantify - 펀딩 목록",
  description: "여러 모금 활동이 궁금할 때",
  keywords: ["펀딩", "모금", "기부"],
};

type CategoryType = "all" | "environment" | "animal" | "youth";

const categories: SelectItemType<CategoryType>[] = [
  { label: "전체", value: "all" },
  { label: "환경", value: "environment" },
  { label: "동물", value: "animal" },
  { label: "아동・청소년", value: "youth" },
];

export default function FundRaisingsListPage() {
  // TODO: all data fetching
  return (
    <>
      <Select
        baseUrl={PATH.FUNDRAISINGS_LIST}
        items={categories}
        selectedItem="all"
        sticky
      />
      <FundingList category="all" listData={[...animalData, ...youth]} />
    </>
  );
}
