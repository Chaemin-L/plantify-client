import Select, { SelectItemType } from "@/app/(_components)/select";
import { PATH } from "@/lib/_shared/paths";
import BestCard from "./(components)/best-card";
import OtherBenefit from "./(components)/other-benefit";
import { notFound } from "next/navigation";

const categories: SelectItemType<BenefitValueType>[] = [
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

const BENEFIT_CATEGORY: BenefitValueType[] = [
  "traffic",
  "communication",
  "abroad",
  "oiling",
  "mart",
  "shopping",
  "cafe",
];

export type BenefitValueType =
  | "traffic"
  | "communication"
  | "abroad"
  | "oiling"
  | "mart"
  | "shopping"
  | "cafe";

interface Props {
  searchParams: Promise<{ category: string }>;
}

export default async function CardBenefitPage({ searchParams }: Props) {
  const { category } = await searchParams;
  if (category && !BENEFIT_CATEGORY.includes(category as BenefitValueType))
    throw notFound();

  return (
    <div className="flex flex-col gap-5">
      <Select
        baseUrl={PATH.CARD_BENEFIT}
        name="category"
        items={categories}
        selectedItem={category ?? "traffic"}
      />
      <BestCard />
      <OtherBenefit />
    </div>
  );
}
