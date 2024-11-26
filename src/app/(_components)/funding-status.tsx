"use client";
import clsx from "clsx";
import Progressbar from "./progressbar";
import { PATH } from "@/lib/_shared/paths";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface FundingStatus {
  // styling
  size?: "sm" | "lg" | "reactive";
  showProgress?: boolean;
  // data
  id: string;
  percent: number;
  targetAmount: number;
  leftTop?: string | ReactNode;
  rightTop?: string | ReactNode;
  rightBottom?: string | ReactNode;
}

export default function FundingStatus({
  size = "lg",
  showProgress,
  id,
  percent,
  targetAmount,
  leftTop = "",
  rightTop = "",
  rightBottom = "",
}: FundingStatus) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      {(leftTop || rightTop) && (
        <div
          className={clsx(
            size === "lg" ? "card-title" : "text-bd3",
            "flex justify-between items-center"
          )}
        >
          <div className="flex gap-2 items-center">
            {showProgress && (
              <div className="rounded-full border border-accent-green w-fit p-0.5 md:p-1 text-[8px] md:text-bd4 text-accent-green whitespace-nowrap ">
                진행중 {/** progress */}
              </div>
            )}
            {leftTop}
          </div>
          {rightTop}
        </div>
      )}
      <Progressbar isShort={size === "sm"} percent={percent} />
      <div
        className={clsx(
          size === "lg" ? "text-bd3" : "text-bd4",
          " flex justify-between"
        )}
      >
        <span>{targetAmount.toLocaleString()}원</span>
        {rightBottom}
      </div>
    </div>
  );
}

/** left top
 *         <div className="flex space-x-1.5 items-center  whitespace-nowrap">
          <h1
            className={clsx(
              size === "reactive" && "text-bd3 md:text-t4",
              "flex-1 line-clamp-1 break-all pr-2"
            )}
          >
            {leftTop}
          </h1>
        </div>
 * 
 */
/** rightBottom
 *         <button
          onClick={() => router.push(`${PATH.FUNDING_ORGANIZATION}#org_${id}`)}
        >
          {organizationName}
        </button>
 */
