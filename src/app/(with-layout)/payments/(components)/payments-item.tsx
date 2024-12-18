import { kdayjs } from "@/lib/kdayjs";
import { PaymentsType } from "@/types/api/pay";

export default function PaymentsItem({
  orderName,
  status,
  amount,
  createdAt,
}: PaymentsType) {
  const isCharge = status === "CHARGE";
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full text-bd2 flex justify-between">
        <div className="line-clamp-1 pr-10">
          {isCharge ? "PlantiPay 충전" : orderName}
        </div>
        <div className="whitespace-nowrap">
          {isCharge ? "+ " : "- "}
          {amount.toLocaleString()}
        </div>
      </div>
      <div className="text-bd4 font-normal space-x-0.5">
        <span>{kdayjs(createdAt).format("YYYY-MM-DD")}</span>
        <span>|</span>
        <span> {kdayjs(createdAt).format("HH:mm")}</span> <span>|</span>
        <span> {isCharge ? "충전" : "결제"}</span>
      </div>
    </div>
  );
}
