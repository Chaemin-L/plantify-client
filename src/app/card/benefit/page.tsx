"use client";
import { SelectItemType } from "@/app/_deprecated/select";
import { PATH } from "@/lib/_shared/paths";
import CardList from "./(components)/card-list";
import { notFound, useSearchParams } from "next/navigation";
import Select from "@/app/(_components)/select";
import { BenefitType } from "@/types/card";
import { isBenefitType } from "@/utils/typeCheck";
import { useCardBenefit } from "@/hooks/api/useCardBenefit";

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
    label: "해외",
    value: "abroad",
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
];

export default function CardBenefitPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "traffic";

  if (!isBenefitType(category)) return notFound();

  const { data } = useCardBenefit(
    categories.filter((c) => c.value === category)[0].label
  );

  return (
    <div className="flex flex-col gap-5">
      <Select
        baseUrl={PATH.CARD_BENEFIT}
        name="category"
        selected={category}
        items={categories}
      />
      <CardList listData={data ? data : null} />
    </div>
  );
}
