"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import Progressbar from "./progressbar";

interface Props {
  // styling
  size?: "sm" | "lg" | "reactive";
  showProgress?: boolean;
  // data
  percent: number;
  targetAmount: number;
  leftTop?: string | ReactNode;
  rightTop?: string | ReactNode;
  rightBottom?: string | ReactNode;
}

export default function FundingStatus({
  size = "lg",
  showProgress,
  percent,
  targetAmount,
  leftTop = "",
  rightTop = "",
  rightBottom = "",
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      {(leftTop || rightTop) && (
        <div
          className={clsx(
            size === "lg" ? "card-title" : "text-bd2",
            "flex justify-between items-center"
          )}
        >
          <div className="flex gap-2 items-center">
            {showProgress && (
              <div className="rounded-full border border-accent-green w-fit p-0.5 md:p-1 text-[8px] md:text-bd4 text-accent-green whitespace-nowrap ">
                진행중 {/** progress */}
              </div>
            )}
            <span className=" line-clamp-1">{leftTop}</span>
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
