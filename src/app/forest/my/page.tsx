"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Draggable, { DraggableData } from "react-draggable";

export default function Page() {
  const [isEdit, setIsEdit] = useState(false);
  const [pos, setPos] = useState();
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const [cellHalfWidth, setCellHalfWidth] = useState<number>(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewportWidth = Math.min(window.innerWidth, 500);
    if (nodeRef.current)
      setCellHalfWidth(
        (nodeRef.current.getBoundingClientRect().width = Math.floor(
          viewportWidth / 20
        ))
      );
    console.log(window.innerWidth, viewportWidth);
  }, [nodeRef.current]);

  console.log(cellHalfWidth);

  const onControlledDrag = (e: Event, position: DraggableData) => {
    const { x, y } = position;
    const xCond = x % (cellHalfWidth * 2) === 0;
    const yCond = y % cellHalfWidth === 0;
    if (xCond != yCond)
      setState(() => ({
        x: x - cellHalfWidth,
        y,
      }));
    else
      setState(() => ({
        x,
        y,
      }));
    console.log(x, y);
  };

  return (
    <div className="-mx-4 flex flex-col gap-3 justify-center h-full items-center">
      <div
        className="bg-green-600"
        style={{ width: cellHalfWidth * 20, margin: "0 auto", padding: "auto" }}
      >
        <div
          className="App"
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Draggable
            nodeRef={nodeRef}
            position={state}
            disabled={!isEdit}
            onStop={onControlledDrag}
            grid={[cellHalfWidth, cellHalfWidth / 2]}
            bounds="parent"
            defaultPosition={{ x: 0, y: 0 }}
          >
            <div
              ref={nodeRef}
              style={{
                position: "absolute",
                display: "flex",
                flexShrink: 0,
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: cellHalfWidth * 2,
                  height: cellHalfWidth,
                  background: `url('/temp/forest/ground-item3.png') center / contain`,
                }}
              />
            </div>
          </Draggable>
          {Array(250)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                style={{ display: "flex", flexShrink: 0, opacity: 0.4 }}
              >
                <div
                  className="box-border w-0 h-0"
                  style={{
                    borderTop: `${cellHalfWidth / 2}px solid transparent`,
                    borderRight: `${cellHalfWidth}px solid white`,
                    borderBottom: `${cellHalfWidth / 2}px solid transparent`,
                  }}
                />
                <div
                  className="box-border border-transparent w-0 h-0"
                  style={{
                    borderTop: `${cellHalfWidth / 2}px solid transparent`,
                    borderLeft: `${cellHalfWidth}px solid white`,
                    borderBottom: `${cellHalfWidth / 2}px solid transparent`,
                  }}
                />
              </div>
            ))}
        </div>
      </div>
      <button
        onClick={() => setIsEdit(!isEdit)}
        className="w-fit px-10 py-1 bg-accent-green rounded-2xl text-shadow-800 mx-4 "
      >
        {isEdit ? "완료" : "편집"}
      </button>
    </div>
  );
}
