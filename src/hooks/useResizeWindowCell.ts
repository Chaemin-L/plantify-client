import { CELL_COL_CNT } from "@/lib/_shared/item";
import { useState, useEffect } from "react";

export function useResizeWindowCell() {
  const [viewportWidth, setViewportWidth] = useState<number>(500); // 초기값 설정
  const cellWidth = Math.floor(viewportWidth / CELL_COL_CNT / 2 / 2) * 4; // 추후 위치 계산을 위해 cellHeight/2도 정수형이 될 수 있도록 유도
  const cellHeight = cellWidth / 2; // 2:1 비율

  useEffect(() => {
    const updateViewportWidth = () => {
      const width = Math.min(window.innerWidth, 500);
      setViewportWidth(width);
    };

    if (typeof window !== "undefined") {
      updateViewportWidth();
      window.addEventListener("resize", updateViewportWidth);
    }

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  return { viewportWidth, cellWidth, cellHeight };
}
