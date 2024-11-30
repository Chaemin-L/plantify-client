import { useState, useEffect } from "react";

export function useResizeWindowCell() {
  const [viewportWidth, setViewportWidth] = useState<number>(500); // 초기값 설정
  const cellHalfWidth = Math.floor(viewportWidth / 20);

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

  return { viewportWidth, cellHalfWidth };
}
