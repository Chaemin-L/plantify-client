"use client";
import clsx from "clsx";
import Progressbar from "./progressbar";
import Link from "next/link";
import { PATH } from "@/lib/_shared/paths";
import { useRouter } from "next/navigation";

interface FundingStatus {
  id: number;
  size?: "sm" | "lg";
  percent: number;
  targetAmount: number;
  organizationName?: string;
}

export default function FundingStatus({
  id,
  size = "lg",
  percent,
  targetAmount,
  organizationName = "",
}: FundingStatus) {
  const router = useRouter();

  return (
    <div>
      <div
        className={clsx(
          size === "lg" ? "card-title" : "text-bd3",
          "flex justify-between mb-4 "
        )}
      >
        <h1>펀딩현황</h1>
        <span>{percent}%</span>
      </div>
      <Progressbar percent={percent} />
      <div
        className={clsx(
          size === "lg" ? "text-bd3" : "text-bd4",
          "mt-3 flex justify-between"
        )}
      >
        <span>목표 금액: {targetAmount.toLocaleString()}원</span>
        <button
          onClick={() => router.push(`${PATH.FUNDING_ORGANIZATION}#org_${id}`)}
        >
          {organizationName}
        </button>
      </div>
    </div>
  );
}
