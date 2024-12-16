import BottomFixedButton, {
  Button,
} from "@/app/(_components)/bottom-fixed-button";
import BottomSheet from "@/app/(_components)/bottom-sheet";
import FundingStatus from "@/app/(_components)/funding-status";
import Loading from "@/app/loading";
import { useGetFundingDetail } from "@/hooks/api/useGetFundingDetail";
import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";
import { useState } from "react";

interface Props {
  id: string;
}
export default function FundingDetail({ id }: Props) {
  const [isOpen, setOpen] = useState(false);
  const { data } = useGetFundingDetail(id);

  if (!data) return <Loading />;

  const {
    fundingId,
    image,
    title,
    content,
    percent,
    targetAmount,
    // organizationId,
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
            {/* {like.isLiked ? (
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
    )} */}
          </div>
          <h1 className="text-t2">{title}</h1>
          <FundingStatus
            percent={percent}
            targetAmount={targetAmount}
            rightBottom={
              // TODO: organizationId 대체
              <Link href={`${PATH.FUNDING_ORGANIZATION}#org_${fundingId}`}>
                {organizationName}
              </Link>
            }
          />
        </div>
        <div className="text-bd1 max-md:text-bd2 whitespace-pre-wrap break-word flex flex-col gap-6">
          {content.split("\n").map((paragraph, idx) => (
            <p key={idx} className="whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <BottomFixedButton onClick={() => setOpen(true)}>
        기부하기
      </BottomFixedButton>
      <BottomSheet isOpen={isOpen} setOpen={setOpen} snapPoints={[300]}>
        <form className="h-full flex flex-col justify-between">
          <label htmlFor="funding_amount" className="text-t3">
            기부 금액
          </label>
          <div className="flex gap-2 items-center ">
            <input
              id="funding_amount"
              type="number"
              className="flex-1 outline-0 text-bd1 bg-transparent border-b border-shadow-600 focus:border-accent-green text-center tracking-wide"
            />
            <span>원</span>
          </div>
          <Button>확인</Button>
        </form>
      </BottomSheet>
    </>
  );
}
