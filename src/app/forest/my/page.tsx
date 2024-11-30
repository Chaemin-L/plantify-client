"use client";

import { MyItemType, PostUsingItem } from "@/types/api/item";
import { useEffect, useRef, useState } from "react";
import { DraggableData } from "react-draggable";
import DraggableItem from "./draggable-item";
import clsx from "clsx";
import MyBox from "./my-box-btn";
import { useResizeWindowCell } from "@/hooks/useResizeWindowCell";

const CELL_ROW_CNT = 10;
const CELL_COL_CNT = 25;

export default function Page() {
  const [editMode, setEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState<null | number>(null);
  const [items, setItems] = useState<PostUsingItem[]>(usingItems);
  const [groundBoard, setGroundBoard] = useState<boolean[]>(
    Array(CELL_ROW_CNT).fill(() => Array(CELL_COL_CNT).fill(false))
  );

  const { cellHalfWidth } = useResizeWindowCell();

  useEffect(() => {
    if (!editMode) setEditingItem(null);
  }, [editMode]);

  useEffect(() => {
    if (editingItem) setEditMode(true);
  }, [editingItem]);

  const handleClickItem = (myItemId: number) => {
    if (editingItem === null) {
      setEditingItem(myItemId);
    }
  };

  const handleNewItem = (newItem: MyItemType) => {
    const { myItemId, image, category } = newItem;
    setItems((prev) => [
      ...prev,
      { myItemId, image, category, posX: 0, posY: 0 },
    ]);
    setEditingItem(myItemId);
  };

  const handleComplete = () => {
    setEditMode(false);
  };

  const onControlledDrag = (e: Event, position: DraggableData, id: number) => {
    const { x, y } = position;
    const xCond = x % (cellHalfWidth * 2) === 0;
    const yCond = y % cellHalfWidth === 0;
    const targetItem = items.find((item) => item.myItemId === id);

    if (!targetItem) return;

    if (xCond != yCond) {
      setItems((prev) =>
        prev.map((item: PostUsingItem) =>
          item.myItemId === id
            ? { ...item, posX: x - cellHalfWidth, posY: y }
            : item
        )
      );
    } else
      setItems((prev) =>
        prev.map((item: PostUsingItem) =>
          item.myItemId === id ? { ...item, posX: x, posY: y } : item
        )
      );
  };

  return (
    <div
      className={clsx(
        "relative -mx-4 flex flex-col gap-3 h-full justify-center"
      )}
    >
      {/** Field */}
      <div
        className="bg-green-600 mx-auto p-auto"
        style={{
          width: cellHalfWidth * 2 * CELL_ROW_CNT,
        }}
      >
        <div className="relative flex flex-wrap">
          {editMode && (
            <button
              className="absolute top-full left-1/2 -translate-x-1/2 py-2"
              onClick={handleComplete}
            >
              완료
            </button>
          )}
          {items.map((item, idx) => (
            //@ts-ignore
            <DraggableItem
              key={idx}
              item={item}
              position={{ x: item.posX, y: item.posY }}
              width={cellHalfWidth * 2} // custom variable
              height={cellHalfWidth} // custom variable
              editMode={editMode}
              editingItem={editingItem}
              disabled={
                !editMode || (editMode && editingItem !== item.myItemId)
              }
              onMouseDown={() => handleClickItem(item.myItemId)}
              onStop={(e: any, position: DraggableData) =>
                onControlledDrag(e, position, item.myItemId)
              }
              grid={[cellHalfWidth, cellHalfWidth / 2]}
              bounds="parent"
              defaultPosition={{ x: 0, y: 0 }}
            />
          ))}

          {Array(CELL_ROW_CNT * CELL_COL_CNT)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="flex shrink-0 opacity-40">
                <div
                  className="box-border w-0 h-0"
                  style={{
                    ...(editMode
                      ? {
                          borderTop: `${cellHalfWidth / 2}px solid transparent`,
                          borderRight: `${cellHalfWidth}px solid white`,
                          borderBottom: `${
                            cellHalfWidth / 2
                          }px solid transparent`,
                        }
                      : {
                          borderTop: `${cellHalfWidth / 2}px solid transparent`,
                          borderRight: `${cellHalfWidth}px solid transparent`,
                          borderBottom: `${
                            cellHalfWidth / 2
                          }px solid transparent`,
                        }),
                  }}
                />
                <div
                  className="box-border border-transparent w-0 h-0"
                  style={{
                    ...(editMode
                      ? {
                          borderTop: `${cellHalfWidth / 2}px solid transparent`,
                          borderLeft: `${cellHalfWidth}px solid white`,
                          borderBottom: `${
                            cellHalfWidth / 2
                          }px solid transparent`,
                        }
                      : {
                          borderTop: `${cellHalfWidth / 2}px solid transparent`,
                          borderLeft: `${cellHalfWidth}px solid transparent`,
                          borderBottom: `${
                            cellHalfWidth / 2
                          }px solid transparent`,
                        }),
                  }}
                />
              </div>
            ))}
        </div>
      </div>

      {!editMode && <MyBox handleNewItem={handleNewItem} />}
    </div>
  );
}

const usingItems: PostUsingItem[] = [
  {
    myItemId: 1,
    image: "/temp/forest/ground-item3.png",
    posX: 0,
    posY: 0,
    category: "GROUND",
  },
  {
    myItemId: 2,
    image: "/temp/forest/ground-item3.png",
    posX: 50,
    posY: 0,
    category: "GROUND",
  },
];
