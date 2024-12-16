"use client";
import Select from "@/app/(_components)/select";
import { SelectItemType } from "@/app/_deprecated/select";
import Loading from "@/app/loading";
import { PATH } from "@/lib/_shared/paths";
import { BenefitType } from "@/types/card";
import { isBenefitType } from "@/utils/typeCheck";
import { notFound, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AllCardList from "./(components)/all-card-list";

const categories: SelectItemType<BenefitType>[] = [
  // {
  //   label: "전체",
  //   value: "all",
  // },
  {
    label: "교통",
    value: "traffic",
  },
  {
    label: "통신",
    value: "communication",
  },
  {
    label: "여행",
    value: "travel",
  },
  {
    label: "주유",
    value: "oiling",
  },
  {
    label: "마트/편의점",
    value: "mart",
  },
  {
    label: "쇼핑",
    value: "shopping",
  },
  {
    label: "카페/디저트",
    value: "cafe",
  },
  {
    label: "문화",
    value: "culture",
  },
  { label: "병원", value: "hospital" },
  { label: "금융", value: "finance" },
  { label: "기타", value: "etc" },
];

export default function AllBenefit() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "traffic";

  if (!isBenefitType(category)) return notFound();

  return (
    <div className="flex flex-col gap-5">
      <Select
        baseUrl={PATH.CARD_BENEFIT}
        name="category"
        selected={category}
        items={categories}
      />
      <Suspense fallback={<Loading />}>
        <AllCardList category={category} />
      </Suspense>
    </div>
  );
}
