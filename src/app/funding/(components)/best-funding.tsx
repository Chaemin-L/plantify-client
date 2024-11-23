import FundingStatus from "@/app/(_components)/funding-status";
import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

export default function BestFunding() {
  return (
    <Link href={`${PATH.FUNDING_LIST}/0`} className="card flex flex-col gap-5">
      <div className="text-t3">
        누구나 일상에서
        <br />
        숲을 만날 수 있기를
      </div>
      <img
        src="/temp/funding-illust.png"
        className="w-full  aspect-[2/1.2] rounded-2xl"
      />
      <FundingStatus id={10} percent={89} targetAmount={100000000} />
    </Link>
  );
}
