import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

export const PointMoney = ({ total }: { total: number }) => {
  return (
    <>
      <h1 className="card-title text-black">포인트 ・머니</h1>
      <div className="flex gap-2 items-center">
        <span className="card-title text-black">
          {total.toLocaleString()}원
        </span>
        <Link href={PATH.PAY_ACCOUNTS}>
          <img
            src="/icons/settings.png"
            className="w-4 h-4 hover:animate-[spin_4s]"
          />
        </Link>
      </div>
    </>
  );
};
