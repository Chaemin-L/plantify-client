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
    <ul className="flex flex-col gap-3">
      {listData.map(({ id, image, category, title, percent, targetAmount }) => (
        <li key={id}>
          <Link
            href={`${PATH.FUNDRAISINGS_LIST}/${id}`}
            className="flex rounded-xl divide-x divide-white bg-shadow-800"
          >
            <img src={image} className="w-1/4 aspect-[1/1.2] rounded-l-xl" />
            <div className="px-5 py-4 w-full">
              <span className="mb-1 text-bd4"> {category}</span>

              <div className="flex flex-col gap-3 flex-1">
                <h2 className="text-bd3 font-bold line-clamp-1"> {title}</h2>
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
