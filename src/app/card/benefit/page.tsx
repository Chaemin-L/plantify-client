"use client";
import { SelectItemType } from "@/app/_deprecated/select";
import { PATH } from "@/lib/_shared/paths";
import BestCard from "./(components)/best-card";
import OtherBenefit from "./(components)/other-benefit";
import { notFound, useSearchParams } from "next/navigation";
import SelectClient from "@/app/(_components)/select";
import { Benefit, BenefitType } from "@/types/card";
import { isBenefitType } from "@/utils/typeCheck";

const categories: SelectItemType<BenefitType>[] = [
  {
    label: "전체",
    value: "all",
  },
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
  const category = searchParams.get("category") ?? "all";

  if (!isBenefitType(category)) return notFound();

  return (
    <div className="flex flex-col gap-5">
      <SelectClient
        baseUrl={PATH.CARD_BENEFIT}
        name="category"
        selected={category}
        items={categories}
      />
      <BestCard />
      <OtherBenefit />
    </div>
  );
}
