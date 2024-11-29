"use client";
import { useRef } from "react";
import Draggable, { DraggableProps } from "react-draggable";

interface Props extends DraggableProps {
  myItemId: number;
  width: number;
  height: number;
}

export default function DraggableItem({
  myItemId,
  width,
  height,
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
          // className="drop-shadow-[0px_0px_10px_white]"
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
