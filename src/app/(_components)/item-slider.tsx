import { PATH } from "@/lib/_shared/paths";
import { FundingType } from "@/types/api/funding";
import getCategoryName from "@/utils/getCategoryName";
import Image from "next/image";
import Link from "next/link";
import Progressbar from "./progressbar";

interface Props {
  title: string;
  items: FundingType[];
}

export default function ItemSlider({ title, items }: Props) {
  return (
    <div className="flex flex-col gap-4 overflow-x-hidden">
      <h2 className="text-t3  text-white">{title}</h2>
      <div className="overflow-auto">
        <ul className="flex overflow-auto gap-3 w-fit">
          {items.map(({ fundingId, title, category, percent, image }) => (
            <li key={fundingId} className="w-40">
              <Link
                href={`${PATH.FUNDING_LIST}/${fundingId}`}
                className="select-none cursor-pointer group hover:opacity-80"
              >
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt={`펀딩 이미지`}
                  loading="lazy"
                  className="w-40 aspect-[1.2/1] object-cover rounded-t-xl "
                />
                <div className="flex flex-col gap-2 bg-shadow-800 rounded-b-xl px-3 py-4">
                  <span className="text-bd4 font-normal">
                    {getCategoryName(category)}
                  </span>
                  <h1 className="text-bd3 max-md:text-bd4 line-clamp-1 group-hover:underline">
                    {title}
                  </h1>
                  <Progressbar isShort percent={percent} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
