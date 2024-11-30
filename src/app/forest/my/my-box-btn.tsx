import Image from "next/image";
import { MyItemType } from "@/types/api/item";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";

interface Props {
  handleNewItem: (myItemId: MyItemType) => void;
}
export default function MyBoxBtn({ handleNewItem }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const myBoxBtn = useRef<HTMLButtonElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleClose = () => setShow(false);

  const handleOnDrag = () => {
    isDragging.current = true;
  };
  const handleOnStop = () => {
    setTimeout(() => {
      isDragging.current = false;
    }, 600);
  };

  const handleOnClick = () => {
    if (!isDragging.current) {
      setShow(true);
    }
  };

  return (
    <>
      <Draggable
        nodeRef={myBoxBtn}
        bounds="parent"
        onDrag={handleOnDrag}
        onStop={handleOnStop}
        enableUserSelectHack={true}
      >
        <button
          className=" absolute right-4 bottom-4 p-2 rounded-full bg-accent-green w-fit aspect-square text-shadow-900 z-20 shadow-lg "
          ref={myBoxBtn}
          onClick={handleOnClick}
        >
          <Image
            className="by"
            src="/icons/storage.webp"
            blurDataURL="/icons/storage.webp"
            draggable={false}
            width={48}
            height={48}
            alt="보관함"
            onTouchEnd={handleOnClick}
          />
        </button>
      </Draggable>
      {show &&
        createPortal(
          <MyBox handleClose={handleClose} handleNewItem={handleNewItem} />,
          document.body
        )}
    </>
  );
}

interface MyBoxProps {
  handleClose: () => void;
  handleNewItem: (myItemId: MyItemType) => void;
}

const MyBox = ({ handleClose, handleNewItem }: MyBoxProps) => {
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-shadow-900/40 z-20"
      onClick={handleClose}
    >
      <div
        className="w-[600px] max-w-[90%] p-4 bg-shadow-900 rounded-xl h-[500px] text-white "
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-t2">보관함</h1>
        <ul> </ul>
        <div className="grid grid-cols-3 w-full aspect-video">
          {myItems.map((item) => {
            const { myItemId, itemName, image } = item;
            return (
              <button
                key={myItemId}
                className="w-full p-2 flex flex-col justify-center items-center gap-2 hover:opacity-70"
                onClick={() => {
                  handleNewItem(item);
                  handleClose();
                }}
              >
                <Image
                  className="w-full max-w-[100px]"
                  src={image}
                  width={200}
                  height={200}
                  alt={`${itemName} 이미지`}
                />
                {item.itemName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// dummy
const myItems: MyItemType[] = [
  {
    myItemId: 3,
    itemId: 0,
    itemName: "풀밭",
    image: "/temp/forest/ground-item1.png",
    category: "GROUND",
    quantity: 1,
    userId: 1,
  },
  {
    myItemId: 4,
    itemId: 2,
    itemName: "밭",
    image: "/temp/forest/ground-item2.png",
    category: "GROUND",
    quantity: 1,
    userId: 1,
  },
  {
    myItemId: 5,
    itemId: 3,
    itemName: "마룻바닥",
    image: "/temp/forest/ground-item3.png",
    category: "GROUND",
    quantity: 1,
    userId: 1,
  },
  {
    myItemId: 6,
    itemId: 4,
    itemName: "광나는 마룻바닥",
    image: "/temp/forest/ground-item4.png",
    category: "GROUND",
    quantity: 1,
    userId: 1,
  },
  {
    myItemId: 7,
    itemId: 5,
    itemName: "대리석",
    image: "/temp/forest/ground-item5.png",
    category: "GROUND",
    quantity: 1,
    userId: 1,
  },
];
