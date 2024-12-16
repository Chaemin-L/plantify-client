"use client";
import { horizontalLoop } from "@/lib/_gsap";
import { useEffect } from "react";

interface Props {
  className?: string;
}

export default function ThreeLinesLoop({ className }: Props) {
  useEffect(() => {
    horizontalLoop(".marquee-left", { repeat: -1, speed: 0.3 });
    horizontalLoop(".marquee-right", {
      repeat: -1,
      speed: 0.3,
      reversed: true,
    });
  }, []);
  return (
    <div className={`w-full h-full overflow-hidden ${className}`}>
      <div className="relative overflow-hidden text-t1 text-shadow-600 flex flex-col gap-4 ">
        <div className="w-fit flex ">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="marquee-left flex items-center shrink-0 gap-2 will-change-transform"
              >
                PlantiPay &nbsp;PlantiFavorite&nbsp;&nbsp;
              </div>
            ))}
        </div>
        <div className="w-full flex ">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="marquee-right flex items-center shrink-0 gap-2 will-change-transform"
              >
                PlantiFeel &nbsp;PlantiFit&nbsp;PlantiFamily&nbsp;&nbsp;
              </div>
            ))}
        </div>
        <div className="w-full flex ">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="marquee-left flex items-center shrink-0 gap-2 will-change-transform"
              >
                PlantiFuture &nbsp;PlantiFun&nbsp;PlantiFlow&nbsp;&nbsp;
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
