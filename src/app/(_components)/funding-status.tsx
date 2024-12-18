"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import Progressbar from "./progressbar";

interface Props {
  // styling
  size?: "sm" | "lg" | "reactive";
  // data
  percent: number;
  leftTop?: string | ReactNode;
  leftBottom?: string | ReactNode;
  rightTop?: string | ReactNode;
  rightBottom?: string | ReactNode;
}

export default function FundingStatus({
  size = "lg",
  percent,
  leftBottom = "",
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
          <span className=" line-clamp-1">{leftTop}</span>
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
        <div> {leftBottom}</div>
        <div> {rightBottom}</div>
      </div>
    </div>
  );
}
