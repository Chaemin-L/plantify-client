"use client";
import { MyItemType, PostUsingItem } from "@/types/api/item";
import { useEffect, useState } from "react";
import { DraggableData } from "react-draggable";
import DraggableItem from "./draggable-item";
import clsx from "clsx";

const myItems: MyItemType[] = [
  {
    myItemId: 0,
    itemId: 0,
    itemName: "마른땅",
    quantity: 1,
    userId: 1,
  },
  {
    myItemId: 1,
    itemId: 2,
    itemName: "마른땅",
    quantity: 1,
    userId: 1,
  },
  {
    myItemId: 2,
    itemId: 3,
    itemName: "마른땅",
    quantity: 1,
    userId: 1,
  },
  {
    myItemId: 3,
    itemId: 4,
    itemName: "마른땅",
    quantity: 1,
    userId: 1,
  },
  {
    myItemId: 4,
    itemId: 5,
    itemName: "마른땅",
    quantity: 1,
    userId: 1,
  },
];

const usingItems: PostUsingItem[] = [
  {
    myItemId: 1,
    posX: 0,
    posY: 0,
  },
  {
    myItemId: 2,
    posX: 50,
    posY: 0,
  },
];

// interface DraggableItemType extends PostUsingItem {
//   isOld: boolean;
// }

export default function Page() {
  const [editMode, setEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState<null | number>(null);
  const [items, setItems] = useState<PostUsingItem[]>(usingItems);
  // const [cellHalfWidth, setCellHalfWidth] = useState<number>(0);

  const viewportWidth = Math.min(window.innerWidth, 500);
  const cellHalfWidth = Math.floor(viewportWidth / 20);

  useEffect(() => {
    if (!editMode) setEditingItem(null);
  }, [editMode]);

  const onControlledDrag = (e: Event, position: DraggableData, id: number) => {
    console.log(
      id,
      editingItem,
      editMode,
      editingItem == null || editingItem === id
    );
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
        className="bg-green-600"
        style={{
          width: cellHalfWidth * 20,
          margin: "0 auto",
          padding: "auto",
        }}
      >
        <div
          className="App"
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {editMode && (
            <button
              className="absolute top-full left-1/2 -translate-x-1/2 py-2"
              onClick={() => setEditMode(false)}
            >
              완료
            </button>
          )}
          {items.map((item, idx) => (
            //@ts-ignore
            <DraggableItem
              key={idx}
              myItemId={item.myItemId}
              position={{ x: item.posX, y: item.posY }}
              width={cellHalfWidth * 2} // custom variable
              height={cellHalfWidth} // custom variable
              editMode={editMode}
              editingItem={editingItem}
              disabled={
                !editMode || (editMode && editingItem !== item.myItemId)
              }
              onMouseDown={() => {
                if (editingItem === null) {
                  setEditingItem(item.myItemId);
                  setEditMode(true);
                }
              }}
              onStop={(e: any, position: DraggableData) =>
                onControlledDrag(e, position, item.myItemId)
              }
              grid={[cellHalfWidth, cellHalfWidth / 2]}
              bounds="parent"
              defaultPosition={{ x: 0, y: 0 }}
            />
          ))}

          {Array(300)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="flex shrink-0 opacity-40 transition-opacity"
              >
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
    </div>
  );
}
