import FundingStatus from "@/app/(_components)/funding-status";
import { PATH } from "@/lib/_shared/paths";
import { FundingType } from "@/types/api/funding";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: FundingType;
}
export default function BestFunding({ data }: Props) {
  const { fundingId, title, content, image, percent, targetAmount } = data;

  return (
    <Link
      href={`${PATH.FUNDING_LIST}/${fundingId}`}
      className="card flex flex-col gap-7 py-8"
    >
      <div className="flex flex-col gap-2">
        <div className="text-t3  break-keep">{title}</div>
        <p className="whitespace-pre line-clamp-3 break-all text-bd3">
          {content}
        </p>
      </div>
      <Image
        src={image}
        width={450}
        height={300}
        alt="베스트 펀딩 이미지"
        loading="eager"
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
