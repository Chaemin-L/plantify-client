"use client";
import clsx from "clsx";
import { useRef } from "react";
import Draggable, { DraggableProps } from "react-draggable";

interface Props extends DraggableProps {
  myItemId: number;
  width: number;
  height: number;
  editMode: boolean;
  editingItem: number | null;
  setEditingItem: (value: number) => void;
}

export default function DraggableItem({
  myItemId,
  width,
  height,
  editMode,
  editingItem,
  setEditingItem,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Draggable key={`${myItemId}`} nodeRef={ref} {...props}>
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
          className={
            (editMode && editingItem == null) || editingItem === myItemId
              ? "drop-shadow-[0px_5px_5px_black]"
              : "drop-shadow-none"
          }
          style={{
            width,
            height,
            background: `url('/temp/forest/ground-item3.png') no-repeat center / contain`,
          }}
        />
      </div>
    </Draggable>
  );
}
