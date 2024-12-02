"use client";
import { PostUsingItem } from "@/types/api/item";
import clsx from "clsx";
import { useRef } from "react";
import Draggable, { DraggableProps } from "react-draggable";

type AllowedDraggableProps =
  | "grid"
  | "position"
  | "onStop"
  | "onMouseDown"
  | "disabled"
  | "defaultPosition"
  | "nodeRef"
  | "bounds";

interface Props
  extends Omit<Pick<DraggableProps, AllowedDraggableProps>, "cancel"> {
  item: PostUsingItem;
  width: number;
  height: number;
  editMode: boolean;
  editingItem: number | null;
  editError: boolean;
  handleRemove: (myItemId: number) => void;
  handleComplete: (item: PostUsingItem) => void;
}

export default function DraggableItem({
  item,
  width,
  height,
  editMode,
  editingItem,
  editError,
  handleRemove,
  handleComplete,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { myItemId, category, image } = item;
  const isFocusing = editingItem === myItemId;
  const isGround = category === "GROUND";

  return (
    <Draggable key={`${myItemId}`} nodeRef={ref} cancel="button" {...props}>
      <div
        ref={ref}
        className={clsx(
          "absolute flex shrink-0",
          isFocusing ? "z-40" : isGround ? "z-10" : "z-50",
          editMode && !isFocusing && "pointer-events-none opacity-75"
        )}
      >
        <div
          className={clsx(
            (editMode && editingItem == null) || editingItem === myItemId
              ? editError
                ? "drop-shadow-[0px_5px_5px_red]"
                : "drop-shadow-[0px_5px_5px_black]"
              : "drop-shadow-none"
          )}
          style={{
            width,
            height: isGround ? height : 1.5 * height,
            background: `url('${image}') no-repeat center / contain`,
          }}
        />
        {editMode && editingItem === myItemId && (
          <>
            <button
              className="absolute z-20 -left-4 -top-8 w-6 h-6  bg-[url('/icons/remove.svg')] bg-center bg-contain drop-shadow-[0px_5px_5px_black]"
              onClick={() => handleRemove(myItemId)}
            />
            <button
              className="absolute z-20 -right-4 -top-8 w-6 h-6 bg-[url('/icons/check.svg')] bg-center bg-contain drop-shadow-[0px_5px_5px_black]"
              onClick={() => handleComplete(item)}
            />
          </>
        )}
      </div>
    </Draggable>
  );
}
