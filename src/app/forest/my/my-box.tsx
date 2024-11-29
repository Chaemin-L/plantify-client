import { MyItemType, PostUsingItem } from "@/types/api/item";
import clsx from "clsx";

interface Props {
  myItems: MyItemType[];
  usingItems: PostUsingItem[];
}
export default function MyBox({ myItems, usingItems }: Props) {
  return (
    <div className="w-full h-full p-2 flex flex-col gap-4">
      <h2 className="text-t3">보관함</h2>
      <ul className="flex gap-3 overflow-x-auto scrollbar-hide">
        {myItems.map((data) => {
          const isUsed =
            usingItems.findIndex((item) => item.myItemId === data.myItemId) !==
            -1;
          return <Box key={data.myItemId} data={data} isUsed={isUsed} />;
        })}
      </ul>
    </div>
  );
}

const Box = ({ data, isUsed }: { data: MyItemType; isUsed: boolean }) => {
  return (
    <div
      className={clsx(
        "p-2 min-w-[30%] bg-shadow-700 rounded-xl text-center space-y-1",
        isUsed && "opacity-40"
      )}
    >
      <img src="/temp/forest/ground-item1.png" className="w-[70%] mx-auto" />
      <span className="mt-2 text-bd2">{data.itemName}</span>
    </div>
  );
};
