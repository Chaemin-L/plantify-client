import Select, { SelectItemType } from "@/components/select";
import BestCard from "../(components)/best-card";
import OtherBenefit from "../(components)/other-benefit";
import { PATH } from "@/lib/paths";

type BenefitValueType =
  | "traffic"
  | "communication"
  | "abroad"
  | "oiling"
  | "mart"
  | "shopping"
  | "cafe";

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

export default async function CardBenefitByCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-t2">어디서 결제 할 예정이신가요?</h1>
      <Select
        baseUrl={PATH.CARD_BENEFIT}
        items={categories}
        selectedItem={category}
      />
      <BestCard />
      <OtherBenefit />
    </div>
  );
}
