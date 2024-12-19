"use client";
import { GetUsingItemsRes } from "@/types/api/item";
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
  item: GetUsingItemsRes;
  width: number;
  height: number;
  editMode: boolean;
  editingItem: number | null;
  editError: boolean;
  handleRemove: (id: number) => void;
  handleComplete: (item: GetUsingItemsRes) => void;
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
  const { id, category, imageUri: imageUri } = item;
  const isFocusing = editingItem === id;
  const isGround = category === "GROUND";

  return (
    <Draggable key={`${id}`} nodeRef={ref} cancel="button" {...props}>
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
            (editMode && editingItem == null) || editingItem === id
              ? editError
                ? "drop-shadow-[0px_5px_5px_red]"
                : "drop-shadow-[0px_5px_5px_black]"
              : "drop-shadow-none"
          )}
          style={{
            width,
            height: isGround ? height : 1.5 * height,
            background: `url('${imageUri}') no-repeat center / contain`,
          }}
        />
        {editMode && editingItem === id && (
          <>
            <button
              className="absolute z-20 -left-4 -top-8 w-6 h-6  bg-[url('/icons/remove.svg')] bg-center bg-contain drop-shadow-[0px_5px_5px_black]"
              onClick={() => handleRemove(id)}
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
