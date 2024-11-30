"use client";

import { MyItemType, PostUsingItem } from "@/types/api/item";
import { useEffect, useRef, useState } from "react";
import Draggable, { DraggableData } from "react-draggable";
import DraggableItem from "./draggable-item";
import clsx from "clsx";
import MyBox from "./my-box-btn";

const usingItems: PostUsingItem[] = [
  {
    myItemId: 1,
    image: "/temp/forest/ground-item3.png",
    posX: 0,
    posY: 0,
  },
  {
    myItemId: 2,
    image: "/temp/forest/ground-item3.png",
    posX: 50,
    posY: 0,
  },
];

export default function Page() {
  const [editMode, setEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState<null | number>(null);
  const [items, setItems] = useState<PostUsingItem[]>(usingItems);
  const [newItem, setNextItem] = useState<MyItemType>();

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

  useEffect(() => {
    if (!editMode) setEditingItem(null);
  }, [editMode]);

  const handleNewItem = (newItem: MyItemType) => {
    const { myItemId, image } = newItem;
    setItems((prev) => [...prev, { myItemId, image, posX: 0, posY: 0 }]);
    setEditingItem(myItemId);
    setEditMode(true);
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
              image={item.image}
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

          {Array(260)
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

      {!editMode && <MyBox handleNewItem={handleNewItem} />}
    </div>
  );
}
