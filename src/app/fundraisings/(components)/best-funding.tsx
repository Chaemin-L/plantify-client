import FundingStatus from "@/app/(_components)/funding-status";
import Link from "next/link";

export default function BestFunding() {
  return (
    <Link href="/" className="card flex flex-col gap-5">
      <div className="text-t3">
        누구나 일상에서
        <br />
        숲을 만날 수 있기를
      </div>
      <div className="bg-gray-200 w-full  aspect-[2/1.2] rounded-2xl" />
      <FundingStatus percent={89} />
    </Link>
  );
}
