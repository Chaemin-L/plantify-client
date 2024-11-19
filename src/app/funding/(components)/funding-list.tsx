import FundingStatus from "@/app/(_components)/funding-status";
import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

interface FundingType {
  id: number;
  image: string;
  category: string;
  title: string;
  percent: number;
  targetAmount: number;
}
interface Props {
  listData: FundingType[];
  category: string;
}

// TODO: 스크롤/페이지네이션 -> client component로 변경 예정
export default function FundingList({ listData }: Props) {
  return (
    <ul className="flex flex-col max-md:gap-3 gap-5">
      {listData.map(({ id, image, category, title, percent, targetAmount }) => (
        <li key={id}>
          <Link
            href={`${PATH.FUNDING_LIST}/${id}`}
            className="flex rounded-xl  bg-shadow-800"
          >
            <img
              src={image}
              className="w-1/4 aspect-[1/1.2] rounded-l-xl object-cover"
            />
            <div className="px-5 py-4 w-full">
              <div className=" max-md:mb-1 mb-2 max-md:text-bd4 text-bd2">
                {category}
              </div>

              <div className="flex flex-col max-md:gap-3 md:gap-4 flex-1">
                <h2 className="max-md:text-bd3 font-bold line-clamp-1 text-bd2 ">
                  {title}
                </h2>
                <FundingStatus
                  size="sm"
                  percent={percent}
                  targetAmount={targetAmount}
                />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
