"use client";
import { PostUsingItem } from "@/types/api/item";
import { useEffect, useState } from "react";
import { DraggableData } from "react-draggable";
import DraggableItem from "./draggable-item";
import clsx from "clsx";
import MyBox from "./my-box";

const dummy = [
  {
    myItemId: 1,
    posX: 0,
    posY: 0,
    isOld: false,
  },
  {
    myItemId: 2,
    posX: 0,
    posY: 0,
    isOld: false,
  },
];

interface DraggableItemType extends PostUsingItem {
  isOld: boolean;
}

export default function Page() {
  const [isEdit, setIsEdit] = useState(false);
  const [items, setItems] = useState<DraggableItemType[] | []>(dummy);
  const [cellHalfWidth, setCellHalfWidth] = useState<number>(0);

  useEffect(() => {
    const viewportWidth = Math.min(window.innerWidth, 500);
    setCellHalfWidth(Math.floor(viewportWidth / 20));
  }, []);

  const onControlledDrag = (e: Event, position: DraggableData, id: number) => {
    const { x, y } = position;
    const xCond = x % (cellHalfWidth * 2) === 0;
    const yCond = y % cellHalfWidth === 0;
    const targetItem = items.find((item) => item.myItemId === id);

    if (!targetItem) return;

    if (xCond != yCond) {
      setItems((prev) =>
        prev.map((item: DraggableItemType) =>
          item.myItemId === id
            ? { ...item, posX: x - cellHalfWidth, posY: y }
            : item
        )
      );
    } else
      setItems((prev) =>
        prev.map((item: DraggableItemType) =>
          item.myItemId === id ? { ...item, posX: x, posY: y } : item
        )
      );
  };

  return (
    <div className={clsx("relative -mx-4 flex flex-col gap-3 h-full")}>
      <div className="overflow-hidden h-full space-y-3 flex flex-col justify-center">
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
            {items.map((item, idx) => (
              <DraggableItem
                key={idx}
                myItemId={item.myItemId}
                position={{ x: item.posX, y: item.posY }}
                width={cellHalfWidth * 2} // custom variable
                height={cellHalfWidth} // custom variable
                disabled={!isEdit}
                onStop={(e: any, position: DraggableData) =>
                  onControlledDrag(e, position, item.myItemId)
                }
                grid={[cellHalfWidth, cellHalfWidth / 2]}
                bounds="parent"
                defaultPosition={{ x: 0, y: 0 }}
              />
            ))}

            {Array(250)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="flex shrink-0 opacity-40 transition-opacity"
                >
                  <div
                    className="box-border w-0 h-0"
                    style={{
                      ...(isEdit
                        ? {
                            borderTop: `${
                              cellHalfWidth / 2
                            }px solid transparent`,
                            borderRight: `${cellHalfWidth}px solid white`,
                            borderBottom: `${
                              cellHalfWidth / 2
                            }px solid transparent`,
                          }
                        : {
                            borderTop: `${
                              cellHalfWidth / 2
                            }px solid transparent`,
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
                      ...(isEdit
                        ? {
                            borderTop: `${
                              cellHalfWidth / 2
                            }px solid transparent`,
                            borderLeft: `${cellHalfWidth}px solid white`,
                            borderBottom: `${
                              cellHalfWidth / 2
                            }px solid transparent`,
                          }
                        : {
                            borderTop: `${
                              cellHalfWidth / 2
                            }px solid transparent`,
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
        {/** button & my */}
        <div className="relative w-full h-[100px]">
          <button
            onClick={() => setIsEdit(!isEdit)}
            className={clsx(
              !isEdit ? "right-0" : "-right-full",
              "absolute w-fit px-5 py-2 bg-accent-green rounded-l-xl text-shadow-800 transition-all duration-1000 "
            )}
          >
            편집
          </button>
          <div
            onClick={() => setIsEdit(!isEdit)}
            className={clsx(
              "absolute transition-all duration-1000  bg-shadow-800 w-full flex-grow h-32 ",
              isEdit ? "right-0" : " -right-full"
            )}
          >
            <MyBox />
          </div>
        </div>
      </div>
    </div>
  );
}
