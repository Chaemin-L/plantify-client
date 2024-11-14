import FundingStatus from "@/components/funding-status";
import ItemSlider from "@/components/item-slider";
import LinkSlider from "@/components/link-slider";
import Link from "next/link";

// dummy data
const links = [
  {
    title: "기부사 검색하러 가기",
    description: "기부사에 대해 더 깊이 알아보아요",
  },
  {
    title: "광고 1",
    description: "광고 설명",
  },
  {
    title: "광고 2",
    description: "광고 설명",
  },
];

const items = new Array(7).fill({
  category: "동물",
  title: "유기견에게 꿈과 희망을 어쩌구 저쩌구 라라라라라라라",
  percent: "30",
  image: "/temp/funding-illust.png",
});

export default function FundraisingsPage() {
  // TODO: data fetch
  return (
    <div className="flex flex-col gap-5">
      {/** 슬라이더 */}
      <div className="card">
        <LinkSlider links={links} />
      </div>

      {/** 베스트 펀딩 */}
      <Link href="/" className="card flex flex-col gap-5">
        <div className="text-t3">
          누구나 일상에서
          <br />
          숲을 만날 수 있기를
        </div>
        <div className="bg-gray-200 w-full h-[156px] rounded-2xl" />
        <FundingStatus />
      </Link>

      {/** 펀딩 리스트 */}
      <div className="flex flex-col gap-2 overflow-x-hidden">
        <div className="text-right">
          <Link
            href="/"
            className="text-t3 text-right select-none hover:opacity-80"
          >
            더보기 &gt;
          </Link>
        </div>
        <ItemSlider items={items} />
      </div>
    </div>
  );
}
