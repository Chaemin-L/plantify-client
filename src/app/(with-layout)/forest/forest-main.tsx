"use client";

import { useGetUsingItems } from "@/hooks/api/useGetUsingMyItems";
import { useForestField } from "@/hooks/useForestField";
import { useResizeWindowCell } from "@/hooks/useResizeWindowCell";
import { CELL_COL_CNT, CELL_ROW_CNT } from "@/lib/_shared/item";

import { useGetCash } from "@/hooks/api/useGetCash";
import { usePostCreateUsingItems } from "@/hooks/api/usePostUsingItems";
import { GetMyItemRes, GetUsingItemsRes } from "@/types/api/item";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DraggableData, DraggableEvent } from "react-draggable";
import DraggableItem from "./(components)/draggable-item";
import MyBox from "./(components)/my-box-btn";
import StoreBtn from "./(components)/store-btn";

export default function ForestMain() {
  const [editMode, setEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState<null | number>(null);
  const [editError, setEditError] = useState<boolean>(false);
  const [items, setItems] = useState<GetUsingItemsRes[]>([]);

  const { cellWidth, cellHeight } = useResizeWindowCell();
  const { fillField, emptyField } = useForestField(cellWidth, cellHeight);

  const { data: cash } = useGetCash();
  const { data: usingItems, loading } = useGetUsingItems();
  const [create] = usePostCreateUsingItems();
  // const [update] = usePostUpdateUsingItems();

  useEffect(() => {
    if (loading) return;

    setItems(
      // usingItems?.getAllUsingItemsByUser.map(
      dummy.map(({ category, posX, posY, ...rest }: GetUsingItemsRes) => {
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
  }, [cellWidth, loading]);

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

  const handleComplete = (item: GetUsingItemsRes) => {
    if (!fillField(item)) setEditError(true);
    else {
      setEditMode(false);
    }
  };

  const handleNewItem = (newItem: GetMyItemRes) => {
    const { myItemId } = newItem;
    create({
      variables: {
        actions: [{ action: "CREATE", myItemId }],
      },
    });
    setItems((prev) => [...prev, { ...newItem, posX: 0, posY: 0 }]);
    setEditingItem(myItemId);
  };

  const handleClickItem = (item: GetUsingItemsRes) => {
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
        prev.map((item: GetUsingItemsRes) =>
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
        prev.map((item: GetUsingItemsRes) =>
          item.myItemId === id ? { ...item, posX: x, posY: y } : item
        )
      );
  };

  return (
    <>
      <div
        className={clsx(
          "relative -mx-4 flex flex-col gap-3 h-full justify-center"
        )}
      >
        <div className="mr-4 flex items-center justify-end py-2 gap-2">
          <Image
            width={16}
            height={16}
            src="/icons/tree-coin.svg"
            alt="트리코인"
            className="w-4 h-4"
          />
          <span className="text-white ">{cash?.cashBalance}</span>
        </div>
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
              {items?.map((item, idx) => (
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
                              borderTop: `${
                                cellHeight / 2
                              }px solid transparent`,
                              borderRight: `${cellHeight}px solid white`,
                              borderBottom: `${
                                cellHeight / 2
                              }px solid transparent`,
                            }}
                          />
                          <div
                            className="box-border border-transparent w-0 h-0 opacity-20"
                            style={{
                              borderTop: `${
                                cellHeight / 2
                              }px solid transparent`,
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
        {!editMode && <StoreBtn />}
      </div>
    </>
  );
}

const dummy: GetUsingItemsRes[] = [
  {
    myItemId: 1,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 1,
    posY: 7,
    category: "GROUND",
  },
  {
    myItemId: 2,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 1,
    posY: 6,
    category: "GROUND",
  },
  {
    myItemId: 11,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 1.5,
    posY: 7.5,
    category: "GROUND",
  },
  {
    myItemId: 13,
    imageUri: "/temp/forest/ground-item5.png",
    posX: 0.5,
    posY: 6.5,
    category: "GROUND",
  },
  {
    myItemId: 14,
    imageUri: "/temp/forest/ground-item5.png",
    posX: 1.5,
    posY: 5.5,
    category: "GROUND",
  },
  {
    myItemId: 13,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 2,
    posY: 6,
    category: "GROUND",
  },

  {
    myItemId: 15,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 2.5,
    posY: 6.5,
    category: "GROUND",
  },
  {
    myItemId: 16,
    imageUri: "/temp/forest/ground-item5.png",
    posX: 3,
    posY: 7,
    category: "GROUND",
  },
  {
    myItemId: 17,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 3,
    posY: 7,
    category: "GROUND",
  },
  {
    myItemId: 18,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 2,
    posY: 8,
    category: "GROUND",
  },
  {
    myItemId: 19,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 3.5,
    posY: 7.5,
    category: "GROUND",
  },
  {
    myItemId: 20,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 2.5,
    posY: 8.5,
    category: "GROUND",
  },
  {
    myItemId: 23,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 4,
    posY: 8,
    category: "GROUND",
  },
  {
    myItemId: 24,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 3,
    posY: 9,
    category: "GROUND",
  },
  {
    myItemId: 21,
    imageUri: "/temp/forest/ground-item5.png",
    posX: 4.5,
    posY: 8.5,
    category: "GROUND",
  },
  {
    myItemId: 22,
    imageUri: "/temp/forest/ground-item5.png",
    posX: 3.5,
    posY: 9.5,
    category: "GROUND",
  },
  {
    myItemId: 22,
    imageUri: "/temp/forest/ground-item3.png",
    posX: 4,
    posY: 9,
    category: "GROUND",
  },

  {
    myItemId: 100,
    imageUri: "/temp/forest/tree-item1.svg",
    posX: 1.5,
    posY: 5.5,
    category: "TREE",
  },
  {
    myItemId: 101,
    imageUri: "/temp/forest/tree-item2.svg",
    posX: 2,
    posY: 6,
    category: "TREE",
  },
  {
    myItemId: 102,
    imageUri: "/temp/forest/tree-item3.svg",
    posX: 2.5,
    posY: 6.5,
    category: "TREE",
  },
  {
    myItemId: 103,
    imageUri: "/temp/forest/tree-item2.svg",
    posX: 3,
    posY: 7,
    category: "TREE",
  },
  {
    myItemId: 104,
    imageUri: "/temp/forest/tree-item1.svg",
    posX: 3.5,
    posY: 7.5,
    category: "TREE",
  },
];
