"use client";
import clsx from "clsx";
import Progressbar from "./progressbar";
import { PATH } from "@/lib/_shared/paths";
import { useRouter } from "next/navigation";

interface FundingStatus {
  // styling
  size?: "sm" | "lg" | "reactive";
  showProgress?: boolean;
  // data
  id: string;
  title?: string;
  percent: number;
  targetAmount: number;
  organizationName?: string;
}

export default function FundingStatus({
  size = "lg",
  showProgress = false,
  id,
  title = "펀딩현황",
  percent,
  targetAmount,
  organizationName = "",
}: FundingStatus) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div
        className={clsx(
          size === "lg" ? "card-title" : "text-bd3",
          "flex justify-between items-center"
        )}
      >
        <div className="flex space-x-1.5 items-center">
          {showProgress && (
            <div className="rounded-full border border-accent-green w-fit py-1 px-1 text-bd4 text-accent-green">
              진행중
            </div>
          )}
          <h1
            className={clsx(
              size === "reactive" && "text-bd3 md:text-t4",
              "flex-1 line-clamp-1 break-all pr-2"
            )}
          >
            {title}
          </h1>
        </div>
        <span>{percent}%</span>
      </div>
      <Progressbar isShort={size === "sm"} percent={percent} />
      <div
        className={clsx(
          size === "lg" ? "text-bd3" : "text-bd4",
          " flex justify-between"
        )}
      >
        <span>{targetAmount.toLocaleString()}원</span>
        <button
          onClick={() => router.push(`${PATH.FUNDING_ORGANIZATION}#org_${id}`)}
        >
          {organizationName}
        </button>
      </div>
    </div>
  );
}
