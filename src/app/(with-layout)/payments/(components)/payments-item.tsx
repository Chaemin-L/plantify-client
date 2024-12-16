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
      <div className="text-bd2 flex justify-between">
        <span>{isCharge ? "PlantiPay 충전" : orderName}</span>
        <span>
          {isCharge ? "+ " : "- "}
          {amount.toLocaleString()}
        </span>
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
