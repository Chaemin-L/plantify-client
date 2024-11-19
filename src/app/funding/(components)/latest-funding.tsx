import ItemSlider from "@/app/(_components)/item-slider";
import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

const items = new Array(7)
  .fill({
    category: "동물",
    title: "유기견에게 꿈과 희망을 어쩌구 저쩌구 라라라라라라라",
    percent: "30",
    image: "/temp/funding-illust.png",
  })
  .map((item, idx) => ({ ...item, id: idx }));

export default function LatestFunding() {
  return (
    <div className="flex flex-col gap-2 overflow-x-hidden">
      <div className="text-right">
        <Link
          href={PATH.FUNDING_LIST}
          className="text-t3 text-right select-none hover:opacity-80"
        >
          더보기 &gt;
        </Link>
      </div>
      <ItemSlider items={items} />
    </div>
  );
}
