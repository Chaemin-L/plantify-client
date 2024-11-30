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
  setEditingItem: (value: number) => void;
  handleComplete: () => void;
}

export default function DraggableItem({
  item: { myItemId, image },
  width,
  height,
  editMode,
  editingItem,
  setEditingItem,
  handleComplete,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Draggable key={`${myItemId}`} nodeRef={ref} cancel="button" {...props}>
      <div
        ref={ref}
        style={{
          position: "absolute",
          display: "flex",
          flexShrink: 0,
          zIndex: 20,
        }}
      >
        <div
          className={clsx(
            "relative",
            (editMode && editingItem == null) || editingItem === myItemId
              ? "drop-shadow-[0px_5px_5px_black]"
              : "drop-shadow-none"
          )}
          style={{
            width,
            height,
            background: `url('${image}') no-repeat center / contain`,
          }}
        ></div>
      </div>
    </Draggable>
  );
}
