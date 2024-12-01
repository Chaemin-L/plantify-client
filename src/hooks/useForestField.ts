import { CELL_ROW_CNT, CELL_COL_CNT } from "@/lib/_shared/item";
import { PostUsingItem } from "@/types/api/item";
import { useRef } from "react";

export function useForestField(cellWidth: number) {
  const ratioX = cellWidth / 2;
  const ratioY = ratioX / 2;

  const groundBoard = useRef<boolean[][]>(
    Array(CELL_ROW_CNT)
      .fill(null)
      .map(() => Array(CELL_COL_CNT).fill(false))
  );

  const theOtherBoard = useRef<boolean[][]>(
    Array(CELL_ROW_CNT)
      .fill(null)
      .map(() => Array(CELL_COL_CNT).fill(false))
  );

  // posX, posY 은 현재 필드 기준 실제 위치(px)값.
  const fillField = ({ category, posX, posY }: PostUsingItem) => {
    const x = Math.floor(posX / ratioX);
    const y = Math.floor(posY / ratioY);

    switch (category) {
      case "GROUND":
        if (groundBoard.current[x][y]) return false;
        groundBoard.current[x][y] = true;
        return true;
      default:
        if (theOtherBoard.current[x][y]) return false;
        theOtherBoard.current[x][y] = true;
        return true;
    }
  };

  const emptyField = ({ category, posX, posY }: PostUsingItem) => {
    const x = Math.floor(posX / ratioX);
    const y = Math.floor(posY / ratioY);

    switch (category) {
      case "GROUND":
        groundBoard.current[x][y] = false;
        return true;
      default:
        theOtherBoard.current[x][y] = false;
        return true;
    }
  };
  return { groundBoard, theOtherBoard, fillField, emptyField };
}
