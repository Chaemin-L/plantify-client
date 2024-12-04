"use client";

import { MyItemType, PostUsingItem } from "@/types/api/item";
import { useEffect, useState } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";
import DraggableItem from "./draggable-item";
import clsx from "clsx";
import MyBox from "./my-box-btn";
import { useResizeWindowCell } from "@/hooks/useResizeWindowCell";
import { CELL_COL_CNT, CELL_ROW_CNT } from "@/lib/_shared/item";
import { useForestField } from "@/hooks/useForestField";

export default function Page() {
  const [editMode, setEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState<null | number>(null);
  const [editError, setEditError] = useState<boolean>(false);
  const [items, setItems] = useState<PostUsingItem[]>(usingItems);

  const { cellWidth, cellHeight } = useResizeWindowCell();
  const { fillField, emptyField } = useForestField(cellWidth, cellHeight);

  useEffect(() => {
    setItems(
      usingItems.map(({ category, posX, posY, ...rest }) => {
        const fieldPosX = posX * cellWidth;
        const fieldPosY = posY * cellHeight;
        if (category === "GROUND")
          fillField({ ...rest, category, posX: fieldPosX, posY: fieldPosY });
        return {
          category,
          ...rest,
          posX: fieldPosX,
          posY: fieldPosY,
        };
      })
    );
  }, [cellWidth]);

  useEffect(() => {
    if (!editMode) setEditingItem(null);
  }, [editMode]);

  useEffect(() => {
    if (editingItem) setEditMode(true);
  }, [editingItem]);

  const handleRemove = (myItemId: number) => {
    setItems((prev) => prev.filter((item) => item.myItemId !== myItemId));
    setEditMode(false);
  };

  const handleComplete = (item: PostUsingItem) => {
    if (!fillField(item)) setEditError(true);
    else {
      setEditMode(false);
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

  const handleClickItem = (item: PostUsingItem) => {
    if (editingItem === null) {
      setEditingItem(item.myItemId);
      emptyField(item);
    }
  };

  const onControlledDrag = (
    e: DraggableEvent,
    position: DraggableData,
    id: number
  ) => {
    setEditError(false);
    const { x, y } = position;

    const xCond = x % cellWidth === 0;
    const yCond = y % cellHeight === 0;
    const targetItem = items.find((item) => item.myItemId === id);

    if (!targetItem) return;

    if (xCond != yCond) {
      const isOver = x === 0; // 왼쪽 끝으로 마름모 반이 잘리는 현상 방지
      setItems((prev) =>
        prev.map((item: PostUsingItem) =>
          item.myItemId === id
            ? {
                ...item,
                posX: isOver ? x + cellHeight : x - cellHeight,
                posY: y,
              }
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
      <div>
        {/** sky */}
        {/* <div
          className="h-32 bg-blue-300 mx-auto"
          style={{ width: cellWidth * CELL_COL_CNT }}
        /> */}
        {/** Field */}
        <div
          className="mx-auto p-auto"
          style={{
            width: cellWidth * CELL_COL_CNT,
            background: "url(/temp/forest/ground-item1.png) repeat center",
            backgroundSize: `${cellWidth}px ${cellHeight}px `,
          }}
        >
          {/** Draggable Field */}
          <div className="relative flex flex-wrap">
            {items.map((item, idx) => (
              <DraggableItem
                key={idx}
                item={item}
                position={{ x: item.posX, y: item.posY }}
                width={cellWidth} // custom variable
                height={cellHeight} // custom variable
                editMode={editMode}
                editingItem={editingItem}
                handleRemove={handleRemove}
                handleComplete={handleComplete}
                editError={editError}
                disabled={
                  !editMode || (editMode && editingItem !== item.myItemId)
                }
                onMouseDown={() => handleClickItem(item)}
                onStop={(e: DraggableEvent, position: DraggableData) =>
                  onControlledDrag(e, position, item.myItemId)
                }
                grid={[cellWidth / 2, cellHeight / 2]}
                bounds="parent"
                defaultPosition={{ x: 0, y: 0 }}
              />
            ))}

            {Array(CELL_COL_CNT * CELL_ROW_CNT)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className=" flex shrink-0">
                  <div
                    className="relative"
                    style={{
                      width: cellWidth,
                      height: cellHeight,
                      background:
                        "url(/temp/forest/ground-item1.png) repeat center",
                      backgroundSize: `${cellWidth}px ${cellHeight}px `,
                    }}
                  >
                    {editMode && (
                      <div className="absolute top-0 left-0 flex">
                        <div
                          className="box-border border-transparent w-0 h-0 opacity-20"
                          style={{
                            borderTop: `${cellHeight / 2}px solid transparent`,
                            borderRight: `${cellHeight}px solid white`,
                            borderBottom: `${
                              cellHeight / 2
                            }px solid transparent`,
                          }}
                        />
                        <div
                          className="box-border border-transparent w-0 h-0 opacity-20"
                          style={{
                            borderTop: `${cellHeight / 2}px solid transparent`,
                            borderLeft: `${cellHeight}px solid white`,
                            borderBottom: `${
                              cellHeight / 2
                            }px solid transparent`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
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
    posX: 3,
    posY: 2,
    category: "GROUND",
  },
  {
    myItemId: 2,
    image: "/temp/forest/ground-item3.png",
    posX: 3,
    posY: 3,
    category: "GROUND",
  },
  {
    myItemId: 11,
    image: "/temp/forest/ground-item3.png",
    posX: 2,
    posY: 2,
    category: "GROUND",
  },
  {
    myItemId: 12,
    image: "/temp/forest/tree-item2.svg",
    posX: 6,
    posY: 10,
    category: "TREE",
  },
];
