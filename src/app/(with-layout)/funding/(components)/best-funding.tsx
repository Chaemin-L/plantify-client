import FundingStatus from "@/app/(_components)/funding-status";
import { PATH } from "@/lib/_shared/paths";
import { FundingType } from "@/types/api/funding";
import Link from "next/link";

interface Props {
  data: FundingType;
}
export default function BestFunding({ data }: Props) {
  const { fundingId, title, image, percent, targetAmount } = data;
  return (
    <Link
      href={`${PATH.FUNDING_LIST}/${fundingId}`}
      className="card flex flex-col gap-7 py-8"
    >
      <div className="text-t3 whitespace-pre">{title}</div>
      <img
        src={image}
        className="w-full  aspect-[2/1.2] rounded-2xl object-cover"
      />
      <FundingStatus
        percent={percent}
        targetAmount={targetAmount}
        rightBottom={<span>{percent}%</span>}
      />
    </Link>
  );
}
