"use client";
import { PostUsingItem } from "@/types/api/item";
import clsx from "clsx";
import { useRef } from "react";
import Draggable, { DraggableProps } from "react-draggable";

interface Props extends Omit<DraggableProps, "cancel"> {
  item: PostUsingItem;
  width: number;
  height: number;
  editMode: boolean;
  editingItem: number | null;
  setEditingItem: (myItemId: number) => void;
  handleRemove: (myItemId: number) => void;
  handleComplete: () => void;
}

export default function DraggableItem({
  item: { myItemId, image },
  width,
  height,
  editMode,
  editingItem,
  setEditingItem,
  handleRemove,
  handleComplete,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isFocusing = editingItem === myItemId;

  return (
    <Draggable key={`${myItemId}`} nodeRef={ref} cancel="button" {...props}>
      <div
        ref={ref}
        className={clsx("absolute flex shrink-0", isFocusing ? "z-30" : "z-10")}
      >
        <div
          className={
            (editMode && editingItem == null) || editingItem === myItemId
              ? "drop-shadow-[0px_5px_5px_black]"
              : "drop-shadow-none"
          }
          style={{
            width,
            height,
            background: `url('${image}') no-repeat center / contain`,
          }}
        ></div>
        {editMode && editingItem === myItemId && (
          <>
            <button
              className="absolute z-30 -left-4 -top-8 w-6 h-6  bg-[url('/icons/remove.svg')] bg-center bg-contain"
              onClick={() => handleRemove(myItemId)}
            />
            <button
              className="absolute -right-4 -top-8 w-6 h-6 bg-[url('/icons/check.svg')] bg-center bg-contain"
              onClick={handleComplete}
            />
          </>
        )}
      </div>
    </Draggable>
  );
}
