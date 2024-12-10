import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

export default function PointMoney() {
  return (
    <div className="card bg-accent-green  flex justify-between  select-none w-full">
      <>
        <h1 className="card-title text-black">포인트 ・머니</h1>
        <div className="flex gap-2 items-center">
          <span className="card-title text-black">8,436원</span>
          <Link href={PATH.PAY_ACCOUNTS}>
            <img
              src="/icons/settings.png"
              className="w-4 h-4 hover:animate-spin"
            />
          </Link>
        </div>
      </>
    </div>
  );
}
