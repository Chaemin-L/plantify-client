import clsx from "clsx";
import Progressbar from "./progressbar";

interface FundingStatus {
  size?: "sm" | "lg";
  percent: number;
}

export default function FundingStatus({ size = "lg", percent }: FundingStatus) {
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
      <div className="text-bd3 mt-3">목표 금액: 1억</div>
    </div>
  );
}
