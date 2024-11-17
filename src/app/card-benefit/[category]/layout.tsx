import { PATH } from "@/lib/paths";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

export const meta: Metadata = {
  title: "Plantify - 더 큰 카드 혜택 추천",
  description: "사용처에서 혜택이 큰 카드를 추천해요",
  keywords: ["plantify", "card", "benefit", "recommend"],
};

type Props = {
  params: Promise<{ category: string }>;
  children: React.ReactNode;
};

export type BenefitValueType =
  | "traffic"
  | "communication"
  | "abroad"
  | "oiling"
  | "mart"
  | "shopping"
  | "cafe";

const BENEFIT_CATEGORY: BenefitValueType[] = [
  "traffic",
  "communication",
  "abroad",
  "oiling",
  "mart",
  "shopping",
  "cafe",
];

export default async function Layout({ params, children }: Props) {
  const category = (await params).category as BenefitValueType;
  if (!BENEFIT_CATEGORY.includes(category)) throw notFound();

  return (
    <div className="space-y-5">
      <h1 className="text-t2">어디서 결제 할 예정이신가요?</h1>
      <>{children}</>
    </div>
  );
}
