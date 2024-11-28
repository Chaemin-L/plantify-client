import FundingStatus from "@/app/(_components)/funding-status";
import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

interface FundingType {
  id: string;
  image: string;
  category: string;
  title: string;
  percent: number;
  targetAmount: number;
  organizationName: string;
  progress?: string;
}
interface Props {
  showProgress?: boolean;
  listData: FundingType[];
}

// TODO: 스크롤/페이지네이션 -> client component로 변경 예정
export default function FundingList({ showProgress = false, listData }: Props) {
  return (
    <ul className="flex flex-col max-md:gap-3 gap-5">
      {listData.map(
        ({
          id,
          image,
          category,
          title,
          percent,
          targetAmount,
          organizationName,
        }) => (
          <li key={id}>
            <Link
              href={`${PATH.FUNDING_LIST}/${id}`}
              className="flex rounded-xl  bg-shadow-800 h-[106px] md:h-[128px]"
            >
              <img src={image} className="w-[40%]  rounded-l-xl object-cover" />
              <div className="px-5 py-4 w-full h-fit flex justify-between flex-col ">
                <div className=" max-md:mb-1 mb-2 max-md:text-bd4 text-bd2">
                  {category}
                </div>

                <div className="flex flex-col max-md:gap-3 md:gap-4 flex-1">
                  <div className="flex gap-2 items-center">
                    <h2 className="max-md:text-bd3 font-bold line-clamp-1 text-bd2 ">
                      {title}
                    </h2>
                  </div>
                  <FundingStatus
                    id={id}
                    size="sm"
                    percent={percent}
                    targetAmount={targetAmount}
                    rightBottom={
                      <Link href={`${PATH.FUNDING_ORGANIZATION}#org_${id}`}>
                        {organizationName}
                      </Link>
                    }
                  />
                </div>
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
