import Loading from "@/app/loading";
import { useGetMyItemsQuery } from "@/hooks/api/useGetMyItems";
import { CategoryType, GetMyItemRes } from "@/types/api/item";
import clsx from "clsx";
import Image from "next/image";
import { Suspense, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  handleNewItem: (myItem: GetMyItemRes) => void;
}
export default function MyBoxBtn({ handleNewItem }: Props) {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => setShow(!show);
  return (
    <>
      <button
        className=" absolute right-4 bottom-4 p-2 rounded-full bg-accent-green w-fit aspect-square text-shadow-900 z-30 shadow-lg "
        onClick={toggleShow}
      >
        <Image
          src="/icons/storage.webp"
          blurDataURL="/icons/storage.webp"
          width={48}
          height={48}
          alt="보관함"
          onClick={toggleShow}
        />
      </button>
      {show && (
        <Suspense
          fallback={
            <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <Loading />
            </div>
          }
        >
          {createPortal(
            <MyBox handleClose={toggleShow} handleNewItem={handleNewItem} />,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}

interface MyBoxProps {
  handleClose: () => void;
  handleNewItem: (myItem: GetMyItemRes) => void;
}

const categories: { category: CategoryType; imageUri: string }[] = [
  { category: "GROUND", imageUri: "/temp/forest/ground-item3.png" },
  { category: "TREE", imageUri: "/temp/forest/tree-item1.svg" },
];

const MyBox = ({ handleClose, handleNewItem }: MyBoxProps) => {
  const [selectedCat, setSelectedCat] = useState<CategoryType>("GROUND");
  const { data: myItems } = useGetMyItemsQuery(selectedCat);

  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-shadow-900/40 z-50"
      onClick={handleClose}
    >
      <div
        className="w-[600px] min-h-[500px] max-w-[90%] p-4 bg-shadow-900 border border-shadow-800 rounded-xl  text-white "
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-t2">보관함</h1>
        <ul className="flex gap-3 my-3">
          {categories.map(({ category, imageUri }) => {
            return (
              <li
                key={category}
                className={clsx(
                  "relative rounded-full p-2",
                  selectedCat === category
                    ? "bg-shadow-700 shadow-shadow-800 shadow-inner opacity-70"
                    : "bg-shadow-700"
                )}
                onClick={() => setSelectedCat(category)}
              >
                <div className="w-8 md:w-12 h-2 md:h-3" />
                <Image
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 md:w-10 max-h-[95%]"
                  src={imageUri}
                  width={100}
                  height={100}
                  alt="카테고리 선택"
                />
              </li>
            );
          })}
        </ul>
        <div className="grid grid-cols-3 gap-1 md:gap-2 w-full ">
          {myItems.map((item) => {
            console.log("myItems-itemId: ", item);

            const { itemId, itemName, imageUri } = item;
            return (
              <button
                key={itemId}
                className="relative w-full p-3 flex flex-col justify-center items-center gap-3 hover:opacity-70 object-contain disabled:opacity-40"
                onClick={() => {
                  handleNewItem(item);
                  handleClose();
                }}
                // disabled={quantity === usingQuantity}
              >
                <span className="absolute top-0 right-4 text-bd4">
                  {myItems.length}
                  {/* {usingQuantity} / {quantity} */}
                </span>
                <img
                  className="w-[80%] max-h-[100px]"
                  src={imageUri}
                  width={200}
                  height={200}
                  alt={`${itemName}`}
                />
                <span className="text-bd3 md:text-bd2 whitespace-pre">
                  {item.itemName}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// dummy
// const myItems: MyItemType[] = [
//   {
//     myItemId: 3,
//     itemId: 0,
//     itemName: "풀밭",
//     image: "/temp/forest/ground-item1.png",
//     category: "GROUND",
//     quantity: 3,
//     usingQuantity: 1,
//     userId: 1,
//   },
//   {
//     myItemId: 4,
//     itemId: 2,
//     itemName: "밭",
//     image: "/temp/forest/ground-item2.png",
//     category: "GROUND",
//     quantity: 1,
//     usingQuantity: 1,
//     userId: 1,
//   },
//   {
//     myItemId: 5,
//     itemId: 3,
//     itemName: "마룻바닥",
//     image: "/temp/forest/ground-item3.png",
//     category: "GROUND",
//     quantity: 1,
//     usingQuantity: 1,
//     userId: 1,
//   },
//   {
//     myItemId: 6,
//     itemId: 4,
//     itemName: "광나는 마룻바닥",
//     image: "/temp/forest/ground-item4.png",
//     category: "GROUND",
//     quantity: 1,
//     usingQuantity: 1,
//     userId: 1,
//   },
//   {
//     myItemId: 7,
//     itemId: 5,
//     itemName: "대리석",
//     image: "/temp/forest/ground-item5.png",
//     category: "GROUND",
//     quantity: 4,
//     usingQuantity: 2,
//     userId: 1,
//   },
//   {
//     myItemId: 8,
//     itemId: 6,
//     itemName: "2층 나무",
//     image: "/temp/forest/tree-item1.svg",
//     category: "TREE",
//     quantity: 5,
//     usingQuantity: 1,
//     userId: 1,
//   },
//   {
//     myItemId: 9,
//     itemId: 7,
//     itemName: "3층 나무",
//     image: "/temp/forest/tree-item2.svg",
//     category: "TREE",
//     quantity: 1,
//     usingQuantity: 1,
//     userId: 1,
//   },
//   {
//     myItemId: 10,
//     itemId: 8,
//     itemName: "육각 나무",
//     image: "/temp/forest/tree-item3.svg",
//     category: "TREE",
//     quantity: 2,
//     usingQuantity: 1,
//     userId: 1,
//   },
// ];
