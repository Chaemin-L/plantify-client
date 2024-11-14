import { PATH } from "@/lib/paths";
import Link from "next/link";

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

export default function FeatureGrid() {
  return (
    <div className="flex gap-4">
      {menuTabInfo.map(({ title, href, thumbnail }, idx) => (
        <Link
          key={`${title}_${idx}`}
          href={href}
          className="flex-1 card h-full flex flex-col "
        >
          <h1 className="card-title">{title}</h1>
          <img src={thumbnail} className="self-end w-1/2 " alt={title} />
        </Link>
      ))}
    </div>
  );
}
