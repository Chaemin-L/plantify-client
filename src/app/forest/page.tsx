import LinkSlider from "@/components/link-slider";
import { PATH } from "@/lib/paths";
import Link from "next/link";

// dummy data
const events = [
  {
    title: "출석체크 이벤트!",
    description: "매일 출석하고 5캐시를 받아보세요",
  },
  {
    title: "이벤트 1",
    description: "이벤트 설명",
  },
  {
    title: "이벤트 2",
    description: "이벤트 설명",
  },
];

const menuTabInfo = [
  {
    title: "상점",
    href: PATH.HOME,
    thumbnail: "/illusts/3d-forest.svg",
  },
  {
    title: "출석체크",
    href: PATH.HOME,
    thumbnail: "/illusts/3d-forest.svg",
  },
];

export default function ForestPage() {
  return (
    <div className="flex flex-col gap-5 h-full">
      {/** 이벤트 */}
      <div className="card h-fit">
        <LinkSlider links={events} />
      </div>

      {/** 상점, 출석체크 */}
      <div className="flex gap-4">
        {menuTabInfo.map(({ title, href, thumbnail }) => (
          <Link href={href} className="flex-1 card h-full flex flex-col ">
            <h1 className="card-title">{title}</h1>
            <img src={thumbnail} className="self-end w-1/2 " />
          </Link>
        ))}
      </div>

      {/** 명예의 전당 */}
      <Link href={PATH.HOME} className="card h-[35%] ">
        <h1 className="card-title">명예의 전당 👑</h1>
      </Link>

      {/** 숲 꾸미기 */}
      <Link
        href={PATH.HOME}
        className="relative h-full bg-accent-green rounded-t-xl -mx-4 -mb-9 text-black p-5"
      >
        <span className="text-bd1">나만의 숲을 만들어요</span>
        <h1 className="text-t1">숲 꾸미기</h1>
        <img
          src="/illusts/3d-forest.svg"
          className="absolute bottom-3 right-3 w-[240px]"
        />
      </Link>
    </div>
  );
}
