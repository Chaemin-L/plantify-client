"use client";
import { PATH } from "@/lib/_shared/paths";
import { showToast } from "@/utils/toast";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  href?: string;
  thumbnail: string;
  onClick?: () => void;
}

const menuTabInfo = [
  {
    title: "상점",
    href: PATH.FOREST_STORE,
    thumbnail: "/icons/shopping.webp",
  },
  {
    title: "출석체크",
    thumbnail: "/icons/calendar.webp",
    onClick: () => showToast("어저구", "info"),
  },
];
export default function FeatureGroup() {
  return (
    <div className="flex gap-4">
      {menuTabInfo.map((item, idx) => (
        <IconCard key={`${item.title}_${idx}`} {...item} />
      ))}
    </div>
  );
}

function IconCard({ title, href, thumbnail, onClick }: Props) {
  const router = useRouter();
  return (
    <button
      className="flex-1 card h-full flex flex-col "
      onClick={() => (onClick ? onClick() : router.push(href!))}
    >
      <h1 className="card-title">{title}</h1>
      <img src={thumbnail} className="self-end w-1/2 " alt={title} />
    </button>
  );
}
