import BottomFixedButton from "@/app/(_components)/bottom-fixed-button";
import FundingStatus from "@/app/(_components)/funding-status";
import { data } from "../../(_dummy)/detail-data";

export default async function Page() {
  // const {id} = await params;
  // TODO: 이후 param으로 전달된 id로 data fetching
  const {
    id,
    title,
    description,
    image,
    like,
    percent,
    targetAmount,
    organizationName,
  } = data;

  return (
    <>
      <div className="flex flex-col gap-6 p-2 sm:p-4 mb-20 ">
        <div className="flex flex-col gap-5">
          <div className="relative mt-5">
            <img
              src={image}
              className="w-full aspect-[2/1.2] rounded-xl object-cover"
            />
            {like.isLiked ? (
              <button className="absolute right-4 top-4">
                <img
                  src="/icons/like-fill.svg"
                  className="w-6  aspect-square"
                />
              </button>
            ) : (
              <button className="absolute right-4 top-4">
                <img
                  src="/icons/like-line.svg"
                  className="w-6  aspect-square"
                />
              </button>
            )}
          </div>
          <h1 className="text-t2">{title}</h1>
          <FundingStatus
            id={id}
            percent={percent}
            targetAmount={targetAmount}
            rightBottom={organizationName}
          />
        </div>
        <p className="text-bd1 max-md:text-bd2 whitespace-pre-line">
          {description}
        </p>
      </div>
      <BottomFixedButton>기부하기</BottomFixedButton>
    </>
  );
}
