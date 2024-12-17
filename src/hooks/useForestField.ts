import { CELL_COL_CNT, CELL_ROW_CNT } from "@/lib/_shared/item";
import { GetUsingItemsRes } from "@/types/api/item";
import { useRef } from "react";

export function useForestField(cellWidth: number, cellHeight: number) {
  const xUnit = cellWidth / 2;
  const yUnit = cellHeight / 2;

  const groundBoard = useRef<boolean[][]>(
    Array(CELL_ROW_CNT * 2)
      .fill(null)
      .map(() => Array(CELL_COL_CNT * 2).fill(false))
  );

  const theOtherBoard = useRef<boolean[][]>(
    Array(CELL_ROW_CNT * 2)
      .fill(null)
      .map(() => Array(CELL_COL_CNT * 2).fill(false))
  );

  // posX, posY 은 현재 필드 기준 실제 위치(px)값.
  const fillField = ({ category, posX, posY }: GetUsingItemsRes) => {
    const x = posX / xUnit;
    const y = posY / yUnit;

    switch (category) {
      case "GROUND":
        if (groundBoard.current[y][x]) return false;
        groundBoard.current[y][x] = true;
        return true;
      default:
        if (theOtherBoard.current[y][x]) return false;
        theOtherBoard.current[y][x] = true;
        return true;
    }
  };

  const emptyField = ({ category, posX, posY }: GetUsingItemsRes) => {
    const x = posX / xUnit;
    const y = posY / yUnit;

    switch (category) {
      case "GROUND":
        groundBoard.current[y][x] = false;
        return true;
      default:
        theOtherBoard.current[y][x] = false;
        return true;
    }
  };
  return { groundBoard, theOtherBoard, fillField, emptyField };
}
