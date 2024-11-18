import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

export default function PayNotice() {
  return (
    <div className="card space-y-7">
      <div className="flex justify-between">
        <h1 className="card-title">알림</h1>
        <p className="text-xs">2024.11.04</p>
      </div>
      <div>
        <div className="flex justify-between items-end">
          <p className="text-sm">
            올리브영에서 <br /> 20,000원 결제하셨어요.
          </p>
          <Link
            href={PATH.PAYMENTS_DEFAULT}
            className="text-btn2 px-3 py-2 bg-accent-red rounded-full"
          >
            이용내역
          </Link>
        </div>
      </div>
    </div>
  );
}
