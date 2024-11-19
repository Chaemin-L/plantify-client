import BottomFixedButton from "@/app/(_components)/bottom-fixed-button";
import FundingStatus from "@/app/(_components)/funding-status";
import { data } from "../../(_dummy)/detail-data";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  // const {id} = await params;
  // TODO: 이후 param으로 전달된 id로 data fetching
  const {
    title,
    description,
    image,
    like,
    percent,
    targetAmount,
    organizationName,
  } = data;

  return (
    <div className="flex flex-col gap-5 pb-20">
      <div className="relative">
        <img src={image} className="w-full aspect-[2/1.2] rounded-xl " />
        {like.isLiked ? (
          <button className="absolute right-4 top-4">
            <img src="/icons/like-fill.svg" className="w-6  aspect-square" />
          </button>
        ) : (
          <button className="absolute right-4 top-4">
            <img src="/icons/like-line.svg" className="w-6  aspect-square" />
          </button>
        )}
      </div>
      <h1 className="text-t2">{title}</h1>
      <FundingStatus
        percent={percent}
        targetAmount={targetAmount}
        organizationName={organizationName}
      />
      <p className="text-bd2 whitespace-pre-line">{description}</p>
      <BottomFixedButton>기부하기</BottomFixedButton>
    </div>
  );
}
